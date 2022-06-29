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
            activated: false,
            length: 0,
            uppercaseLetters: false,
            lowercaseLetters: false,
            numbers: false, 
            nonAlphaNumeric: false,
            goodLength: false
        }
        // this.getFormEntries = this.getFormEntries.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    getFormEntries() {
        // get all entry
        let numChars = document.getElementById("numChars")
        let upperCase = document.getElementById("upperCase")
        let lowerCase = document.getElementById("lowerCase")
        let nums = document.getElementById("num")
        let nonAlphaNumeric = document.getElementById("nonAlphaNumeric")
        const requestPayload = {
            activated:true,
            length:numChars.value,
            uppercaseLetters:upperCase.checked,
            lowercaseLetters:lowerCase.checked,
            numbers:nums.checked,
            nonAlphaNumeric:nonAlphaNumeric.checked,
            goodLength: (numChars.value > 0 && numChars.value < 30)
        }
        this.setState(st => requestPayload)
        numChars.value = ''
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
                this.state.goodLength && <Result values={this.state}/>
            }
        </div>
        )
    }
}


export default Form;