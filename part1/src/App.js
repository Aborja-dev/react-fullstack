
import './App.css';
import Mensaje from './Mensaje'

const Description = () => {
  return <p>Esta es la app del curso fullstack</p>
}
function App() {
  
  return (
    <div className="App">
      <Mensaje color='red' message='Esto es un'/>
      <Mensaje color='green' message='curso'/>
      <Mensaje color='yellow' message='fullstack de react'/>
      <Description />
    </div>
  );
}

export default App;
