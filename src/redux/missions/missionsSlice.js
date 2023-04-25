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
  reducers: {
    joinMission: (state, action) => {
      const newGuy = state.find((mission) => mission.mission_id === action.payload);
      newGuy.reserved = true;
      // console.log(`state: ${state} \t action: ${newGuy.reserved}`);
    },
    leaveMission: (state, action) => {
      const newGuy = state.find((mission) => mission.mission_id === action.payload);
      newGuy.reserved = false;
      // console.log(`state: ${state} \t action: ${newGuy.reserved}`);
    },
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => {
      let newState = state.missions;
      newState = action.payload;
      return newState;
    },
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
