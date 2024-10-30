"use client";
import { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(async () => {
    const responce = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const result = await responce.json();
    setTodo(result);
  }, []);

  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}
