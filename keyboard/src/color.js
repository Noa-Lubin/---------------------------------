import React, { Component } from 'react'

class Color extends Component {
    arrColors = ['red', 'green', 'yellow','blue','gray','pink'] 
  render() {
    return (
      <div >
        {this.arrColors.map(color => (
        <input key={color} style={{color:color, borderColor:color}}  type="button" className='btn color' onClick={() => this.props.changeColor(color)} value={color} />
        ))} </div>
    )
  }
}

export default Color
