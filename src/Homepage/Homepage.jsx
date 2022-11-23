import React from "react";
import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";
import { MenuSection } from "./MenuSection";
import { ServiceSection } from "./ServiceSection";
import { SubscribeSection } from "./SubscribeSection";
import { TestimoniSection } from "./TestimoniSection";

const heroSection = {
  promo: "Sall Top 20% Off",
  title: "Will Give You Satisfaction in Food",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat autem assumenda debitis tempore atque animi vitae nam accusantium quaerat amet.",
  image: "bg-hero.svg",
};

const serviceSection = [
  {
    title: "Free Shipping",
    content: "Orders over $140",
    icon: "shipping.svg",
  },
  {
    title: "Quick Payment",
    content: "100% secure payment",
    icon: "payment.svg",
  },
  {
    title: "Special Promo",
    content: "Get special promo",
    icon: "promo.svg",
  },
  {
    title: "24/7 Support",
    content: "Ready support",
    icon: "support.svg",
  },
];

const aboutSection = {
  highlight: "About Us",
  title: "The More Healthy Food The Better",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, repellendus dolores. Reprehenderit dignissimos sed, mollitia blanditiis maiores quam.",
  image: "bg-about.svg",
};

const testimoniSection = {
  highlight: " What they are say ",
  title: "What they are says about us",
  image: "bg-testimoni.svg",
};

const subscribeSection = {
    title : 'Get more discount if you order from us',
    content : 'Join with us then you must have get a discount and get promo from us to you , enjoy and happy to order.',
    image : 'bg-subscribe.svg'
}

const Homepage = () => {
  return (
    <div>
      <HeroSection heroSection={heroSection} />
      <ServiceSection serviceSection={serviceSection} />
      <AboutSection aboutSection={aboutSection} />
      <MenuSection />
      <TestimoniSection testimoniSection={testimoniSection} />
      <SubscribeSection subscribeSection={subscribeSection}/>
    </div>
  );
};

export default Homepage;
