import React, { Component } from 'react'
import Player from './player';
import './game.css'
class Game extends Component {
  
    constructor(props){
        super(props)
       this.state = {
            arrPlayers: [],
            hideButton: false, //ללחצנים של התחל והוסף שחקן
            seconds:5, //שניות לטיימר
            isVisible:false //יסתיר את הטיימר כשמגיע ל100
        }
        this.currentPlayer=-1; //משתנה ששומר את השחקן הנוכחי(עבור הטיימר)
        this.timer=null;
    }
//מוסיף שחקן למערך ומציג אותו
    addPlayer = () => {
        let arrPlayers = [...this.state.arrPlayers];
        let namep = prompt("הקש שם:")
        arrPlayers.push({ "Name": namep, id: arrPlayers.length == 0 ? 1 : arrPlayers[arrPlayers.length - 1].id + 1, "disabled": true });
        this.setState({ arrPlayers })
    }
    //התחל משחק
    start = () => {
        let arrPlayers = [...this.state.arrPlayers];
        this.timer=setInterval(this.updateTimer,1000);
        arrPlayers[0].disabled = false //התור הראשון של השחקן הראשון
        this.currentPlayer=arrPlayers[0].id; //מעדכן את הקרנט
        this.setState({ arrPlayers, hideButton: true })
    }
    //יציאה
    exit = (id) => {
        let arrPlayers = [...this.state.arrPlayers];
        let index = arrPlayers.findIndex(p => p.id == id)
        arrPlayers.splice(index, 1);
        let hideButton =true
        if (arrPlayers.length == 0)
            hideButton = false//אם אין שחקנים מאפשר את הלחצנים למעלה
        this.setState({ arrPlayers, hideButton,seconds:0,isVisible : false })//עדכון טיימר
    }

    updateTimer=()=>{
        if(this.state.seconds==0)
            {
                clearInterval(this.timer);
                this.setState({seconds:5})
                this.nextPlayer(this.currentPlayer)
            }
        else
            this.setState({seconds:(this.state.seconds-1)}); //קידום טיימר
    }
    
    nextPlayer = (id) => {
        let arrPlayers = [...this.state.arrPlayers];
        let index = arrPlayers.findIndex(p => p.id == id) //מוצא את האינדקס של השחקן
        arrPlayers[index].disabled = true //חוסם את הנוכחי
        if (index < arrPlayers.length - 1){ //לא נגמר המערך
            arrPlayers[index + 1].disabled = false //מאפשר את ההבא
            this.currentPlayer=arrPlayers[index + 1].id; //מעדכן את הקרנט
        } 
        else{ //אם בשחקן האחרון
            arrPlayers[0].disabled = false //מאפשר את הראשון
            this.currentPlayer=arrPlayers[0].id;
        }
        //עדכון טיימר
        clearInterval(this.timer);
        this.setState({seconds:5,arrPlayers})
        this.timer=setInterval(this.updateTimer,1000);
    }
    //אם המספר שווה ל100
    goto100= () => 
    {
           this.setState({isVisible:true,seconds:200})//מסתיר את הטיימר
    }
    //אחרי שחק שוב
    help=()=>
    {
        this.setState({isVisible:false})
    }
    render() {
        return (
            <div className='gamee'>
                <br></br><label className='labels'>מי מגיע ראשון ל-100 הכי מהר? שחקו עכשיו</label><br></br><br></br>
                <hr id='red'></hr>
                <hr id='green'></hr>
                <hr id='yellow'></hr>
                <hr id='blue'></hr>
                <button onClick={() => this.addPlayer()} className='btn' id="add" name="add" hidden={this.state.hideButton}>הוסף שחקן</button>
                <button onClick={() => this.start()} className='btn' id="start" name="start" hidden={this.state.hideButton} disabled={this.state.arrPlayers.length < 2}>התחל</button>
                {!this.state.isVisible&&<p id='timerSeconds' disabled={this.state.isVisible}>{this.state.seconds}</p>}
                {this.state.arrPlayers.map(p => <Player key={p.id} nextPlayer={this.nextPlayer} exit={this.exit} help={this.help} player={p} goto100={this.goto100} />)}
            </div>
        )
    }
}

export default Game
