import { createSlice } from "@reduxjs/toolkit";
const task = {
     id: 1,
     title: "Redux",
     value: 4,
     total: 21,
     priority: 1,
     deadline: "15 april 2025",
     category: 1,
};
const initialState = {
     value: [],
};

export const taskSlice = createSlice({
     name: "task",
     initialState,
     reducers: {
          addTask: (state) => {
               state.value.push(task);
          },
     },
     // extraReducers: (builder) => {
     //      builder.addCase
     // }
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
