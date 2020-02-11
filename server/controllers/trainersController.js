module.exports = {

    getAllTrainers: (req, res) => {
        const db = req.app.get('db');

        db.trainers.get_all_trainers().then((results) => res.status(200).send(results))

    }
}