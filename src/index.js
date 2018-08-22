import { BrowserProtocol, queryMiddleware } from 'farce';
import {
  createFarceRouter,
  createRender,
} from 'found';

import { Relay } from 'react-relay';

// ###  Relay Classic
import { Resolver } from 'found-relay/lib/classic';

// ###  Relay Modern
// import { Resolver } from 'found-relay';

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import environment from './Environment';
import routes from './Routes/initialRoute';

import './styles/index.css';

// const mountNode = document.createElement('div');
// document.body.appendChild(mountNode);


// let environment = new Relay.Environment(environmen);

const Router = createFarceRouter({  // eslint-disable-line
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares: [queryMiddleware],
    routeConfig: routes,
    render: createRender({}),
});

ReactDOM.render(<Router resolver={new Resolver(environment)} />,
              document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
