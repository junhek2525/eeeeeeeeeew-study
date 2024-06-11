//벼열 비구주와 할당
//기존 배열의 선언 형식 방식을 보면 const array = [1,2]; 선언한다.
//이 배열의 값을 변수에 할당하려면 const one = [0] // const two =[1] 이런식
//배열 비구조와 할당을 하면 const [one,two] = array
//따라서 배열의 값을 쉽게 추출할 수 있다.

//state의 올바른 사용
//const [object,setobject] = useState({a:1,b:1});
// setObjeck({a:1,b:2});
import { useState } from "react";

const Say = () =>{
    const [message, setMessage] = useState('');//useStart는 초기;값을 넣어 주어야함
    //배열의 첫번째(message => 현재 상태)배열의 두번째 (setMessage => 상태를 바꾸어주는 함수)
    //벼\ㅐ열의 두번째를 세터(setter) 라는 이름을 부른다.
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안 녕 하 세 요');

    const [color,Setcolor] = useState('');

    return (
        <div>
            <button style={{ color : 'blue'}} onClick={onClickEnter}>입장</button>
            <button style={{ color : 'red'}} onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{ color : 'red'}} onClick={()=> Setcolor('red')}>빨간색</button>
            <button style={{ color : 'orange'}} onClick={()=> Setcolor('orange')}>주황색</button>
            <button style={{ color : 'yellow'}} onClick={()=> Setcolor('yellow')}>노란색</button>
            <button style={{ color : 'yellowgreen'}} onClick={()=> Setcolor('yellowgreen')}>연두색</button>
            <button style={{ color : 'green'}} onClick={()=> Setcolor('green')}>초록색</button>
            <button style={{ color : 'skyblue'}} onClick={()=> Setcolor('skyblue')}>하늘색</button>
            <button style={{ color : 'blue'}} onClick={()=> Setcolor('blue')}>파란색</button>
            <button style={{ color : 'purple'}} onClick={()=> Setcolor('purple')}>보라색</button>
            <button style={{ color : 'pink'}} onClick={()=> Setcolor('pink')}>분홍색</button>
        </div>
    );
};
export default Say;