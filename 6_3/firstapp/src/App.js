import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent';
// function App() {
//   // return (
//     // <div className="App">

//     const name = '리액트';
//     return <div className="react">{name}</div>;

    












//     //   {/* <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header> */}
//     // </div>
//   // );
// }

// extends Component

function App(){

  return <MyComponent name={3}>리액트</MyComponent>;
  // render() {
  //   const name = 'react';
  //   return <div className="react">{name}</div>;
  // }
}

export default App;