import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App provider='https://www.broadbandmap.gov/developer/'
                     endpoint='https://www.broadbandmap.gov/broadbandmap/demographic/2014/coordinates'/>, document.getElementById('root'));
registerServiceWorker();
