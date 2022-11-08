import { useEffect, useState } from 'react'
import personsService from './services/persons'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} filterSet={setFilter}/>
      <AddPersonForm persons={persons} setPersons={setPersons}/>
      <Numbers persons={persons} setPersons={setPersons} filter={filter}/>
    </div>
  )
}

export default App