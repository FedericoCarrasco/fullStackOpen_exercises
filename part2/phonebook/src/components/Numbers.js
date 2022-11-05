const Numbers = ({persons, filter}) => {
    
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons
                .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                .map(person => <li key={person.name}>{person.name}: {person.number}</li>)
                }
            </ul>
        </div>
    )

}

export default Numbers