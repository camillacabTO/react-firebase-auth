import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App'
import { FirebaseProvider } from './firebase/FirebaseContext'
import { SessionProvider } from './firebase/SessionContext'

ReactDOM.render(
  <FirebaseProvider>
    <SessionProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SessionProvider>
  </FirebaseProvider>,
  document.getElementById('root')
)
