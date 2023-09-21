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
       res.send("Failed to save the blog") 
    }
}
const fetch=async(req,res)=>{
    const user_id = req.params.id
    console.log(user_id)
    try {
        const fetchdata=await blog.findAll({
            where:{
                user_id:user_id
            }
        })
        console.log("hey jolly")
        if(fetchdata)
        {
            res.send(fetchdata)
        }
    } catch (error) {
        res.send("Failed to fetch")
    }
}
module.exports={
    create_blog,
    fetch,
}