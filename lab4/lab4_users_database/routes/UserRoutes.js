// Carlos Arellano - 101339585
const express = require('express');
const router = express.Router();
const userModel = require('../models/User');

// Getting all users
router.get('/', async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).send(users);
      } catch (err) {
        res.status(500).send(err);
      }  
})

// Creating user
router.post('/', async (req, res) => {
    console.log(req.body)
    const user = new userModel(req.body);
    try {
        await user.save((err) => {
          if(err){
            res.send(err)
          }else{
            res.status(201).send(user);
          }
        });
      } catch (err) {
        res.status(400).send(err);
      }
    
})

module.exports = router