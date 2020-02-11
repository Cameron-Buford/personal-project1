require('dotenv').config()
const express= require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING}= process.env
const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db assaulting through objective')
    app.listen(SERVER_PORT, () => console.log(`server is raiding ports on ${SERVER_PORT}`))
}).catch(err => console.log(err))

const authCtrl = require('./controllers/authController')
const drillCtrl = require('./controllers/drillController')
const trainerCtrl = require('./controllers/trainersController')
const myDrillCtrl = require('./controllers/myDrillsController')
const myTrainerCtrl = require('./controllers/myTrainersController')







//auth endpoints

app.get('/api/user', authCtrl.getUser)
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)


//drills endpoints

app.get('/api/drills', drillCtrl.getAllDrills)



//trainer endpoints


app.get('/api/trainers', trainerCtrl.getAllTrainers)


//mydrills endpoints

app.get('/api/myDrills', myDrillCtrl.getMyDrills)
app.post(`/api/create`, myDrillCtrl.createDrill)
app.post('/api/post', myDrillCtrl.postDrill)
app.put(`/api/edit/:id`, myDrillCtrl.editScore)
app.delete(`/api/remove/:id`, myDrillCtrl.removeDrill)


//mytrainers endpoints

app.get('/api/myTrainers', myTrainerCtrl.getMyTrainers)
app.post('/api/postTrainer', myTrainerCtrl.addTrainer)
app.delete('/api/removeTrainer/:id', myTrainerCtrl.removeTrainer)


              