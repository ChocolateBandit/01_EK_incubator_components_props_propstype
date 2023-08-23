import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
        <AppTitle />
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Accordion />
    </div>
  );
}

function AppTitle() {
    return <h1>My app components_props_propstype</h1>
}


export default App;
