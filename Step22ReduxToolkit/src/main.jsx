import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import {store} from "./redux/store.js"
/*
Step:2 Sabse pehle "Provider and store" ko import karenge see above, and then 'App' component ko 'Provide' mein wrap kar denge.
      And 'App' ko wrap isliye kiya hai jisse ki main apne saare components or files mein "store" ko access kar paaun.
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
