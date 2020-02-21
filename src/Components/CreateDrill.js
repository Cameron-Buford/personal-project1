import React, {Component} from 'react'
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

const buttonDiv = {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const drilltable = {
    
    backgroundColor: 'transparent',
    // backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
  
  }

  const drillbox = {
    backgroundColor: 'transparent',
    width: '400px',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '10px',
    backgroundColor: 'rgba(117, 111, 111, 0.5)',
    borderRadius: '15px',
      
  }

  const drillBodyOne = {
    // backgroundColor: '#333333', 
    backgroundImage: 'url(https://lh3.googleusercontent.com/aYzAoEP0mupEIR0VxculjWf8K0hjoMSRo4cVUQdvJ1yS2WtwyZAqHOhVRlnZRLiWpp0z3MgEGl-JldyvxhXjrK8B7TZQw2gyLvPNpneuh7chPfBneWg_aiD_W9ZsUsFvxh065edjfrBqFYFgjEc1CnnoVA60ByT_1qPos3F-RKuPrjCf7Wl5vNT2fUPjNKDmWANuSBNwKYFOX-4ojAoOuvUAXfwEAKM5XgBunhJ0NwdcTzJXa4xrTp9igr7taFGkIn7IK7v1AtfOtoZuivAU73k0g9FXA5Hmaicgjewx1ZFMpzmEfT5eTe5RQ3UVX4pv-MwR52yzOIioD8KeZ8affWeFWLNGQgJP5RJGcMT_GnT-sg1HxnpKQX3xxAuGG2vWXpRDfYuh1QgDuHW5jP7wacBoNYbn5jsCwsj_G12xYaEuwwV9l1Z1JA_WqiSn2ZMefhYL5-yhiU6aasz_WEKayA6_7umFNdjpD3zeSfd2oQU_p4ZMW6O1MxtJcwjXPf2qKVbvp0Q--Rb2dV0xMXs9cFB2Ujdx_uCYtf-brIgmJMoyJX75wGPr0QO4QQJDvE47j8D6nnHU5Ej7XxsvXcH1MsgT_sPN8nclxsKKAAN-vskHUlflsE1i129i6CuORnBkpuUQvZaZam9M9SXJEQMZHHBiyn15tb2CyVxcBa1afm5Ih1Ubtznt0wd4=w828-h544-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
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
                “Never walk away from home ahead of your axe and sword. You can't feel a battle in your bones or foresee a fight.” ― the Havamal 



                </div>
                <button  onClick={() => this.props.history.push('/mydrills')}>Return To My Drills</button>

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