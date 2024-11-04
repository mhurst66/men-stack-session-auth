const express = require("express")
const router = express.Router()
const User = require("../models/user.js")

module.exports = router

// Auth Routes
// GET the sign up page
router.get("/sign-up", (req, res) => {
    res.render("auth/sign-up.ejs")
})
// POST the user info to database
router.post("/sign-up", async (req, res) => {
    res.send("Form submission successful")
    const userInDatabase = await User.findOne({ username: req.body.username })
    if (userInDatabase) {
        return res.send("Username already taken.")
    }
    if (req.body.password !== req.body.confirmPassword) {
        return res.send("Password and Confirm Password must match!")
    }
})
