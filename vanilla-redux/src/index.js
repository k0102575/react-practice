import { createStore } from "redux";

/**
 * Count
 */
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;

    default:
      return count;
  }
};
const countOnChange = () => {
  number.innerText = countStore.getState();
};
const countStore = createStore(countModifier);
countStore.subscribe(countOnChange);

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

/**
 * Todo
 */

const form = document.getElementById("form");
const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const ul = document.getElementById("todo-ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const ADD_ACTION_CREATOR = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
const DELETE_ACTION_CREATOR = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((e) => e.id !== parseInt(action.id));

    default:
      return state;
  }
};
const todoStore = createStore(todoReducer);

const deleteTodo = (e) => {
  const id = e.target.parentNode.id;
  todoStore.dispatch(DELETE_ACTION_CREATOR(id));
};

const paintTodos = () => {
  const toDos = todoStore.getState();
  ul.innerHTML = "";
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    li.innerText = todo.text;
    li.id = todo.id;
    btn.innerText = "btn";

    ul.appendChild(li);
    li.appendChild(btn);

    btn.addEventListener("click", deleteTodo);
  });
};

todoStore.subscribe(paintTodos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  todoStore.dispatch(ADD_ACTION_CREATOR(toDo));
};

form.addEventListener("submit", onSubmit);
submitBtn.addEventListener("click", onSubmit);
