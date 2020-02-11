module.exports = {
    getMyDrills: (req, res) => {
        const db = req.app.get('db');

        db.user_drills.get_my_drills()
        .then((results) => 
        res.status(200).send(results))

    },

    createDrill: (req, res) => {
        const db = req.app.get('db')
        const {name, distance, shots, setup, partime, score, actions} = req.body;

        db.user_drills.create_drill(name, distance, shots, setup, partime, score, actions)
        .then(() => res.sendStatus(200))
        
    },

    postDrill:(req, res) => {
        const db = req.app.get('db')
        const {name, distance, shots, setup, partime, score, actions} = req.body;

        db.user_drills.post_drill(name, distance, shots, setup, partime, score, actions)
        .then(() => res.sendStatus(200))

        
    },

    editScore:(req, res) => {
        const db = req.app.get('db')
        const {mydrill_id} = req.params;
        const {partime, score} = req.body;

        db.user_drills.edit_my_drill(mydrill_id, partime, score)
        .then(mydrills => {
            res.status(200).send(mydrills)
        }).catch(err => {
            res.status(500).send(err)
        })
        
    },

    removeDrill:(req, res) => {
        const db = req.app.get('db')
        const {mydrill_id} = req.params;

        db.user_drills.remove_my_drill(mydrill_id)
        .then(mydrills => {
            res.status(200).send(mydrills).catch(err => {
                res.status(500).send(err)
            })
        })
        
    }
}
