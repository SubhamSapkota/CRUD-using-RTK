// defining store variable and initializing it 

//the main task of slice is to initialize and to reinitialize 
import {createSlice} from "@reduxjs/toolkit"

const initialStateValue={
  city:"Harion,Sarlahi",
  province:"Madhesh"

}

export const counterSlice = createSlice({
    // give unique name
    name:"address",
    // this name can be any, note the type of action will be name / reducer eg counteryou/
    // just remember use unique name
    initialState:initialStateValue,
    reducers:{
      changeAddress:(state,action)=>{
        state.city=action.payload
      }
    },
})

export const {changeAddress} = counterSlice.actions

export default counterSlice.reducer