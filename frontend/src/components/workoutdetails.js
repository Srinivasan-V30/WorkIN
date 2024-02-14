const WorkoutDetails =({workout})=>{
    return (
        <div className="workout-details">
            <h3>{workout.title}</h3>
            <p><strong>Load(Kg) :</strong>{workout.weight}</p>
            <p><strong>Reps :</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}
export default WorkoutDetails