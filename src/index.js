import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RouteMap from './router';

ReactDOM.render(<RouteMap />, document.getElementById('root'));
registerServiceWorker();
