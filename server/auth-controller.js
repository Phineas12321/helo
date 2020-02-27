const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {username, password, profile_pic} = req.body
        const {session} = req
        const db = req.app.get('db')
        let user = await db.check_user([username])
        user = user[0]
        if (user) {
            return res.status(400).send('username taken')
        }

        const salt = bcrypt.genSaltSync(4)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register_user({hash, username, profile_pic})
        newUser = newUser[0]
        session.user = newUser
        res.status(201).send(session.user)
    },

    login: async (req, res) => {
        const {username, password} = req.body
        const {session} = req
        const db = req.app.get('db')
        let user = await db.check_user([username])
        user = user[0]
        if (!user) {
            return res.status(400).send('user not found')
        }

        const authenticated = bcrypt.compareSync(password, user.password)
        if (authenticated) {
            delete user.user_password
            session.user = user
            res.status(202).send(session.user)
        }else {
            res.status(401).send('wrong password')
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res)=> {
        if (req.session.user){
            res.status(200).send(req.session.user)
        }else{
            res.sendStatus(200)
        }
    }
}