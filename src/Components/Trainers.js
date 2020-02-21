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
    backgroundImage: 'url(https://lh3.googleusercontent.com/FHImgwwqRycE2knaGoSQOowYo12YCX4okPgzRqjGg6D1BWgYjzEOZpeVIvnWtwZYihIq7yQzEpQbErv7-Holq5ia1QHOQPyAG4qBOfW8p4fzyZz_gLYN6bUufO3eiwXfs9PhW6vCgblZsS1NqxGbu-mgHHMbi9EeSO--qsOryGU_XWwJ6SR4peKxBKopr7ZwVGFZIyoxzDa5nUYWmLbYn-oQ-7txWh6sV62iF2YaAdFzPiQe8iaDRJBayh4ZKnFybCBkL7WviC5VdHmgAjp0M0zG3m14FCt3J0FeqF5rnqF2B_hdQo1ToKrnN4SVwLxr64fp4nSQAzOjRwzn9hI6raxQeJPzoMGpKPPZXyjzRprDyQsTiuLRGrl8_sFzU_YPqO8Uth11ZkxP7FHiwkzwo8acXZaDuhmfrJd8u08DRSYNGMnMQYeuZOY78U2NxOOnTtmnqAw2O-3iNOQgTQiguunY-ZogenO6LAk791JKhPnOyXb8vL2loiDXN6Cy7LUF3fzEaQD0UnDpNOp-wAE5RO_cOcuM5bJSi-e4CxDrDxd3rLkwR0jGlIU0RaRT62eQJ9aXUx2rRvJAWZmEQZpj4I9NM6WvIwXcPX5pXrWyF1YFUgRjkNJFeonDrc9U-zhGGecTAPfwYelBYT6OgQ9XInoezTzz01w3Q6o68YXcttvCSO6rWXBAnbI=w1169-h657-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    // backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
  
  }

  const drillbox = {
    //   backgroundColor: 'rgb(223, 206, 206)',
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
      borderRadius: '15px'
      
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
                “As all born teachers, he was primarily a student.”― Steven Pressfield, Gates of Fire

                </div>
                <div style= {drilltable} className= 'trainerTable'>
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