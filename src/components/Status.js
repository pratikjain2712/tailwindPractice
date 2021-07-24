import React from "react";

export default function Status() {
  return (
    <section className="bg-white pb-24 pt-16 mt-2 container mx-auto statusSection relative">
      <div className="flex justify-between items-center">
        <div>
          <img src="features.png" alt="Features" className="ml-12 relative z-10" style={{ minWidth: 490, height: 374 }}></img>
        </div>
        <div className="pl-2 max-w-xl mr-12 ">
          <h3 className="text-3xl mb-3 leading-8 font-sans font-extrabold text-gray-900">Always in the loop</h3>
          <p className="text-lg leading-7 font-normal text-gray-500 font-sans mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in
            labore nihil quod quibusdam expedita nemo.
          </p>
          <div className="pl-2 max-w-xl mr-12 flex gap-4">
            <div className="h-12 w-12 bg-gray-900 grid items-center justify-center rounded-lg" style={{ minWidth: 48 }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg leading-6 mb-2 font-sans font-medium text-gray-900">Mobile notifications</h4>
              <p className="text-md leading-7 font-normal text-gray-500 font-sans mb-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </p>
            </div>
          </div>
          <div className="pl-2 max-w-xl mr-12 flex gap-4">
            <div className="h-12 w-12 bg-gray-900 grid items-center justify-center rounded-lg" style={{ minWidth: 48 }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg leading-6 mb-2 font-sans font-medium text-gray-900">Reminder emails</h4>
              <p className="text-md leading-7 font-normal text-gray-500 font-sans">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
