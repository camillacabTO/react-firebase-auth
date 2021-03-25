import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { useAuth } from '../firebase/FirebaseContext'

const SignIn = ({ history }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState(null)
  const firebase = useAuth()
  console.log('Rendered')

  async function handleSubmit(e) {
    e.preventDefault()

    const isInValid =
      passwordRef.current.value === '' || emailRef.current.value === ''

    if (isInValid) {
      setError('Invalid inputs')
      return
    }

    try {
      await firebase.signInUser(
        emailRef.current.value,
        passwordRef.current.value
      )
      setError(null)
      emailRef.current.value = ''
      passwordRef.current.value = ''
      history.push('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='E-mail' name='email' ref={emailRef} />
        <input
          type='password'
          name='password'
          placeholder='Password'
          ref={passwordRef}
        />
        <button type='submit'>Submit</button>
      </form>
      {error && <p>{error}</p>}
      <Link to='/signup'>Don't have an account? SignUp now!</Link>
      <Link to='/pw-forget'>Forgot Password?</Link>
    </div>
  )
}

export default SignIn
