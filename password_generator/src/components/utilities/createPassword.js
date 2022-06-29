/**
 * Character List:
 * alphabeticCharacters: upper or lowercase
 * uppercase Letters: [65 to 90]
 * lowercase Letters: [97 to 122]
 * numbers: [48-57]
 * miscChars: [33, 35-38, 40-47]
 */

import {checkUniquePassword} from './dbEntry'

 const createPassword = (props) => {
    
    let charValues = []
    const {length, uppercaseLetters, lowercaseLetters, numbers, nonAlphaNumeric} = props.values;
    if(uppercaseLetters){
        for(let i = 65; i <= 90; i++){
            charValues.push(i)
        }
    }
    if(lowercaseLetters){
        for(let i = 97; i <=122; i++){
            charValues.push(i)
        }
    }
    if(numbers){
        for(let i = 48; i <= 57; i++){
            charValues.push(i)
        }
    }
    if(nonAlphaNumeric){
        charValues.push(33);
        for(let i = 35; i <= 38; i++){
            charValues.push(i)
        }
        for(let i = 40; i <= 47; i++){
            charValues.push(i)
        }
    }
    let resultingPassword = ''
    for(let i = 0; i< length; i++){
        resultingPassword += String.fromCharCode(charValues[Math.floor(Math.random() * charValues.length)]);
    }

    return resultingPassword;
}

export default createPassword;