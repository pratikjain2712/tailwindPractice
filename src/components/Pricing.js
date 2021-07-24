import React from "react";

export default function Pricing() {
  return (
    <section className="pricingSection py-24 bg-gray-100">
      <h3 className="text-center mb-4 font-extrabold text-5xl leading-10 font-sans text-gray-900">Simple no-tricks pricing</h3>
      <p className="text-2xl mb-10 leading-7 font-sans font-normal text-center text-gray-600">
        If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.
      </p>
      <div className="mx-auto flex shadow-xl rounded-lg" style={{ maxWidth: 1298 }}>
        <div className="bg-white p-12 col-span-2 w-full">
          <h3 className="text-3xl mb-6 leading-8 font-sans font-extrabold text-gray-900">Lifetime Membership</h3>
          <p className="text-md leading-7 font-normal text-gray-500 font-sans mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis ratione.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <h6 className="text-sm font-semibold uppercase leading-5 tracking-wide text-indigo-600" style={{ minWidth: "fit-content" }}>
              What's Included
            </h6>
            <p className="border-t-2 border-gray-200 w-full"></p>
          </div>
          <ul className="text-gray-700 text-sm leading-5 font-normal grid gap-5 grid-cols-2">
            <li className="gap-3 flex items-center">
              <span className="h-4 w-4 bg-green-400 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Private forum access</span>
            </li>
            <li className="gap-3 flex items-center">
              <span className="h-4 w-4 bg-green-400 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Member resources</span>
            </li>
            <li className="gap-3 flex items-center">
              <span className="h-4 w-4 bg-green-400 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Entry to annual conference</span>
            </li>
            <li className="gap-3 flex items-center">
              <span className="h-4 w-4 bg-green-400 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Official member t-shirt</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 flex items-center flex-col p-12 " style={{ minWidth: 333 }}>
          <p className="text-lg leading-7 font-medium text-gray-900 font-sans mb-4">Pay once, own it forever</p>
          <p className="font-sans mb-4 flex items-center">
            <span className="text-5xl leading-10 font-extrabold text-gray-900 mr-3">$349</span>
            <span className="text-xl leading-7 font-medium text-gray-500">USD</span>
          </p>
          <a
            href="#"
            title="Learn about our membership policy"
            className="text-sm leading-5 underline font-medium text-gray-500 font-sans mb-6"
          >
            Learn about our membership policy
          </a>
          <button className="bg-gray-900 py-3 px-4 mb-4 w-full rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:shadow-xl">
            Get Access
          </button>
          <a href="#" title="Get a free sample" className="text-sm leading-5 font-medium text-gray-900 font-sans">
            Get a free sample <span className="font-normal text-gray-500 ">(20MB)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
