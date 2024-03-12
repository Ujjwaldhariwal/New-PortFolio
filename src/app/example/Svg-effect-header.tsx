"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer 
        revealText={
          <p className="max-w-4xl mx-auto text-black text-center  text-4xl font-bold">
            Greetings, My name is Ujjwal Dhariwal and I&apos;m a Software Developer.
             
       </p>
        }
        
      >
        Aye Yo , Your biggest fear<span className="text-red-500"> Shaapit</span> is here 
        Ready to unleash some UI havoc and disrupt the game. Watch out, the undead coder is in town!
        <span className="text-red-500"> Watch Out</span>.
      </MaskContainer>
    </div>
  );
}
