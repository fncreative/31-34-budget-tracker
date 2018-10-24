const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  let updatedState = null;
  let sectionId = null;
  let sectionCards = null;
  let updatedCards = null;

  switch (type) {
    case 'SECTION_CREATE':
      return { ...state, [payload.id]: [] };

    case 'SECTION_REMOVE':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;

    case 'CARD_CREATE':
      sectionId = payload.sectionId;
      sectionCards = state[sectionId];
      updatedCards = [...sectionCards, payload];
      return { ...state, [sectionId]: updatedCards };

    case 'CARD_REMOVE':
      sectionId = payload.sectionId;
      sectionCards = state[sectionId];
      updatedCards = sectionCards.filter(currentCard => currentCard.id !== payload.id);
      return { ...state, [sectionId]: updatedCards };

    case 'CARD_UPDATE':
      sectionId = payload.sectionId;
      sectionCards = sectionCards.map((currentCard) => {
        return currentCard.id === payload.id ? payload : currentCard
      });
      return { ...state, [sectionId]: updatedCards};
    default:
      return state;
  }
};
