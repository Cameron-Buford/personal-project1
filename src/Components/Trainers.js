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
        const {trainerUrl} = this.state;


        axios.get(trainerUrl).then(results => {
            this.setState({trainers: results.data})
          }).catch(err => console.log(err));
    }

    render(){
        return(
            <div>Trainers</div>
        )
    }
}

export default Trainers