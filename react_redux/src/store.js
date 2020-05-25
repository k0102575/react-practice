import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";
import { getItem, setItem } from "./util/LocalStorage";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = (state = [], action) => {
  if (getItem("toDos")) state = getItem("toDos");

  switch (action.type) {
    case addTodo.type:
      return setItem("toDos", [{ text: action.payload, id: Date.now() }, ...state]);
    case deleteTodo.type:
      return setItem(
        "toDos",
        getItem("toDos").filter((e) => e.id !== parseInt(action.payload))
      );
    default:
      return state;
  }
};
const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
