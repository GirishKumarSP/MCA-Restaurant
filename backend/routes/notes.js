const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>{
    obj = {
        a:"this is notes",
        number: 55
    }
    res.json(obj)
})

module.exports = router