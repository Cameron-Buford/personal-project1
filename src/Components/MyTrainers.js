import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

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
            <div style= { drillBody}>
                 <div style= {quoteBox}>
                    "Think like men of action.  Act like men of thought. Live life with intensity, and a passion for excellence." General Mattis

                </div>
                <button  onClick={() => this.props.history.push('/mydrills')}>my drills</button>
                <div style= {drilltable}>
                    {this.state.myTrainers.map(myTrainers => {
                        return (
                            <div style= {drillbox}>

                                NAME: <h1 style= {drillLabel}>{myTrainers.name}</h1>
                                TRAINING SKILLS: <h1 style= {drillLabel}>{myTrainers.training_skills}</h1>
                               BIO:  <h1 style= {drillLabel}>{myTrainers.biography}</h1>
                                CREDENTIALS: <h1 style= {drillLabel}>{myTrainers.credentials}</h1>

                                <button onClick= {() => this.removeTrainer(myTrainers.trainer_id)}>Remove from My Trainers</button>
                            
                                
                            </div>
                        )
                    })}
                    
                </div>

                <footer style= {foot} > STAY FROSTY </footer>
        </div>
    )
}
}

export default (withRouter(MyTraining))