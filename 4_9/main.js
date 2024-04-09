function funName() {
    console.log("함수 실행");
}
funName();

function returnFunc(){
    return 123;
    //console.log("함수가 실행되있음");
}
const a = returnFunc();
console.log(a);


//함수를 만드는 목적
//1. 코드 재사용
//2. 코드를 깔끔하게 보이게

function sum(a,b){
    return a+b;
}
const number = sum(1,2);
const number1 = sum(3,4);
const number2 = sum(5,6);
// 기명 함수
function hello(){
    console.log("hello");
}
hello();

//익명 함수
const world = function (){
    console.log("hihi");
}

//함수의 재사용 예시
function handler(){
    console.log("clicked!");
}

document.body.addEventListener('click',handler);
handler();
handler();
document.body.addEventListener('click',function(){


})

//메소드
const object1 = {
    name : "기린",
    age: 111111,
    getName: function(){
        return this.name;
    }
}
const hisname = object1.getName();
console.log(hisname);
console.log(Object.getName());

//js조건문 1.if문 2.switch문

const isShow = true;
const checked = false;

if(isShow){
    console.log("Show!");
}else{
    console.log('Hide?');
}


//if(checked){
//    console.log("Checked!");
//}
//console.log(ABC);
//switch (condition){
//    case value1:
  //      state1;
//        break;
//    case value2:
//        state2;
 ///       break;
//    default:
//        state3;

//}

// function caseInSwitch(val){
//     let answer = "DD";
//     switch (val){
//         case 1:
//             answer = "alpha"
//             break;
//         case 2:
//             answer = "bravo"
//             break;
//     }
//     return answer;
// }
// console.log(caseInSwitch(3));

// function switchOfStuff(val){
//     let answer = "";
//     switch (val){
//         case "a":
//             answer = "apple"
//             break;
//         case "B":
//             answer = "bird"
//             break;
//             default:
//             answer = "stuff"
//             break;
//     }
//     return answer;

// }
// console.log(switchOfStuff(1));
// console.log(switchOfStuff("a"));

// function chainToSwitch(val){
//     let answer = "";
//     if (val === "bob"){
//         answer = "Marley";
//     }else  if(val === 42){
//         answer = "The Answer";
//     } else if(val === 7){
//         answer = "byebye";
//     }
// }
// function chainToSwitch(val){
    
//         answer = "byebye";
//     }
//     return answer;
// }
// function chainToSwitch(val){
//      let answer = "";
//      switch(){
//      case "bob":
//          answer = "Marley";
//      }else  if(val === 42){
//          answer = "The Answer";
//      } else if(val === 7){
//          answer = "byebye";
//      }
//  }


// 반복문
// for ,for in, for of, forEach,while, do while ...........
for(let i=0;i<10;i++){
    console.log(i);
}
for(const key in obj){
    console.log(key);
    console.log(obj.name. obj.age);
    console.log(`key값: ${key}`);
    console.log(`value값: ${obj[key]}`);
}

const array = ['1번','2번','3번'];

for(const element of array){
    console.log(element);
    console/log(array);
}

//foreach for of 랑 비슷

array.forEach((element)=>{
    console.log(element);
})

while(condition){

}
do{

}while(condition)




