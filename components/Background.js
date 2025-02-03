import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import "./index.css";
export function Hero() {
  return (
    <div className="w-screen h-screen relative">
      <BackgroundBeamsWithCollision>
        {/* Navigation or Logo Section */}
        <div className="absolute top-10 left-1/2 flex transform -translate-x-1/2 lg:flex lg:items-center lg:w-auto lg:space-x-6 z-20 rounded-lg bg-white">
          <a className="text-3xl font-bold leading-none" href="#">
            <img
              src="./kmclogo.png"
              alt="Tarang"
              className="w-[150px] h-[150px]"
            />
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
          <img src="./70.png" alt="Tarang" className="w-[150px] h-[150px]" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center relative z-10">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white font-sans tracking-tight">
            What&apos;s cooler than your college fest?{" "}
            <div className="relative mx-auto inline-block w-max">
              <div className="absolute left-0 top-[1px] bg-clip-text text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500">
                <span className="text-9xl">Tarang</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="text-9xl">Tarang</span>
              </div>
            </div>
          </h2>

          <h5 className="mt-4 text-lg text-paragraph">
            Tarang is the flagship event celebrating talent, creativity, and
            competition. With activities across culture, sports, and arts, it
            offers a platform for participants to showcase their skills in a
            vibrant and energetic atmosphere.
          </h5>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
