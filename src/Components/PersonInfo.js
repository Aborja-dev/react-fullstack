
import { deleteUser } from '../services/PhoneBookServices'

const style={
    "item": {
      "display": "flex",
      "margin": "30px 0",
      "width": "80%",
      "fontSize": "26px"
    },
    "delete": {
      "marginRight": "30px",
      "fontSize": "18px",
      "fontWeight": "bold",
      "padding": "10px 30px",
      "borderRadius": "10px",
      "color": "#fff",
      "boxShadow": "0 0 5px #000",
      "background": "linear-gradient(45deg,hsl(180, 40%, 50%),hsl(180, 80%, 35%))"
    },
    "number": {
      "fontWeight": "bold"
    }
  }

export const PersonInfo = ({person, setPersons})=>{
    const clickDeletePerson = ()=>{
      deleteUser(person.id)
    }
    return(
      <li style={style.item}>
            <button style={style.delete} onClick={clickDeletePerson}>Borrar</button>
            <p>{person.name}: <span style={style.number} >{person.number}</span></p>
      </li>
  )}