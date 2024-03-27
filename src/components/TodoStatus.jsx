import { useState } from "react";
import { nanoid } from "nanoid";

function TodoStatus({ colorMode, status, handleClicked }) {
  return (
    <div className={`status container flex  ${colorMode ? "dark" : "light"}`}>
      {status.map((status) => (
        <p
          className={`cursor ${status.isClicked ? "status-clicked" : ""}`}
          onClick={() => handleClicked(status.id, status.stat)}
          key={status.id}
        >
          {status.stat}
        </p>
      ))}
    </div>
  );
}

export default TodoStatus;
