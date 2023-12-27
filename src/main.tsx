import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Toaster } from 'sonner'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Toaster closeButton />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
