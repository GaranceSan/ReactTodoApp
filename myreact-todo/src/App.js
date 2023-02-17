import "./App.css";
import { useState } from "react";

function App() {
  const [trucs, setTrucs] = useState([]);
  console.log(trucs);
  return (
    <>
      <div className="app-wrapper">
        <hi>Liste des trucs urgentissimes : </hi>

        <Form
          addTrucMuche={(task) => {
            setTrucs((prev) => [...prev, task]);
          }}
        />
        <div className="tasks-list">
          {trucs.map((task, index) => (
            <Todo
              onDelete={() => {
                setTrucs((prev) => {
                  return prev.filter((_, y) => index !== y);
                });
              }}
              key={index}
            >
              {task}
            </Todo>
          ))}
        </div>
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

function Todo({ onDelete, children }) {
  return (
    <div>
      <Checkbox />
      <span className="task-details">{children}</span>
      <button onClick={onDelete} className="taskDelete">
        p
      </button>
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
