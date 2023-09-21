const env = require('dotenv')
env.config('/.env')
const db = require('../entity')
const jwt = require('jsonwebtoken');
const bcrypt=require("bcrypt")
const user = db.USER




const create_user = async (req, res) => {

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    const isValid = /@jmangroup\.com$/

    try {
        if (req.body.name && req.body.email && req.body.password) {
            console.log(req.body, "ASJDNKJASDL")
            var { name, email, password } = req.body
            if (!passwordRegex.test(password)) {
                res.send("Passoword is weak")
            }
            else if (!isValid.test(email)) {
                res.send("not an organisation mail")
            }

            else {
                const hash = await bcrypt.hash(password, 10);
                password = hash

                await user.create({
                    name: req.body.name,
                    mail: req.body.email,
                    password: password
                });
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
    const isValid = /@jmangroup\.com$/.test(email);
    
    if (!isValid) {
        res.send("invaild mail")
    }
    else if (!passwordRegex.test(password)) {
        res.send("Passoword is weak")
    }
    else {
        try {
            
            const valid_user = await user.findOne({
                where: {
                    mail: email,

                }
            })
            
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
module.exports = {
    create_user,
    login
}