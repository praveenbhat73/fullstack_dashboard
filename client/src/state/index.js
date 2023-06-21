import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId:"63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

//the action is created globally so that it can be triggered when the action gets triggered it calls setmode functions
//action way to communicate wuth redux -> type here its setmode , payload -> extra info
//store.dispatch(action)-> its used to call actions

export default globalSlice.reducer;

//redux helps to create a function globally and store it globally
//createslice is a function in the redux package which helps to access redux functions such as state,reducers,actions,selectors
//intialstate is dark
//globalslice function which can be accessed globally
//name -> global , initialstate -> dark
//setmode this accepts one state and changes to another state.
//setMode -> actions -> this changes to different mode.
//reducer changes one state to another.
//selector-> helps to extract specific function from redux store