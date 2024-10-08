import { configureStore,createSlice } from "@reduxjs/toolkit";


let user = createSlice({
  name : 'user',
  initialState : {name :'kim', age : 20},
  reducers : {
      changeName(state,myname) { //여기서 state는 기존 state의 값 
          // 여기는 state값을 변경하는 함수입니다.
         state.name = myname.payload
      },
      addAge(state,abc){
        
        state.age += abc.payload
      }
  }
 
})
let stock = createSlice({
  name: 'stock',
  initialState : [10,11,12]
})
export let {changeName,addAge} = user.actions
let cart = createSlice({
  name: 'cart',
  initialState : [
    {id: 0, name : 'white and black', count : 2,defaultCount :2},
    {id: 2, name : 'Grey Yordan', count : 1,defaultCount :1}
  ],
  reducers : {
    addCount(state,action){
      state[action.payload].count++
    },
    minusCount(state,action){
      if(state[action.payload].count>state[action.payload].defaultCount)
      {
        state[action.payload].count--
      }
      
    }
  }
})
export let {addCount,minusCount} = cart.actions

export default configureStore({
  reducer : {
    user : user.reducer,
    stock: stock.reducer,
    cart : cart.reducer
   }
})