import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import {getUser} from '../Duxx/reducer'
import useAxios from '../hooks/useAxios'

const drillBody = {

    //background
    backgroundColor: '#E3E3E3',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    //dimensions
    height: '100vh', 
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

const myDrillButtons = {
    //background
    backgroundColor: 'transparent',
    //dimensions
    //flex positioning
    //other positioning
    //font
    color: 'rgb(29, 77, 29)',
    fontWeight: 'bold',
    // other
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
}

const drilltable = {
     //background
    //  backgroundRepeat: 'no-repeat',
    //  backgroundSize: '100%',
    //  backgroundPosition: 'center',
    //  backgroundAttachment: 'fixed',
     backgroundColor: 'transparent',
     //dimensions
     height: '100%',
     width: '100%',
     //flex positioning
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'space-around',
     flexWrap: 'wrap',
     flexDirection: 'column'
     //other positioning
     //font
  
  }

const myDrillClick = {
    //background
    backgroundColor: 'transparent',
    //dimensions
    //flex positioning
    //other positioning
    //font
    color: 'rgb(29, 77, 29)',
    fontWeight: 'bold',
    // other
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
}



const MyDrills = ({history, match}) => {
    const {mydrills} = useAxios('mydrill', match.params.drill_id)
    const [input, setInput] = useState("")
    console.log(mydrills)

    const goToMyDrill = (mydrill_id) => {
        axios.get(`/api/mydrill/${mydrill_id}`)
        .then(() => {
            history.push(`/mydrill/${mydrill_id}`)
        })
    }



    // componentDidMount = () => {
        
    //     rerenderDrills()
        
    
    //   }

    //   const rerenderDrills= () => {

    //       axios.get('/api/myDrills').then(results => {
    //           console.log(results)
    //           setState({myDrills: results.data})
    //       }).catch(err => console.log(err))

    //   }

    //  const removeDrill = (drill_id) => {

    //     axios.delete(`/api/remove/${drill_id}`)
    //     .then(() => {
    //         rerenderDrills()

    //     }).catch(err => console.log(err))
    //   }

    // const updateScore = (drill_id) => {
    //       console.log(drill_id)
    //       axios.put(`/api/edit/${drill_id}`, {score: score})
            
    //       .then(() => {
    //           rerenderDrills()
              
    //       }).catch(err => console.log(err))
    //   }

    // const handleChange = ({name, value}) => setState({[name]: value})

    // const filterByScore = (drills) => {
    //       console.log(drills)
    //     for(let i = 0; i <drills.length; i++){
    //       for(let j = drills.length-1; j > i; j--){
    //         if(drills[i].drill_id === drills[j].drill_id){
    //           drills.splice(drills[j], 1)
    //         }
    //       }
    //     }
    //     console.log(drills)
    //     return drills
    //   }


      return(
          <div style = {drillBody}>
              <div style = {drilltable}>
              <div style= {quoteBox}>
              “You have never tasted freedom... or you would know it is purchased not with gold, but steel.” Dienekes― Steven Pressfield, Gates of Fire
                </div>
                <div>
                <div>
                        <input
                            type= 'text'
                            value= {input}
                            placeholder= 'SEARCH MY DRILLS'
                            onChange = {e => setInput(e.target.value)}
                            >
                        </input>
                        <button
                            // onClick= {() => }
                        >SEARCH</button>
                    </div>
                    {
                    mydrills.map(mydrill => {
                        return (
                            
                            <ul> 
                                <li>
                                    <button 
                                        style= {myDrillClick} 
                                        onClick = {() => goToMyDrill(mydrill.mydrill_id)}>
                                            {mydrill.name}
                                    </button>
                                </li>
                            </ul>
                        )
                    })}
                </div>

              <Footer/>
              </div>

          </div>
      )

    }
    export default MyDrills 
























































// class MyDrills extends Component{
//     constructor(){
//         super()
//         this.state ={
//             myDrills: [],
//             myDrillsUrl: '/api/myDrills',
//             score: '' ,
//             scoresUrl: `/api/scores`,
//             user: {}
            

//         }
//     }

// //functions on State

//     componentDidMount(){
        
//         this.rerenderDrills();
        
    
//       }

//       rerenderDrills= (user_id) => {
//           const {myDrillsUrl} = this.state;
//           const {user} = this.state;

            
//           axios.get(myDrillsUrl).then(results => {
//               console.log(results)
//               this.setState({myDrills: results.data})
//           }).catch(err => console.log(err))
        
//       }

//       toMySingleDrill = (mydrill_id) => {
          
//           axios.get(`/api/mydrill/${mydrill_id}`)
//           .then(() => {
//               this.props.history.push(`/mydrill/${mydrill_id}`)
//           })
//       }





//       removeDrill = (drill_id) => {

//         axios.delete(`/api/remove/${drill_id}`)
//         .then(() => {
//             this.rerenderDrills()

//         }).catch(err => console.log(err))
//       }

//     //   updateScore = (drill_id) => {
//     //       console.log(drill_id)
//     //       axios.put(`/api/edit/${drill_id}`, {score: this.state.score})
            
//     //       .then(() => {
//     //           this.rerenderDrills()
              
//     //       }).catch(err => console.log(err))
//     //   }

//     //   handleChange = ({name, value}) => this.setState({[name]: value})

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
      



//     render(){       
//         const {myDrills} = this.myDrills;

//         const mySingle = this.toMySingleDrill(myDrills.mydrill_id);
//         return(
//             <div style= { drillBody}>
//                 <div style= {space}></div>
//                 <div style= {drilltable}>
//                 <div style= {quoteBox}>
//                     "Good luck is for novices, bad luck is for everyone.  Bank on skill, you control it." Mike Pannone

//                 </div>

//                 <div style= {buttonDiv}>
//                     {/* <button 
//                         className = 'myTrainersInProfileButton' 
//                         onClick={() => this.props.history.push('/mytrainers')}>
//                             my trainers
//                     </button> */}
//                     <button  
//                         className='createDrillButton' 
//                         onClick={() => this.props.history.push('/createdrill')}>
//                             Create Drill 
//                     </button>
//                 </div>

//                 {this.filterByScore(this.state.myDrills).map(myDrills => {
//                     console.log(myDrills)
//                     return (
//                         <ul 
//                         // style= {drillbox}
//                         >
//                             <li>

//                                 <button 
//                                     style= {myDrillButtons}
//                                     onClick= {() => mySingle}
//                                     > 
//                                         {myDrills.name}
//                                 </button>
//                                     {/* DISTANCE:<div style= {drillLabel}> {myDrills.distance} Yards</div>
//                                     SHOTS:<div style= {drillLabel}> {myDrills.shots}</div>
//                                     SETUPS: <div style= {drillLabel}> {myDrills.setup}</div>
//                                     PARTIME: <div style= {drillLabel}> {myDrills.partime} Seconds</div>
//                                     SCORE: <div style= {drillLabel}> {myDrills.score} Seconds/Points</div>
//                                     ACTIONS:<div style= {drillLabel}> {myDrills.actions}</div> */}

//                                 {/* <h1 
//                                     style= {drillLabel}>
//                                         {myDrills.score}
//                                 </h1> */}

//                                 {/* <button 
//                                     style= {myStatsButton} 
//                                     onClick= {() => this.props.history.push(`/stats/${myDrills.mydrill_id}`)}>
//                                         MY STATS 
//                                 </button> */}

                           

//                                 {/* <button 
//                                     className = 'updateScoreButton'
//                                     // style= {updateScoreButton} 
//                                     onClick= {() => this.updateScore(myDrills.drill_id)}>
//                                         Update your Score
//                                 </button>
//                                 <input 
//                                     name= 'score'
//                                     placeholder= 'score/time'
//                                     onChange= {(e) => this.handleChange(e.target)}/> */}

//                                 {/* <button 
//                                     style= {RemoveDrillButton } 
//                                     onClick= {() => this.removeDrill(myDrills.drill_id)}>
//                                         Remove From My Drills 
//                                 </button> */}
//                                 </li>
//                         </ul>
//                     )
//                 })}

//                 <Footer/>
                
//                 </div>
                
//             </div>
//         )
//             }
//     }
// // }

// export default (withRouter(MyDrills))




















