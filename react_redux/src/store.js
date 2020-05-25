import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  if (localStorage.getItem("toDos"))
    state = JSON.parse(localStorage.getItem("toDos"));

  switch (action.type) {
    case ADD:
      let addState = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem("toDos", JSON.stringify(addState));
      return addState;
    case DELETE:
      let originState = JSON.parse(localStorage.getItem("toDos")).filter(
        (e) => e.id !== parseInt(action.id)
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
