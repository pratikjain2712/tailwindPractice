import React from "react";

const col1 = [
  {
    image: "EmailIcon.svg",
    title: "Email Notification",
    desc: "Let your team members receive email notifications about important changes they need to be aware of. Let your team members receive email notifications.",
  },
  {
    image: "file.svg",
    title: "Rich Domain Model",
    desc: "Targetprocess has a rich domain model with several different types of entities. These entities can be customized to fit your process.",
  },
];
const col2 = [
  {
    image: "chat.svg",
    title: "Comments & Mentions",
    desc: "Allow your team to communicate about the work they do using comments and @mentions",
  },
  {
    image: "multiLang.svg",
    title: "Multi-Language Support",
    desc: "We support English, French, German, Spanish, Portuguese (the Brazilian variety), Russian languages to allow you to use Targetprocess in your native language",
  },
];

const col3 = [
  {
    image: "team.png",
    horizontal: true,
    title: "Multiple Teams Support",
    desc: "Allow multiple teams to collaborate more effectively when delivering project(s) together. Help project members see how their work contributes to the bigger picture.",
  },
  {
    image: "share.svg",
    title: "Share Views",
    desc: "Share any view, report, or dashboard with stakeholders to provide live updates on your progress.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ image, horizontal, title, desc }) {
  return (
    <div className={classNames(horizontal ? "flex space-x-10" : "grid", "p-8 bg-white rounded-xl")}>
      <img
        src={`${image}`}
        alt={image}
        className={classNames(horizontal ? "mb-0" : "block mb-6")}
        style={{ width: horizontal ? 272 : 32, height: horizontal ? 190 : 32 }}
      ></img>
      <div>
        <h4 className="text-left mb-2 font-semibold font-serif text-xl leading-6 text-gray-800" style={{ maxWidth: 224 }}>
          {title}
        </h4>
        <p className="text-sm leading-5 font-normal text-gray-700 mr-3 font-serif">{desc}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="featureSection bg-gray-900 py-48 relative">
      <p className="text-lg mb-4 leading-tight font-serif font-bold uppercase text-transparent bg-clip-text text-center linearGradient">
        Features
      </p>
      <h3 className="text-center mb-10 font-extrabold text-5.5xl text-white">A better way to send money</h3>
      <div className="mx-auto flex" style={{ maxWidth: 1216 }}>
        <div className="w24 mx-auto grid items-stretch row-gap-6">
          {col1.map((item) => (
            <Card image={item.image} horizontal={item.horizontal} title={item.title} desc={item.desc}></Card>
          ))}
        </div>
        <div className="w24 mx-auto grid items-stretch row-gap-6">
          {col2.map((item) => (
            <Card image={item.image} horizontal={item.horizontal} title={item.title} desc={item.desc}></Card>
          ))}
        </div>
        <div className="w48 relative mx-auto grid grid-cols-2 featureCol3 items-stretch row-gap-6">
          {col3.map((item) => (
            <Card image={item.image} horizontal={item.horizontal} title={item.title} desc={item.desc}></Card>
          ))}
          <div className="px-8 py-7 bg-transparent flex items-center flex-col justify-center">
            <img src="updates.svg" alt="update" className="mx-auto mb-4 relative" style={{ left: -6 }}></img>
            <div>
              <h4 className="text-center mb-3 font-semibold font-serif text-xl leading-7 text-white mx-auto" style={{ maxWidth: 224 }}>
                More Updates, Features & Articles are here.
              </h4>
              <p className="text-base font-semibold font-serif text-center leading-5 text-transparent bg-clip-text linearGradient">
                www.neeto.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
