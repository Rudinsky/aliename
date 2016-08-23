import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Footer from './footer'

render(
    <div>
        <App />
        <Footer />
    </div>,
    document.getElementById('root')
);
