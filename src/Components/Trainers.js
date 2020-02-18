import React, {Component} from 'react'
import axios from 'axios'


const trainerMain = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',  
    width: '100%'
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
            <div className= 'trainermain'>
                <div className= 'trainersTable'>
                    {this.state.trainers.map(trainers => {
                        return (
                            <div>
                                NAME <h1>{trainers.name}</h1>
                                TRAINING SKILLS <h1>{trainers.training_skills}</h1>
                               BIO  <h1>{trainers.biography}</h1>
                                CREDENTIALS <h1>{trainers.credentials}</h1>
                            
                                <button onClick = {() => this.pushTrainer(trainers.trainer_id)}>add to my Trainers</button>
                            </div>
                        )
                    })}
                    
                </div>
                
            </div>
        )
    }
}

export default Trainers