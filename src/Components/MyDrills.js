import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'


class MyDrills extends Component{
    constructor(){
        super()
        this.state ={
            myDrills: [],
            myDrillsUrl: '/api/myDrills',
            scores: [],
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




      updateScore = (mydrill_id) => {
          console.log(mydrill_id)
          axios.put(`/api/edit/${mydrill_id}`)
            
          .then(results => {
              this.setState({score: results.data})
          }).catch(err => console.log(err))
      }

      handleChange = ({name, value}) => this.setState({[name]: value})





    render(){
        return(
            <div>
                <button className='createdrillbutton' onClick={() => this.props.history.push('/createdrill')}>create drill </button>
                <div>
                {this.state.myDrills.map(myDrills => {
                    return (
                        <div>
                            <h1>{myDrills.name}</h1>
                            <h1>{myDrills.distance}</h1>
                            <h1>{myDrills.shots}</h1>
                            <h1>{myDrills.setups}</h1>
                            <h1>{myDrills.partime}</h1>
                            <h1>{myDrills.score}</h1>
                            <h1>{myDrills.actions}</h1>

                            <h1>{myDrills.score}</h1>

                           

                                <button onClick= {() => this.updateScore(myDrills.mydrill_id)}>Update your Score</button>
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
                
                
            </div>
        )
    }
}

export default (withRouter(MyDrills))