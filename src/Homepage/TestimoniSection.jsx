import React from "react";
import Foto from "../assets/erick-smith.svg";
import Star from "../assets/Star.svg";

export const TestimoniSection = ({ testimoniSection }) => {
  return (
    <div className="lg:mx-20 md:mx-10 mx-6 mb-40">
      <div className="testimoni-section md:flex block md:space-x-12 space-x-0 items-center">
        <img src={require("../assets/" + testimoniSection.image)} alt="" className="md:w-[50%]"/>
        {/* Content */}
        <div className="md:mt-0 mt-10">
          <p className="text-fourth font-semibold text-[.9rem]">
            {testimoniSection.highlight}
          </p>
          <h2 className="font-head lg:text-[4rem] font-bold md:text-[2.8rem] text-[2.5rem] pb-2">
            {testimoniSection.title}
          </h2>
          {/* Testimoni */}
          <div className="space-y-3 mt-5">
            {/* foto and name */}
            <div className="flex items-center space-x-3">
              <img src={Foto} alt="" className="w-14" />
              <div>
                <h4 className="text-[1.2rem] font-semibold">Erick Smith</h4>
                <p className="text-[.9rem] text-content">Food Vlogger</p>
              </div>
            </div>
            <p className="text-[.9rem] lg:w-[50%] md:w-[60%] w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
              sint?
            </p>
            {/* rating */}
            <div className="flex space-x-1 font-medium">
              <img src={Star} alt="" />
              <p className="text-[.9rem]">5.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
