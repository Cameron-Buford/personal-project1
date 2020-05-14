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
import Stats from './Components/Stats';
import SingleDrill from './Components/SingleDrill';
import Register from './Components/Register';
import ScrollToTop from './Components/ScrollToTop'
import About from './Components/About';
import MySingleDrill from './Components/MySingleDrill';


export default (
    
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/register' component={Register}/>
        <Route path='/drills' component={Drills}/>
        <Route path='/mytraining' component={MyTraining}/>
        <Route path='/trainers' component={Trainers}/>
        <Route path='/mydrills' component={MyDrills}/>
        <Route path='/mytrainers' component={MyTrainers}/>
        <Route path='/createdrill' component={CreateDrill}/>
        <Route path= '/stats/:mydrill_id' component= {Stats}/>
        <Route path= '/drill/:drill_id' component= {SingleDrill}/>
        <Route path= '/mydrills/:mydrill_id' component= {MySingleDrill}/>
        <Route path= '/about' component= {About}/>
    </Switch>
    
);