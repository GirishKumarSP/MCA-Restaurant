const express = require('express')
const router = express.Router();
const User = require("../Models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWR_SECRET = "IamAgood$Boy"

//create a user using: post "/api/auth/createuser". Doesn't require Auth
router.post("/createuser", [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
],
    async (req, res) => {

        //if there are errors return bad request and error message
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() })
        }

        try {
            //check if the user with the same email exist already
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ error: "Sorry user with the same email already exist" })
            }

            //creating secreat password by adding salt with it
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            //createing an cuser
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })

            //send user token as the response for validating in the future for login session
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWR_SECRET)
            res.json({ authToken })

        } catch (error) {
            console.log("Error creating new user:", error.message)
            res.status(500).send("Some error occured")
        }
    })

module.exports = router