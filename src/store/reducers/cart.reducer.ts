import { CartAction, CartActionTypes, ICartItem, ICartState } from "../../types/cart.type";


const initialState: ICartState = {
  items: [],
  totalCount: 0,
  totalPrice: 0
};


const isEqualObjects = <T extends ICartItem, O extends T>(object1: T, object2: O, keyException: keyof T): boolean => {
  const props1 = Object.getOwnPropertyNames(object1) as (keyof T)[];
  const props2 = Object.getOwnPropertyNames(object2) as (keyof O)[];

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i += 1) {
    const propKey: keyof T = props1[ i ];

    if (
      object1[ propKey ] !== object2[ propKey ]
      && keyException !== propKey
    ) {
      return false;
    }
  }

  return true;
}

const getTotalPrice = (arr: ICartItem[], count: number) => arr.reduce((sum, obj) => sum = (obj.price * count) , 0);

const getTotalCount = (takeObject: ICartItem[]): number => {
  return takeObject.reduce((sum: number, obj) => {
    return obj.countItem ? obj.countItem + sum : sum;
  }, 0);
};

const carryTotalCountPrice = <T extends Function, O extends Function>(fn1: T, fn2: O) => (items: ICartItem[]) => {
  const totalCount = fn1(items);
  const totalPrice = fn2(items, totalCount)

  return { totalCount, totalPrice }
}

const carryCountPrice = carryTotalCountPrice(getTotalCount, getTotalPrice);


const cartReducer = (state = initialState, action: CartAction): ICartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PIZZA_CART: {
      const findItemIndexCart = state.items && state.items.findIndex(
        (item) => isEqualObjects(item, action.payload, "countItem")
      );

      const currentPizzaItems =
        (findItemIndexCart === -1)
          ? [ ...state.items, action.payload ]
          : state.items.map((item, index) => {
            return (index === findItemIndexCart)
              ? { ...item, countItem: item.countItem + 1 }
              : item;
          })

      return {
        ...state,
        items: currentPizzaItems,
        ...carryCountPrice(currentPizzaItems)
      };
    }

    case CartActionTypes.REMOVE_CART_ITEM: {
      const newItems = JSON.parse(JSON.stringify(state.items)); // deep copy

      // remove form item array. Use index element
      const indexInItem = action.payload;
      newItems.splice(indexInItem, 1);

      return {
        ...state,
        items: newItems,
        ...carryCountPrice(newItems)
      };
    }

    case CartActionTypes.PLUS_CART_ITEM: {
      const indexInItem = action.payload;

      const newItems = [
        ...state.items.slice(0, indexInItem),
        { ...state.items[ indexInItem ], countItem: state.items[ indexInItem ].countItem + 1 },
        ...state.items.slice(indexInItem + 1)
      ];

      return {
        ...state,
        items: newItems,
        ...carryCountPrice(newItems)
      };
    }

    case CartActionTypes.MINUS_CART_ITEM: {
      const indexInItem = action.payload;

      if (state.items[ indexInItem ].countItem > 1) {
        const newItems = [
          ...state.items.slice(0, indexInItem),
          { ...state.items[ indexInItem ], countItem: state.items[ indexInItem ].countItem - 1 },
          ...state.items.slice(indexInItem + 1)
        ];

        return {
          ...state,
          items: newItems,
          ...carryCountPrice(newItems)
        };
      }

      return { ...state };
    }

    case CartActionTypes.CLEAR_CART:
      return { totalPrice: 0, totalCount: 0, items: [] };

    default:
      return state;
  }
};


export default cartReducer;