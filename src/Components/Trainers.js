import React, {Component} from 'react'
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

const drilltable = {
    backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
  
  }

  const drillbox = {
      backgroundColor: 'rgb(223, 206, 206)',
      width: '400px',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
      fontSize: '25px',
      fontWeight: 'bold',
      margin: '10px'
      
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

class Trainers extends Component{
    constructor(){
        super()
        this.state ={
            trainers: [],
            trainerUrl: '/api/trainers',

        }
    }

    componentDidMount(){
        
        axios.get('/api/trainers').then(results => {
            console.log(results)
            this.setState({trainers: results.data})
        }).catch(err => console.log(err));
        
    }



    pushTrainer = (trainer_id) => {
          

        axios.post('/api/postTrainer', {trainer_id})
        .then(() => {
            this.props.history.push('/myTrainers')
          })


    }


    render(){
        return(
            <div style= { drillBody}>
                <div style= {quoteBox}>
                    "Think like men of action.  Act like men of thought. Live life with intensity, and a passion for excellence." General Mattis

                </div>
                <div style= {drilltable}>
                    {this.state.trainers.map(trainers => {
                        return (
                            <div style= {drillbox}>
                                NAME: <h1 style= {drillLabel}>{trainers.name}</h1>
                                TRAINING SKILLS: <h1 style= {drillLabel}>{trainers.training_skills}</h1>
                                BIO:  <h1 style= {drillLabel}>{trainers.biography}</h1>
                                CREDENTIALS: <h1 style= {drillLabel}>{trainers.credentials}</h1>
                            
                                <button onClick = {() => this.pushTrainer(trainers.trainer_id)}>add to my Trainers</button>
                            </div>
                        )
                    })}
                    
                </div>

                <div class='footer' style= {foot} > STAY FROSTY </div>
                
            </div>
        )
    }
}

export default Trainers