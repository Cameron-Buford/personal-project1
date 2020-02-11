import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'


class MyDrills extends Component{
    constructor(){
        super()
        this.state ={
            myDrills: [],
            myDrillsUrl: '/api/myDrills'

        }
    }

    componentDidMount(){
        const {myDrillsUrl} = this.state;
    
        axios.get(myDrillsUrl).then(results => {
            console.log(results)
          this.setState({myDrills: results.data})
        }).catch(err => console.log(err))
        
    
      }

    render(){
        return(
            <div>
                <div>
                {this.state.myDrills.map(myDrill => {
                    return (
                        <div>
                            <h1>{myDrill.name}</h1>
                            <h1>{myDrill.distance}</h1>
                            <h1>{myDrill.shots}</h1>
                            <h1>{myDrill.setups}</h1>
                            <h1>{myDrill.partime}</h1>
                            <h1>{myDrill.score}</h1>
                            <h1>{myDrill.actions}</h1>
                            </div>
                    )
                })}
                </div>
                mydrills
                <button className='createdrillbutton' onClick={() => this.props.history.push('/createdrill')}>create drill </button>
            </div>
        )
    }
}

export default (withRouter(MyDrills))