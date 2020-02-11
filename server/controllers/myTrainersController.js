module.exports = {
    getMyTrainers: (req, res) => {
        const db = req.app.get('db');

        db.user_trainers.get_my_trainers().then((results) => res.status(200).send(results))

    },

    addTrainer: (req, res) => {
        const db = req.app.get('db')
        const {name, training_skills, biography, credentials} = req.body;

        db.user_trainers.post_drill(name, training_skills, biography, credentials)
        .then(() => res.sendStatus(200))

    },

    removeTrainer: (req, res) => {
        const db = req.app.get('db')
        const {mytrainer_id} = req.params;

        db.user_trainers.remove_my_drill(mytrainer_id)
        .then(mytrainers => {
            res.status(200).send(mytrainers).catch(err => {
                res.status(500).send(err)
            })
        })
        
    }

    }
