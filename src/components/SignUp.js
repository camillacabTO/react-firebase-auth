import React, { useRef, useState } from 'react'
import { useAuth } from '../firebase/FirebaseContext'

const SignUp = ({ history }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const isAdminRef = useRef(false)
  const [error, setError] = useState(null)
  const firebase = useAuth()
  console.log('Rendered')

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(isAdminRef.current.checked)

    const isInValid =
      passwordRef.current.value !== confirmPasswordRef.current.value ||
      passwordRef.current.value === '' ||
      emailRef.current.value === ''

    if (isInValid) {
      setError('Invalid inputs')
      return
    }

    try {
      const user = await firebase.signUpUser(
        emailRef.current.value,
        passwordRef.current.value
      )
      await firebase
        .user(user.user.uid)
        .set({ email: user.user.email, isAdmin: isAdminRef.current.checked })

      await firebase.sendEmailVerification()

      setError(null)
      emailRef.current.value = ''
      passwordRef.current.value = ''
      confirmPasswordRef.current.value = ''
      isAdminRef.current.checked = false
      history.push('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='E-mail' name='email' ref={emailRef} />
        <input
          type='password'
          name='password'
          placeholder='Password'
          ref={passwordRef}
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm'
          ref={confirmPasswordRef}
        />
        <label>
          Is Admin?
          <input type='checkbox' ref={isAdminRef} />
        </label>
        <button type='submit'>Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default SignUp
