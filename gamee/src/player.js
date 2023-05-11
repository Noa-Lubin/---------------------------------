import React, { Component } from 'react'

class Player extends Component {
  constructor() {
    super()
    this.operators = ["+1", "-1", "*2", "/2"]
    this.state = {
      steps: 0,
      num: Math.floor(Math.random() * 99) + 1,
      arrScore: [],
      hiddenButton: false
    }
  }
  Operator = (op) => {
    let { steps, num, arrScore, hiddenButton } = this.state
    switch (op) {
      case "+1": num++; break;
      case "-1": num--; break;
      case "*2": num = num * 2; break;
      case "/2": num = Math.floor(num / 2); break;
    }
    steps++;
    if (num === 100) { //נצחוןןןן
      arrScore.push(this.state.steps);
      hiddenButton = true
      this.props.goto100();
    }
    this.setState({ num, steps, arrScore, hiddenButton })
    this.props.nextPlayer(this.props.player.id) //שחקן הבא
  }

  playAgain = () => {
    this.props.help() //מעדכאן את הויזיבל של הטיימר 
    this.setState({ steps: 0, hiddenButton: false, num: Math.floor(Math.random() * 99) + 1 })
  }

  render() {
    return (
      <>
        <div className='gamee'>
          <hr id='black'></hr>
          <label className='labels'>שם: {this.props.player.Name}</label><br></br>
          <label className='labels'>מספר: {this.state.num}</label><br></br>
          <label className='labels'>צעדים: {this.state.steps}</label><br></br>
          <div className='labels'>scores: {this.state.arrScore.map(x => <label>{x + " "}</label>)}</div><br></br>
          <div>
            {this.operators.map(op => <button key={op} className='btnOp' disabled={this.props.player.disabled} onClick={() => this.Operator(op)} name={op} value={op}>{op}</button>)}
          </div>
          {this.state.hiddenButton ? <div>
            <button className='btn' onClick={() => this.props.exit(this.props.player.id)} name="exit">יציאה</button>
            <button className='btn' onClick={this.playAgain} name="add">משחק נוסף</button>
          </div> : null}
        </div>
      </>)
  }
}

export default Player
