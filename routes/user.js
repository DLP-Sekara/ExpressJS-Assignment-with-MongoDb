const express=require('express');
const router=express.Router();
const User=require('../models/user.model')

router.use(express.json())

//get all
router.get('/',async (req,res)=>{
    try{
        const user=await User.find()
        res.json(user);
    }catch (err){
        res.send("error :"+err);
    }
})

//save
router.post('/',async (req,res)=>{
    const user=new User({
        firstName:req.body.firstName,
        surName:req.body.surName,
        gender:req.body.gender,
        dateOfBirth:req.body.dateOfBirth,
        password:req.body.password,
        contact:req.body.contact,
        email:req.body.email
    })
    try {
        const response=user.save();
        res.json(response)
    }catch (err){
        res.send("error :"+err)
    }
})

//search
router.get('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(err) {
        res.send('Err: ' + err)
    }
})

//delete
router.delete('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        const response=await user.remove()
        res.json(response)
    }catch(err) {
        res.send('Err: ' + err)
    }
})

//update
router.put('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
            user.firstName=req.body.firstName,
            user.surName=req.body.surName,
            user.gender=req.body.gender,
            user.dateOfBirth=req.body.dateOfBirth,
            user.password=req.body.password,
            user.contact=req.body.contact,
            user.email=req.body.email
        const response=await user.save()
        res.json(response)
    }catch(err) {
        res.send('Err: ' + err)
    }
})


module.exports=router