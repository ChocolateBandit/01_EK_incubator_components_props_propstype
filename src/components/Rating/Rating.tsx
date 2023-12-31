import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3
}
export function Rating(props: RatingPropsType) {
    debugger
    if (props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );

}

type StarPropsType = {
    selected: boolean
}
function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }

}

export default Rating;