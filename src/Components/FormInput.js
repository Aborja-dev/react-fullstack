import { useState } from 'react'
import { addNewPerson, getPersonsList, updateNumber } from '../services/PhoneBookServices'

const style={
   container:{
        width: '90%',
        paddingTop: 30,
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: '50px',
        gridColumn: '1/2',
        gridRow: '2/3'
   },
   form: {
    width: '100%',
    padding: 15,
    border: '3px solid black',
    borderRadius: 10,
    boxShadow: '0 0 5px #000',
   },
    "title": {
        "textAlign": "center",
        "marginBottom": "15px"
    },
    "data": {
        "display": "flex",
        "flexDirection": "column"
    },
    "input": {
        "fontSize": "18px",
        "margin": "10px",
        "border": "none",
        "borderBottom": "1px solid #000"
    },
    "submit": {
        "width": "100%",
        "marginTop": "20px",
        "fontSize": "18px",
        "fontWeight": "bold",
        "padding": "15px",
        "borderRadius": "30px",
        "color": "#fff",
        "background": "linear-gradient(45deg,hsl(180, 40%, 50%),hsl(180, 80%, 35%))"
    }
}


export const FormInput = ({persons, setPersons})=>{
    //Functions
    const repeatName = (names,newName)=>names.some((person)=>person.name===newName)
    //Hooks
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')
    //Handlers
    const addPerson = (event)=>{
        event.preventDefault()
        const newPerson= {
          name: newName,
          number: newPhone
        }
        if(repeatName(persons ,newName)){
            const user = persons.find((person)=>person.name === newName)
            updateNumber(user.id,newPerson)
            getPersonsList()
            .then(persons=>{
              setPersons(persons)
            })      
        }
        else{
          addNewPerson(newPerson)
          .then(personsList => setPersons((personsList)=>personsList.concat(newPerson)))
        }
    }
    const changeName   = (event)=>setNewName(event.target.value)
    const changePhone  = (event)=>setNewPhone(event.target.value)

    //              RETURN
    return (
        <section style = {style.container}>
            <form style= { style.form }onSubmit={addPerson}>
                <h1 style={style.title}>Agregar nuevo</h1>
                <div style={style.data}>
                    <label > Nombre:</label>
                    <input className='phonebook__input' style={style.input} value = {newName} onChange={changeName}/>
                    <label> Number:</label> 
                    <input className='phonebook__input' style={style.input} value = {newPhone} onChange={changePhone}/>
                </div>
                <div>
                <button style={style.submit} type="submit">Agregar</button>
                </div>
            </form>
        </section>
    )
}