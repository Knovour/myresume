import React from 'react'
import { render } from 'react-dom'
import { Container } from 'elemental'

import App from './containers/App'

if(location.protocol !== 'https:' && !location.host.includes('localhost'))
  location.protocol = 'https:';

render(
  <Container className='Container'><App /></Container>,
  document.getElementById('main')
)
