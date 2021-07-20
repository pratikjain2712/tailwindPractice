import React from "react";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  return (
    <section className="bg-white py-12 flex heroSection overflow-hidden relative items-center">
      <div className="flex items-center container mx-auto justify-between">
        <div className="heroTextContainer">
          <h2 className="text-6xl font-extrabold tracking-tight leading-12 text-gray-900">
            Data to enrich your
            <span className="text-transparent bg-clip-text linearGradient"> online business</span>
          </h2>
          <p className="mt-5 text-xl font-serif font-normal leading-7 text-gray-500">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.{" "}
          </p>
          <p className="mt-8 mb-3 font-medium font-serif text-gray-900">Sign up to get notified when it’s ready.</p>
          <form className="w-full max-w-lg">
            <div className="flex items-center">
              <input
                className="text-base bg-transparent border w-full rounded-md text-gray-500 mr-3 p-3 leading-normal focus:outline-none"
                type="email"
                placeholder="Enter your email"
                aria-label="email"
              ></input>
              <div className="relative ml-3" style={{ width: 141 }}>
                <button
                  className="relative bg-gray-900 py-2 px-4 z-10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:shadow-xl"
                  type="button"
                  style={{ width: "inherit" }}
                >
                  Start free trial
                </button>
                <div className="absolute heroButton z-0 linearGradient rounded-sm h-full w-full"></div>
              </div>
            </div>
          </form>
          <p className="mt-3 text-sm font-serif font-normal leading-7 text-gray-500">
            We care about the protection of your data. Read our 
            <a href="#" className="underline text-gray-900 font-medium ml-1">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-center relative z-10 mr-20">
          <img className="block w-auto" src="heroImage.png" alt="Online Business" />
        </div>
      </div>
    </section>
  );
}
