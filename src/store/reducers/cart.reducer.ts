import { CartAction, CartActionTypes, ICartItem, ICartState } from "../../types/cart.type";


const initialState: ICartState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action: CartAction): ICartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PIZZA_CART: {

      const { id } = action.payload;
      const newItems: ICartItem = {
        ...state.items,
        [ id ]: !state.items[ id ]
          ? [ action.payload ]
          : [ ...state.items[ id ], action.payload ]
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj: { price: number }) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice
      };
    }

    default:
      return state;
  }
};


export default cartReducer;