import React from "react";
import createPassword from "../utilities/createPassword";


const Result = (props) => {
    const {length, uppercaseLetters, lowercaseLetters, numbers, nonAlphaNumeric} = props.values;
    // create password from props:
    const getPasword = createPassword(props);
    
    return(
        <div>
            <h3>{getPasword}</h3>
        </div>
    )
}

export default Result;