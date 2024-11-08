// defining store variable and initializing it 

//the main task of slice is to initialize and to reinitialize 
import {createSlice} from "@reduxjs/toolkit"

const initialStateValue={
  productName:"Dell-3050",
  price:50000,
  quantity: 1,

}

export const counterSlice = createSlice({
    // give unique name
    name:"product",
    // this name can be any, note the type of action will be name / reducer eg counteryou/
    // just remember use unique name
    initialState:initialStateValue,
    reducers:{
      changeProductName:(state,action)=>{
        state.productName=action.payload
      },
      changePrice:(state,action)=>{
        state.price=action.payload
      },
      changeQuantity:(state,action)=>{
        state.quantity=action.payload
      }
    },
})

export const {changeProductName,changePrice,changeQuantity} = counterSlice.actions

export default counterSlice.reducer