import React from "react";

export function Rating() {
    return (
        <>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={true}/>
        </>
    )
}



function Star (props: any) {
    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star</span>
    }

}

export default Rating;