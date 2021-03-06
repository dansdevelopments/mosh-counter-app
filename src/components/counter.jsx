import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
