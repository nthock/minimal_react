import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();