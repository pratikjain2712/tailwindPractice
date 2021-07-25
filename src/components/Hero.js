import React from "react";

export default function Hero() {
  return (
    <section className="bg-white md:py-12 lg:py-32 flex  container mx-auto heroSection md:overflow-hidden relative items-center">
      <div className="max-w-2xl lg:max-w-4xl xl:max-w-full flex md:items-center container mx-auto md:justify-between flex-col-reverse md:flex-row gap-0 lg:gap-12 xl:gap-8">
        <div className="heroTextContainer md:w-3/6 px-4 md:px-0 pt-12 md:pt-0 pb-16 sm:pb-0">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-9 lg:leading-10 xl:leading-12 text-gray-900 lg:h-24 xl:h-32  lg:flex lg:flex-col lg:justify-between">
            Data to enrich your
            <span className="text-transparent bg-clip-text linearGradient"> online business</span>
          </h2>
          <p className="mt-4 md:mt-5 text-lg md:text-xl lg:text-lg pr-5 lg:pr-16 xl:pr-32 font-sans font-normal leading-7 text-gray-500">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </p>
          <p className="mt-4 md:mt-6 lg:mt-8 mb-3 font-medium font-serif text-gray-900">Sign up to get notified when it’s ready.</p>
          <form className="w-full xl:max-w-lg md:max-w-md md:pr-8 xl:pr-0">
            <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row">
              <input
                className="text-base bg-transparent border w-full rounded-md text-gray-500 p-3 leading-normal focus:outline-none"
                type="email"
                placeholder="Enter your email"
                aria-label="email"
              ></input>
              <div className="relative w-full md:w-40 flex-shrink-0 md:pl-5 ">
                <button
                  className="relative border-box w-full bg-gray-900 py-2 px-4 z-10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:shadow-xl"
                  type="button"
                >
                  Start free trial
                </button>
                <div className="absolute heroButton z-0 linearGradient rounded-sm h-full"></div>
              </div>
            </div>
          </form>
          <p className="mt-3 text-sm font-serif font-medium leading-7 text-gray-500 pr-3">
            <span>We care about the protection of your data. Read our </span>
            <a href="#" className="underline text-gray-900 font-medium">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-center relative md:w-3/6 z-10 md:pl-6 xl:pr-48 xl:pl-0">
          <img className="w-full" src="heroImage.png" alt="Online Business" />
        </div>
      </div>
    </section>
  );
}
