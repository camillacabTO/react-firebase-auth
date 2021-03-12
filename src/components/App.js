import React from 'react'
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

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/pw-forget' component={PasswordForget} />
          <Route path='/home' component={Home} />
          <Route path='/account' component={Account} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
