import { CartAction, CartActionTypes, ICartItem, ICartState } from "../../types/cart.type";
import { IPizzasBlockNewObject } from "../../types/pizzas.type";


const initialState: ICartState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};


const getTotalPrice = (arr: IPizzasBlockNewObject[]) => arr.reduce((sum: number, obj) => obj.price + sum, 0);

const _get = (obj: ICartItem, path: string) => {
  const [ firstKey, ...keys ] = path.split('.');

  console.log(obj, firstKey, keys)

  return keys.reduce((val, key) => {
    // @ts-ignore
    console.log(obj[firstKey], obj, val, key, val[ key ])
    // console.log(obj[key], obj[key][firstKey])
    return val[ key ];
    // @ts-ignore
  }, obj[ firstKey ]);
};

const getTotalSum = <T>(obj: T, path: string) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);

    return sum + value;
  }, 0);
};

// const getTotalSum = <T>(obj: T, propKey: string) => {
//   return Object.keys(obj).reduce((sum, key) => {
//     const [ first, second ] = propKey.split('.');
//     if (second) {
//       // @ts-ignore
//       return obj[ key ][ first ][ second ] + sum;
//     } else {
//       // @ts-ignore
//       return obj[ key ][ first ] + sum;
//     }
//   }, 0);
// }


const cartReducer = (state = initialState, action: CartAction): ICartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PIZZA_CART: {
      const { id } = action.payload;

      const currentPizzaItems: IPizzasBlockNewObject[] = !state.items[ id ]
        ? [ action.payload ]
        : [ ...state.items[ id ].items, action.payload ];

      const newItems: ICartItem = {
        ...state.items,
        [ id ]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case CartActionTypes.REMOVE_CART_ITEM: {
      const newItems = { ...state.items };
      const currentTotalPrice = newItems[ action.payload ].totalPrice;
      const currentTotalCount = newItems[ action.payload ].items.length;

      delete newItems[ action.payload ];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case CartActionTypes.PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[ action.payload ].items,
        state.items[ action.payload ].items[0],
      ];
      const newItems = {
        ...state.items,
        [ action.payload ]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case CartActionTypes.MINUS_CART_ITEM: {
      const oldItems = state.items[ action.payload ].items;
      const newObjItems = oldItems.length > 1
        ? state.items[ action.payload ].items.slice(1)
        : oldItems;

      const newItems = {
        ...state.items,
        [ action.payload ]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case CartActionTypes.CLEAR_CART:
      return { totalPrice: 0, totalCount: 0, items: {} };

    default:
      return state;
  }
};


export default cartReducer;