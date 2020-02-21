import React, { Component } from 'react'
import Chart from "chart.js";

import axios from 'axios'



const drillBody = {
    // backgroundColor: '#333333', 
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
    backgroundImage: 'url(https://lh3.googleusercontent.com/K2mJrLowIC6qntqIjPn7p2NTJTrhGtlGKOgDU4aYmAlibOddjxo4L-tV8qBBEzWMzPjwo40Nu_b1P-ACKMIn4j0hOwkHGwnD9osx4NryB75UK0IxYZNvmC7MDg5MKAfClvFPTBnFW6ybKAl2qb0ZzmS1-w67rEHnl6sYJ3827R4DtgQmr4XrBG4vZozSD0GRbfVi_gUF0VULg0ANR5o-4Tpg25aXBzl445T-J0VMLeVXKedqN5kWhjnNM_ytOssvjiLysN0pD_9cM-M72g6hJ_nC6CHrYWyMMW4gNo0o0WKNx2pHVrPgBDdUS5zaNrUiffE-N0bvwPjeMOKegNhn4cLuO-I9Px8J19fkFBKz0QIC97MiUBVM6PQ69FlElt99y4vwq19rUxjQSd48tte2TiFTP0MwpjK-n8Rw_ikl6gjzfJWClUYEIiusN8dJPrE7Evq_rphHBmqSBWmJAE7EdzcqSEYJby3x4wZ2EsbC_RBZgpEqglgQ31v5fWSOOjScvbDQn-51T6e74cuJAIoUBViRY5prSxjw_QTAUlUVdRxYRcTx39ZVso5zwLvbOn5i5C8PmaDrELGK_SjhWhfe6OPWo2Xco64gHGjc9U6ZzYVtZ2Fo1epEYZGE1vbJ57AVPdBY8axr0Y9_ih6TmbWbRWu51y40KcYcwCUwnMSN8Kuv7-Cxd94_BDVl=w494-h657-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundColor: 'transparent',
    // backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
  
  }


  const drillbox = {
    backgroundColor: 'transparent',
    width: '800px',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '10px',
    backgroundColor: 'rgba(117, 111, 111, 0.6)',
    // backgroundColor: 'transparent',
    borderRadius: '15px',
      
  }

  const buttonBlock = {
      backgroundColor: 'transparent'
  }

  const foot = {
    backgroundColor: 'rgb(133, 121, 121)',
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}


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
                            backgroundColor: 'green',
                            borderColor: 'black',
                            borderWidth: 4,
                            data: data,
                            lineTension: 0.5,

                        }
                    ]
                },
                options: {
                    //Customize chart options
                    
                        title: {
                            display: true,
                            text: 'SCORES',
                            fontSize: 20,
                            fontWeight: 'bold',
                            fontColor: 'black'
                           

                        },
                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                fontColor: 'black'
                            }
                        }
                    
                }
            });
        }).catch(err => console.log(err))
    }
    render() {
        return (
            <div style= { drillBody}>
                <div style= {quoteBox}>
                    “There is no “secret sauce,” but there is a lot of hard work, dedication, and drive.” Mark Owen, former NSWDG Operator

                </div>

                <div style= {drilltable}>
                    <div style= {buttonBlock}>


                         <button  onClick={() => this.props.history.push('/mydrills')}>MY DRILLS</button>

                    </div>


                <div style= {drillbox}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
            </div>

            <div class='footer' style= {foot} > STAY FROSTY </div>
            </div>
        )
    }
}