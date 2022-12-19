const landing = require('../models/landing')
const express = require('express')
const router = express.Router()  

    router.get('/', async (req, res) => {                      
     res.send(await landing.find({}).select('name mass'))
    })

    router.get('/',async (req,res)=>{
        const params=req.query
        if (params.minimum_mass){ 
             res.send(await landing.find({mass: {$gte: params.minimum_mass}}).select('name mass'))
        }else if (params.from && params.to){
            res.send(await landing.find({$and: [{fall: "Fell"}, {year: {$gte: params.from, $lte: params.to}}]}).select('name year mass'))
        }else if(params.to){
            res.send(await landing.find({year: {$lte: params.to}}).select('name year mass'))
        }else if(params.from){
            res.send(await landing.find({year: {$gte: params.from}}).select('name year mass'))
        }                             
    })     

    router.get('/:mass', async (req, res) => {
        const params= req.params.mass
        res.send(await landing.find({mass:{$gte: params }}).select ('mass name'))
    })

    router.get('/class/:dat', async (req, res) => {
        const params= req.params.dat.toUpperCase();
        res.send(await landing.find({recclass : params }).select ('recclass name'))
    })

    router.post('/create',async (req,res)=>{
        const create = new landing(req.body);
        res.send(await create.save())
    })

    router.put('/edit/:id',async(req,res)=>{
        res.send(await landing.findOneAndUpdate({id:req.params.id},req.body))
    })

    router.delete('/delete/:id',async (req,res)=>{
       res.send( await landing.findOneAndDelete({id:req.params.id}))
    })


module.exports = router

