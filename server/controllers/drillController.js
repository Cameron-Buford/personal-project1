module.exports = {
    
    getAllDrills: (req, res) => {
        const db = req.app.get('db');

        db.drills.get_all_drills()
        .then((results) => res.status(200).send(results))

    },

    getSingleDrill: (req, res) => {
        const db = req.app.get('db');
        const {drill_id} = req.params;
        const {name, distance, shots, setup, partime, score, actions} =req

        db.drills.get_single_drill(drill_id, name, distance, shots, setup, partime, score, actions)
        .then((results) => res.status(200).send(results))
    }

}