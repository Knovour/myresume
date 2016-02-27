import React from 'react'
import { render } from 'react-dom'
import { Container } from 'elemental'

import App from './containers/App'

render(
  <Container className='Container'><App /></Container>,
  document.getElementById('main')
)
