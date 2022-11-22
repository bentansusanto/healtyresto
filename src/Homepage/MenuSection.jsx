import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenus, menuSelectors } from "../features/MenuSlice";

const menuSection = {
  highlight: "Our Menu",
  title: "Our Best Menu With Category",
  content:"Lorem ipsum dolor sit amet, adipisicing elit officiis, repellendus dolores.",
}

export const MenuSection = () => {
  
  const dispatch = useDispatch();

  const menus = useSelector(menuSelectors.selectAll);

  useEffect(() => {
    dispatch(getMenus());
  }, [dispatch]);

  return (
    <div className="lg:mx-20 md:mx-10 mx-6 mb-52">
      <div className="menu-section">
        {/* Content */}
        <div>
          <p className="text-fourth font-semibold text-[.9rem]">
            {menuSection.highlight}
          </p>
          <h2 className="font-head lg:text-[3rem] lg:w-[30%] font-bold md:text-[2.8rem] text-[2.5rem] pb-3">
            {menuSection.title}
          </h2>
          <p className="text-content text-[.9rem] lg:w-[30%]">
            {menuSection.content}
          </p>
        </div>

        {/* Category */}
        <div className="flex space-x-10 justify-center mt-20">
          <p className="hover:text-third cursor-pointer">All Menu</p>
          <p className="hover:text-third cursor-pointer">Healty Food</p>
          <p className="hover:text-third cursor-pointer">Fast Food</p>
        </div>

        {/* Menu */}
        <div>
          {
            menus.map((val, idx) => (
              <div key={idx}>
                <img src={val.image} alt="" />

              </div>
            ))
          }
        </div>
       
    </div>
    </div>
  );
};
