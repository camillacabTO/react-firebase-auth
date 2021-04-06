import React, { useEffect } from 'react'
import styles from '../index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Landing from './Landing'
import SignUp from './SignUp'
import SignIn from './SignIn'
import PasswordForget from './PasswordForget'
import Home from './Home'
import Account from './Account'
import Admin from './Admin'
import { useAuth } from '../firebase/FirebaseContext'
import { useSession } from '../firebase/SessionContext'
import PrivateRoute from './Routes/PrivateRoute'
import AdminRoute from './Routes/AdminRoute'

const App = () => {
  const firebase = useAuth()
  const { setAuthUser } = useSession()

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      //firebase listener
      if (user) {
        console.log('user', user)
        firebase.user(user.uid).on('value', snapshot => {
          // find authenticated user in the DB
          const mergedUser = {
            id: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            provider: user.providerData,
            ...snapshot.val()
          }
          setAuthUser(mergedUser)
          localStorage.setItem('user', JSON.stringify(mergedUser))
        })
      } else {
        localStorage.removeItem('user')
      }
    })
    return unsubscribe
  }, [])

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/pw-forget' component={PasswordForget} />
          <PrivateRoute path='/home' component={Home} />
          <PrivateRoute path='/account' component={Account} />
          <AdminRoute path='/admin' component={Admin} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
