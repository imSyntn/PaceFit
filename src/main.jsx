import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SmoothScroll from './Utils/SmoothScroll.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SmoothScroll>
      <Provider store={store}>
        <App />
      </Provider>
    </SmoothScroll>
  // </React.StrictMode>,
)
