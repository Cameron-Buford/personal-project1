import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


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

      pushDrill = () => {
          const {name, distance, shots, setup, partime, score, actions} = this.state;

          axios.post('/api/post', {name, distance, shots, setup, partime, score, actions})
          .then(() => {
              this.props.history.push('/mydrills')
            })


      }




    render(){
        const {name, distance, shots, setup, partime, score, actions} = this.state
        return(
            <div className= 'drillmain'>
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
                             <button onClick = {() => this.pushDrill({name, distance, shots, setup, partime, score, actions})}>add to my drills</button>
                        </div>


                    )
                })}


                </div>
            </div>
        )
    }
}

export default Drills