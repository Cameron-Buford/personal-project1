import React, {useEffect} from 'react'
import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'
import'../App.css'
import {getUser} from '../Duxx/reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

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

const aboutBox = {
    //background
    // backgroundColor: 'green',
    backgroundColor: 'transparent',
    //dimensions
    width: '80%',
    height: '100vh',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    //other positioning
    //font
    fontSize: '25px'
}

const aboutTitle = {
    //background
    // backgroundColor: 'green',
    backgroundColor: 'transparent',
    //dimensions
    
    //flex positioning
    
    //other positioning
    //font
    fontSize: '55px'

}

const joinNowButtonAbout = {
    /* background */
    backgroundColor: '#CD2027',
    /* dimensions */
    height: '60px',
    width: '200px',
    /* flex positioning */
    /* other positioning */
    /* font */
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25px',
    /* other */
    border: 'none',
    cursor: 'pointer'
    
   }

const About = ({history, match, getUser, user}) => {
    
    
    return (
        <div style= {drillBody}>
            <div style= {quoteBox}>
                  “performing the commonplace under uncommonplace conditions.”― Steven Pressfield, Gates of Fire
            </div>
            <div style= {aboutBox}>
                <div style= {aboutTitle}>ABOUT TRAINING HQ</div>
                <div>
                Here at the Training HQ, we understand the need for responsible and proficient handling and usage of firearms.  You may be a civilian, a Law Enforcement Officer or a Soldier; in whatever space you work, it is important that you are a master at your craft.  As an individual who carries or depends on a firearm to protect yourself or others, it is your responsibility to constantly improve your skill set and techniques with your weapon.  The Training HQ provides you with the resources to develop your shooting skills through tracking your scores on industry and combat standard drills.  We provide benchmark scores for each drill that are drawn from various elite combat units and competition professionals.  Join now and begin tracking your progress on the range and become the best shooter that you can be.  Perfect your craft through proficient practice.
                </div>
                <div>
                    {user.user_id
                        ?
                        <div></div>
                        :
                
                        <button
                            style= {joinNowButtonAbout}
                            onClick= {() => history.push('/register')}>
                                JOIN NOW
                        </button>
                    }
                </div>
            </div>
            
            <Footer/>
        </div>
            )
}
function mapStateToProps(state) {
    return {user: state.reducer.user};
    
}

export default connect(mapStateToProps, {getUser})(withRouter(About))