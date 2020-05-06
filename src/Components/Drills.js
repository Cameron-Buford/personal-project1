import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'
import React, {Component} from 'react'


const drillBody = {
    backgroundColor: 'green', 
    height: '100vh', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

const space = {
    backgroundColor: 'transparent',
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
    // backgroundImage: 'url(https://lh3.googleusercontent.com/VBFu9g-AK_BrV2oEY_j7QEoXRmKkw3nVF-CYP4FFsblO-BBrPRiHIyylhvLZdfM9EkFQ5BiiqHDWdbrm9KYjqr7PLty3b2hfCuVOERKBpIciEhX_oS6kPbLjgqSKHUa8TAUZCKyzQjVWxaU_cb6a1FfMTQBiqH4SyWEBF02SQKNs6YPCgDt9_ojWJUMyDsTDvLXuDQ5Hdk0b26hsKfj5_1oNfq6Xp8fnzqYtjjWk8BgG2DmoI082cZBk3JSnckukG36dF7v1x6hVSKWw98QmBBu0gA7CBem4pjX5g42WsbM0oAm1Uvm99kyx8kBz-Nz99_ERgOkD6pUEB1rliURXCHtwMeK230akVtE3m0GxItssAoxLDk9tK6RI6BA1c1WlALFRQw2C7trxeG_qQr3_RFmu5ZfQd8XrXnOeQukc46fv6nNqDeP9Og9-q5xHDr-olpSV3DrXhvParm_R40iYznYQc5oUeXMoNma0k0zMqhnVeb8G-5F0wk-OHxipba0afEFABa3qp9HFtLiNRys2y9t5G7MNU-TuClOs-hF6mLzj5wAyhXBxDQ-KyDiOGhiqkeSeJ16fTfM5syQft09RqtoqhlbwTZysgdU9AFxb7qcU3CJvTqAjKFQuPn0VAjH69I-72oKBl1Iptw8gHBHXCfFi1OsOVO6WWV-0aUBIQhbuLPsh0KUu6L0t=s640-no)',
    // backgroundColor: '#333333',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap'
  }

const buttonStyle = {
    backgroundColor: '#FF5A5F',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'
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
                <Footer/>
                </div>
            </div>
        )
}
export default Drills