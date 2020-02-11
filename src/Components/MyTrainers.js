import React, {Component} from 'react'
import axios from 'axios'


class MyTraining extends Component{
    constructor(){
        super()
        this.state ={
            myTrainersUrl: '/api/myTrainers'

        }
    }

    componentDidMount(){
        const {myTrainersUrl} = this.state;
    
        axios.get(myTrainersUrl).then(results => {
          this.setState({trainers: results.data})
        }).catch(err => console.log(err))
        
    
      }

    render(){
        return(
            <div>mytrainers</div>
        )
    }
}

export default MyTraining