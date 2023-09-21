const db = require('../entity')
const blog = db.BLOG

const create_blog = async(req, res) =>{
    console.log(req.body)
    try {
        const adddata=await blog.create({
            user_id:req.body.user_id,
            title:req.body.title,
            blog:req.body.blog
        })
        if (adddata){
            res.send("Blog saved successfully")
        }
    } catch (error) {
        
    }
}
module.exports={
    create_blog
}