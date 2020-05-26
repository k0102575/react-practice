import React, { Component, Fragment } from "react";

const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const { pizzas } = state;

  return pizzas < MAX_PIZZAS ? { pizzas: pizzas + 1 } : null;
};

class Controlled extends Component {
  state = {
    pizzas: 0,
  };
  render() {
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>{`I haven eten ${pizzas} ${
        pizzas === 1 ? "pizza" : "pizzas"
      }`}</button>
    );
  }

  _handleClick = () => {
    this.setState(eatPizza);
  };
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <Controlled />
      </Fragment>
    );
  }
}

export default App;
