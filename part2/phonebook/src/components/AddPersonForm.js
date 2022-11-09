import { useState } from "react"
import personsService from "../services/persons"

const AddPersonForm = ({persons, setPersons, setNotification}) => {

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
                
                if (numberAlreadyExist(personObject.number)) numberAlreadyExistNotification(personObject.number)
                else {
                    const id = getIdByPersonName(personObject.name)
                    personsService.update(id, personObject)
                        .then(response => {
                            setPersons(persons.map(person => person.id !== id ? person : response.data))
                        })
                        .catch(response => {
                            setNotification({status: 'error', content: `Information of ${personObject.name} has already been removed from server`})
                            setTimeout(() => setNotification(null), 5000)
                        })
                }
            }
        }
        else if (numberAlreadyExist(personObject.number)) numberAlreadyExistNotification(personObject.number)
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

    const numberAlreadyExistNotification = number => {
        setNotification({status: 'error', content: `The number: ${number} is already in use`})
        setTimeout(() => setNotification(null), 5000)
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