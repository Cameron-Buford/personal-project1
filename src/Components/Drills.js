import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'
import React, {Component} from 'react'


const drillBody = {
    // backgroundColor: '#333333', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

const space = {
    backgroundColor: 'black',
    width: '100%',
    height: '5px'
}

const quoteBox = {
    backgroundColor: 'rgba(117, 111, 111, 0.95)',
    // backgroundColor: 'rgb(223, 206, 206)',
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '25px'

}

const drilltable = {
    backgroundImage: 'url(https://lh3.googleusercontent.com/VBFu9g-AK_BrV2oEY_j7QEoXRmKkw3nVF-CYP4FFsblO-BBrPRiHIyylhvLZdfM9EkFQ5BiiqHDWdbrm9KYjqr7PLty3b2hfCuVOERKBpIciEhX_oS6kPbLjgqSKHUa8TAUZCKyzQjVWxaU_cb6a1FfMTQBiqH4SyWEBF02SQKNs6YPCgDt9_ojWJUMyDsTDvLXuDQ5Hdk0b26hsKfj5_1oNfq6Xp8fnzqYtjjWk8BgG2DmoI082cZBk3JSnckukG36dF7v1x6hVSKWw98QmBBu0gA7CBem4pjX5g42WsbM0oAm1Uvm99kyx8kBz-Nz99_ERgOkD6pUEB1rliURXCHtwMeK230akVtE3m0GxItssAoxLDk9tK6RI6BA1c1WlALFRQw2C7trxeG_qQr3_RFmu5ZfQd8XrXnOeQukc46fv6nNqDeP9Og9-q5xHDr-olpSV3DrXhvParm_R40iYznYQc5oUeXMoNma0k0zMqhnVeb8G-5F0wk-OHxipba0afEFABa3qp9HFtLiNRys2y9t5G7MNU-TuClOs-hF6mLzj5wAyhXBxDQ-KyDiOGhiqkeSeJ16fTfM5syQft09RqtoqhlbwTZysgdU9AFxb7qcU3CJvTqAjKFQuPn0VAjH69I-72oKBl1Iptw8gHBHXCfFi1OsOVO6WWV-0aUBIQhbuLPsh0KUu6L0t=s640-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundColor: 'transparent',
    // backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
  
  }

  const tableTwo = {
      backgroundColor:'transparent',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
      
  }

  const drillbox = {
    //   backgroundColor: 'rgb(223, 206, 206)',
      backgroundColor: 'transparent',
      width: '400px',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
      fontSize: '25px',
      fontWeight: 'bold',
      margin: '10px',
      backgroundColor: 'rgba(172, 154, 123, 0.7)',
      borderRadius: '15px',
    //   textDecoration: 'underline'
      
  }

  const drillLabel = {
      fontSize: '15px',
      margin: '5px',
      
  }

const buttonStyle = {
    backgroundColor: '#FF5A5F',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'
}


const Drills = ({history}) => {
    const [drills] = useAxios("/api/drills")




      const goToDrill = (drill_id) => {

        axios.get('/api/singledrill', {drill_id})
        .then(() => {
            history.push('/singledrill')
        })
          

        //   axios.post('/api/post', {drill_id})
        //   .then(() => {
        //       history.push('/mydrills')
        //     })


      }




    
        
        return(
            <div style= { drillBody} >
                <div style= {space}></div>
                <div style= {drilltable} className= 'drillTable'>
                  <div style= {quoteBox}>
                  “performing the commonplace under uncommonplace conditions.”― Steven Pressfield, Gates of Fire

                </div>


                <div>
                    {
                    drills.map(drill => {
                        return (
                            <ul> 
                                <button onClick = {() => goToDrill(drill.drill_id)}>
                                    {drill.name}
                                </button>
                            </ul>
                        )
                    })}
                </div>

-

                {/* <div style= {tableTwo} className = 'bodyBackground'>
                    
                        {
                        
                        drills.map(drill => {
                            return (
                        
                                <div style= {drillbox}>
                                    DRILL NAME: <div style= {drillLabel}> {drill.name}</div>
                                    DISTANCE:<div style= {drillLabel}> {drill.distance} Yards</div>
                                    SHOTS:<div style= {drillLabel}> {drill.shots}</div>
                                    SETUPS: <div style= {drillLabel}> {drill.setup}</div>
                                    PARTIME: <div style= {drillLabel}> {drill.partime} Seconds</div>
                                    SCORE: <div style= {drillLabel}> {drill.score} Seconds/Points</div>
                                    ACTIONS:<div style= {drillLabel}> {drill.actions}</div>
                                    <button style= {buttonStyle} onClick = {() => 
                                        
                                        pushDrill(drill.drill_id)}>add to MY DRILLS</button>
                                </div>


                                    )
                        })}


                    </div> */}


                <Footer/>

                </div>

            </div>
        )
    
}

export default Drills