import React from 'react'

export const About = ({about}) => {
  return (
    <div className='lg:mx-32 md:mx-10 mx-6 mb-52 mt-20'>
        <div className="about-section md:flex flex-row-reverse items-center block lg:space-x-8 md:space-x-5 space-x-0">
            <img src={require('../assets/'+about.image)} alt="" className='md:w-[50%]'/>
            {/* Content */}
            
            <div className='md:mt-0 mt-10'>
                <p className='text-fourth font-semibold text-[.9rem]'>{about.highlight}</p>
                <h2 className='font-head lg:text-[4rem] font-bold md:text-[2.8rem] text-[2.5rem] pb-2'>{about.title}</h2>
                <p className='text-content lg:w-[80%] text-[.9rem] leading-loose'>{about.content}</p>
            </div>
        </div>
    </div>
  )
}
