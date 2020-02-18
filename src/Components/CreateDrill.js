import React, {Component} from 'react'
import axios from 'axios'

const dashboardStyle = {
    backgroundColor: '#333333', height: '100vh', width: '100%'
  
  }
class CreateDrill extends Component{
    constructor(){
        super()
        this.state ={
            name: '',
            distance: '',
            shots: '',
            setup: '',            
            partime: '',
            score: '',            
            actions: ''
        }
    }

    newDrill = () => {
        const {name, distance, shots, setup, partime, score, actions} = this.state;
            console.log(this.state)
        axios.post('/api/create', {name, distance, shots, setup, partime, score, actions})
        .then(() => {
            this.props.history.push('/mydrills')
        })
    }

    handleChange = ({name, value}) => this.setState({[name]: value})

    render(){
        const {name, distance, shots, setup, partime, score, actions} = this.state
        return(
            <div styles={dashboardStyle}>
                    
                <div>
                    <p>{'name'}</p>
                    <input  name='name'
                    // value={name}
                    placeholder='drill name'
                    onChange= {(e) => this.handleChange(e.target)}
                    /> 


                    <p>{'distance/yards'}</p>
                    <input  name='distance'
                    // value={distance}
                    placeholder='distance'
                    onChange= {(e) => this.handleChange(e.target)}
                    />

                    <p>{'shots'}</p>
                    <input  name='shots'
                    // value={shots}
                    placeholder='shots'
                    onChange= {(e) => this.handleChange(e.target)}
                    />

                    <p>{'setup'}</p>
                    <input  name='setup'
                    // value={setup}
                    placeholder='setup'
                    onChange= {(e) => this.handleChange(e.target)}
                    />

                    <p>{'partime/seconds'}</p>
                    <input  name='partime'
                    // value={partime}
                    placeholder='partime'
                    onChange= {(e) => this.handleChange(e.target)}
                    ></input>

                    <p>{'score'}</p>
                    <input  name='score'
                    // value={score}
                    placeholder='score'
                    onChange= {(e) => this.handleChange(e.target)}
                    />

                    <p>{'actions'}</p>
                    <textarea
                      name='actions'
                    // value={actions}
                    placeholder='actions'
                    onChange= {(e) => this.handleChange(e.target)}
                    />
                    <button onClick = {() => {
                        this.newDrill({name, distance, shots, setup, partime, score, actions})
                        }}>create drill
                    </button>

                    <button>clear</button>
                </div>

            </div>
        )
    }
}

export default CreateDrill