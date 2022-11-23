import React from 'react'
import { Link } from 'react-router-dom'



export const SubscribeSection = ({subscribeSection}) => {
  return (
    <div className='lg:mx-32 md:mx-10 mx-6 mb-20'>
        <div className="subscribe-section md:flex block lg:space-x-20 md:space-x-6 space-x-0 items-center">
            <img src={require('../assets/'+subscribeSection.image)} alt="" className='lg:w-[70%] md:w-[50%]'/>
            {/* Content */}
            <div>
                <h2 className='font-head lg:text-[4rem] font-bold md:text-[2.8rem] text-[2.5rem] pb-2'>{subscribeSection.title}</h2>
                <p className='text-[.9rem] lg:w-[70%] text-content'>{subscribeSection.content}</p>
                {/* Subscribe */}
                <div className='mt-5 flex lg:space-x-3 space-x-2'>
                    <input type="text" placeholder='Enter your name'className='py-5 px-5 text-[.9rem] placeholder:text-[.9rem] shadow-md bg-[#FAFAFA] md:w-[60%] w-auto rounded-md outline-none'/>
                    <button className='bg-primary text-second py-5 px-8 text-center rounded-md font-semibold'>
                        <Link to='/'>
                            Get
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
