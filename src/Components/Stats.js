import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'
import {withRouter} from 'react-router-dom'



const stats = {
    labels: [

    ],
    datasets: [

        {
            label: 'Score Stats',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 2,
            data:[ 

            ]
        }
    ]
}


class Stats extends Component{
    constructor(){
        super()
        this.state = {
            stats: []

        }
    }

    componentDidMount = () => {

        axios.get(`/api/stats/${this.props.match.params.mydrill_id}`).then(results => {
            console.log(results)
            stats.datasets.data= results.data
            this.setState({stats: results.data})
        }).catch(err => console.log(err))
    }




    render(){
        return (
            <div>Stats
                <div>
                    {this.state.stats.map(stats => {
                        return (
                            <div>
                                <h1>{stats.score}</h1>
                            </div>
                        )
                    })}
                </div>
                <Line 
                data= {stats}
                options= {{
                    title: {
                        display: true,
                        text: 'scores',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
                />
            </div>
        )
    }
}

export default (withRouter(Stats)) 