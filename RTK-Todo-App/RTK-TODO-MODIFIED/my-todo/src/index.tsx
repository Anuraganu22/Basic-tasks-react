
import './index.css';
import App from './app/App';
import  store  from '../src/app/store';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>,
);