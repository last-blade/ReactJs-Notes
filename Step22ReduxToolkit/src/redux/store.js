/*
Step:1 Create a store: 
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        
    },
});

Step:2 See this step in 'main.jsx' file.
Step:3 Create slice, see this step in feature folder
Step:4 jo bhi slice create kari hai usko hum store.js mein import kar lenge and then reducer mein add kar denge (counter: counterReducer, see below) 
*/



import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice.js"

export const store = configureStore({
    reducer: {
        counter: counterReducer // "counter" isliye likha hai kyoki humne 'counterSlice.js in features folder' mein "counter" name diya tha
    },
})