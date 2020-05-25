import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Detail({ history, toDo, deleteTodo }) {
  if (toDo === undefined) history.push("/");
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <button onClick={deleteTodo}>Del</button>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  const {
    match: {
      params: { id },
    },
    history,
  } = ownProps;

  return {
    deleteTodo: () => {
      dispatch(actionCreators.deleteTodo(id));
      history.push("/");
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
