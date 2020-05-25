import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { getItem, setItem } from "./util/LocalStorage";

const initial_state = getItem("toDos") ? getItem("toDos") : [];

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = createReducer(initial_state, {
  [addTodo]: (state, action) => {
    const toDo = { text: action.payload, id: Date.now() };
    setItem("toDos", [toDo, ...state]);
    state.push(toDo);
  },
  [deleteTodo]: (state, action) =>
    setItem(
      "toDos",
      state.filter((e) => e.id !== parseInt(action.payload))
    ),
});

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
