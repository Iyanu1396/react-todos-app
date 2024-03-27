import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";
import TodoStatus from "./components/TodoStatus";

function App() {
  const [todoLists, setTodos] = useState([
    { id: nanoid(), todo: "Buy groceries", isChecked: false },
    { id: nanoid(), todo: "Complete homework", isChecked: false },
    { id: nanoid(), todo: "Exercise", isChecked: false },
  ]);

  const activeTodos = todoLists.filter((todo) => !todo.isChecked);

  const completedTodos = todoLists.filter((todo) => todo.isChecked);

  const [filteredTodos, setFilteredTodos] = useState(todoLists);

  const [input, setInput] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  const [status, setStatus] = useState([
    { stat: "All", id: nanoid(), isClicked: true },
    { stat: "Active", id: nanoid(), isClicked: false },
    { stat: "Completed", id: nanoid(), isClicked: false },
  ]);

  const handleChecked = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );

    setFilteredTodos((todos) =>
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
    setInput("");

    setTodos((todo) => {
      return [...todo, { id: nanoid(), todo: input, isChecked: false }];
    });

    setFilteredTodos((todo) => {
      return [...todo, { id: nanoid(), todo: input, isChecked: false }];
    });
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    setFilteredTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleColorMode = function () {
    setDarkMode(!darkMode);
  };

  const handleCompleted = () => {
    setTodos((todos) => todos.filter((todo) => !todo.isChecked));
    setFilteredTodos((todos) => todos.filter((todo) => !todo.isChecked));
  };

  const handleClicked = function (id, stat) {
    setStatus((status) =>
      status.map((stat) => {
        return stat.id === id
          ? { ...stat, isClicked: true }
          : { ...stat, isClicked: false };
      })
    );

    if (stat === "All") {
      setFilteredTodos(todoLists);
    }

    if (stat === "Active") {
      setFilteredTodos(activeTodos);
    }

    if (stat === "Completed") {
      setFilteredTodos(completedTodos);
    }
  };

  return (
    <main className={darkMode ? " dark " : " light "}>
      <Header
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleColorMode={handleColorMode}
        colorMode={darkMode}
      />
      <TodoLists
        todoLists={filteredTodos}
        handleChecked={handleChecked}
        removeTodo={removeTodo}
        colorMode={darkMode}
        handleCompleted={handleCompleted}
        key={nanoid()}
      />
      <TodoStatus
        colorMode={darkMode}
        handleClicked={handleClicked}
        status={status}
      />
    </main>
  );
}

export default App;
