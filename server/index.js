require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        rejectUnauthorized: false,
        secret: SESSION_SECRET
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, ()=>console.log(`listening on port ${SERVER_PORT}`))
    console.log('database connected')
})

app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)