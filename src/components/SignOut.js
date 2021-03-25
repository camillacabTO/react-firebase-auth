import React from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../firebase/FirebaseContext'
import { useSession } from '../firebase/SessionContext'

const SignOut = () => {
  const firebase = useAuth()
  const history = useHistory()
  const { setAuthUser } = useSession()

  async function handleClick() {
    try {
      await firebase.signOut()
      setAuthUser(null)
      history.push('/')
    } catch (error) {}
  }
  return (
    <div>
      <button onClick={handleClick}>Sign Out</button>
    </div>
  )
}

export default SignOut
