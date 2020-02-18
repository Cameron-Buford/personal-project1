import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

const myDrillStyle = {
    backgroundColor: 'grey', 
    height: '100vh', 
    maxWidth: '400px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  
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
        for(let i = 0; i <drills.length; i++){
          for(let j = drills.length-1; j > i; j--){
            if(drills[i].drill_id === drills[j].drill_id){
              drills.splice(drills[j], 1)
            }
          }
        }
        return drills
      }
      



    render(){
        return(
            <div styles={myDrillStyle}>
                <button className='createdrillbutton' onClick={() => this.props.history.push('/createdrill')}>create drill </button>
                <div styles={myDrillStyle}>
                {this.filterByScore(this.state.myDrills).map(myDrills => {
                    console.log(myDrills)
                    return (
                        <div styles={myDrillStyle}>
                            <h1 styles= {{backgroundColor: 'green'}}>{myDrills.name}</h1>
                            <h1>{myDrills.distance}</h1>
                            <h1>{myDrills.shots}</h1>
                            <h1>{myDrills.setups}</h1>
                            <h1>{myDrills.partime}</h1>
                            <h1>{myDrills.score}</h1>
                            <h1>{myDrills.actions}</h1>

                            <h1>{myDrills.score}</h1>

                           

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
                
                
            </div>
        )
    }
}

export default (withRouter(MyDrills))