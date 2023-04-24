import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';
import profileReducer from './profile/profileSlice';
import dragonReducer from './dragon/dragonList';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
    profile: profileReducer,
    dragons: dragonReducer,
  },
});

export default store;
