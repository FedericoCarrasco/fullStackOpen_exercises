const Total = ({parts}) => {
    let exercises = parts.map((part) => part.exercises)
    let total = exercises.reduce(
       (sum, current) => sum + current)

    return <p>Number of exercises {total}</p>
}
export default Total