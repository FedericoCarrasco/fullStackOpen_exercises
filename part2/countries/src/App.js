import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Display from './components/Display'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  
  let countriesToShow = filter.length === 0 ?
  countries :
  countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  countries.forEach(country => {
    if(country.name.common.toLowerCase() === filter.toLowerCase()) countriesToShow = [country]
  })

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter}/>
      <Display countries={countriesToShow} setFilter={setFilter}/>
    </div>
  )

}

export default App