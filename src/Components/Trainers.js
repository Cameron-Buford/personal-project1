import React, {Component} from 'react'
import axios from 'axios'


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

    render(){
        return(
            <div className= 'trainersmain'>
                <div className= 'trainersTable'>
                    {this.state.trainers.map(trainers => {
                        return (
                            <div>
                                <h1>{trainers.name}</h1>
                                <h1>{trainers.training_skills}</h1>
                                <h1>{trainers.biography}</h1>
                                <h1>{trainers.credentials}</h1>
                            
                                <button>Add to My Trainers</button>
                            </div>
                        )
                    })}
                    
                </div>
                
            </div>
        )
    }
}

export default Trainers