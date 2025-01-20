import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [listaDeTareas, actualizarListaDeTareas] = useState([]);

  const agregarTarea = (textoDeLaTarea) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: textoDeLaTarea,
      completada: false,
    };
    actualizarListaDeTareas((prevTareas) => [...prevTareas, nuevaTarea]);
  };

  const completarTarea = (id) => {
    actualizarListaDeTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    actualizarListaDeTareas((prevTareas) =>
      prevTareas.filter((tarea) => tarea.id !== id)
    );
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskForm onAgregarTarea={agregarTarea} />
      <TaskList
        tareas={listaDeTareas}
        onCompletarTarea={completarTarea}
        onEliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
