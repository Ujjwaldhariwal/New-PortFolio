"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import './SButton.css'; 


export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "2c6d9507-5de1-4c6d-b34e-2e487bc25ce9",
        name: e.currentTarget.name.valueOf,
        email: e.currentTarget.email.value,
        message: e.currentTarget.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  if (formSubmitted) {
    return (
      <div className="text-center">
        <p className="text-teal-500 text-xl font-semibold">
          Form submitted successfully!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="max-w-lg mx-auto mt-4 bg-neutral-950 p-6 rounded-md border border-neutral-800 relative z-10"
    >
      <div className="mb-4">
        <label htmlFor="name" className="text-neutral-200 block mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-2 text-neutral-200"
          autoComplete="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="text-neutral-200 block mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="email@example.com"
          className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-2 text-neutral-200"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="text-neutral-200 block mb-1">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={3}
          placeholder="Enter Message"
          className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-2 text-neutral-200"
          autoComplete="off"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>
      <button className="learn-more">Send</button>
    </form>
  );
}

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Hi there! Myself Ujjwal, a world-class developer ready to elevate your digital experience. Need a reliable, scalable, and customizable solution for your project? Look no further! Contact me and let's build something extraordinary together.
        </p>
        <Contact />
      </div>
      <BackgroundBeams />
    </div>
  );
}
