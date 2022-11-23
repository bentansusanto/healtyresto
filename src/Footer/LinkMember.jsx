import React from 'react'
import { Link } from 'react-router-dom'

export const LinkMember = ({linkMember}) => {
  return (
    <div className='space-y-3'>
        <h4 className="text-[1rem] font-semibold">Link Member</h4>
      {linkMember.map((val, idx) => (
        <li key={idx} className="list-none text-[.9rem] text-content hover:text-third">
          <Link to={val.link}>{val.name}</Link>
        </li>
      ))}
    </div>
  )
}
