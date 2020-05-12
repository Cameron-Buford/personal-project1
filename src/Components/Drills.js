import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'
import React, {Component} from 'react'


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


const Drills = ({history}) => {
    const {drills} = useAxios("drill")
    console.log(drills)

    const goToDrill = (drill_id) => {
        axios.get(`/api/drill/${drill_id}`)
        .then(() => {
            history.push(`/drill/${drill_id}`)
        })
    }  
        return(
            <div style= { drillBody} >
                {/* <div style= {space}></div> */}
                <div style= {drilltable} className= 'drillTable'>
                  <div style= {quoteBox}>
                  “performing the commonplace under uncommonplace conditions.”― Steven Pressfield, Gates of Fire
                </div>
                <div>
                    {
                    drills.map(drill => {
                        return (
                            <ul> 
                                <li>
                                    <button 
                                        style= {buttonStyleOne} 
                                        onClick = {() => goToDrill(drill.drill_id)}>
                                            {drill.name}
                                    </button>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <Footer/>
                </div>
            </div>
        )
}
export default Drills