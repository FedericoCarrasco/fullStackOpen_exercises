import CountryDetails from "./CountryDetails"

const Display = ({ countries, setFilter }) => {

    if (countries.length > 10)
        return <p>Too many matches, specify another filter</p>

    else if (countries.length === 0)
        return <p>No matches</p>

    else if (countries.length === 1)
        return <CountryDetails country={countries[0]}/>

    else
        return (
            <ul>
                {
                    countries.map(
                        country => 
                        <li key={country.name.common}>
                            {country.name.common}
                            <button onClick={()=>setFilter(country.name.common)}>Show</button>
                        </li>
                    )
                }
            </ul>
        )

}

export default Display