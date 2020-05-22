import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const todoAdd = (text) => {
  return {
    type: ADD,
    text,
  };
};
export const todoDelete = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [todoAdd(action.text), ...state];
    case DELETE:
      return state.filter((e) => e.id !== parseInt(action.id));

    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
