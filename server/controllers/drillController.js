module.exports = {
    
    getAllDrills: (req, res) => {
        const db = req.app.get('db');

        db.get_all_drills().then((results) => res.status(200).send(results))

    }

}