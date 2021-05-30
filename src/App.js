import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Mohamed Habib Boughanmi",
      profession: "Mechatronics engineer",
      isToggleOn: true,
      count: 0,
      interval: 0,
    };
  }

  

  handleClick() {
    
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  render() {
    const { count } = this.state;
    
      
    
    return (
      <div className={"App"}>
        {this.state.isToggleOn ? (
          <button onClick={this.handleClick.bind(this)}>ON</button>
        ) : (
          <button onClick={this.handleClick.bind(this)}>OFF</button>
        )}
       
        {this.state.isToggleOn ? (
          <div className={"App"}>
            <h1>{this.state.fullName}</h1>
            <h2>{this.state.profession}</h2>
            <h2>{count}</h2>
          </div>
        ) : null}
      </div>
    );
  }

  

  componentWillUnmount() {
  console.log("ererer")
    clearInterval(this.interval);
  }
}

export default App;
