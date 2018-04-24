import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleAddOne() {
    console.log('+1');
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    });
  }


  handleMinusOne() {
    console.log('-1');
    this.setState((prevState) => {
      return {
        counter: prevState.counter <= 0 ? 0 : prevState.counter - 1
      };
    });
  }

  handleReset() {
    console.log('reset');
    this.setState(() => {
      return {
        counter: 0
      }
    });
  }

  render() {
    return (
        <div>
          <h1>Count: {this.state.counter}</h1>
          <button onClick={() => this.handleAddOne()}>+1</button>
          <button onClick={() => this.handleMinusOne()}>-1</button>
          <button onClick={() => this.handleReset()}>reset</button>
        </div>
    );
  }

}

export default Counter;