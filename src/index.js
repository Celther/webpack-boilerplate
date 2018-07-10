import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';

import Hello from './Hello';

const notUsed = "Where's my error?"

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
