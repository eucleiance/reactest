import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

// ReactDOM.render(<App />, document.getElementById('root'));    // Old way of rendering the DOM
ReactDOM.createRoot(document.getElementById('root')).render(  // React 18 (new) way of rendering the DOM
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
