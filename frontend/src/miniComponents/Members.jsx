import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alexa",
    },
    {
      id: 2,
      image: "/atharva.jpg",
      title: "Atharva",
    },
    {
      id: 3,
      image: "/pranav.jpg",
      title: "pranav",
    },
    {
      id: 4,
      image: "/poonam.jpg",
      title: "Poonam",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Siri",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Rober",
    },
    {
      id: 7,
      image: "/varsha.jpg",
      title: "Varsha",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p>
            Our volunteers are dedicated to maximizing impact by efficiently allocating resources. They ensure optimal selection and use of donations, much like determining the best spells for maximum power in a wizard's repertoire.
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
