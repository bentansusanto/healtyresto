import React from "react";
import { BiHomeSmile,BiSearch } from "react-icons/bi";
import { GiCook } from "react-icons/gi";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import {MdPayment} from "react-icons/md"

import { AiOutlineAppstore } from "react-icons/ai";

const link = [
  { name: "Home", link: "/"},
  { name: "About Us", link: "/about" },
  { name: "Menu", link: "/" },
  { name: "Blog", link: "/" },
  { name: "Contact Us", link: "/" },
];

const linkMobile = [
    {icon : <BiHomeSmile/>, link: '/'},
    {icon : <GiCook/>, link: '/'},
    {icon : <MdPayment/>, link: '/'},
    {icon : <AiOutlineAppstore/>, link: '/'},
]

const Navbar = () => {
  return (
    <div>
      <nav className="lg:px-20 md:px-10 px-0 py-4 relative">
        <div className="flex items-center">
            <div className="md:flex block md:items-center">
                <Link
                    to="/"
                    className="font-head font-bold md:text-[1.3rem] text-[1.2rem] md:px0 px-5"
                >
                    HealtyResto<span className='text-fourth'>.</span>
                </Link>
                {/* Link Item */}
                <NavItem link={link} linkMobile={linkMobile}/>
            </div>

          {/* Link Sign Up */}
          <div className="sign-up ml-auto flex items-center lg:space-x-8 md:space-x-5 space-x-6">
            {/* Search */}
            <div className="search text-[1.6rem]">
              <BiSearch />
            </div>

            {/* Cart */}
            <div className="cart relative md:block hidden">
              <GiCook className="text-[1.6rem]" />
              <span className="bg-fourth px-2 py-1 rounded-full absolute text-second -top-2 -right-2 text-[.7rem]">
                2
              </span>
            </div>

            {/* Sign Up */}
            <div>
                <Link to='/' className="bg-third md:block hidden px-6 py-2.5 text-[.9rem] rounded-sm font-semibold text-second">
                    Sign Up
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
