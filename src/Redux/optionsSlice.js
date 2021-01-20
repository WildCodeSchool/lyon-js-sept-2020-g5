import { createSelector, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  maxPower: 500,
  mute: false,
  playerName: 'Player',
};

export const getRoot = (state) => state.options;
export const getOptions = createSelector(
  (state) => getRoot(state),
  (options) => options
);

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    toggleMute(state) {
      state.mute = !state.mute;
    },
    setMaxPower(state, { payload }) {
      state.maxPower = payload;
    },
    setPlayerName(state, { payload }) {
      state.playerName = payload;
    },
  },
});

export const { toggleMute, setMaxPower, setPlayerName } = optionsSlice.actions;

export default optionsSlice.reducer;
