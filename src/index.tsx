import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/fonts/stylesheet.css'
import App from './App'
import Providers from './Providers'
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
