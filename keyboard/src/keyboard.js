import React, { Component } from 'react'

class Keyboard extends Component {
    arrLetters = {
        "lower": ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        "upper": ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        "hebrew": ['ת', 'ש', 'ר','ק','ץ','צ','ף','פ','ע','ס','ן','נ','ם','מ','ל','ך','כ','י','ט','ח','ז','ו','ה','ד','ג','ב','א'],
        "numbers": ['1','2','3','4','5','6','7','8','9','0','.',',','?','!','@','#','*','/','-','[',']','$','&']
    }
    render() {
        return (
            <>
                <div className='keyboard1'>
                   {this.arrLetters[this.props.language].map(letter=>(
                       <input key={letter} type="button" className='btn' onClick={()=>this.props.addLetter(letter)}   value={letter}/>
        ))}
                </div>
            </>
        )
    }
}

export default Keyboard
