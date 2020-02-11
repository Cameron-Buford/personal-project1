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

    render(){
        return(
            <div className= 'drillmain'>
                <div className= 'drilltable'>
                {this.state.drills.map(drill => {
                    return (
                        <div>
                            <h1>{drill.name}</h1>
                            <h1>{drill.distance}</h1>
                            <h1>{drill.shots}</h1>
                            <h1>{drill.setups}</h1>
                            <h1>{drill.partime}</h1>
                            <h1>{drill.score}</h1>
                            <h1>{drill.actions}</h1>
                             <button>add to my drills</button>
                        </div>


                    )
                })}


                </div>
            </div>
        )
    }
}

export default Drills