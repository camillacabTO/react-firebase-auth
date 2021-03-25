import React from 'react'
import { NavLink } from 'react-router-dom'
import SignOut from './SignOut'
import { useSession } from '../firebase/SessionContext'

const Navigation = () => {
  const { authUser } = useSession()
  return (
    <>
      {!!authUser ? (
        <NavigationAuth isAdmin={authUser.isAdmin} />
      ) : (
        <NavigationNonAuth />
      )}
    </>
  )
}

const NavigationAuth = ({ isAdmin }) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'>Landing</NavLink>
        </li>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/account'>Account</NavLink>
        </li>
        {isAdmin && (
          <li>
            <NavLink to='/admin'>Admin</NavLink>
          </li>
        )}

        <li>
          <SignOut />
        </li>
      </ul>
    </div>
  )
}

const NavigationNonAuth = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/signin'>Sign In</NavLink>
        </li>
        <li>
          <NavLink to='/'>Landing</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
