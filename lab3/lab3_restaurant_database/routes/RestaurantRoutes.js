// Carlos Arellano - 101339585

const express = require('express');
const router = express.Router();
const restaurantModel = require('../models/Restaurant');

// Getting all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await restaurantModel.find({});
        res.status(200).send(restaurants);
      } catch (err) {
        res.status(500).send(err);
      }  
    
})
// Getting by cuisine
// http://localhost:8081/restaurants/cuisine/japanese
router.get('/cuisine/:type', async (req, res) => {
    const type = req.params.type
    const restaurants = await restaurantModel.find({cuisine: type});
    try {
        if(restaurants.length != 0){
          res.send(restaurants);
        }else{
          res.send(JSON.stringify({status:false, message: "No data found"}))
        }
      } catch (err) {
        res.status(500).send(err);
      }
  
})
// Getting Sorted Column
// http://localhost:8081/restaurant?sortBy=
router.get('/', async (req, res) => {
    const restaurants = await restaurantModel.find().select("city cuisine name restaurant_id").sort({ restaurant_id: req.query.sortBy });
    try {
        res.status(200).send(restaurants);
      } catch (err) {
        res.status(500).send(err);
      }
  
})

// Getting Delicatessen
// http://localhost:8081/restaurant/delicatessen
router.get('/delicatessen', async (req, res) => {
    try {
        const restaurants = await restaurantModel.
            find({})
            .where('cuisine').equals('Delicatessen')
            .where('city').ne('Brooklyn')
            .select('city cuisine name ')
        if (restaurants.length != 0) {
            res.send(restaurants);
        } else {
            res.send(JSON.stringify({ status: false, message: "No data found" }))
        }
    } catch (err) {
        res.status(500).send(err);
    }
});



// Creating one
router.post('/', async (req, res) => {
    console.log(req.body)
    const restaurant = new restaurantModel(req.body);
    try {
        await restaurant.save((err) => {
          if(err){
            res.send(err)
          }else{
            res.status(201).send(restaurant);
          }
        });
      } catch (err) {
        res.status(400).send(err);
      }
    
})

module.exports = router