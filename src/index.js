import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './assets/globalStyles'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <GlobalStyle />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
