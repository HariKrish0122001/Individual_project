const env = require('dotenv')
env.config('/.env')
const db = require('../entity/index.js')
const jwt = require('jsonwebtoken');
const bcrypt=require("bcrypt")
const User = db.USER




const create_user = async (req, res) => {

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    try {
       
        if (req.body.username && req.body.mail && req.body.pass) {
            
            var password=req.body.pass
            if (!passwordRegex.test(password)) {
                res.send("Passoword is weak")
            }
            else {
                console.log(req.body)
                const hash = await bcrypt.hash(password, 10);
                password = hash
                console.log("Success")
                const response=await User.create({
                    name: req.body.username,
                    mail: req.body.mail,
                    password: password
                });
                console.log("Success")
                res.send({ statusCode: 200, message: 'response success' })
            }
        }
        else {
            res.send("Response failed to add to DB")
        }
    } catch (error) {
        res.send({ statusCode: 400, message: 'username or mail id already exists' })

    }
}

const login = async (req, res) => {
    
    const email= req.body.mail
    const password=req.body.pass

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  
    
   
    if (!passwordRegex.test(password)) {
        res.send("Passoword is weak")
    }
    else {
        try {
            
            const valid_user = await User.findOne({
                where: {
                    mail: email,
                }
            })
            console.log("DSFJKSDF")
            const valid = await bcrypt.compare(password, valid_user.password)
            // console.log("after validation ",process.env.SECRET_KEY)
            if (!valid_user.isadmin && valid) {

                const token = jwt.sign({ userId: valid_user.id, email: valid_user.name }, process.env.SECRET_KEY, {
                    expiresIn: '1h',
                });
                console.log("after validation ")
                res.send({ data: valid_user, message: "User logged", token })
            }
            else {
                res.send("Unauthorized user")
            }

        } catch (error) {
            res.send("user not exist")
        }
    }
}
const username=async(req,res)=>{
    if(req.params.user_id){
        try{
            const user=await User.findOne({
                where:{
                    id:req.params.user_id
                }
            }).then((data)=>{
                if(data){
                    res.send(data)
                }
                else{
                    res.statusCode(404).send("No data exist")
                }
            })
        
        }
        catch(e){
            res.send(e)
        }
    }
    else{
        res.send("No request params")
    }
}
module.exports = {
    create_user,
    login,
    username
}