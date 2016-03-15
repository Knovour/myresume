import React from 'react'
import { render } from 'react-dom'

import Resume from './containers/Resume'

if(location.protocol !== 'https:' && !location.host.includes('localhost'))
  location.protocol = 'https';

render(
  <Resume />,
  document.getElementById('main')
)
