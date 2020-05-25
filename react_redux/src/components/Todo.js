import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function Todo({ text, id, deleteTodo }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={deleteTodo}>Del</button>
      </Link>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteTodo: (event) => {
      event.preventDefault();
      dispatch(remove(ownProps.id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Todo);
