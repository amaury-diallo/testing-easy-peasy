import { createStore, action, thunk } from "easy-peasy";
import API from "./services/axios";

const store = createStore({
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  saveTodo: thunk(async (actions, payload) => {
    const newTodo = {
      title: payload,
      completed: false,
      userId: 1,
    };

    const { data } = await API.post("/todos", { newTodo });

    newTodo.id = data.id;
    console.log(newTodo);
    actions.addTodo(newTodo);
  }),
});

export default store;
