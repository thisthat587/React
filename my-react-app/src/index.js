import React from 'react';
import ReactDOM from 'react-dom/client'; //implementation of react on web
// if react-native instead of react-dom it will be for mobile apps 

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />
);

