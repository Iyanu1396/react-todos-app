import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";

function App() {
  const [todoLists, setTodos] = useState([
    { id: nanoid(), todo: "Buy groceries", isChecked: false },
    { id: nanoid(), todo: "Complete homework", isChecked: false },
    { id: nanoid(), todo: "Exercise", isChecked: false },
  ]);

  const [input, setInput] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  const handleChecked = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((todo) => {
      return [...todo, { id: nanoid(), todo: input, isChecked: false }];
    });
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleColorMode = function () {
    setDarkMode(!darkMode);
  };

  const handleCompleted = () => {
    setTodos((todos) => todos.filter((todo) => !todo.isChecked));
  };

  return (
    <main className="dark">
      <Header
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleColorMode={handleColorMode}
        colorMode={darkMode}
      />
      <TodoLists
        todoLists={todoLists}
        handleChecked={handleChecked}
        removeTodo={removeTodo}
        colorMode={darkMode}
        handleCompleted={handleCompleted}
        key={nanoid()}
      />
    </main>
  );
}

export default App;
