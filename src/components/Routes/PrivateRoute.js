import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSession } from '../../firebase/SessionContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSession()
  return (
    <Route
      {...rest}
      render={props => {
        return !!authUser ? <Component {...props} /> : <Redirect to='/signin' />
      }}
    />
  )
}

export default PrivateRoute
