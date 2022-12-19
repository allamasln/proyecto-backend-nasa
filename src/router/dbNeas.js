const neas = require('../models/neas')
const express = require('express')
const router = express.Router()  

    router.get('/', async(req,res)=>{
     res.send(await neas.find({orbit_class:req.query.orbit_class.charAt(0).toUpperCase() + req.query.orbit_class.slice(1)}).select('designation period_yr')) 
    })

    router.get('/', async (req, res) => {
        const params= req.query
        if(params.from && params.to){
            res.send(await neas.find({$and:[{discovery_date:{$gte:params.from , $lte: params.to}}]}).select('designation discovery_date period_yr'))
        }else if(params.form){
            res.send(await neas.find({discovery_date:{$gte:params.from}}).select('designation discovery_date period_yr'))
        }else if(params.to){
            res.send(await neas.find({discovery_date:{$lte:params.to}}).select('designation discovery_date period_yr'))
        }
    })
    
    router.post('/create',async (req,res)=>{
        const create = new neasSchema(req.body);
        const post= await neas.save()
        res.send(post)
    })

    router.put('/edit/:designation',async(req,res)=>{
        const edit= await neas.findOneAndUpdate({designation:req.params.designation},req.body)

        res.send(edit)

    })

    router.delete('/delete/:designation',async (req,res)=>{
        const eliminado= await neas.findOneAndDelete({designation:req.params.designation})

        res.send(eliminado)

    })

module.exports = router
