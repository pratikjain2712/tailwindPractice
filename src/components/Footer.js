import React from "react";
import { Fragment } from "react";

const footerLinks = [
  {
    title: "Solutions",
    menu: [
      {
        name: "Marketing",
        href: "#",
      },
      {
        name: "Analytics",
        href: "#",
      },
      {
        name: "Commerce",
        href: "#",
      },
      {
        name: "Insights",
        href: "#",
      },
    ],
  },
  {
    title: "Support",
    menu: [
      {
        name: "Pricing",
        href: "#",
      },
      {
        name: "Documentation",
        href: "#",
      },
      {
        name: "Guides",
        href: "#",
      },
      {
        name: "API Status",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    menu: [
      {
        name: "About",
        href: "#",
      },
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Jobs",
        href: "#",
      },
      {
        name: "Press",
        href: "#",
      },
      {
        name: "Partners",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    menu: [
      {
        name: "Claims",
        href: "#",
      },
      {
        name: "Privacy",
        href: "#",
      },
      {
        name: "Terms",
        href: "#",
      },
    ],
  },
];

const socials = [
  {
    name: "facebook",
    href: "https://facebook.com",
  },
  {
    name: "instagram",
    href: "https://instagram.com",
  },
  {
    name: "twitter",
    href: "https://twitter.com",
  },
  {
    name: "github",
    href: "https://github.com",
  },
  {
    name: "dribble",
    href: "https://dribble.com",
  },
];

function Menu({ title, list }) {
  return (
    <div className={"flex flex-col gap-4"}>
      <h5 className="text-left uppercase font-semibold font-sans text-sm leading-5 tracking-wider text-gray-400">{title}</h5>
      <ul className="text-left font-normal font-sans text-base leading-6">
        {list.map((l) => (
          <li className="mb-4">
            <a href={l.href} title={l.name} className="text-gray-200 hover:text-white">
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footerSection bg-gray-900">
      <div style={{ maxWidth: 1216 }} className="mx-auto">
        <div className="grid grid-cols-6 col-gap-8 pb-12">
          <Fragment>
            <div className="col-span-2">
              <div className="flex-shrink-0 flex items-center mb-8">
                <img className="block lg:hidden h-8 w-auto" src="mark-white.svg" alt="Workflow" />
                <img className="hidden lg:block h-8 w-auto mr-1" src="mark-white.svg" alt="Workflow" />
              </div>
              <p className="text-base leading-6 font-normal text-gray-200 font-sans mb-8 pr-10">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <ul className="flex gap-5">
                {socials.map((l) => (
                  <li className="mr-2">
                    <a href={l.href} title={l.name}>
                      <img src={`/socials/${l.name}.svg`} alt={l.name} className="h-5 w-5"></img>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {footerLinks.map((menu) => (
              <Menu title={menu.title} list={menu.menu}></Menu>
            ))}
          </Fragment>
        </div>
        <p
          className="text-base text-center leading-6 font-normal text-gray-400 font-sans pt-8 pb-16 border-gray-700"
          style={{ borderTop: "1px solid" }}
        >
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
