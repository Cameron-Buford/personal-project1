import React, { Component } from 'react'
import Chart from "chart.js";

import axios from 'axios'

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        axios.get(`/api/stats/${this.props.match.params.mydrill_id}`).then(results => {
            console.log(results)
            
            const data = results.data.map(element => element.score)
            new Chart(myChartRef, {
                type: "line",
                data: {
                    //Bring in data
                    labels: data,
                    datasets: [
                        {
                            label: "Scores",
                            data: data,
                        }
                    ]
                },
                options: {
                    //Customize chart options
                }
            });
        }).catch(err => console.log(err))
    }
    render() {
        return (
            <div >
                <button  onClick={() => this.props.history.push('/mydrills')}>my drills</button>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}