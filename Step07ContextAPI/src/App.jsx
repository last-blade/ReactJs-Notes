import React, { createContext } from "react";
import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";
import ChildC from "./components/ChildC";

/*
Q-What is context API:- 
The Context API in React is a way to manage state globally in your application, making it easier to pass data through the
component tree without having to pass props down manually at every level. 

Q-When to Use Context API:-
Global State Management: When you need to share data or state between many components, especially deeply nested ones.
Avoid Prop Drilling: When passing props through many layers of components becomes cumbersome.

Q-How to use:-
We need three thing to use context api:- Step-i) create context..... Step-ii) provider..... Step-iii) consumer
*/

// Create the context outside the component
const data = createContext();
const data2 = createContext();
function App() {
  const name = "Prashant";
  const lastName = "Tyagi";
  return (
    <>
      <data.Provider value = {name}>
        <data2.Provider value = {lastName}>
        <ChildC />
        </data2.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export {data, data2};