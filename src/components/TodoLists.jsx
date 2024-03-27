import { useState } from "react";
import iconCross from "../assets/icon-cross.svg";
import iconCheck from "../assets/icon-check.svg";

function TodoLists({
  todoLists,
  filteredTodos,
  handleChecked,
  removeTodo,
  colorMode,
  handleCompleted,
}) {
  const itemsLeft = todoLists.filter((todo) => !todo.isChecked).length;

  return (
    <div className={`todo-lists container ${colorMode ? " dark " : " light "}`}>
      {todoLists.map((todoList) => (
        <div key={todoList.id}>
          <div className={`todos flex ${colorMode ? " dark" : " light"} `}>
            {!todoList.isChecked ? (
              <input
                type="radio"
                id={todoList.id}
                name={todoList.todo}
                checked={todoList.isChecked}
                className={`cursor ${colorMode ? " dark " : " light "}`}
                onChange={() => handleChecked(todoList.id)}
              />
            ) : (
              <img
                src={iconCheck}
                alt="check icon"
                className={`icon-check ${colorMode ? " dark " : " light "} `}
                onClick={() => handleChecked(todoList.id)}
              />
            )}

            <label
              htmlFor={todoList.id}
              className={`cursor ${todoList.isChecked ? "completed" : ""}`}
            >
              {todoList.todo}
            </label>
            <img
              className="allign-right"
              src={iconCross}
              alt=""
              onClick={() => removeTodo(todoList.id)}
            />
          </div>
        </div>
      ))}
      <div className={`flex todos-bottom ${colorMode ? "  dark" : " light"}`}>
        <p className="allign-left">{itemsLeft} items left</p>
        <p className="allign-right" onClick={handleCompleted}>
          Clear Completed
        </p>
      </div>
    </div>
  );
}

export default TodoLists;
