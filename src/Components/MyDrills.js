import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'


class MyDrills extends Component{
    constructor(){
        super()
        this.state ={
            myDrillsUrl: '/api/myDrills'

        }
    }

    componentDidMount(){
        const {myDrillsUrl} = this.state;
    
        axios.get(myDrillsUrl).then(results => {
          this.setState({drills: results.data})
        }).catch(err => console.log(err))
        
    
      }

    render(){
        return(
            <div>mydrills
                <button className='createdrillbutton' onClick={() => this.props.history.push('/createdrill')}>create drill </button>
            </div>
        )
    }
}

export default (withRouter(MyDrills))