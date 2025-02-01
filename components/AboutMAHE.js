import React from "react";

const AboutMahe = () => {
  return (
    <div className="relative flex flex-col px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="relative flex justify-start max-w-xl mx-auto xl:pl-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pl-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              About Mahe
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section (Now After the Text) */}
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pl-8 xl:pl-0 lg:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-center">
        <img
          src="https://kitwind.io/assets/kometa/laptop.png"
          className="object-cover object-left w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMahe;
