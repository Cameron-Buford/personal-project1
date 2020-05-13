import React, {useEffect} from 'react'
import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'
import'../App.css'


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
    //other positioning
    //font
    fontSize: '25px'
}

const About = ({history, match}) => {
    
    
    return (
        <div style= {drillBody}>
            <div style= {quoteBox}>
                  “performing the commonplace under uncommonplace conditions.”― Steven Pressfield, Gates of Fire
            </div>
            <div style= {aboutBox}>
                <div>ABOUT TRAINING HQ</div>
                <div>
                    
                </div>
            </div>
            
            <Footer/>
        </div>
            )
}
export default About