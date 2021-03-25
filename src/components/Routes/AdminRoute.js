import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSession } from '../../firebase/SessionContext'

const AdminRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSession()
  console.log('Admin route', authUser)
  return (
    <Route
      {...rest}
      render={props => {
        return !!authUser && authUser.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to='/signin' />
        )
      }}
    />
  )
}

export default AdminRoute
