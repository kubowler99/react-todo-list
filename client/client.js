import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'

render(
  // define the encompasing component,
  // DOM element we want to mount it to
  <App/>,
  document.getElementById('app')
)
