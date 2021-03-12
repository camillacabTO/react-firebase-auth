import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App'
import Firebase from './firebase/Firebase'
import firebaseContext from './firebase/context'

ReactDOM.render(
  <firebaseContext.Provider value={new Firebase()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </firebaseContext.Provider>,
  document.getElementById('root')
)
