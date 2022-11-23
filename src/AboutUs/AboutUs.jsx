import React from "react";
import { About } from "./About";
import { OurTeams } from "./OurTeams";
import { Subscribe } from "./Subscribe";

const about = {
  highlight: "About Us",
  title: "The More Healthy Food The Better",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ad alias temporibus, ducimus adipisci eaque obcaecati, debitis, pariatur sit eos perferendis voluptatum? Beatae quibusdam minus blanditiis reprehenderit reiciendis earum illo temporibus perferendis delectus, exercitationem non tempore explicabo odio id inventore.",
  image: "bg-about.svg",
};

const ourTeam = {
  highlight: "Our Team",
  title: "Our Best Team in Healty Resto",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ad alias temporibus, ducimus adipisci eaque obcaecati",
};

const team = [
  {
    name: "Benny Tan Susanto",
    job: "Chief Executive Officer",
    foto: "ceo.svg",
  },
  {
    name: "Andik Firmansyah",
    job: "Executive Chef",
    foto: "chef.svg",
  },
  {
    name: "Linda Juwita",
    job: "Chief Marketing Officer",
    foto: "cmo.svg",
  },
  {
    name: "Jeremy",
    job: "General Manager",
    foto: "gm.svg",
  },
];

const subscribe = {
  title: "Get more discount if you order from us",
  content:
    "Join with us then you must have get a discount and get promo from us to you , enjoy and happy to order.",
  image: "bg-subscribe.svg",
};

const AboutUs = () => {
  return (
    <div>
      <About about={about} />
      <OurTeams team={team} ourTeam={ourTeam} />
      <Subscribe subscribe={subscribe}/>
    </div>
  );
};

export default AboutUs;
