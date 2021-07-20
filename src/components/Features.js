import React from "react";

const cardDetails = [
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

export default function Features() {
  return (
    <section className="featureSection bg-gray-900 py-48">
      <p className="text-lg mb-4 leading-tight font-serif font-bold uppercase text-transparent bg-clip-text text-center linearGradient">
        Features
      </p>
      <h3 className="text-center mb-10 font-extrabold text-5.5xl text-white">A better way to send money</h3>
      <div className="container mx-auto">
        <div className="flex items-start gap-6 relative" style={{ maxHeight: 590, flexFlow: "column wrap" }}>
          {cardDetails.map((item) => (
            <div className={classNames(item.horizontal ? "flex space-x-10 w48" : "w24 ", "p-8 bg-white rounded-xl")}>
              <img
                src={`${item.image}`}
                alt={item.icon}
                className={classNames(item.horizontal ? "mb-0" : "block mb-6")}
                style={{ width: item.horizontal ? 272 : 32, height: item.horizontal ? 190 : 32 }}
              ></img>
              <div>
                <h4 className="text-left mb-2 font-semibold font-serif text-xl leading-6 text-gray-800" style={{ maxWidth: 224 }}>
                  {item.title}
                </h4>
                <p className="text-sm leading-5 font-normal text-gray-700 w-9/12">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="w24 pb-16 pt-8 px-8 bg-transparent absolute right-0 bottom-0">
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
