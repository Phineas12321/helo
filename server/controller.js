module.exports = {
    getPosts: async (req, res) => {
        //const {user_id} = req.params
        const db = req.app.get('db')
        const posts = await db.get_post(/*[user_id]*/)
        if (posts !== []){
            res.status(200).send(posts)
        }else{
            res.sendStatus(500)
        }
    },

    addPost: (req, res) => {
        //const {author_id} = req.params
        const {author_id, title, img, content} = req.body
        const db = req.app.get('db')
        db.add_post([author_id, title, img, content]).then(()=>{
            res.sendStatus(201)
        }).catch(()=>{
            res.sendStatus(500)
        })
    },

    deletePost: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_post([id]).then(()=>{
            res.sendStatus(200)
        }).catch(()=> {
            res.sendStatus(500)
        })
    }
}