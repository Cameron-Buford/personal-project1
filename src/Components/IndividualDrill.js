import React, {Component} from 'react'
import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'


const IndividualDrill = ({history}) => {

    const [drills] = useAxios('/api/singledrill')


    const pushDrill = (drill_id) => {
      axios.post('/api/post', {drill_id})
          .then(() => {
              history.push('/mydrills')
            })
    }

    return(
        <div>
            <div>
            {
                        
                        drills.map(drill => {
                            return (
                        
                                <div>
                                    DRILL NAME: <div > {drill.name}</div>
                                    DISTANCE:<div > {drill.distance} Yards</div>
                                    SHOTS:<div > {drill.shots}</div>
                                    SETUPS: <div > {drill.setup}</div>
                                    PARTIME: <div > {drill.partime} Seconds</div>
                                    SCORE: <div > {drill.score} Seconds/Points</div>
                                    ACTIONS:<div > {drill.actions}</div>
                                    <button onClick = {() => 
                                        
                                        pushDrill(drill.drill_id)}>add to MY DRILLS</button>
                                </div>


                                    )
                        })}
            </div>
        </div>
    )

}

export default IndividualDrill