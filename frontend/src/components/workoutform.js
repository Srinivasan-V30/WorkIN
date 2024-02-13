import { useState } from "react"
import axios from 'axios'

const WorkoutForm=()=>{
    const [title , setTitle]=useState('')
    const [load , setLoad]=useState('')
    const [reps , setReps]=useState('')
    const [error , setError]=useState(null)

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const workout ={title,weight: load,reps}
        
        const response=await fetch('http://localhost:4000/workout/add',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }

        })
        const json=await response.json()

        // const data = await axios.post("http://localhost:4000/workout/add", workout)


        if (!response.ok)
        {
            setError(json.error)
        }
        if (response.ok)
        {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log("New workout added",json)
        }
        // if (data){
        //    setTitle('')
        //     setLoad('')
        //     setReps('')
        //     setError(null)
        //     console.log("New workout added",json)
        // }

    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h2>Add a new workout</h2>
            <label>Exercise Title:</label>
            <input 
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />
            <label>Load (in KG):</label>
            <input 
            type="number"
            onChange={(e)=>setLoad(e.target.value)}
            value={load}
            />
            <label>No. of Reps:</label>
            <input 
            type="number"
            onChange={(e)=>setReps(e.target.value)}
            value={reps}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default WorkoutForm