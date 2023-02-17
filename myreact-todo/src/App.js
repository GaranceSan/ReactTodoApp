import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="app-wrapper">
      <hi>Liste des trucs urgentissimes : </hi>
    </div>
    <Form/>
    <Todo/>
    </>
  );
}

const Form = () =>{
  return <div className="from-wrapper"></div>

}

const Todo = () => {
  return(<div><Checkbox /></div>)

}

const Checkbox = () => {
  return <div>

  </div>
}
export default App;
