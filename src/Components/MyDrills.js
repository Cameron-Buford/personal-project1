import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

const drillBody = {
    backgroundColor: '#333333', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

const quoteBox = {
    backgroundColor: 'rgb(223, 206, 206)',
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '25px'

}

const buttonDiv = {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const drilltable = {
    backgroundImage: 'url(https://lh3.googleusercontent.com/43Ja1_yrILlTSGp28sukJPbWwuAVbrN9ul-qjei5IzLow14_jqS4BVrzH6ngxfZkhR95eI7ENvRbANKhwPRFoaOKpeinmEsW3h2Xt6I9-kHn3pIabgkONTnGinXWvKqdVWzEIa7iGfTnuxTUR_2EEYQ6rpKnQZzBMlvX6PV50-IBH97hjBbiZ2BMqDWkJoY7DOWyaf69oR-_41lQ6pWnEDDhELfZi5QJcLh2ymefav9uHoS06JG2oqOXw6THf0elyHQRFvSx7krB7bxsSXxuVl5S4W19-RQIgZDnJkLj5MEoGn1ArjLNNQd7YRf8jyVKFuaA42B55d78xtI49oKh3s0CPwaAg3A0f0hOveI10ZckiTeGl6JE8DVt18cNpUBBdLzQ7t6ppY7dI8o0zxsnnNEqeNKKIvFwDlfPhoeo2iHGWxn6HuXBeyorxLEQE26TWflGw5VWssq360kYmw_mVRZRNDZB7w5B3OpxJmABGhBbfNYddoYMttIO8P1-Vs70jW6kmaYBoHtBBu5nsPb-f6OKtK4wpF4ifl6jW_LWw1bbFSHgjl4UlqkBspdLfK55-9DyWYii-6Vyk1lz0hKOnFl2DIcg0kLy0XtoaJo0VEd4pRP3gHsEWfId7aXQwX3rGLZHMOks_kXgcgur95X_ELaVrpPSdKk4JZuhuf8Qc_86q-mt8mkhDoM=w1136-h640-no)',
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

  const drillbox = {
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
    backgroundColor: 'rgba(117, 111, 111, 0.5)',
    borderRadius: '15px',
      
  }

  const drillLabel = {
      fontSize: '15px',
      margin: '5px'
  }

  const foot = {
    backgroundColor: 'rgb(133, 121, 121)',
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}
class MyDrills extends Component{
    constructor(){
        super()
        this.state ={
            myDrills: [],
            myDrillsUrl: '/api/myDrills',
            score: '' ,
            scoresUrl: `/api/scores`
            

        }
    }

    componentDidMount(){
        
        this.rerenderDrills();
        
    
      }



      rerenderDrills= () => {
          const {myDrillsUrl} = this.state;

          axios.get(myDrillsUrl).then(results => {
              console.log(results)
              this.setState({myDrills: results.data})
          }).catch(err => console.log(err))

      }


      removeDrill = (drill_id) => {

        axios.delete(`/api/remove/${drill_id}`)
        .then(() => {
            this.rerenderDrills()

        }).catch(err => console.log(err))
      }




      updateScore = (drill_id) => {
          console.log(drill_id)
          axios.put(`/api/edit/${drill_id}`, {score: this.state.score})
            
          .then(() => {
              this.rerenderDrills()
              
          }).catch(err => console.log(err))
      }

      handleChange = ({name, value}) => this.setState({[name]: value})


      filterByScore = (drills) => {
          console.log(drills)
        for(let i = 0; i <drills.length; i++){
          for(let j = drills.length-1; j > i; j--){
            if(drills[i].drill_id === drills[j].drill_id){
              drills.splice(drills[j], 1)
            }
          }
        }
        console.log(drills)
        return drills
      }
      



    render(){
        return(
            <div style= { drillBody}>
                <div style= {quoteBox}>
                    "Good luck is for novices, bad luck is for everyone.  Bank on skill, you control it." Mike Pannone

                </div>

                <div style= {buttonDiv}>
                    <button  onClick={() => this.props.history.push('/mytrainers')}>my trainers</button>
                    <button className='createdrillbutton' onClick={() => this.props.history.push('/createdrill')}>create drill </button>
                </div>

                <div style= {drilltable}>
                {this.filterByScore(this.state.myDrills).map(myDrills => {
                    console.log(myDrills)
                    return (
                        <div style= {drillbox}>
                            <h1 style= {drillLabel}>{myDrills.name}</h1>
                            <h1 style= {drillLabel}>{myDrills.distance}</h1>
                            <h1 style= {drillLabel}>{myDrills.shots}</h1>
                            <h1 style= {drillLabel}>{myDrills.setups}</h1>
                            <h1 style= {drillLabel}>{myDrills.partime}</h1>
                            <h1 style= {drillLabel}>{myDrills.score}</h1>
                            <h1 style= {drillLabel}>{myDrills.actions}</h1>

                            <h1 style= {drillLabel}>{myDrills.score}</h1>

                            <button onClick= {() => this.props.history.push(`/stats/${myDrills.mydrill_id}`)}>MY STATS </button>

                           

                                <button onClick= {() => this.updateScore(myDrills.drill_id)}>Update your Score</button>
                                <input 
                                    name= 'score'
                                    placeholder= 'score/time'
                                    onChange= {(e) => this.handleChange(e.target)}
                            
                                />

                                <button onClick= {() => this.removeDrill(myDrills.drill_id)}>Remove From My Drills </button>
                        </div>
                    )
                })}
                </div>

                <div class='footer' style= {foot} > STAY FROSTY </div>
                
                
            </div>
        )
    }
}

export default (withRouter(MyDrills))