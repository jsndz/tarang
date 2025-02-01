import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Hero() {
  return (
    <div className="w-full h-full">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center text-center ">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-4xl font-bold text-black dark:text-white font-sans tracking-tight">
            What&apos;s cooler than your college fest?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="text-9xl">Tarang</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="text-9xl">Tarang</span>
              </div>
            </div>
          </h2>
          {/* Adding margin for spacing */}
          <h5 className="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
