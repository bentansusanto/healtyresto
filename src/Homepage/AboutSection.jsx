import React from 'react'
import { Link } from 'react-router-dom'

export const AboutSection = ({aboutSection}) => {
  return (
    <div className='lg:mx-32 md:mx-10 mx-6 mb-52'>
        <div className="about-section md:flex flex-row-reverse items-center block lg:space-x-8 md:space-x-5 space-x-0">
            <img src={require('../assets/'+aboutSection.image)} alt="" className='md:w-[50%]'/>

            {/* Content */}
            <div className='md:mt-0 mt-10'>
                <p className='text-fourth font-semibold text-[.9rem]'>{aboutSection.highlight}</p>
                <h2 className='font-head lg:text-[4rem] font-bold md:text-[2.8rem] text-[2.5rem] pb-2'>{aboutSection.title}</h2>
                <p className='text-content lg:w-[80%] text-[.9rem]'>{aboutSection.content}</p>
                <button className='bg-third md:px-6 px-5 py-2.5 mt-8 rounded-sm'>
                        <Link to='/' className='text-[.9rem] font-semibold text-second'>
                            See more
                        </Link>
                    </button>
            </div>
        </div>
    </div>
  )
}
