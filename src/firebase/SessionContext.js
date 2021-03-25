import { createContext, useContext, useState } from 'react'

const SessionContext = createContext()
export const useSession = () => {
  return useContext(SessionContext)
}

export const SessionProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  )

  const value = {
    authUser,
    setAuthUser
  }

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  )
}

export default SessionContext
