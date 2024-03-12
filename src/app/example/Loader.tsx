"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "You Don't Think Before You Act",
  },
  {
    text: "I Execute My Task In My Head 100 Times Before I Do It",
  },
  {
    text: "You Have a Plan B and C for Escape",
  },
  {
    text: "My Backup was Originated To Execute Plan A",
  },
  {
    text: "You're a Talker",
  },
  {
    text: "I'm a Doer",
  },
  {
    text: "You Pray For The Best",
  },
  {
    text: "I Prepare For The Worst",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-[10vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}

  
        
      
      <button
        onClick={() => setLoading(true)}
        className="bg-blue-800 hover:bg-cyan-500/90

        text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Difference Between Us
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
