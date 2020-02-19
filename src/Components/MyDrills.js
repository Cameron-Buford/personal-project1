import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

const drillBody = {
    backgroundColor: '#333333', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

const quoteBox = {
    backgroundColor: 'rgb(223, 206, 206)',
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '25px'

}

const buttonDiv = {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const drilltable = {
    backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
  
  }

  const drillbox = {
      backgroundColor: 'rgb(223, 206, 206)',
      width: '400px',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
      fontSize: '25px',
      fontWeight: 'bold',
      margin: '10px'
      
  }

  const drillLabel = {
      fontSize: '15px',
      margin: '5px'
  }

  const foot = {
    backgroundColor: 'rgb(133, 121, 121)',
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}
class MyDrills extends Component{
    constructor(){
        super()
        this.state ={
            myDrills: [],
            myDrillsUrl: '/api/myDrills',
            score: '' ,
            scoresUrl: `/api/scores`
            

        }
    }

    componentDidMount(){
        
        this.rerenderDrills();
        
    
      }



      rerenderDrills= () => {
          const {myDrillsUrl} = this.state;

          axios.get(myDrillsUrl).then(results => {
              console.log(results)
              this.setState({myDrills: results.data})
          }).catch(err => console.log(err))

      }


      removeDrill = (drill_id) => {

        axios.delete(`/api/remove/${drill_id}`)
        .then(() => {
            this.rerenderDrills()

        }).catch(err => console.log(err))
      }




      updateScore = (drill_id) => {
          console.log(drill_id)
          axios.put(`/api/edit/${drill_id}`, {score: this.state.score})
            
          .then(() => {
              this.rerenderDrills()
              
          }).catch(err => console.log(err))
      }

      handleChange = ({name, value}) => this.setState({[name]: value})


      filterByScore = (drills) => {
          console.log(drills)
        for(let i = 0; i <drills.length; i++){
          for(let j = drills.length-1; j > i; j--){
            if(drills[i].drill_id === drills[j].drill_id){
              drills.splice(drills[j], 1)
            }
          }
        }
        console.log(drills)
        return drills
      }
      



    render(){
        return(
            <div style= { drillBody}>
                <div style= {quoteBox}>
                    "Think like men of action.  Act like men of thought. Live life with intensity, and a passion for excellence." General Mattis

                </div>

                <div style= {buttonDiv}>
                    <button  onClick={() => this.props.history.push('/mytrainers')}>my trainers</button>
                    <button className='createdrillbutton' onClick={() => this.props.history.push('/createdrill')}>create drill </button>
                </div>

                <div style= {drilltable}>
                {this.filterByScore(this.state.myDrills).map(myDrills => {
                    console.log(myDrills)
                    return (
                        <div style= {drillbox}>
                            <h1 style= {drillLabel}>{myDrills.name}</h1>
                            <h1 style= {drillLabel}>{myDrills.distance}</h1>
                            <h1 style= {drillLabel}>{myDrills.shots}</h1>
                            <h1 style= {drillLabel}>{myDrills.setups}</h1>
                            <h1 style= {drillLabel}>{myDrills.partime}</h1>
                            <h1 style= {drillLabel}>{myDrills.score}</h1>
                            <h1 style= {drillLabel}>{myDrills.actions}</h1>

                            <h1 style= {drillLabel}>{myDrills.score}</h1>

                            <button onClick= {() => this.props.history.push(`/stats/${myDrills.mydrill_id}`)}>MY STATS </button>

                           

                                <button onClick= {() => this.updateScore(myDrills.drill_id)}>Update your Score</button>
                                <input 
                                    name= 'score'
                                    placeholder= 'score/time'
                                    onChange= {(e) => this.handleChange(e.target)}
                            
                                />

                                <button onClick= {() => this.removeDrill(myDrills.drill_id)}>Remove From My Drills </button>
                        </div>
                    )
                })}
                </div>

                <div class='footer' style= {foot} > STAY FROSTY </div>
                
                
            </div>
        )
    }
}

export default (withRouter(MyDrills))