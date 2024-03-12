import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
import { TextScramblerComponent } from './TextScrambler'; // Assuming you have the TextScrambler component in the same directory

import './Navbar.css'; // Import your CSS file

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [textColor, setTextColor] = useState('white');
  const navbarRef = useRef<HTMLDivElement>(null);
  const SCROLL_THRESHOLD = 10;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingDown(currentScrollTop > lastScrollTop);

      setShowNavbar(
        currentScrollTop <= SCROLL_THRESHOLD ||
        (showNavbar && !isScrollingDown)
      );

      setTextColor(currentScrollTop <= SCROLL_THRESHOLD ? 'white' : 'black');
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrollingDown, lastScrollTop, showNavbar]);

  const navbarClass = `navbar ${showNavbar ? 'show' : 'hide'}`;

  return (
    <nav ref={navbarRef} className={navbarClass}>
      <div className="navbar-container">
        <ul>
          <li>
            <a href="#home">
              <TextScramblerComponent phrases={['Blueprint']} />
            </a>
          </li>
          <li>
            <a href="#projects">
              <TextScramblerComponent phrases={['Hiest']} />
            </a>
          </li>
          <li>
            <a href="#about">
              <TextScramblerComponent phrases={['Backstory']} />
            </a>
          </li>
          <li>
            <a href="#skills">
              <TextScramblerComponent phrases={['Weapons']} />
            </a>
          </li>
          <li>
            <a href="#contact">
              <TextScramblerComponent phrases={['Drop a Tip']} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};