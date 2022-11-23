import React from 'react'

export const Address = ({address}) => {
  return (
    <div className='space-y-3'>
        <h4 className="text-[1rem] font-semibold">Address</h4>
        <p className='text-content text-[.9rem]'>{address.lokasi}</p>
        <p className='text-content text-[.9rem]'>{address.noHp}</p>
        <p className='text-content text-[.9rem]'>{address.email}</p>
    </div>
  )
}
