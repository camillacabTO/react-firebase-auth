import React, { useContext } from 'react'
import firebaseContext from '../firebase/context'

const Home = () => {
  const bla = useContext(firebaseContext)
  return <div>{bla.test}</div>
}

export default Home
