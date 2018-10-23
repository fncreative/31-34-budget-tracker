export default (state=[], { type, payload}) => {
  switch (type) {
    case 'SECTION_CREATE':
      return [...state, payload];

    case 'SECTION_UPDATE':
      return state.map((currentSection) => {
        return currentSection.id === payload.id ? payload : currentSection;
      });
    case 'SECTION_REMOVE':
      return state.filter(currentSection => currentSection.id !== payload.id);
    default:
      return state;
  }
};
