module.exports = {
    getPosts: async (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        const posts = await db.get_post([id])
        if (posts !== []){
            res.status(200).send(posts)
        }else{
            res.sendStatus(500)
        }
    },

    addPost: (req, res) => {
        const {id} = req.params
        const {title, img, content} = req.body
        const db = req.app.get('db')
        db.add_post([id, title, img, content]).then(()=>{
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
    },

    editTitle: (req, res) => {
        const {id} = req.params
        const {title} = req.body
        const db = req.app.get('db')
        db.edit_post_title([title, id]).then(()=>{
            res.sendStatus(200)
        }).catch(()=>{
            res.sendStatus(500)
        })
    },

    editContent: (req, res) => {
        const {id} = req.params
        const {content} = req.body
        const db = req.app.get('db')
        db.edit_post_content([content, id]).then(()=>{
            res.sendStatus(200)
        }).catch(()=>{
            res.sendStatus(500)
        })
    },

    editImg: (req, res) => {
        const {id} = req.params
        const {img} = req.body
        const db = req.app.get('db')
        db.edit_post_img([img, id]).then(()=>{
            res.sendStatus(200)
        }).catch(()=>{
            res.sendStatus(500)
        })
    },
}