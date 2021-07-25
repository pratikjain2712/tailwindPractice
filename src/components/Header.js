import React from "react";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Product", href: "#", current: false },
  { name: "Features", href: "#", current: false },
  { name: "Marketplace", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white container mx-auto">
      {({ open }) => (
        <Fragment>
          <div className="mx-auto max-w-2xl lg:max-w-4xl xl:max-w-full">
            <div className="relative flex items-center justify-between flex-row-reverse lg:flex-row pl-5 pr-4 h-10 lg:h-16 py-2 my-1 lg:py-1 md:px-0 box-content">
              <div className="lg:absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 mr-0 rounded-md text-gray-900 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block lg:hidden h-8 w-auto" src="mark.svg" alt="Workflow" />
                  <img className="hidden lg:block h-8 w-auto mr-1" src="mark.svg" alt="Workflow" />
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-650 border-b-2 border-white hover:border-gray-900 hover:text-gray-900",
                          "px-3 py-2 text-base font-medium font-sans"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden lg:inline inset-y-0 right-0 flex items-center pr-2 ml-auto sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="#"
                  className="text-gray-650 border-b-2 border-white hover:border-gray-900 hover:text-gray-900 px-3 py-2 rounded-none text-base font-medium font-sans"
                  aria-current="undefined"
                >
                  Log in
                </a>
                <button className="bg-gray-900 py-2 px-4 ml-3 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:shadow-xl">
                  Start free trial
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden shadow-lg rounded-lg">
            <div className="px-2 mx-auto max-w-full md:max-w-2xl">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-gray-900 text-white" : "text-gray-650 hover:bg-gray-900 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium font-sans"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
              <div style={{ borderTop: "2px solid #F9FAFB" }} className="mt-4">
                <button className="bg-gray-900 py-2  border-2 capitalize mb-4 border-gray-900 px-4 w-full rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:shadow-xl">
                  Start free trial
                </button>
                <p className="px-3 pt-2 pb-6 text-base font-medium font-sans text-center">
                  <span className="text-gray-500 ">Existing customer? </span>
                  <a href="#" className="text-gray-900 rounded-md" aria-current="undefined">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
}
