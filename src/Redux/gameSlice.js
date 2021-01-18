import _ from 'lodash';
import { createSlice, createSelector } from '@reduxjs/toolkit';

export const BOARD_POSITIONS = {
  PLAYER_HAND: 'playerHand',
  PLAYER_BOARD: 'playerBoard',
  OTHER_PLAYER_HAND: 'otherPlayerHand',
  OTHER_PLAYER_BOARD: 'otherplayerBoard',
};

export const GAME_STATUS = {
  DECK_EDITION: 'deckEdition',
  DECK_REVIEW: 'deckReview',
  FIGHTING: 'fighting',
  PLAYER_WON: 'playerWon',
  OTHER_PLAYER_WON: 'otherPlayerWon',
  EQUALITY: 'equality',
};

export const getRoot = (state) => state.game;
export const getPlayerDeck = (state) => getRoot(state).playerDeck;
export const getOtherPlayerDeck = (state) => getRoot(state).otherPlayerDeck;
export const getGraveyardCards = (state) => getRoot(state).graveyard;
export const getPlayerHandCards = createSelector(getPlayerDeck, (playerCards) =>
  playerCards.filter((card) => card.position === BOARD_POSITIONS.PLAYER_HAND)
);
export const getPlayerBoardCards = createSelector(
  getPlayerDeck,
  (playerCards) =>
    playerCards.filter((card) => card.position === BOARD_POSITIONS.PLAYER_BOARD)
);
export const getOtherPlayerHandCards = createSelector(
  getOtherPlayerDeck,
  (otherPlayerCards) =>
    otherPlayerCards.filter(
      (card) => card.position === BOARD_POSITIONS.OTHER_PLAYER_HAND
    )
);
export const getOtherPlayerBoardCards = createSelector(
  getOtherPlayerDeck,
  (otherPlayerCards) =>
    otherPlayerCards.filter(
      (card) => card.position === BOARD_POSITIONS.OTHER_PLAYER_BOARD
    )
);
export const isInPlayerDeck = (id) =>
  createSelector(
    getPlayerDeck,
    (playerDeck) => !!playerDeck.find((card) => card.id === id)
  );
export const isReviewingDeck = (state) =>
  getRoot(state).status === GAME_STATUS.DECK_REVIEW;
export const playerHasWon = (state) =>
  getRoot(state).status === GAME_STATUS.PLAYER_WON;
export const otherPlayerHasWon = (state) =>
  getRoot(state).status === GAME_STATUS.OTHER_PLAYER_WON;
export const equality = (state) =>
  getRoot(state).status === GAME_STATUS.EQUALITY;
export const getIsFigthing = (state) =>
  getRoot(state).status === GAME_STATUS.FIGHTING;

export const isInHand = (card) =>
  card.position === BOARD_POSITIONS.PLAYER_HAND ||
  BOARD_POSITIONS.OTHER_PLAYER_HAND;

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    playerDeck: [],
    otherPlayerDeck: [],
    graveyard: [],
    satus: GAME_STATUS.DECK_CREATION,
  },
  reducers: {
    addToPlayerDeck(state, action) {
      state.playerDeck.push({
        ...action.payload,
        position: BOARD_POSITIONS.PLAYER_HAND,
      });
    },
    removeFromPlayerDeck(state, action) {
      const idx = state.playerDeck.findIndex(
        (card) => card.id === action.payload.id
      );
      state.playerDeck.splice(idx, 1);
    },
    createIaDeck: {
      reducer(state, action) {
        state.otherPlayerDeck = action.payload.cards.map((card) => ({
          ...card,
          position: BOARD_POSITIONS.OTHER_PLAYER_HAND,
        }));
      },
      prepare(allCards, maxPower = 500) {
        const cards = [];
        const shuffled = _.shuffle(allCards);
        let currentDeckPower = 0;
        for (
          let i = 0;
          i < shuffled.length && currentDeckPower <= maxPower;
          i += 1
        ) {
          const currentCard = shuffled[i];
          if (currentCard.power < maxPower - currentDeckPower) {
            cards.push(currentCard);
            currentDeckPower += currentCard.power;
          }
        }

        return { type: 'cards/createIaDeck', payload: { cards } };
      },
    },
    putOtherPlayerCardInBoard: {
      reducer(state, action) {
        state.otherPlayerDeck.find(
          (card) => card.id === action.payload
        ).position = BOARD_POSITIONS.OTHER_PLAYER_BOARD;
      },
      prepare(cardsInHand) {
        const randomCardInHandId = _.shuffle(cardsInHand)[0].id;
        return {
          type: 'cards/putOtherPlayerCardInBoard',
          payload: randomCardInHandId,
        };
      },
    },
    startDeckEdition(state) {
      state.status = GAME_STATUS.DECK_EDITION;
    },
    startDeckReview(state) {
      state.status = GAME_STATUS.DECK_REVIEW;
    },
    startFight(state) {
      state.status = GAME_STATUS.FIGHTING;
    },
    putPlayerCardInBoard(state, action) {
      state.playerDeck.find((card) => card.id === action.payload).position =
        BOARD_POSITIONS.PLAYER_BOARD;
    },
  },
});

export const {
  addToPlayerDeck,
  removeFromPlayerDeck,
  startFight,
  createIaDeck,
  startDeckEdition,
  startDeckReview,
  putPlayerCardInBoard,
  putOtherPlayerCardInBoard,
} = gameSlice.actions;

export default gameSlice.reducer;
