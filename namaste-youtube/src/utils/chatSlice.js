import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    liveChats: [],
  },
  reducers: {
    appendChat: (state, action) => {
      if (state.liveChats.length > 20) state.liveChats.pop();
      state.liveChats.unshift(action.payload);
    },
    clearChat: (state) => {
      state.liveChats = [];
    },
  },
});

export const { appendChat, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
