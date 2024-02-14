const { response } = require("express")
const Workout=require("../models/WorkoutModel")
const mongoose=require("mongoose")

//Get all workout
const getAllWorkout=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}
//Get single workout
const getWorkout=async(req,res)=>{
    const {id}=req.params
    const workout=await Workout.findById(id)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"Not valid id"})
    }
    if(!workout)
    {
        return res.status(404).json({Error:"No such workout"})
    }
    res.status(200).json(workout)
}
//Post workout
const postWorkout=async (req,res)=>{
    const {title,reps,weight}=req.body
    const workoutDet={
        title:title,
        reps:reps,
        weight:weight
    }
    console.log(req.body)
    //Exception prone
    try{
        const workout=await Workout.create(workoutDet)
        //For acknowledgement of success
        res.status(200).json(workout)
    }
    catch(err)
    {
        //Failure
        res.status(400).json({Error:err.message})
    }
    
}
//Delete workout
const deleteWorkout=async(req,res)=>{
    const { id }=req.params
    if(mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({Error:"Invalid Object Id"})
    }
    const workout=await Workout.findOneAndDelete({_id: id})
    if(!workout)
    {
        return res.status(404).json({Error:"No workouts found"})
    }
    res.status(200).json(workout)
        

}
//Update workout
const updateWorkout=async(req,res)=>{
    const { id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
       return res.status(404).json({Error:"Invalid Object Id"})
    }
    const workout=await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!workout)
    {
        return res.status(200).json({Error:"No such workout"})
    }
    res.status(200).json(workout)
        

}
module.exports={
    postWorkout,
    getAllWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
}