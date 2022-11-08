import personsService from "../services/persons"

const Numbers = ({persons, setPersons, filter}) => {
    
    const deletePerson = personToDelete => {
        if (window.confirm(`Do you want to delete ${personToDelete.name}`)) {
            personsService.deleteById(personToDelete.id)
            setPersons(
                persons.filter(person => person.id !== personToDelete.id)
            )
        }
    }

    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons
                .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                .map(person => 
                <li key={person.name}>
                    <p>
                        {person.name}: {person.number}
                        <button onClick={() => {deletePerson(person)}}>
                            Delete
                        </button>
                    </p>
                </li>)
                }
            </ul>
        </div>
    )

}

export default Numbers