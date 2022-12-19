const {User, validate} = require('../models/user')
const express= require('express')
const router = express.Router()

    router.post('/Create', async(req,res)=>{
        const {error} = validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        const create= new User(req.body)
        res.send(await create.save())     
    })

    router.get('/',async(req,res)=>{
            res.send(await User.find({email:req.query.email}).select('name email'))                   
    })

    router.put('/edit/:email',async(req,res)=>{
       const {error} = validate(req.body)
       if (error) return res.status(400).send(error.details[0].message)

       const editado= await User.findOneAndUpdate({email:req.params.email},req.body)
       res.send(editado)
    })

    router.delete('/delete/:email',async (req,res)=>{
       res.send( await User.findOneAndDelete({email:req.params.email}))
    })

module.exports = router




