module.exports = {
    getMyDrills: (req, res) => {
        const db = req.app.get('db');
        const {user_id}= req.session.user;

        db.user_drills.get_my_drills(user_id)
        .then((results) => 
        res.status(200).send(results))

    },

    getScores: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user;
            console.log(req.params)
        db.user_drills.get_scores(user_id)
        .then((results) => 
        res.status(200).send(results))

        
    },

    getStats: (req, res) => {
        const db = req.app.get('db')
        // const {user_id} = req.session.user;
        const {mydrill_id} = req.params;
        const {scores} = req.body

        db.stats.get_stats(mydrill_id, scores)
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

    postDrill: async(req, res) => {
        const db = req.app.get('db')
        const {drill_id} = req.body;
        const {user_id} = req.session.user;

        

        await db.user_drills.add_drill(user_id, drill_id)
        res.sendStatus(200)
        
    },

    editScore:async(req, res) => {
        const db = req.app.get('db')
        const {drill_id} = req.params;
        const {user_id} = req.session.user;
        const {score} = req.body;

        console.log(req.params)
        
        const mydrill_id = await db.user_drills.get_mydrill_id(user_id, drill_id)
            console.log(req.body)
        db.user_drills.score(mydrill_id[0].mydrill_id, score)

        .then(score => {
            res.status(200).send(score)
        }).catch(err => {
            res.status(500).send(err)
        })
        
    },

    removeDrill: async(req, res) => {
        const db = req.app.get('db')
        const {drill_id} = req.params;
        const {user_id} = req.session.user;

        const mydrill_id = await db.user_drills.get_mydrill_id(user_id, drill_id)
            console.log(mydrill_id)
        db.user_drills.remove_my_drill(mydrill_id[0].mydrill_id)
        .then(mydrills => {
            res.status(200).send(mydrills)
        }).catch(err => {
            res.status(500).send(err)
        })
        
    }

    
}
