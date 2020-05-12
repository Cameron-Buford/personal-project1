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
        // justifyContent: 'center',
        flexDirection: 'column'
        //other positioning
        //font
    }
    
    const quoteBox = {
        //background
        // backgroundColor: 'green',
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
    
    const singleDrillData = {
        //background
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '100%',
        // backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
        backgroundColor: 'grey',
        // backgroundColor: 'transparent',
        //dimensions
        height: '100%',
        width: '90vw',
        //flex positioning
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
        //other positioning
        //font
      }

    const drillDataStyle = {
        //background
        // backgroundColor: 'yellow',
        //dimensions
        height: '500px',
        //flex positioning
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column'
        //other positioning
        //font

    } 

    const drillName = {
    //background
        // backgroundColor: 'green',
    //dimensions
    //flex positioning
    //other positioning
    //font
        fontSize: '55px',
        fontWeight: 'bold'
        
    }

    const drillDataLabels = {
    //background
        // backgroundColor: 'green',
    //dimensions
        width: '100%',
    //flex positioning
    //other positioning
    //font
        fontSize: '20px',
        fontWeight: 'bold'
    }
    
    const addDrillButton = {
        //background
        backgroundColor: 'rgb(27, 221, 27)',
        //dimensions
        //flex positioning
        //other positioning
        //font
        color: 'black',
        fontWeight: 'bold',
        // other
        border: 'none',
        // borderRadius: '5px',
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
        <div style= {drillBody}>
            <div style= {quoteBox}>
                  “performing the commonplace under uncommonplace conditions.”― Steven Pressfield, Gates of Fire
            </div>
            {/* Drill Name  */}
            <div style= {singleDrillData}>
                <div 
                    style= {drillName}> 
                        {drill.name}
                </div>

            {/* drill distance  */}
                <div style= {drillDataStyle}>
                    <div style= {drillDataLabels}>
                        DISTANCE:
                    </div>
                    <div > 
                        {drill.distance} 
                        Yards
                    </div>

            {/* Shot count  */}
                    <div style= {drillDataLabels}>
                        SHOTS:
                    </div>
                    <div > 
                        {drill.shots}
                    </div>

            {/* drill setup  */}
                    <div style= {drillDataLabels}>
                        SETUPS: 
                    </div>
                    <div > 
                        {drill.setup}
                    </div>

            {/* partime  */}
                    <div style= {drillDataLabels}>
                        PARTIME: 
                    </div>
                    <div > 
                        {drill.partime} 
                        Seconds
                    </div>

            {/* score  */}
                    <div style= {drillDataLabels}>
                        SCORE: 
                    </div>
                    <div > 
                        {drill.score} 
                        Seconds/Points
                    </div>

            {/* actions on  */}
                    <div style= {drillDataLabels}>
                        ACTIONS:
                    </div>
                    <div > 
                        {drill.actions}
                    </div>
                    <button 
                        style= {addDrillButton}
                        onClick = {() => pushDrill(drill.drill_id)}>
                            Add to MY DRILLS
                    </button>
                </div>
            </div>
        </div>
            )
}
export default SingleDrill