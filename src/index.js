import DevTools from 'mobx-react-devtools';
import GlobalContainer from './components/GlobalContainer';
import GlobalContainerModel from './models/GlobalContainerModel';
import React from 'react';

import { render } from 'react-dom';

const store = new GlobalContainerModel();

render(
  <div>
    <DevTools />
    <GlobalContainer store={store} />
  </div>,
  document.getElementById('root')
);

// playing around in the console
window.store = store;
