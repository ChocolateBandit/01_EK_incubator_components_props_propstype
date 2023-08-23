import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody collapsed={props.collapsed}/>
    </div>
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: any) {
    return (
        <>
            <h3>---{props.title}---</h3>
        </>
    )
}

type AccordionBodyProps = {
    collapsed: boolean;
};

function AccordionBody({collapsed}: AccordionBodyProps) {
    if (collapsed) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
    return null;

}

export default Accordion;