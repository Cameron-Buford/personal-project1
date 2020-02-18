import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const dashboardStyle = {
    backgroundColor: '#333333', height: '100vh', width: '100%'
  
  }
class Drills extends Component{
    constructor(){
        super()
        this.state ={
            drills: [],
            drillUrl: '/api/drills'
            

        }
    }

    componentDidMount(){
        const {drillUrl} = this.state;
    
        axios.get(drillUrl).then(results => {
            console.log(results)
          this.setState({drills: results.data})
        }).catch(err => console.log(err))
        
    
      }

      pushDrill = (drill_id) => {
          

          axios.post('/api/post', {drill_id})
          .then(() => {
              this.props.history.push('/mydrills')
            })


      }




    render(){
        const {name, distance, shots, setup, partime, score, actions} = this.state
        return(
            <div className= 'drillmain' styles={dashboardStyle}>
                <div className= 'drilltable'>
                {this.state.drills.map(drill => {
                    return (
                        <div>
                            Drill Name <h1>{drill.name}</h1>
                            DISTANCE <h1>{drill.distance}</h1>
                            SHOTS <h1>{drill.shots}</h1>
                            SETUPS <h1>{drill.setup}</h1>
                            PARTIME <h1>{drill.partime}</h1>
                            SCORE <h1>{drill.score}</h1>
                            ACTIONS <h1>{drill.actions}</h1>
                             <button onClick = {() => this.pushDrill(drill.drill_id)}>add to my drills</button>
                        </div>


                    )
                })}


                </div>
            </div>
        )
    }
}

export default Drills