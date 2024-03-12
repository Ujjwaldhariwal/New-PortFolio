"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Born and raised in the tranquil town of Haryana, I found my early love for engineering. Opting for the science stream in secondary school, I embarked on a journey that led me to Chitkara University. Amidst the vibrant campus life, I honed my skills in Computer Science.

Internships became my playing field, as I transitioned from a curious student to a budding developer. The code replaced the court, and my passion for technology soared. Born in Haryana, I found my rhythm in the language of programming.

Spacious and ever-evolving, my story from a small town to the heart of innovation unfolded with each line of code.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
