import React, {Component} from 'react'
import axios from 'axios'

const drillBody = {
    backgroundColor: '#333333', 
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

const buttonDiv = {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const drilltable = {
    backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
  
  }

  const drillbox = {
      backgroundColor: 'rgb(223, 206, 206)',
      width: '400px',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
      fontSize: '25px',
      fontWeight: 'bold',
      margin: '10px'
      
  }

  const drillBodyOne = {
    backgroundColor: '#333333', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

  const drillLabel = {
      fontSize: '15px',
      margin: '5px'
  }

  const foot = {
    backgroundColor: 'rgb(133, 121, 121)',
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
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
            <div style= { drillBody}>
                <div style= {quoteBox}>
                    "Think like men of action.  Act like men of thought. Live life with intensity, and a passion for excellence." General Mattis

                </div>

                <div style= { drillBodyOne}>
                    
                <div style= {drillbox}>
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

                <div class='footer' style= {foot} > STAY FROSTY </div>

            </div>
        )
    }
}

export default CreateDrill