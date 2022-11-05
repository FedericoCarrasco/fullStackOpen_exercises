const Filter = ({value, filterSet}) => {

    const handleFilterChange = (event) => {
        filterSet(event.target.value)
    }

    return (
        <div>
            Filter: <input
                value={value}
                onChange={handleFilterChange}
            />
        </div>
    )

}

export default Filter