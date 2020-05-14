import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import {getUser} from '../Duxx/reducer'

const drillBody = {

    //background
    backgroundColor: '#E3E3E3',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    //dimensions
    height: '100%', 
    width: '100%',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}
const space = {
    backgroundColor: 'black',
    width: '100%',
    height: '5px'
}

const quoteBox = {

    //background
    backgroundColor: '#E3E3E3',
    //dimensions
    width: '100%',
    height: '100px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    //other positioning
    //font
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
     //background
     backgroundRepeat: 'no-repeat',
     backgroundSize: '100%',
     backgroundPosition: 'center',
     backgroundAttachment: 'fixed',
     backgroundColor: 'transparent',
     //dimensions
     height: '100%',
     width: '100%',
     //flex positioning
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'space-around',
     flexWrap: 'wrap'
     //other positioning
     //font
  
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
    backgroundColor: 'rgba(172, 154, 123, 0.8)',
    borderRadius: '15px',
      
  }

  const drillLabel = {
      fontSize: '15px',
      margin: '5px'
  }

const buttonStyle = {
    backgroundColor: '#222222',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    width: '100px',
    height: '50px'
}

const myStatsButton = {
    backgroundColor: 'rgb(179, 157, 37)',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
}

const updateScoreButton = {
    backgroundColor: 'rgb(27, 131, 13)',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    
}

const RemoveDrillButton = {
    backgroundColor: 'rgb(189, 113, 99)',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'

}






class MyDrills extends Component{
    constructor(){
        super()
        this.state ={
            myDrills: [],
            myDrillsUrl: '/api/myDrills',
            score: '' ,
            scoresUrl: `/api/scores`,
            user: {}
            

        }
    }

//functions on State

    componentDidMount(){
        
        this.rerenderDrills();
        
    
      }

      rerenderDrills= (user_id) => {
          const {myDrillsUrl} = this.state;
          const {user} = this.state;

            
          axios.get(myDrillsUrl).then(results => {
              console.log(results)
              this.setState({myDrills: results.data})
          }).catch(err => console.log(err))
        
      }

      removeDrill = (drill_id) => {

        axios.delete(`/api/remove/${drill_id}`)
        .then(() => {
            this.rerenderDrills()

        }).catch(err => console.log(err))
      }

      updateScore = (drill_id) => {
          console.log(drill_id)
          axios.put(`/api/edit/${drill_id}`, {score: this.state.score})
            
          .then(() => {
              this.rerenderDrills()
              
          }).catch(err => console.log(err))
      }

      handleChange = ({name, value}) => this.setState({[name]: value})

      filterByScore = (drills) => {
          console.log(drills)
        for(let i = 0; i <drills.length; i++){
          for(let j = drills.length-1; j > i; j--){
            if(drills[i].drill_id === drills[j].drill_id){
              drills.splice(drills[j], 1)
            }
          }
        }
        console.log(drills)
        return drills
      }
      



