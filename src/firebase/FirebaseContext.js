import { createContext, useContext } from 'react'
import Firebase from './Firebase'

const FirebaseContext = createContext()
export const useAuth = () => {
  // custom hook that give any component access to the context's value
  return useContext(FirebaseContext)
}
// returns context's value. new Firebase() in this case

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseContext
