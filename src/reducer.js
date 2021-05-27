export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    case 'REMOVE_FROM_BASKET':
      //Create a variable to find the index of the item in the current basket to match the item that was dispatched to the reducer 
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      
      //Create a new varibale to hold the current state of the basket
      let newBasket = [...state.basket];

      //Create a logic to remove the item from the basket
      if (index >= 0) {
        //Remove the item
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as it's not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket
      };
      
      case 'SET_USER':
        return {
          ...state,
          user: action.user
        }
    default:
      return state;
  }
};

export default reducer;
