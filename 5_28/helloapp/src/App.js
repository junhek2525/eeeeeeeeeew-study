
// import logo from './logo.svg';
// import './App.css';
import { Fragment } from "react";
const name = '리액ㅁㅇㅁㄴㅇㅁㄴㅇㄴㅁㄹ트';
const number = 0;
const test = undefined

const style = {
backGroundColor : 'black',
color:'aqan',
fontSize : '40px',
padding : 16
};
function App() {
  return (
      // test || '값이 undfined입니다.'
       <Fragment>
 {/*         
//       {name === '리액트' ?(
//         <h1>리액트입니다.</h1>
//       ) : (
//         <h1>리액트입니다.</h1>
//       )} */}
      
      {/* {name === '리액트' ? <h1>리액트입니다.</h1> : null}; */}
      {/* {name === '리액트' && <h1>리액트입니다.</h1>}; */}
      {/* {number === '리액트' && <h1>리액트입니다.</h1>}; */}
      
    
        {/* {test} */}
        <div style={style}>{name}</div>
       </Fragment> 
  );
}

export default App;
// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>