    render(){
        // const {user} = this.props.user;

        // if(!user.user_id ){
        //     this.props.history.push('/auth')
        // } else{
            
        


        return(
            <div style= { drillBody}>
                <div style= {space}></div>
                <div style= {drilltable}>
                <div style= {quoteBox}>
                    "Good luck is for novices, bad luck is for everyone.  Bank on skill, you control it." Mike Pannone

                </div>

                <div style= {buttonDiv}>
                    <button 
                        className = 'myTrainersInProfileButton' 
                        onClick={() => this.props.history.push('/mytrainers')}>
                            my trainers
                    </button>
                    <button  
                        className='createDrillButton' 
                        onClick={() => this.props.history.push('/createdrill')}>
                            Create Drill 
                    </button>
                </div>

                {this.filterByScore(this.state.myDrills).map(myDrills => {
                    console.log(myDrills)
                    return (
                        <div style= {drillbox}>

                                    DRILL NAME: <div style= {drillLabel}> {myDrills.name}</div>
                                    {/* DISTANCE:<div style= {drillLabel}> {myDrills.distance} Yards</div>
                                    SHOTS:<div style= {drillLabel}> {myDrills.shots}</div>
                                    SETUPS: <div style= {drillLabel}> {myDrills.setup}</div>
                                    PARTIME: <div style= {drillLabel}> {myDrills.partime} Seconds</div>
                                    SCORE: <div style= {drillLabel}> {myDrills.score} Seconds/Points</div>
                                    ACTIONS:<div style= {drillLabel}> {myDrills.actions}</div> */}

                            <h1 style= {drillLabel}>{myDrills.score}</h1>

                            <button style= {myStatsButton} onClick= {() => this.props.history.push(`/stats/${myDrills.mydrill_id}`)}>MY STATS </button>

                           

                                <button 
                                    className = 'updateScoreButton'
                                    // style= {updateScoreButton} 
                                    onClick= {() => this.updateScore(myDrills.drill_id)}>
                                        Update your Score
                                </button>
                                <input 
                                    name= 'score'
                                    placeholder= 'score/time'
                                    onChange= {(e) => this.handleChange(e.target)}
                            
                                />

                                <button style= {RemoveDrillButton } onClick= {() => this.removeDrill(myDrills.drill_id)}>Remove From My Drills </button>
                        </div>
                    )
                })}

                <Footer/>
                
                </div>
                
            </div>
        )
            }
    }
// }

export default (withRouter(MyDrills))




















// const MyDrills = ({history, match}) => {
//     const {mydrills} = useAxios('mydrills', match.params.drill_id)
//     console.log(mydrills)
    
//     const goToMyDrill = (mydrill_id) => {
//         axios.get(`/api/myDrills/${mydrill_id}`)
//         .then(() => {
//             history.push(`/mydrill/${mydrill_id}`)
//         })
//     }



//     componentDidMount = () => {
        
//         rerenderDrills()
        
    
//       }

//       rerenderDrills= () => {

//           axios.get('/api/myDrills').then(results => {
//               console.log(results)
//               setState({myDrills: results.data})
//           }).catch(err => console.log(err))

//       }

//       removeDrill = (drill_id) => {

//         axios.delete(`/api/remove/${drill_id}`)
//         .then(() => {
//             rerenderDrills()

//         }).catch(err => console.log(err))
//       }

//       updateScore = (drill_id) => {
//           console.log(drill_id)
//           axios.put(`/api/edit/${drill_id}`, {score: score})
            
//           .then(() => {
//               rerenderDrills()
              
//           }).catch(err => console.log(err))
//       }

//       handleChange = ({name, value}) => setState({[name]: value})

//       filterByScore = (drills) => {
//           console.log(drills)
//         for(let i = 0; i <drills.length; i++){
//           for(let j = drills.length-1; j > i; j--){
//             if(drills[i].drill_id === drills[j].drill_id){
//               drills.splice(drills[j], 1)
//             }
//           }
//         }
//         console.log(drills)
//         return drills
//       }


//       return(
//           <div>
//               <div>
//               <div style= {quoteBox}>
//                   “performing the commonplace under uncommonplace conditions.”― Steven Pressfield, Gates of Fire
//                 </div>
//                 <div>
//                 <div>
//                         <input
//                             type= 'text'
//                             value= {input}
//                             placeholder= 'SEARCH DRILLS'
//                             onChange = {e => setInput(e.target.value)}
//                             >
//                         </input>
//                         <button
//                             // onClick= {() => }
//                         >SEARCH</button>
//                     </div>
//                     {
//                     drills.map(drill => {
//                         return (
                            
//                             <ul> 
//                                 <li>
//                                     <button 
//                                         style= {buttonStyleOne} 
//                                         onClick = {() => goToMyDrill(myDrills.mydrill_id)}>
//                                             {myDrills.name}
//                                     </button>
//                                 </li>
//                             </ul>
//                         )
//                     })}
//                 </div>

//               <Footer/>
//               </div>

//           </div>
//       )

//     }
    // export default MyDrills 
