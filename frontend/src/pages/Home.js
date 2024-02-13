import { useEffect , useState } from "react"

import WorkoutDetails from "../components/workoutdetails"
import WorkoutForm from "../components/workoutform"
const Home=()=>
{
    const [workouts,setWorkouts]=useState(null)
    useEffect(()=>{
        const fetchWorks = async()=>{
            const response=await fetch('http://localhost:4000/workout')
            const json=await response.json()
            if (response.ok)
            {
                setWorkouts(json)
            }
            // const response=async()=>{
            //  await axios.get("/workouts")
            //     .then(res=> res)
            //     .error(err=>console.log(err))
            // }
           
            // if (response.ok)
            // {
            //     setWorkouts(json)
            // }
        }
        fetchWorks()
    },[])
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}     
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home