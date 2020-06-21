import React from 'react';
import './App.css';
import Squares from './Squares'
import Controls from './Controls';


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      colors: ["white", "white", "white", "white"],
      change: ['none', '20']
    }
  }
  changeColors = (newColors) =>{
    this.setState({
      colors: newColors
    })
  }
  transform = (deg) =>{
    this.setState({
      change: [deg, this.state.change[1]]
    })
  };

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Squares colors={this.state.colors} transforms={this.state.change[0]} />
          <Controls colors={this.state.colors} changeColors={this.changeColors} transforms={this.state.change[0]} transform={this.transform}/>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Squares />
//         <Controls />
//       </header>
//     </div>
//   );
// }

export default App;
