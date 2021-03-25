import React, { useRef, useState } from 'react'
import { useAuth } from '../firebase/FirebaseContext'

const PasswordChange = () => {
  const newPasswordRef = useRef()
  const newPasswordConfirmRef = useRef()
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const firebase = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    const isInValid =
      newPasswordRef.current.value === '' ||
      newPasswordConfirmRef.current.value === ''

    if (isInValid) {
      setError('Invalid password')
      setMessage(null)
      return
    }

    try {
      await firebase.updateUserPassword(newPasswordRef.current.value)
      setError(null)
      setMessage('Your password has been updated')
      newPasswordRef.current.value = ''
      newPasswordConfirmRef.current.value = ''
    } catch (error) {
      setError(error.message)
      setMessage(null)
    }
  }

  return (
    <div>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='password'
          name='newPassword'
          placeholder='New Password'
          ref={newPasswordRef}
        />
        <input
          type='password'
          name='newPasswordConfirm'
          placeholder='Confirm Password'
          ref={newPasswordConfirmRef}
        />
        <button type='submit'>Submit</button>
      </form>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  )
}

export default PasswordChange
