import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = (state = [], action) => {
  if (localStorage.getItem("toDos"))
    state = JSON.parse(localStorage.getItem("toDos"));

  switch (action.type) {
    case addTodo.type:
      let addState = [{ text: action.payload, id: Date.now() }, ...state];
      localStorage.setItem("toDos", JSON.stringify(addState));
      return addState;
    case deleteTodo.type:
      let originState = JSON.parse(localStorage.getItem("toDos")).filter(
        (e) => e.id !== parseInt(action.payload)
      );

      localStorage.setItem("toDos", JSON.stringify(originState));

      return originState;
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
