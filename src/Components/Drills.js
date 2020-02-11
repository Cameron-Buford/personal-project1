import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class Drills extends Component{
    constructor(){
        super()
        this.state ={
            drills: [],
            drillUrl: '/api/drills'

        }
    }

    componentDidMount(){
        const {drillUrl} = this.state;
    
        axios.get(drillUrl).then(results => {
          this.setState({drills: results.data})
        }).catch(err => console.log(err))
        
    
      }

    render(){
        return(
            <div>drills</div>
        )
    }
}

export default Drills