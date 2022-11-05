import { useState } from "react"

const AddPersonForm = ({persons, personsSet}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = event => {
        setNewName(event.target.value)
    }

    const handleNumberChange = event => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        if (nameAlreadyExist(personObject.name)) {
            alert(`${personObject.name} is already added to phonebook`)
        }
        else {
            personsSet(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }   
    }

    const nameAlreadyExist = newPersonName => {
        const arr = persons.filter(person => person.name.toLowerCase() === newPersonName.toLowerCase())
        return arr.length > 0
    }

    return (
        <div>
            <h2>Add a person</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input 
                    value={newName}
                    onChange={handleNameChange}/>
                </div>
                <div>
                    Number: <input
                    value={newNumber}
                    onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPersonForm