import "./App.css";
import { useState } from "react";
import { FiTrash } from "react-icons/fi";

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
              key={index}
              onDelete={() => {
                setTrucs((prev) => {
                  return prev.filter((_, y) => index !== y);
                });
              }}
              task={task}
            />
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
    e.currentTarget.reset();
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

function Todo({ onDelete, task }) {
  return (
    <div className="task-item">
      <Checkbox />
      <span className="task-details">{task}</span>
      <button onClick={onDelete} className="task-delete">
        <FiTrash />
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
