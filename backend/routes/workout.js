const express = require('express')
const {
    postWorkout,
    getAllWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
    }=require("../controllers/workoutController")
const router = express.Router()


//Get all workouts
router.get("/",getAllWorkout)
//Get single workout
router.get("/:id",getWorkout)
//Post a workout
router.post("/add",postWorkout)
//Delete a workout
router.delete("/:id",deleteWorkout)
//Update a workout
router.patch("/:id",updateWorkout)
module.exports=router