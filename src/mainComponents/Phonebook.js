import { useEffect, useState } from 'react'
//SERVICES
import { getPersonsList } from '../services/PhoneBookServices'
//COMPONENTS
import { Searcher } from '../Components/Searcher'
import { FormInput } from '../Components/FormInput'
import { DisplayNumbers } from '../Components/DisplayNumbers'

export const Phonebook = ()=>{
    //hooks
    const [ persons, setPersons ] = useState([]) 
    const [search, setSearch] = useState('')
    const effectGetList = ()=>
      getPersonsList()
      .then(persons=>{
        setPersons(persons)
      })
        
    useEffect(effectGetList,[])
    //styles
    const styleHeader={
      background: 'linear-gradient(90deg,hsla(220, 80%, 40%, 0.6),teal)'
    }
    const header__title = {
      color: '#ccc',
      textShadow: '0 0 6px #000 ',
      padding: 30,
      textAlign: 'center'
    }
    const grid={
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gridTemplateRows: '150px 1fr'
    }
    //handlers
    const changeSearch = (event)=>setSearch(event.target.value) 
    const showPersons = search.length===0
    ? persons
    : persons.filter((person)=>person.name===search)
      return (
        <div>
          <header style={styleHeader} >
            <h1 style={ header__title }>Agenda Telefonica</h1>
          </header>
          <main style={ grid }>
            <Searcher value={search} change={changeSearch} />
            <FormInput persons={persons} setPersons={setPersons}/>
            <DisplayNumbers list={showPersons}/>
          </main>
        </div>
      )
    }