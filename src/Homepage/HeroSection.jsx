import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

export const HeroSection = ({heroSection}) => {
  return (
    <div className='mt-20 mb-52'>
        <div className="hero-section md:flex lg:space-x-10 md:space-x-8 items-center block lg:px-20 md:px-10 px-6">
            <img src={require('../assets/'+heroSection.image)} alt=""  className='md:w-[50%]'/>
            {/* Content */}
            <div className='md:mt-0 mt-10'>
                <p className='text-fourth font-semibold text-[.9rem]'>{heroSection.promo}</p>
                <h1 className='font-head lg:text-[4rem] font-bold md:text-[2.8rem] text-[2.5rem] pb-2'>{heroSection.title}</h1>
                <p className='text-content lg:w-[80%] text-[.9rem]'>{heroSection.content}</p>

                {/* Button CTA */}
                <div className='flex space-x-3'>
                    {/* CTA Shop */}
                    <button className='bg-third md:px-6 px-5 py-2.5 mt-8 rounded-sm'>
                        <Link to='/' className='text-[.9rem] font-semibold text-second'>
                            Buy Now
                        </Link>
                    </button>

                    {/* CTA Blog */}
                    <button className='px-6 py-2.5 mt-8 rounded-sm flex items-center space-x-3 text-fourth'>
                        <Link to='/' className='text-[.9rem] font-semibold'>
                            Explore our blog
                        </Link>
                            <BsArrowRight className='text-2xl'/>
                    </button>

                </div>
            </div>
        </div>
    </div>
  )
}
