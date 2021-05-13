import React from 'react'

export default function FunctionalComponent(props) {
    var x = "harinath Reddy";
    var age = 26;
    var place = "hyderabad";

    return (
        <div>
            <p>
                name :- x
            </p>
            <p>{props.name.name}</p>
            <p> age :-  {props.name.age}</p>
            <p> place of living:- {props.name.place}</p>
        </div>
    )
}
