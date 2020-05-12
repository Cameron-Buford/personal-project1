import React, {Component} from 'react'
import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'

//container styling

    //background
    //dimensions
    //flex positioning
    //other positioning
    //font
    const drillBody = {
        //background
        backgroundColor: '#E3E3E3',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        //dimensions
        height: '100vh', 
        width: '100%',
        //flex positioning
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        //other positioning
        //font
    }
    
    const quoteBox = {
        //background
        backgroundColor: '#E3E3E3',
        //dimensions
        width: '100%',
        height: '100px',
        //flex positioning
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        //other positioning
        //font
        fontSize: '25px'
    }
    
    const drilltable = {
        //background
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'transparent',
        //dimensions
        height: '100%',
        width: '100%',
        //flex positioning
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
        //other positioning
        //font
      }
    
    const buttonStyleOne = {
        //background
        backgroundColor: 'transparent',
        //dimensions
        //flex positioning
        //other positioning
        //font
        color: 'rgb(29, 77, 29)',
        fontWeight: 'bold',
        // other
        border: 'none',
        borderRadius: '5px',
    }

const SingleDrill = ({history, match}) => {
    const {drill} = useAxios('drill', match.params.drill_id)
    console.log(drill)
    
    const pushDrill = (drill_id) => {
      axios.post('/api/post', {drill_id})
          .then(() => {
              history.push('/mydrills')
            })
    }
    return (
        <div>
        <div style= {quoteBox}>
                  “performing the commonplace under uncommonplace conditions.”― Steven Pressfield, Gates of Fire
                </div>
            <div>
                DRILL NAME: <div > {drill.name}</div>
                DISTANCE:<div > {drill.distance} Yards</div>
                SHOTS:<div > {drill.shots}</div>
                SETUPS: <div > {drill.setup}</div>
                PARTIME: <div > {drill.partime} Seconds</div>
                SCORE: <div > {drill.score} Seconds/Points</div>
                ACTIONS:<div > {drill.actions}</div>
                <button onClick = {() => 
                    pushDrill(drill.drill_id)}>add to MY DRILLS</button>
            </div>
            </div>
            )
}
export default SingleDrill