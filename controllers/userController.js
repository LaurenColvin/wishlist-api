//user controller
const express = require('express');
const router = express.Router();

//import model
const User = require("./../models/User")

//returns all users and their data
router.get("/", (req, res) => {
    User.find({}).populate('item').then((user) => {
        res.json({
            status: 200,
            user: user,
        });
    });
});

//returns a single user and their data
router.get("/:id", (req, res) => {
    User.findById(req.params.id).populate('wishlistItems').then((user) => {
        res.json({
            status: 200,
            user: user,
        })
    })
})

//create new user
router.post("/", (req, res) => {
    const userData = req.body;
    User.create(userData).then((user) => {
        res.json({
            status: 200,
            user: user,
        })
    })
})

//update user
router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((user) => {
        res.json({
            status: 200,
            user: user,
        })
    })
})

//delete user- currently not being used, plan to add in future versions.
router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id).then((user) => {
        res.json({
            status: 200,
            user: user,
        })
    })
})


module.exports = router;