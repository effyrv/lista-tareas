function TaskList({ tareas, onCompletarTarea, onEliminarTarea }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id} className={tarea.completada ? "completed" : ""}>
          {/* Texto de la tarea */}
          <span onClick={() => onCompletarTarea(tarea.id)}>{tarea.texto}</span>

          {/* Botón eliminar */}
          <button
            onClick={() => onEliminarTarea(tarea.id)}
            className="boton-eliminar"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
