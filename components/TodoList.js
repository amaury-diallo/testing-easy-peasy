import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const TodoList = () => {
  const todos = useStoreState((state) => state.todos);
  const saveTodo = useStoreActions((actions) => actions.saveTodo);
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => saveTodo(value)}>Add Todo</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
