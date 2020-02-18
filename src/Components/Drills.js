import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


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
            <div style= { drillBody} >
                  <div style= {quoteBox}>
                    "Think like men of action.  Act like men of thought. Live life with intensity, and a passion for excellence." General Mattis

                </div>
                <div style= {drilltable}>
                {this.state.drills.map(drill => {
                    return (
                        
                        <div style= {drillbox}>
                            DRILL NAME: <div style= {drillLabel}> {drill.name}</div>
                            DISTANCE:<div style= {drillLabel}> {drill.distance}</div>
                            SHOTS:<div style= {drillLabel}> {drill.shots}</div>
                            SETUPS: <div style= {drillLabel}> {drill.setup}</div>
                            PARTIME: <div style= {drillLabel}> {drill.partime}</div>
                            SCORE: <div style= {drillLabel}> {drill.score}</div>
                            ACTIONS:<div style= {drillLabel}> {drill.actions}</div>
                             <button onClick = {() => this.pushDrill(drill.drill_id)}>add to my drills</button>
                        </div>


                    )
                })}


                </div>

                <footer style= {foot} > STAY FROSTY </footer>


            </div>
        )
    }
}

export default Drills