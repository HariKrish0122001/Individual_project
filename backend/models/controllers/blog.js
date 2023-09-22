const { response } = require('../../app')
const db = require('../entity')
const blog = db.BLOG

const create_blog = async (req, res) => {
    console.log(req.body)
    try {
        const adddata = await blog.create({
            user_id: req.body.user_id,
            title: req.body.title,
            blog: req.body.blog
        })
        if (adddata) {
            res.send("Blog saved successfully")
        }
    } catch (error) {
        res.send("Failed to save the blog")
    }
}
const fetch = async (req, res) => {
    const user_id = req.params.id
    console.log(user_id)
    try {
        const fetchdata = await blog.findAll({
            where: {
                user_id: user_id
            }
        })

        if (fetchdata) {
            res.send(fetchdata)
        }
    } catch (error) {
        res.send("Failed to fetch")
    }
}
const editfetch = async (req, res) => {
    const blog_id = req.params.id
    console.log("Asdnalsd")
    try {
        const data = await blog.findAll({
            where: {
                id: blog_id
            }

        })
        console.log(data)
        if (data) {
            res.send(data)

        }
        else {
            res.send("Failed to fetch")
        }

    }
    catch (e) {
        res.send("Error at backend")
    }
}

const editsave = async (req, res) => {
    
    const blog_id = req.body.id
    const title = req.body.title
    const blog_data = req.body.blog
    if (blog_id && title && blog_data) {
        try {
            console.log("ASDADS")
            const response = await blog.update({
                blog: blog_data,
                title: title
            }, {
                where: {
                    id: blog_id
                }
            }).then((response) => {
                if (response) {
                    res.send("Edited successfully")
                }
                else {
                    res.send("Failed to save")
                }
            })
        }
        catch (e) {
            res.send("Empty")
        }
    }else{
        res.send("if condition failed")
    }
}
module.exports = {
    create_blog,
    fetch,
    editfetch,
    editsave
}