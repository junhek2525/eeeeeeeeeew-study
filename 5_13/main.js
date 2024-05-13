// let id
// let count2 = 0
// id = setInterval(() =>{
//     console.log(`1초마다 실행됩니다2(${count2})`)
//     count2++
// }, 1 * 1000);
// console.log(`타이어 id는 ${id}`);
// setTimeout(() => {
//     console.log("타이머는 종료됩니다.");
//     clearInterval(id);
// },5*1000);

// let pi = 3.14
// console.log(`main.js의 pi는${pi}`);


//     'use strict'
//     data = 10;
//     console.log(data);



// let 익명_함수

// 익명_함수 = function (){
//     console.log('1번째 익명 함수 입니다.');
// }
// 익명_함수 = function (){
//     console.log('2번째 익명 함수 입니다.');
// }
// 익명_함수();

// 선인적함수();
// function 선인적함수 (){
//     console.log('1번째 선인적 함수 입니다.');
// }
// function 선인적함수 (){
//     console.log('2번째 선인적 함수 입니다.');
// }

// 함수 = function(){
//     console.log('익명 함수입니다');
// }
// function 함수 (){
//     console.log('선인적 함수 입니다.');
// }

// 함수();

// let 함수2 = function(){
//     console.log('익명함수 입니다.');
// }
// function 함수2(){
//     console.log('선언함수 입니다.');
// }
// 함수2();
// 선언_함수();
// function 선언_함수(){
//     console.log('선언 함수 입니다.');
// }

console.log(typeof([]));
const array = ['사과','바나나','감'];

const product = {
    제품명 : "건조 망고",
    유형: "건조 식품",
    성분: "망고,설탕,색소",
    원산지:"필라핀",
    기능:function(맛있음){}
}
// 리엑트에서는 단순히 웹디자인만 아는게 아니다
// 리엑트의 핵심은 데이터를 이렇게 가공해서 보여주고, 어떻게 저장할것이냐
// 데이터베이스를 얼마나 잘 사용할수 있느냐
// 데이터베이스의 정보를 객체에 저장하기 때문에
// 객체에 있는 메소드를 활용해서 데이터베이스를 정보를 외부로 보여준다.

const pet = {
    name: "코코",
    eat (food){
        alert(this.name+ '은/는'+food+'을/를 먹습니다.');
    }
}
pet.eat('밥');

pet.나이 = '2';
pet.종 = '고양이';
console.log(JSON.stringify(pet,null,2));

delete pet.나이;
console.log(JSON.stringify(pet,null,2));