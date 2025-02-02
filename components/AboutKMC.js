import React from "react";

const AboutKMC = () => {
  return (
    <section className="bg-dark ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            About KMC
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Kasturba Medical College (KMC) Mangalore, established in 1955, is a
            prestigious medical institution under Manipal Academy of Higher
            Education (MAHE). It is known for its high academic standards,
            modern infrastructure, and research-oriented approach. The college
            offers undergraduate (MBBS), postgraduate, and super-specialty
            programs in various medical disciplines. With well-equipped
            hospitals for clinical training, KMC Mangalore attracts students
            from across India and abroad, maintaining a strong reputation in
            medical education and healthcare.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="./kmcm.webp"
            alt="mockup"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutKMC;
