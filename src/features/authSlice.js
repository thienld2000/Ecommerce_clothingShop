// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState={
//     user:null,
//     error:null,
//     loading:false
// }
// export const loginUser = createAsyncThunk(
//         'user/loginUser',
//         async(userCredencial) =>{
//             const request= await fetch("http://localhost:8001/user",
//            { method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify(userCredencial)
//         });
//         return await request.json();
//         })
// const authSlicer = createSlice({
//     name: 'user',
//     initialState,
    
//     extraReducers:(builder)=>{
//         builder
//             .addCase(loginUser.pending,(state)=>{
//                 state.loading=true;
//                 state.user = null;
//                 state.error= null;
//             })
//             .addCase(loginUser.fulfilled,(state,action)=>{
//                 state.loading=false;
//                 state.user = action.payload;
//                 state.error=null;
//             })
//             .addCase(loginUser.rejected,(state,action)=>{
//                 state.loading=true;
//                 state.user = null;
//                 state.error=action.error.message;
//                 console.log(action.error.message)
//                 if(action.error.message==="Failed to fetch"){

//                 } else if(action.error.message==""){

//                 }
//             })
//     }
    
// })
// export default authSlicer.reducer;
