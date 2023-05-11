import React, { Component } from 'react'
import './board.css'

class Show extends Component {
  render() {
    return (
      <div className='display'>
        {
            this.props.arrLetters.map(letter=>(
            <label style={{"color":letter.color,"font-size":letter.size+"px"}} >{letter.char}</label>
        ))}
      </div>
    )
  }
}

export default Show
