module.exports = {
    getMyDrills: (req, res) => {
        const db = req.app.get('db');
        const {user_id}= req.session.user;

        db.user_drills.get_my_drills(user_id)
        .then((results) => 
        res.status(200).send(results))

    },

    createDrill: async(req, res) => {
        const db = req.app.get('db')
        const {name, distance, shots, setup, partime, score, actions} = req.body;
        const {user_id} = req.session.user;
            console.log(req.body)
        
        const drill_id = await db.user_drills.create_drill(name, distance, shots, setup, partime, score, actions)
        console.log(drill_id)
        await db.user_drills.add_drill(user_id, drill_id[0].drill_id)
        res.sendStatus(200)
        
    },

    postDrill:(req, res) => {
        const db = req.app.get('db')
        const {user_id, drill_id} = req.body;

        db.user_drills.post_drill(user_id, drill_id)
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
