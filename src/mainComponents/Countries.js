//imports
import { useState, useEffect } from 'react'
import axios from 'axios'

//Components
import { InputFormText } from '../Components/InputFormText'
const DisplayCountries = (props)=>{
    const countries = props.countries.map(object=>object.name)
    if ( countries.length===1){
        return(
            <CountryInfo country={props.countries[0]}/>
        )
    } else if (countries.length<10){
        return (
            <div>    
                { countries.map((country,index)=><p key={index} >{country}</p>) }
            </div>
        )
    } else {
        return (
            <p>Demasiadas coincidencias</p>
        )
    }

}

const CountryInfo = (props)=>{

    if(typeof(props.country)==='undefined'){
        console.log('Aun no carga')
        return ( 'Cargando...')
    }
    const flag = `${props.country.flag}`
    console.log(flag)
    return(
        <div>
            <h1>{props.country.name}</h1>
            <p>Capital: {props.country.capital}</p>
            <p>Poblacion: {props.country.population}</p>
            <h2>Lenguajes</h2>
            <ul>
                { props.country.languages.map(language=><li>{language.name}</li>)}
            </ul>
            <img src={flag}/>
        </div>
        )
}
//========================================================
//Main component
export const Countries = ()=>{
    //Hooks
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState([])
    const chargeCountriesFromServer = ()=>{
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response=>{
                console.log('promesa cumplida')
                //const countriesList = [...response.data].slice(0,15)
                const countriesList = response.data
                setCountries(countriesList)
            })
    }
    useEffect(chargeCountriesFromServer,[])
    const arrayCountries = countries.filter(country=>country.name.search(search)>-1)
    return (
        <div>
            <h1>App de paises</h1>
            Buscar pais
            <InputFormText setText={setSearch} />
            <DisplayCountries countries={arrayCountries} />
        </div>
        )
    }
    /*
    
    
*/