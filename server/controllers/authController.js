const bcrypt = require('bcryptjs')


const mailOptions = {
    from: 'cambuf@gmail.com',
    to: '',
    subject: 'Thank you from Registering',
    text: 'Thanks you for registering an account with Training HQ.  Search for trainers and drills to add to your training regimine from the most experienced trainers and training standard drills to become the best at your craft. Stay frosty.'
}


module.exports = {
    register: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db')
        const transporter = req.app.get('transporter')
        const emailResults = await db.auth.get_user_by_username(email)
        if(emailResults[0]){
            return res.status(409).send('Email already exists for a user')
        }

        let user = await db.auth.login(username);
        if (user[0]) {
            return res.status(400).send('user already exists');
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);;
        let newUser = await db.auth.register(username, hash);
        // const customMailOptions = {...mailOptions, to: email}
        transporter.sendMail(mailOptions, (err, data) => {
            if(err){
                console.log(err)

            } else{
                console.log('email sent')
                console.log(data)
            }
        })

        req.session.user = newUser[0];
        res.status(201).send(req.session.user);

    },
    login: async(req, res) => {
        const { username, password} = req.body;
        const db= req.app.get('db');

        let user = await db.auth.login(username);
        if (!user[0]){
            return res.status(400).send('username not found');
        }

        let authenticated = bcrypt.compareSync(password, user[0].password);
        if (!authenticated) {
            return res.status(401).send('password is incorrect, try again nerd');
        }

        delete user[0].password;
        req.session.user = user[0];
        res.status(202).send(req.session.user)
        
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)

    },

    getUser: (req, res) => {
        if (req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(200).send('no user on session')
        }
    }

}