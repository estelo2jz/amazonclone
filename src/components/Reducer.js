export const initialState = {
  basket: [
    {
      id: "659874",
      title: "PS5 Console",
      price: 799.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY218_.jpg"
    },
    {
      id: "659874",
      title: "PS5 Console",
      price: 799.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY218_.jpg"
    },
    {
      id: "659874",
      title: "PS5 Console",
      price: 799.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY218_.jpg"
    },
  ],
  user: null,
}

function reducer(state, action) {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      // Logic adding item to basket
      return { 
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case 'REMOVE_FROM_BASKET':
      // Logic removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      if (index >= 0) {
        // item exist in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        // console.warn is a red console.log
        console.warn(
          `Cant remove product (id: ${action.id} as its no)`
        )
      }

      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}

export default reducer;