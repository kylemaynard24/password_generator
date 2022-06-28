import React from "react";


const createPassword = () => {

}

const Result = (props) => {
    const {length, alphaChars, uppercaseLetters, lowercaseLetters, numbers, nonAlphaNumeric} = props.values;
    console.log(props)
    console.log(length)
    const getPasword = {}
    return(
        <div>
            <h3>Length of {length}</h3>
        </div>
    )
}

export default Result;