import React, {Component} from 'react'


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

    render(){
        return(
            <div>create drill
                <div>
                    <p>{'name'}</p>
                    <input  name='drill name'
                    // value={title}
                    placeholder='drill name'
                    // onChange= {(e) => this.handleChange(e.target)}
                    ></input> 


                    <p>{'distance'}</p>
                    <input  name='distance'
                    // value={title}
                    placeholder='distance'
                    // onChange= {(e) => this.handleChange(e.target)}
                    ></input>

                    <p>{'shots'}</p>
                    <input  name='shots'
                    // value={title}
                    placeholder='shots'
                    // onChange= {(e) => this.handleChange(e.target)}
                    ></input>

                    <p>{'setup'}</p>
                    <input  name='setup'
                    // value={title}
                    placeholder='setup'
                    // onChange= {(e) => this.handleChange(e.target)}
                    ></input>

                    <p>{'partime'}</p>
                    <input  name='partime'
                    // value={title}
                    placeholder='partime'
                    // onChange= {(e) => this.handleChange(e.target)}
                    ></input>

                    <p>{'score'}</p>
                    <input  name='score'
                    // value={title}
                    placeholder='score'
                    // onChange= {(e) => this.handleChange(e.target)}
                    ></input>

                    <p>{'actions'}</p>
                    <input  name='actions'
                    // value={title}
                    placeholder='actions'
                    // onChange= {(e) => this.handleChange(e.target)}
                    ></input>

                    <button>create drill</button>

                    <button>clear</button>
                </div>

            </div>
        )
    }
}

export default CreateDrill