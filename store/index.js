import { createStore, action, thunk } from "easy-peasy";
import userModel from "./models/user";
import API from "../services/axios";

const todoModel = {
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

    const { data } = await API.post("/todos", newTodo);

    console.log(data);
    actions.addTodo(data);
  }),
};

const storeModel = {
  auth: userModel,
  todos: todoModel,
};

const store = createStore(storeModel);

export default store;
