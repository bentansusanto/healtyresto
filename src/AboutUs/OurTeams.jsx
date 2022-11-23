import React from 'react'

export const OurTeams = ({team, ourTeam}) => {
  return (
    <div className='lg:mx-20 md:mx-10 mx-6 mb-52'>
        <div className="our-teams">
            {/* Content */}
            <div>
                <p className='text-fourth font-semibold text-[.9rem]'>{ourTeam.highlight}</p>
                <h2 className='font-head lg:text-[3rem] lg:w-[40%] md:w-[50%] font-bold md:text-[2.8rem] text-[2.5rem] pb-2'>{ourTeam.title}</h2>
                <p className='text-content lg:w-[35%] md:w-[50%] text-[.9rem]'>{ourTeam.content}</p>
            </div>

            {/* team */}
            <div className='mt-10 grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-y-10 gap-x-5'>
                {
                    team.map((val, idx) => (
                        <div key={idx} className='space-y-2'>
                            <img src={require('../assets/'+val.foto)} alt="" />
                            <h4 className='text-[1rem] font-semibold'>{val.name}</h4>
                            <p className='text-[.9rem] text-content'>{val.job}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
