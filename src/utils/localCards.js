const LOCAL_CARDS = 'keyword';

export const setCards = (cards) => {
  localStorage.setItem(LOCAL_CARDS, cards);
}

export const getCards = () => localStorage.getItem(LOCAL_CARDS);