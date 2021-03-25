import { PersonInfo } from './PersonInfo'
const style={
    "container": {
       width: '90%',
       paddingTop: 30,
       margin: '0 auto',
      "gridRow": "1/3",
      "display": "flex",
      "flexDirection": "column"
    },
    "title": {
      "fontSize": "36px",
      "textAlign": "center",
      "marginBottom": "50px"
    },
    "list": {
      "listStyle": "none",
      "minHeight": "200px",
      "display": "inherit",
      "flexDirection": "inherit",
      "justifyContent": "space-evenly"
    }
  }
export const DisplayNumbers = ({list})=>{
    return(
    <section style={style.container}>
        <h1 style={style.title}>Agenda</h1>
      <ul style={style.list}>        
          { list.map((person)=><PersonInfo 
            key={person.name}
            person={person} 
            />)}
      </ul>
    </section>
  )}