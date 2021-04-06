import React, { useState } from 'react'
import { useAuth } from '../firebase/FirebaseContext'

const SignInGoogle = ({ history }) => {
  const [error, setError] = useState(null)
  const firebase = useAuth()
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { user } = await firebase.signInWithGoogle()
      await firebase
        .user(user.uid)
        .set({ email: user.email, username: user.displayName })
      setError(null)
      history.push('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'> Sign In with Google </button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default SignInGoogle
