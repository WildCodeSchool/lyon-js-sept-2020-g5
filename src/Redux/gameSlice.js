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
};

export const initialState = {
  playerDeck: [],
  otherPlayerDeck: [],
  graveyard: [],
  satus: GAME_STATUS.DECK_CREATION,
  otherPlayerTurn: false,
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
export const playerHasWon = createSelector(
  getPlayerDeck,
  getOtherPlayerDeck,
  (playerDeck, otherPlayerDeck) =>
    playerDeck.length > 0 && otherPlayerDeck.length === 0
);
export const otherPlayerHasWon = createSelector(
  getPlayerDeck,
  getOtherPlayerDeck,
  (playerDeck, otherPlayerDeck) =>
    otherPlayerDeck.length > 0 && playerDeck.length === 0
);
export const equality = createSelector(
  getPlayerDeck,
  getOtherPlayerDeck,
  (playerDeck, otherPlayerDeck) =>
    otherPlayerDeck.length === 0 && playerDeck.length === 0
);
export const getIsFigthing = (state) =>
  getRoot(state).status === GAME_STATUS.FIGHTING;

export const isInHand = (card) =>
  card.position === BOARD_POSITIONS.PLAYER_HAND ||
  BOARD_POSITIONS.OTHER_PLAYER_HAND;

export const isOtherPlayerTurn = createSelector(
  (state) => getRoot(state),
  (root) => root.otherPlayerTurn
);

const gameSlice = createSlice({
  name: 'game',
  initialState,
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
    putOtherPlayerCardInBoard(state, action) {
      state.otherPlayerDeck.find(
        (card) => card.id === action.payload
      ).position = BOARD_POSITIONS.OTHER_PLAYER_BOARD;
    },
    clashCards(state, action) {
      const { playerCardId, otherPlayerCardId } = action.payload;
      const playerCardIdx = state.playerDeck.findIndex(
        (card) => card.id === playerCardId
      );
      const otherPlayerCardIdx = state.otherPlayerDeck.findIndex(
        (card) => card.id === otherPlayerCardId
      );
      const playerCard = state.playerDeck[playerCardIdx];
      const otherPlayerCard = state.otherPlayerDeck[otherPlayerCardIdx];
      if (playerCard && otherPlayerCard) {
        playerCard.hp -= otherPlayerCard.atk;
        otherPlayerCard.hp -= playerCard.atk;
        if (playerCard.hp <= 0) {
          state.playerDeck.splice(playerCardIdx, 1);
          state.graveyard.push(playerCard);
        }
        if (otherPlayerCard.hp <= 0) {
          state.otherPlayerDeck.splice(otherPlayerCardIdx, 1);
          state.graveyard.push(otherPlayerCard);
        }
      }
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
    setPlayerCardFighting(state, { payload: { id, value } }) {
      const card = state.playerDeck.find((c) => c.id === id);
      if (card) {
        card.isFighting = value;
      }
    },
    setOtherPlayerCardFighting(state, { payload: { id, value } }) {
      const card = state.otherPlayerDeck.find((c) => c.id === id);
      if (card) {
        card.isFighting = value;
      }
    },
    resetGame(state) {
      Object.keys(initialState).forEach((k) => {
        state[k] = initialState[k];
      });
    },
    setIsOtherPlayerTurn(state, { payload }) {
      state.otherPlayerTurn = payload;
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
  resetGame,
  setOtherPlayerCardFighting,
  setPlayerCardFighting,
  clashCards,
  setIsOtherPlayerTurn,
} = gameSlice.actions;

const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const delay = (millisec) =>
  new Promise((resolve) => {
    setTimeout(resolve, millisec);
  });

export function startIABoardAttack() {
  return async (dispatch, getState) => {
    dispatch(setIsOtherPlayerTurn(true));
    const IACards = getOtherPlayerBoardCards(getState());
    // each card on otherPlayer's board attacks a random card on the player's board
    for (let i = 0; i < IACards.length; i += 1) {
      const IACard = IACards[i];
      const playerCards = getPlayerBoardCards(getState());
      const playerCard = getRandomElement(playerCards);
      if (playerCard && IACard) {
        dispatch(setPlayerCardFighting({ id: playerCard.id, value: true }));
        dispatch(setOtherPlayerCardFighting({ id: IACard.id, value: true }));
        await delay(3000);
        dispatch(
          clashCards({
            otherPlayerCardId: IACard.id,
            playerCardId: playerCard.id,
          })
        );
        dispatch(setPlayerCardFighting({ id: playerCard.id, value: false }));
        dispatch(setOtherPlayerCardFighting({ id: IACard.id, value: false }));
      }
    }
    dispatch(setIsOtherPlayerTurn(false));
  };
}

export function putRandomOtherPlayerCardOnBoard() {
  return (dispatch, getState) => {
    const randomCardInHandId = _.shuffle(getOtherPlayerHandCards(getState()))[0]
      .id;
    dispatch(putOtherPlayerCardInBoard(randomCardInHandId));
  };
}

export default gameSlice.reducer;
