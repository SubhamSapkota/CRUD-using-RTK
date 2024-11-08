// defining store variable and initializing it 

//the main task of slice is to initialize and to reinitialize 
import {createSlice} from "@reduxjs/toolkit"

const initialStateValue={
  title:" ",
  description:" "

}

export const counterSlice = createSlice({
    // give unique name
    name:"product",
    // this name can be any, note the type of action will be name / reducer eg counteryou/
    // just remember use unique name
    initialState:initialStateValue,
    reducers:{
      changeTitle:(state,action)=>{
        state.title=action.payload
      },
      changeDescription:(state,action)=>{
        state.description=action.payload
      },
    },
})

export const {changeTitle,changeDescription} = counterSlice.actions

export default counterSlice.reducer