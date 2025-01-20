import { useState } from "react";

function TaskForm({ onAgregarTarea }) {
  const [texto, setTexto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() !== "") {
      onAgregarTarea(texto);
      setTexto("");
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
