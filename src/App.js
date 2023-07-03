import React from 'react';
import './App.css';
import { Button } from './button';

class App extends React.Component {
  state = {
    count: 0,
  }

  add = () => {
    this.setState({count: this.state.count += 1})
  }

  minus = () => {
    this.setState({count: this.state.count -= 1})
  }
  
  render() {
    
      
    return (
      <>
        <h1>counter: {this.state.count}</h1>
        <Button text='Dodaj' onClick={this.add} />
        <Button text='Odejmij' onClick={this.minus} />
      </>
    );
  }
}

export default App;
