module.exports = {
    
    getAllDrills: (req, res) => {
        const db = req.app.get('db');

        db.drills.get_all_drills()
        .then((results) => res.status(200).send(results))

    },

    getSingleDrill: (req, res) => {
        const db = req.app.get('db');

        db.drills.get_single_drill()
        .then((results) => res.status(200).send(results))
    }

}