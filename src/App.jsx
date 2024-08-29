import { useState } from 'react'
import Todo from './componentes/Todo';
import "./App.css";
import Todoform from './componentes/Todoform';
import Busca from './componentes/Busca';
import Filtro from './componentes/Filtro';


function App() {

  const [todos,setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },

  ]);

  const addTodo = (text, category) => {

    const newTodos = [
      ...todos,
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodos);
};

const [busca, setBusca] = useState ("");
const [filter, setFilter] = useState ("All");
const [sort, setSort] = useState ("Asc");

const removeTodo = (id) => {
  const newTodos = [...todos];
  const filterdTodos = newTodos.filter((todo) =>
    todo.id !== id ? todo : null
);
setTodos(filterdTodos);
};

const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => 
    todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
);
setTodos(newTodos);
};
  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Busca busca={busca} setBusca={setBusca}/>
    <Filtro filter={filter} setFilter={setFilter}/>
    <div className="todo-list">
      {todos
      .filter((todo) =>
        filter === "All"
        ? true
        : filter === "Completed"
        ? todo.isCompleted
        : !todo.isCompleted
    )
      .filter((todo) => 
      todo.text.toLowerCase().includes(busca.toLowerCase())
    )
    .map((todo) => ( 
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </div>
    <Todoform addTodo={addTodo}/>
  </div>
}

export default App;
