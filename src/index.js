import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from "./components/App";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { store } from './store'
import { Provider } from 'react-redux'

const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}

const Root = () => (
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
  </Provider>)
  
ReactDOM.render(<Root/>, document.getElementById("root"));
