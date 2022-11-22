import React, {useEffect} from "react";
import Star from '../assets/Star.svg'
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productSelectors } from "../features/ProductSlice";


const menuSection = {
  highlight: "Our Menu",
  title: "Our Best Menu With Category",
  content:"Lorem ipsum dolor sit amet, adipisicing elit officiis, repellendus dolores.",
}

export const MenuSection = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  useEffect(() => {
      dispatch(getProducts())
  }, [dispatch])
  

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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-14">
          {
            products.map((val, idx) => (
              <div key={idx}>
                <img src={val.image} alt=""/>
                {/* title and rating */}
                <div className="flex mt-3">
                  <h4 className="md:w-[60%] w-[62%] md:text-[1rem] text-[.9rem] font-semibold">{val.title}</h4>
                  {/* rating */}
                  <div className="flex items-center space-x-1 ml-auto">
                   <img src={Star} alt="" />
                    <p className="md:text-[1rem] text-[.9rem]">{val.rating}</p>
                  </div>
                </div>
                <p className="text-[.9rem] text-content py-3">{val.desc}</p>
                 {/* CTA Cart and price */}
                <div className="flex">
                  <button>
                  <p>Add</p>
                  </button>
                  <p className="ml-auto text-[1rem] font-semibold">${val.price}</p>
                </div>
              </div>
            ))
          }
        </div>
       
    </div>
    </div>
  );
};
