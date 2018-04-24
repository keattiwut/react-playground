import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginControl from './component/Greeting.jsx';
import NumberList from './component/NumberList';
import RegisterForm from './component/RegisterForm';
import Counter from './component/Counter.jsx';
import VisibleElement from "./component/VisibleElement";
import IndecisionApp from './component/IndecisionApp';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginControl />
        <NumberList />
        <RegisterForm />
        <Counter />
        <VisibleElement/>
      */}
      <IndecisionApp />
      </div>
    );
  }
}

export default App;
