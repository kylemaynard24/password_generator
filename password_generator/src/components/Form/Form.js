import React from "react";
import Result from "../Result/Result";

/**
 * Character List:
 * alphabeticCharacters: upper or lowercase
 * uppercase Letters: [65 to 90]
 * lowercase Letters: [97 to 122]
 * numbers: [48-57]
 * miscChars: [33, 35-38, 40-47]
 */

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            length: 0,
            alphaChars: false,
            uppercaseLetters: false,
            lowercaseLetters: false,
            numbers: false, 
            nonAlphaNumeric: false
        }
        // this.getFormEntries = this.getFormEntries.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    getFormEntries() {
        // get all entry
        let numChars = document.getElementById("numChars")
        let alphaChars = document.getElementById("alphaChars")
        let upperCase = document.getElementById("upperCase")
        let lowerCase = document.getElementById("lowerCase")
        let nums = document.getElementById("num")
        let nonAlphaNumeric = document.getElementById("nonAlphaNumeric")
        const requestPayload = {
            length:numChars.value,
            alphaChars:alphaChars.checked,
            uppercaseLetters:upperCase.checked,
            lowercaseLetters:lowerCase.checked,
            numbers:nums.checked,
            nonAlphaNumeric:nonAlphaNumeric.checked
        }
        this.setState(st => requestPayload)
        numChars.value = ''
        alphaChars.checked = false
        upperCase.checked = false
        lowerCase.checked = false
        nums.checked = false
        nonAlphaNumeric.checked = false
    }
    
    handleClick(){
        this.getFormEntries()
    }

    render(){
        return(
        <div>
            <section>
                <input type="number" id="numChars" placeholder="How many characters would you like?"></input>
                <div>
                    <h6>
                        Alphabetic Characters?
                        <input type="radio" id="alphaChars"></input>
                    </h6> 
                </div>            
                <div>
                    <h6>
                        UpperCase?
                        <input type="radio" id="upperCase"></input>
                    </h6>
                </div>
                <div>
                    <h6>
                        LowerCase?
                        <input type="radio" id="lowerCase"></input>
                    </h6>
                </div>
                <div>
                    <h6>
                        Numbers?
                        <input type="radio" id="num"></input>               
                    </h6>
                </div>            
                <div>
                    <h6>
                        NonAlphaNumeric?
                        <input type="radio" id ="nonAlphaNumeric"></input>
                    </h6>
                </div>                       
                <button onClick={this.handleClick}>Submit</button>  
            </section>
            {
                this.state.length > 0 && <Result values={this.state}/>
            }
        </div>
        )
    }
}


export default Form;