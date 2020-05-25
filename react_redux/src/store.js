import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getItem, setItem } from "./util/LocalStorage";

// const initial_state = getItem("toDos") ? getItem("toDos") : [];

// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const reducer = createReducer(initial_state, {
//   [addTodo]: (state, action) => {
//     const toDo = { text: action.payload, id: Date.now() };
//     setItem("toDos", [toDo, ...state]);
//     state.push(toDo);
//   },
//   [deleteTodo]: (state, action) =>
//     setItem(
//       "toDos",
//       state.filter((e) => e.id !== parseInt(action.payload))
//     ),
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: getItem("toDos") ? getItem("toDos") : [],
  reducers: {
    add: (state, action) => {
      const toDo = { text: action.payload, id: Date.now() };
      setItem("toDos", [toDo, ...state]);
      state.push(toDo);
    },
    remove: (state, action) =>
      setItem(
        "toDos",
        state.filter((e) => e.id !== parseInt(action.payload))
      ),
  },
});

console.log(toDos);

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
