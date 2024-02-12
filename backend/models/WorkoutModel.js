const mongoose = require("mongoose")

const schema=mongoose.Schema

const WorkoutSchema=new schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: true
    }
},{timestamps: true})

module.exports=mongoose.model('Workout',WorkoutSchema)
