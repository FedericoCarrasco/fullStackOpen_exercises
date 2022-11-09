import { useEffect, useState } from 'react'
import personsService from './services/persons'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import Numbers from './components/Numbers'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personsService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <Filter value={filter} filterSet={setFilter}/>
      <AddPersonForm persons={persons} setPersons={setPersons} setNotification={setNotification}/>
      <Numbers persons={persons} setPersons={setPersons} filter={filter}/>
    </div>
  )
}

export default App