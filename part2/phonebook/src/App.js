import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} filterSet={setFilter}/>
      <AddPersonForm persons={persons} personsSet={setPersons}/>
      <Numbers persons={persons} filter={filter}/>
    </div>
  )
}

export default App