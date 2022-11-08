const CountryDetails = ({country}) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>{country.capital}</p>
            <p>{country.area}</p>
            <h4>Languages:</h4>
            <ul>
                {Object.keys(country.languages).map(language =>
                    <li key={language}>{language}</li>)}
            </ul>
        </div>
    )
}

export default CountryDetails