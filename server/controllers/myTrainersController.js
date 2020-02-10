module.exports = {
    getMyTrainers: (req, res) => {
        const db = req.app.get('db');

        db.get_my_trainers().then((results) => res.status(200).send(results))

    },

    addTrainer: (req, res) => {

    },

    removeTrainer: (req, res) => {

    }
}