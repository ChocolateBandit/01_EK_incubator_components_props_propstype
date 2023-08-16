import React from 'react';
import logo from './logo.svg';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";

function App() {
  return (
    <div className="App">
        <AppTitle />
        <Rating />
        <Accordion />
    </div>
  );
}

function AppTitle() {
    return <h1>My app components_props_propstype</h1>
}
function Rating() {
  return (
      <>
          <Star />
          <Star />
          <Star />
      </>
  )
}

function Star () {
    return <div>Star</div>
}

function Accordion () {
    return <div>
        <AccordionTitle />
        <AccordionBody />
    </div>
}

function AccordionTitle () {
    return (
        <>
            <h3>Menu</h3>
        </>
    )
}

function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default App;
