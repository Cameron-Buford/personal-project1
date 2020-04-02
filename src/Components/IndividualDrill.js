import react, {Component} from 'react'
import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'


const IndividualDrill = ({history}) => {

    const [drills] = useAxios('/api/singledrill')

    return(
        <div>
            <div>
            {
                        
                        drills.map(drill => {
                            return (
                        
                                <div style= {drillbox}>
                                    DRILL NAME: <div style= {drillLabel}> {drill.name}</div>
                                    DISTANCE:<div style= {drillLabel}> {drill.distance} Yards</div>
                                    SHOTS:<div style= {drillLabel}> {drill.shots}</div>
                                    SETUPS: <div style= {drillLabel}> {drill.setup}</div>
                                    PARTIME: <div style= {drillLabel}> {drill.partime} Seconds</div>
                                    SCORE: <div style= {drillLabel}> {drill.score} Seconds/Points</div>
                                    ACTIONS:<div style= {drillLabel}> {drill.actions}</div>
                                    <button style= {buttonStyle} onClick = {() => 
                                        
                                        pushDrill(drill.drill_id)}>add to MY DRILLS</button>
                                </div>


                                    )
                        })}
            </div>
        </div>
    )

}

export default IndividualDrill