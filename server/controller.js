module.exports = {
    getPosts: async (req, res) => {
        const {user_id} = req.params
        const db = req.app.get('db')
        const posts = await db.get_post([user_id])
        if (posts[0]){
            res.status(200).send(posts)
        }else{
            res.sendStatus(500)
        }
    },

    addPost: (req, res) => {
        console.log(req)
        //const {author_id} = req.params
        const {author_id, title, img, content} = req.body
        const db = req.app.get('db')
        db.add_post([author_id, title, img, content]).then(()=>{
            res.sendStatus(201)
        }).catch(()=>{
            res.sendStatus(500)
        })
    }
}