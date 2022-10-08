import React from 'react';

class ClassCounter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.incFunc = this.incFunc.bind(this);
    this.decFunc = this.decFunc.bind(this);
  }

  incFunc(){
    this.setState({count: this.state.count + 1});
  }
  decFunc(){
    this.setState({count: this.state.count - 1});
  }

  render(){
    return (
      <div>
        <h1> count = {this.state.count}</h1>
        <button onClick={this.incFunc}>Increment</button>
        <button onClick={this.decFunc}>Decrement</button>
      </div>
    )
  }
}

export default ClassCounter;