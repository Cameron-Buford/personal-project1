import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import Drills from "./Components/Drills";
import Trainers from "./Components/Trainers";
import MyTraining from "./Components/MyTraining";
import MyDrills from "./Components/MyDrills";
import MyTrainers from "./Components/MyTrainers";
import CreateDrill from "./Components/CreateDrill";


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/drills' component={Drills}/>
        <Route path='/mytraining' component={MyTraining}/>
        <Route path='/trainers' component={Trainers}/>
        <Route path='/mydrills' component={MyDrills}/>
        <Route path='/mytrainers' component={MyTrainers}/>
        <Route path='/createdrill' component={CreateDrill}/>
    </Switch>
);