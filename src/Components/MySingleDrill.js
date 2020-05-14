import React, {useEffect} from 'react'
import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'
import'../App.css'
import {getUser} from '../Duxx/reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


const MySingleDrill = ({history, match, user}) => {
    const {mydrill} = useAxios('mydrill', match.params.mydrill_id)
    console.log(mydrill)


    

    // removeDrill = (drill_id) => {

    //     axios.delete(`/api/remove/${drill_id}`)
    //     .then(() => {
    //         this.rerenderDrills()

    //     }).catch(err => console.log(err))
    //   }

    //   updateScore = (drill_id) => {
    //       console.log(drill_id)
    //       axios.put(`/api/edit/${drill_id}`, {score: this.state.score})
            
    //       .then(() => {
    //           this.rerenderDrills()
              
    //       }).catch(err => console.log(err))
    //   }

    //   handleChange = ({name, value}) => this.setState({[name]: value})

    //   filterByScore = (drills) => {
    //       console.log(drills)
    //     for(let i = 0; i <drills.length; i++){
    //       for(let j = drills.length-1; j > i; j--){
    //         if(drills[i].drill_id === drills[j].drill_id){
    //           drills.splice(drills[j], 1)
    //         }
    //       }
    //     }
    //     console.log(drills)
    //     return drills
    //   }
      







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
                        {mydrill.name}
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
                        {mydrill.distance} 
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
                        {mydrill.shots}
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
                        {mydrill.setup}
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
                        {mydrill.partime} 
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
                        {mydrill.score} 
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
                        {mydrill.actions}
                    </div>
                    <div 
                    // style= {singleDrillButtonContainer}
                    >
                        
                        <button
                            className= 'backToDrillsButton'
                            onClick = {() => history.push('/mydrills')}>
                                Back To My Drills
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