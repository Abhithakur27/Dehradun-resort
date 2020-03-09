import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "lorem10 Sint enim id officia nisi deserun henderit mollit nulla ex labore non adipisicing irure aliqua eu."
      },
      {
        icon: <FaHiking />,
        title: "free Hiking",
        info:
          "lorem10 Sint enim id officia nisi deserun henderit mollit nulla ex labore non adipisicing irure aliqua eu."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "lorem10 Sint enim id officia nisi deserun henderit mollit nulla ex labore non adipisicing irure aliqua eu."
      },
      {
        icon: <FaBeer />,
        title: "free Beer",
        info:
          "lorem10 Sint enim id officia nisi deserun henderit mollit nulla ex labore non adipisicing irure aliqua eu."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
