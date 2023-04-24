import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => {
      let newState = state.missions;
      newState = action.payload;
      return newState;
    },
  },
});

export default missionsSlice.reducer;
