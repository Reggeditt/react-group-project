import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/dragons';

export const getDragons = createAsyncThunk('dragons/get', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    makeReservations(state, action) {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return { ...dragon };
        }
        return { ...dragon, reserved: true };
      });
    },
    cancelReservations(state, action) {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return { ...dragon };
        }
        return { ...dragon, reserved: false };
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(getDragons.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((item) => {
        newState.push({
          id: item[1].id,
          name: item[1].name,
          type: item[1].type,
          flickr_image: item[1].flickr_images[0],
          reserved: false,
        });
      });
      return newState;
    });
  },
});

export const { cancelReservations, makeReservations } = dragonsSlice.actions;

export default dragonsSlice.reducer;
