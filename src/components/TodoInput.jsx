import React, { useState } from "react";

import { Button } from "@mui/material";
export default function TodoInput({ newTodoHandel }) {
  const [newTodo, setNewTodo] = useState("");
  const submitNewTodo = (e) => {
    e.preventDefault();
    if (newTodo.length > 1) {
      newTodoHandel(newTodo);
      setNewTodo("");
    }
  };
  return (
    <div className="new_todo_div">
      <form onSubmit={submitNewTodo}>
        <input
          type="text"
          placeholder="New Todo"
          name="newtodo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          id="newtodo"
        />
        <div className="btn">
          <Button type="submit" variant="contained">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
