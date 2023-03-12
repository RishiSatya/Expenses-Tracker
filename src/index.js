import { SpeechProvider } from '@speechly/react-client';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from './context/context';
import './index.css';

ReactDom.render(
    <SpeechProvider appId="5a962ddc-b171-4e0e-98af-bc2a53bc8054" language="en-US">
        <Provider >
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);