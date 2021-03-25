import React from 'react'

const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map(user => (
          <li>
            <span>
              <strong>ID: </strong> {user.id}
            </span>
            <span>
              <strong> &nbsp; Email: </strong> {user.email}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
