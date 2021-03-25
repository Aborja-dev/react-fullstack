import { useState } from "react";
import './App.css'
//Componentes
import Course from './mainComponents/CourseInfo'
import { Notes } from './mainComponents/Notes'
import { Phonebook } from './mainComponents/Phonebook'
import { Countries } from './mainComponents/Countries'

const OptionButton = ({option,handler})=>{
	
}
//===================================================================
//Styles
const style = {
	container: {
		background: 'linear-gradient(90deg,hsla(220, 80%, 40%, 0.6),teal)'
	},
	title: {
		textAlign: 'center',
		paddingTop: '35px',
		color: '#eee',
		fontSize: '26px'
	},
	menuList: {
		listStyle: 'none',
		display: 'flex',
		width: '100%',
		justifyContent: 'space-around',
		fontSize: '28px',
		padding: '25px',
		color: '#eee'
	},
	menuItem: {
		textTransform: 'capitalize'
	}

}

function App() {
	//Constantes
	const dom = document
	const options = ['cursos', 'notas', 'telefono', 'paises']
	//Handlers
	const clickMenu = (event)=>{
		event.target.classList.add('active')
		const target = dom.querySelector('.active')
		const activeOption = target.textContent
		setOption(activeOption)
		target.classList.remove('active')
	}
	//States
	const[option, setOption] = useState('')
	return (
		<div >
			<nav style={style.container}>
				<h1 style={style.title}>Ejercicios Openfullstack parte2</h1>
				<ul style={style.menuList}>
					{ options.map((component)=><li key={component} style={style.menuItem}><a onClick={clickMenu}>{component}</a></li>) }
				</ul>
			</nav>
			<div>
				{ option==='cursos'?<Course />:'' }
				{ option==='notas'?<Notes />:''	}
				{ option==='telefono'?<Phonebook />:'' }
				{ option==='paises'?<Countries />:'' }
			</div>
		</div>
	)
}

export default App;
