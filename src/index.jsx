import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import '../style/index.scss'

document.addEventListener('DOMContentLoaded', function() {
  const appLoadingDOM = document.querySelector('.app-loading');
  appLoadingDOM.remove()
});

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
)
