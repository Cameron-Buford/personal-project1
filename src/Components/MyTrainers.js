import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class MyTraining extends Component{
    constructor(){
        super()
        this.state ={
            myTrainersUrl: '/api/myTrainers',
            myTrainers: []

        }
    }

    componentDidMount(){
        
        this.rerender()
        
    
      }


      rerender= () => {
        const {myTrainersUrl} = this.state;
            
        axios.get(myTrainersUrl).then(results => {
            console.log(results)
          this.setState({myTrainers: results.data})
        }).catch(err => console.log(err))
      }


      removeTrainer = (trainer_id) => {

          axios.delete(`/api/removeTrainer/${trainer_id}`)
          .then(() => {
            this.rerender()
          }).catch(err => console.log(err))
      }




      

    render(){
        
        console.log(this.state.myTrainers)
        return(
            <div>
                <div className= 'trainersTable'>
                    {this.state.myTrainers.map(myTrainers => {
                        return (
                            <div>

                                NAME <h1>{myTrainers.name}</h1>
                                TRAINING SKILLS <h1>{myTrainers.training_skills}</h1>
                               BIO  <h1>{myTrainers.biography}</h1>
                                CREDENTIALS <h1>{myTrainers.credentials}</h1>

                                <button onClick= {() => this.removeTrainer(myTrainers.trainer_id)}>Remove from My Trainers</button>
                            
                                
                            </div>
                        )
                    })}
                    
                </div>
        </div>
    )
}
}

export default (withRouter(MyTraining))