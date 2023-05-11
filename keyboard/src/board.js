import React, { Component } from 'react'
import Color from './color'
import Keyboard from './keyboard'
import Language from './language'
import Show from './show'
import Size from './size'
import Specials from './specials'
import './board.css'

class Board extends Component {
    constructor() {
        super()
        this.color = "white"
        this.size = "18"
        this.state = {
            arrLetters: [],
            prevArr: [],
            language: "hebrew"
        }
    }
    //פונקציה שכל פונ פה במחלקה תקרא לה בתחילתה והיא תשמור את מערך הפלט ללא הפעולה שנעשתה כעת
    keepArr = () => {
        const prevArr = [...this.state.prevArr];
        this.state.prevArr.forEach(ch => {
            prevArr.pop(ch)
        });
        this.state.arrLetters.forEach(ch => {
            prevArr.push(ch)
        });
        this.setState({ prevArr })
    }

    addLetter = (ch) => {
        let arrLetters = [...this.state.arrLetters];
        arrLetters.push({ "char": ch, "color": this.color, "size": this.size });
        this.setState({ arrLetters })
    }
    changeSize = (size) => {
        this.size = size;
    }
    changeColor = (color) => {
        this.color = color;
    }
    changeLanguage = (language) => {
        this.setState({ language })
    }
    clearAll = () => {
        this.keepArr(this.state.arrLetters)//זימון שמירת מערך לפני הפעולה הנוכחית
        this.setState({ arrLetters: [] })
    }
    delete = () => {
        this.keepArr(this.state.arrLetters)
        let arrLetters = [...this.state.arrLetters];
        arrLetters.pop();
        this.setState({ arrLetters })
    }
    upperAll = () => {
        this.keepArr(this.state.arrLetters)
        const tempArr = []
        this.state.arrLetters.forEach(ch => {
            tempArr.push({ ...ch, char: ch.char.toUpperCase() })
        });
        this.setState({ arrLetters: tempArr })
    }
    lowerAll = () => {
        this.keepArr(this.state.arrLetters)
        const tempArr = []
        this.state.arrLetters.forEach(ch => {
            tempArr.push({ ...ch, char: ch.char.toLowerCase() })
        });
        this.setState({ arrLetters: tempArr })
    }
    space = () => {
        this.keepArr(this.state.arrLetters)
        let arrLetters = [...this.state.arrLetters];
        arrLetters.push({ "char": ' ', "color": null, "size": null })
        this.setState({ arrLetters })
    }
    undoLast = (tempArr) => {
        let arrLetters = [...this.state.arrLetters];
        let prevArr = [...this.state.prevArr];
        arrLetters = []
        prevArr.forEach(ch => {
            arrLetters.push(ch)
        });
        this.setState({ arrLetters })
    }

    changeSpecial = (special) => {
        switch (special) {
            case 'clear': this.clearAll(); break;
            case 'backspace': this.delete(); break;
            case 'upper': this.upperAll(); break;
            case 'lower': this.lowerAll(); break;
            case 'space': this.space(); break;
            case 'undo-last': this.undoLast(); break;
            case 'enter': this.nextLine(); break;
        }
    }
    render() {
        return (
            <div>
                <Show arrLetters={this.state.arrLetters} />
                <div id='buttons'>
                    <Keyboard language={this.state.language} addLetter={this.addLetter} />
                    <Specials changeSpecial={this.changeSpecial} />
                    <Language changeLanguage={this.changeLanguage} /><br></br><br></br>
                    <Size changeSize={this.changeSize} />
                    <Color changeColor={this.changeColor} />

                </div>
            </div>
        )
    }
}

export default Board
