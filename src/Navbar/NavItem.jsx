import React from 'react'
import { Link } from 'react-router-dom'
import { GiCook } from "react-icons/gi";
import {MdPayment} from "react-icons/md"
import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";

export const NavItem = ({link}) => {
  return (
    <div>
        <div className="nav-item md:flex hidden space-x-5 lg:ml-10 md:ml-5">
            {
                link.map((val, idx) => (
                    <li key={idx} className='list-none text-[.9rem] hover:text-third'>
                        <Link  to={val.link}>
                            {val.name}
                        </Link>
                    </li>
                ))
            }
        </div>

        {/* Mobile */}
        <div className="nav-item md:hidden grid grid-cols-4 fixed bottom-0 justify-items-center py-4 bg-second shadow-[0_0_30px_15px_rgba(0,0,0,0.1)] w-full">
            <li className='list-none text-[1.6rem] hover:text-third'>
                 <Link  to='/'>
                    <BiHomeSmile/>
                </Link>
            </li>
            {/* Cart */}
            <li className="list-none relative block md:hidden">
              <GiCook className="text-[1.6rem]" />
              <span className="bg-fourth px-1.5 py-.5 rounded-full absolute text-second -top-2 -right-2 text-[.6rem]">
                2
              </span>
            </li>
            {/* Payment */}
            <li className="list-none relative">
                <Link to='/'>
                    <MdPayment className="text-[1.6rem]" />
                </Link>
            </li>
            <li className="list-none relative">
                <Link to='/'>
                    <AiOutlineAppstore className="text-[1.6rem]" />
                </Link>
            </li>
        </div>
    </div>
  )
}
