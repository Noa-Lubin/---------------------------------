import React, { Component } from 'react'

class Specials extends Component {
    arrSpecials=['clear','backspace', 'upper', 'lower','space','undo-last']
    render() {
    return (
      <>
        {this.arrSpecials.map(special => (
        <input key={special} type="button" className={special=="space"?"btn special space":'btn special'}  onClick={() => this.props.changeSpecial(special)} value={special=="space"?" ":special} />
        ))} </>
    )
  }
}

export default Specials
