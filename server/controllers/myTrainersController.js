module.exports = {
    getMyTrainers: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;

        db.user_trainers.get_my_trainers(user_id)
        .then((results) => res.status(200).send(results))

    },

    addTrainer: (req, res) => {
        const db = req.app.get('db')
        const {trainer_id} = req.body;
        const {user_id} = req.session.user;
            console.log(req.body)
        db.user_trainers.post_trainer(user_id, trainer_id)

        .then(() => res.sendStatus(200))

    },

    removeTrainer: (req, res) => {
        const db = req.app.get('db')
        const {trainer_id} = req.params;
        const {user_id} = req.session.user;
        console.log(trainer_id)
        console.log(user_id)
        console.log(req.params)

        db.user_trainers.remove_my_trainer(user_id, trainer_id)
        .then(mytrainers => {
            res.status(200).send(mytrainers)
        }).catch(err => {
            res.status(500).send(err)
        })
        
    }

    }
