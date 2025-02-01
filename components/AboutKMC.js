import React from "react";

const AboutKMC = () => {
  return (
    <div className="relative flex flex-col px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full bg-gray-100">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src="https://kitwind.io/assets/kometa/laptop.png"
          className="object-cover object-left w-full h-auto lg:w-auto lg:h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl lg:ml-auto">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              About KMC
            </h2>
            <p className="text-base text-gray-700 md:text-lg leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKMC;
