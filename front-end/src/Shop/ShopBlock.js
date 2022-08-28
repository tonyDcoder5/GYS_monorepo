import React from "react";
const logo = require("../assets/img/GYS_logo.jpg");

export default function ShopBlock() {
  const shirts = [
    {
      id: 0,
      name: "Test Name",
      image: logo,
      title: "Test Title",
      subtitle: "Test subtitle",
      date: "2022-09-01",
    },
    {
      id: 1,
      name: "Test Name 1",
      image: logo,
      title: "Test Title 1",
      subtitle: "Test subtitle 1",
      date: "2022-09-01",
    },
  ];

  const prompt = {
    image: "../assets/img/GYS_logo.jpg",
    name: "why-block",
    title: "",
    bio: "",
    link: "",
  };

  return (
    <div className="shop-block">
      <div className="shop-bx">
        <h2>DESIGNS BY COMPANY NAME HERE</h2>
        <div className="shop-row">
          <img src={prompt.image} width={"25%"} alt="headshot" />
          <section className="shop-text">
            <h4>{prompt.name}</h4>
            <h6>{prompt.title}</h6>
            <p>{prompt.bio}</p>
            <a href={prompt.link}>LinkedIn</a>
          </section>
        </div>
      </div>
      <div className="row shirt-block">
        <h2>DESIGNS COMING SOON</h2>
        <div className="shirt-content">
        <section>
          {shirts.map((shirt, idx) => {
            return (
              <div className="shirt-row">
               <img src={logo} width={"25%"} alt={shirt.name} />
                <span className="shirt-text"> 
                    <h3>{shirt.title}</h3>
                <p>{shirt.subtitle}</p>
                <p>{shirt.date}</p>
                </span>
              </div>
            );
          })}
        </section>
      </div>
      </div>
    </div>
  );
}
