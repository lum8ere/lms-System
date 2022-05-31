import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ObjectStore from './store/ObjectStore';
import UserStore from './store/UserStore';
import SubObject from './store/SubObjectStore';

export const Context = createContext(null);


ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    object: new ObjectStore(),
    subobject: new SubObject(),
  }}>
     <App />
  </Context.Provider>,
  document.getElementById('root')
)
