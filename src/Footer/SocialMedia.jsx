import React from 'react'

export const SocialMedia = ({socialMedia}) => {
  return (
    <div className='flex space-x-6 items-center pt-3'>
        {
            socialMedia.map((val, idx) => (
                <a key={idx} href={val.link}>
                   <img src={require('../assets/'+val.icon)} alt="" className='w-5'/> 
                </a>
            ))
        }
    </div>
  )
}
