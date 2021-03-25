import React, { useRef, useState } from 'react'
import { useAuth } from '../firebase/FirebaseContext'

const PasswordForget = () => {
  const emailRef = useRef()
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const firebase = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    const isInValid = emailRef.current.value === ''

    if (isInValid) {
      setError('Invalid email')
      setMessage(null)
      return
    }

    try {
      await firebase.resetUserPassword(emailRef.current.value)
      setError(null)
      setMessage('Your password has been reset. Please check your inbox')
      emailRef.current.value = ''
    } catch (error) {
      setError(error.message)
      setMessage(null)
    }
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='E-mail' name='email' ref={emailRef} />
        <button type='submit'>Submit</button>
      </form>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  )
}
export default PasswordForget
