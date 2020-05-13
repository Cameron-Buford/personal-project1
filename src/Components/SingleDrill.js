import React, {useEffect} from 'react'
import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'
import'../App.css'



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
        height: '100%', 
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
        // backgroundColor: 'grey',
        backgroundColor: 'transparent',
        //dimensions
        height: '100%',
        width: '90vw',
        //flex positioning
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column'
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

    const drillData = {
    //background
        // backgroundColor: 'green',
    //dimensions
        width: '80%',
    //flex positioning
    //other positioning
    //font
        fontSize: '15px',
        fontWeight: 'bold'

    }

    const singleDrillButtonContainer = {
    //background
        // backgroundColor: 'green',
    //dimensions
        height: '100px',
        width: '80%',
    //flex positioning
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    //other positioning
    //font
    }
    
    const addDrillButton = {
        //background
        backgroundColor: '#CD2027',
        // backgroundColor: 'transparent',
        // backgroundColor: 'rgb(27, 221, 27)',
        //dimensions
        height: '50px',
        //flex positioning
        //other positioning
        //font
        color: 'white',
        fontWeight: 'bold',
        // other
        border: 'none',
        // borderColor: 'rgb(27, 221, 27)',
        cursor: 'pointer'
        
    }

    const backToDrillsButton = {
        //background
        backgroundColor: 'black',
        // backgroundColor: 'transparent',
        // backgroundColor: 'rgb(27, 221, 27)',
        //dimensions
        height: '50px',
        //flex positioning
        //other positioning
        //font
        color: 'white',
        fontWeight: 'bold',
        // other
        border: 'none',
        // borderColor: 'rgb(27, 221, 27)',
        cursor: 'pointer'
        
    }
      
    
   
            

const SingleDrill = ({history, match}) => {
    const {drill} = useAxios('drill', match.params.drill_id)
    console.log(drill)
    // const {user} = useAxios()
    
    // const {user} = useEffect()
    
    const pushDrill = (drill_id) => {
        // if(!user.user_id){
        //     history.push('/auth')
        // }else{
      axios.post('/api/post', {drill_id})
          .then(() => {
              history.push('/mydrills')
            })
        // }
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
                    <div style= {drillData}> 
                        {drill.distance} 
                        -Yards
                    </div>

            {/* Shot count  */}
                    <div style= {drillDataLabels}>
                        SHOTS:
                    </div>
                    <div style= {drillData}> 
                        {drill.shots}
                    </div>

            {/* drill setup  */}
                    <div style= {drillDataLabels}>
                        SETUPS: 
                    </div>
                    <div style= {drillData}> 
                        {drill.setup}
                    </div>

            {/* partime  */}
                    <div style= {drillDataLabels}>
                        PARTIME: 
                    </div>
                    <div style= {drillData}> 
                        {drill.partime} 
                        Seconds
                    </div>

            {/* score  */}
                    <div style= {drillDataLabels}>
                        SCORE: 
                    </div>
                    <div style= {drillData}> 
                        {drill.score} 
                        Seconds/Points
                    </div>

            {/* actions on  */}
                    <div style= {drillDataLabels}>
                        ACTIONS:
                    </div>
                    <div style= {drillData}> 
                        {drill.actions}
                    </div>
                    <div style= {singleDrillButtonContainer}>
                        <button 
                            className= 'addDrillButton'
                            // style= {addDrillButton}
                            onClick = {() => pushDrill(drill.drill_id)}>
                                Add to MY DRILLS
                        </button>
                        <button
                            className= 'backToDrillsButton'
                            // style= {backToDrillsButton}
                            onClick = {() => history.push('/drills')}>
                                Back To Drills
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
            )
}
export default SingleDrill