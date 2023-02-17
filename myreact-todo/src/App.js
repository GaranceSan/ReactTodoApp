import "./App.css";
import { useState } from "react";

function App() {
  const [trucs, setTrucs] = useState([]);
  return (
    <>
      <div className="app-wrapper">
        <hi>Liste des trucs urgentissimes : </hi>
      </div>
      <Form
        addTrucMuche={(truc) => {
          setTrucs((prev) => [...prev, truc]);
        }}
      />
      <div className="tasks-list">
        {trucs.map((truc, index) => (
          <Todo key={index}>{truc}</Todo>
        ))}
      </div>
    </>
  );
}

function Form({ addTrucMuche }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const trucText = e.currentTarget.elements.task.value;
    addTrucMuche(trucText);
    console.log({ trucText });
  };
  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      <input
        id="task"
        className="input"
        type="text"
        placeholder="Ajout d'un truc a faire"
      />
      <button type="Submit">Envoi</button>
    </form>
  );
}

function Todo() {
  return (
    <div>
      <Checkbox />
    </div>
  );
}

function Checkbox() {
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
    </div>
  );
}
export default App;
