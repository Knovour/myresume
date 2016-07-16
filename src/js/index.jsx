import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Resume from './containers/Resume'

if(location.protocol !== 'https:' && !location.host.includes('localhost'))
  location.protocol = 'https';

render(
  <MuiThemeProvider><Resume /></MuiThemeProvider>,
  document.getElementById('main')
)
