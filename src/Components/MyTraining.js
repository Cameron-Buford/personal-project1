import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

const dashboardStyle = {
    backgroundColor: '#333333', height: '100vh', width: '100%'
  
  }
class MyTraining extends Component{
    constructor(){
        super()
        this.state ={
            

        }
    }



    render(){
        return(
            <div styles={dashboardStyle}>my training
                <div>
                    <button className='mydrillsbutton' onClick={() => this.props.history.push('/mydrills')}>my drills</button>
                    <button className='mytrainersbutton' onClick={() => this.props.history.push('/mytrainers')}>my trainers</button>
                </div>
            </div>
        )
    }
}

export default (withRouter(MyTraining))