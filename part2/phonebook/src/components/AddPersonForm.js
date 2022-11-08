import { useState } from "react"
import personsService from "../services/persons"

const AddPersonForm = ({persons, setPersons}) => {

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

            if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with the new one?`)) {
                
                if (numberAlreadyExist(personObject.number)) alert(`${personObject.number} is already in use`)
                else {
                    const id = getIdByPersonName(personObject.name)
                    personsService.update(id, personObject)
                        .then(response => {
                            setPersons(persons.map(person => person.id !== id ? person : response.data))
                        })
                    //setPersons(persons.map(person => person.id !== id ? person : response.data))
                }
            }
        }
        else if (numberAlreadyExist(personObject.number)) {
            alert(`${personObject.number} is already in use`)
        }
        else {
            personsService.create(personObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                    setNewName('')
                    setNewNumber('')
                })
        }   
    }

    const nameAlreadyExist = newPersonName => {
        const arr = persons.filter(person => person.name.toLowerCase() === newPersonName.toLowerCase())
        return arr.length > 0
    }

    const numberAlreadyExist = newPersonNumber => {
        const arr = persons.filter(person => person.number === newPersonNumber)
        return arr.length > 0
    }

    const getIdByPersonName = name => {
        return persons.filter(person => person.name === name)[0].id
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