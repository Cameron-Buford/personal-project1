import React, {useEffect} from 'react'
import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'
import'../App.css'
import {getUser} from '../Duxx/reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


const MySingleDrill = ({history, match, user}) => {
    const {mySingleDrill} = useAxios('mydrill', match.params.mydrill_id)
    console.log(mySingleDrill)
    return(
        <div 
        // style= {drillBody}
        >
            <div 
            // style= {quoteBox}
            >
                  “performing the commonplace under uncommonplace conditions.”― Steven Pressfield, Gates of Fire
            </div>
            {/* Drill Name  */}
            <div 
                // style= {singleDrillData}
            >
                <div 
                    // style= {drillName}
                > 
                        {mySingleDrill.name}
                </div>

            {/* drill distance  */}
                <div 
                // style= {drillDataStyle}
                >
                    <div 
                    // style= {drillDataLabels}
                    >
                        DISTANCE:
                    </div>
                    <div 
                    // style= {drillData}
                    > 
                        {mySingleDrill.distance} 
                        -Yards
                    </div>

            {/* Shot count  */}
                    <div 
                    // style= {drillDataLabels}
                    >
                        SHOTS:
                    </div>
                    <div 
                    // style= {drillData}
                    > 
                        {mySingleDrill.shots}
                    </div>

            {/* mySingleDrill setup  */}
                    <div 
                    // style= {drillDataLabels}
                    >
                        SETUPS: 
                    </div>
                    <div 
                    // style= {drillData}
                    > 
                        {mySingleDrill.setup}
                    </div>

            {/* partime  */}
                    <div 
                    // style= {drillDataLabels}
                    >
                        PARTIME: 
                    </div>
                    <div 
                    // style= {drillData}
                    > 
                        {mySingleDrill.partime} 
                        Seconds
                    </div>

            {/* score  */}
                    <div 
                    // style= {drillDataLabels}
                    >
                        SCORE: 
                    </div>
                    <div 
                    // style= {drillData}
                    > 
                        {mySingleDrill.score} 
                        Seconds/Points
                    </div>

            {/* actions on  */}
                    <div 
                    // style= {drillDataLabels}
                    >
                        ACTIONS:
                    </div>
                    <div 
                    // style= {drillData}
                    > 
                        {mySingleDrill.actions}
                    </div>
                    <div 
                    // style= {singleDrillButtonContainer}
                    >
                        
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
function mapStateToProps(state) {
    return {user: state.reducer.user};
    
}

export default connect(mapStateToProps, {getUser})(withRouter(MySingleDrill))