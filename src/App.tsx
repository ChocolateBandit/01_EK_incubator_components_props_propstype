import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
        <AppTitle title={"Title with props PageTitlePropsType"}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Accordion titleValue={'Menu'} collapsed={false}/>
        <Accordion titleValue={'Users'} collapsed={true}/>
        <Rating value={0}/>
        <Rating value={2}/>
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}
function AppTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
