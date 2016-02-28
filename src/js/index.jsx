import React from 'react'
import { render } from 'react-dom'

import App from './containers/App'

if(location.protocol !== 'https:' && !location.host.includes('localhost'))
  location.protocol = 'https:';

render(
  <App />,
  document.getElementById('main')
)
