import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSession } from '../../firebase/SessionContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSession()
  const isEmailVerified = () => {
    if (
      authUser &&
      authUser.provider.some(item => item.providerId === 'password')
    )
      return authUser.emailVerified
    return !!authUser
  }

  console.log(authUser, isEmailVerified())

  return (
    <Route
      {...rest}
      render={props => {
        return isEmailVerified() ? (
          <Component {...props} />
        ) : (
          <Redirect to='/signin' />
        )
      }}
    />
  )
}

export default PrivateRoute
