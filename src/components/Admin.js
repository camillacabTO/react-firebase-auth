import React, { useEffect, useState } from 'react'
import { useAuth } from '../firebase/FirebaseContext'
import UserList from './UserList'

const Admin = () => {
  const firebase = useAuth()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    firebase.users().on('value', snapshot => {
      const data = snapshot.val()
      const usersData = Object.keys(data).map(key => ({
        ...data[key],
        id: key
      }))
      setUsers(usersData)
    })
    setLoading(false)
    return () => {
      firebase.users().off()
    }
  }, [])

  return (
    <div>
      <h1>ADMIN</h1>
      {loading ? <p>Loading...</p> : <UserList users={users} />}
    </div>
  )
}
export default Admin
