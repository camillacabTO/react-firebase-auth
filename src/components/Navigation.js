import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/signin'>Sign In</NavLink>
        </li>
        <li>
          <NavLink to='/'>Landing</NavLink>
        </li>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/account'>Account</NavLink>
        </li>
        <li>
          <NavLink to='/admin'>Admin</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
