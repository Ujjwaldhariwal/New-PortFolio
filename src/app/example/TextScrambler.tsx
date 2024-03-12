import React, { useRef, useEffect } from 'react';

class TextScrambler {
  private el: HTMLElement | null;
  private chars: string;
  private queue: { from: string; to: string; start: number; end: number; char?: string }[];
  private frame: number;
  private frameRequest: number;
  private resolve?: () => void;

  constructor(el: HTMLElement | null) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.update = this.update.bind(this);
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el?.innerText || '';
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20) + 40;
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();

    return promise;
  }

  update(): void {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    if (this.el) {
      this.el.innerHTML = output;
    }

    if (complete === this.queue.length) {
      this.resolve?.();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

interface TextScramblerProps {
  phrases: string[];
}

export const TextScramblerComponent: React.FC<TextScramblerProps> = ({ phrases }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const fx = useRef<TextScrambler | null>(null);

  useEffect(() => {
    fx.current = new TextScrambler(textRef.current);

    return () => {
      if (fx.current) {
        fx.current.setText(phrases[0]); // Reset the text when unmounting
      }
    };
  }, [phrases]);

  useEffect(() => {
    let isMounted = true;

    const next = () => {
      if (isMounted && fx.current) {
        fx.current.setText(phrases[0]); // Initial display of the main word
        fx.current.setText(phrases[0]).then(() => {
          setTimeout(next, 3000);
        });
      }
    };

    next();

    return () => {
      isMounted = false;
    };
  }, [phrases]);

  return <div ref={textRef} className="text"></div>;
};
