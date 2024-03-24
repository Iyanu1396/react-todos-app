import { useState } from "react";

function CreateTodo({ input, handleChange, handleSubmit, colorMode }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <input
          className={colorMode ? "create-input dark" : "create-input light"}
          type="text"
          placeholder="Create a new todo..."
          value={input}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default CreateTodo;
