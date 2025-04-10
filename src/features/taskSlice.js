import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "../lib/api";
import { categorizeTasks } from "../lib/utils";

export const fetchTasksThunk = createAsyncThunk(
  "task/fetchTasksThunk",
  async () => {
    const data = await fetchTasks();
    return data;
  }
);

const initialState = {
  value: [],
  loading: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    resetTasks: (state) => {
      state.value = [];
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.pending, (state) => {
        state.value = [];
        state.loading = true;
      })
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.value = categorizeTasks(action.payload);
        }
        state.loading = false;
      })
      .addCase(fetchTasksThunk.rejected, (state) => {
        state.value = [];
        state.loading = false;
      });
  },
});

export const { resetTasks } = taskSlice.actions;

export default taskSlice.reducer;
