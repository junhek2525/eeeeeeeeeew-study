import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목,글제목변경] = useState(['남자 코드 추천','ㄹㅁ','ㄱㄹ']);
  let [따봉,따봉변경] = useState(0);
  //let [name,age] = ['kim',20];
  function 함수(){
    console.log(1);
  }
  return (
    <div className="App">
      <div className="black-nav">

        <div >개발 blog</div>
        </div>
        <button onClick={()=> {
          let copy = [...글제목];
          copy[0] = '다리거미';
          글제목변경(copy);
        }}>글 수정</button>
        <button onClick={ () => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy)

        }}>정렬버튼

        </button>

        <div className='list'>
          <h4>{글제목[0]}<span onClick={() => {따봉변경(따봉+1)}}>1212</span> {따봉} </h4>
          <p>6월 25일 작성</p>
          
        
      </div>
      <div className='list'>
          <h4>{글제목[1]}</h4>
          <p>6월 25일 작성</p>
          
        
      </div>
      <div className='list'>
          <h4>{글제목[2]}</h4>
          <p>6월 25일 작성</p>
          
        
      </div>
    
        <Modal/>
    
    </div>
  );
}
function Modal(){
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    

    </div>);
}

export default App;
// style={{color: 'blue'}}
{/* <div>{ post }</div> */}