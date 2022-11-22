import React from 'react'

export const ServiceSection = ({serviceSection}) => {
  return (
    <div className='mb-52 lg:mx-20 md:mx-10 mx-8'>
        <div className='bg-[#707070] w-full h-[.5px] mb-20 md:block hidden'></div>
        <div className="service-section grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-2 md:gap-x-5 md:gap-y-3 gap-x-3 gap-y-5 justify-items-center">
            {
                serviceSection.map((val,idx) => (
                    <div key={idx} className='flex items-center lg:space-x-2 space-x-2'>
                        <div className='bg-[#FFF3ED] p-4 rounded-md mr-5'>
                            <img src={require('../assets/'+val.icon)} alt="" className='w-6'/>
                        </div>

                        {/* Content */}
                        <div className='space-y-1'>
                            <h4 className='font-semibold text-[.9rem]'>{val.title}</h4>
                            <p className='text-[.8rem] text-content'>{val.content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='bg-[#707070] w-full h-[.5px] mb-20 md:block hidden mt-20'></div>
    </div>
  )
}
