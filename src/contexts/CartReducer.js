const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    case "INCREASE":
      let existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingCartItemIndex > -1) {
        const cartItems = [
          ...state.cartItems.slice(0, existingCartItemIndex),
          {
            ...state.cartItems[existingCartItemIndex],
            quantity: state.cartItems[existingCartItemIndex].quantity + 1,
          },
          ...state.cartItems.slice(existingCartItemIndex + 1),
        ];
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [...cartItems],
        };
      }
      return state;

    case "DECREASE":
      let q =
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.payload.id)
        ].quantity;
      if (q > 1) {
        let existingCartItemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        if (existingCartItemIndex > -1) {
          const cartItems = [
            ...state.cartItems.slice(0, existingCartItemIndex),
            {
              ...state.cartItems[existingCartItemIndex],
              quantity: state.cartItems[existingCartItemIndex].quantity - 1,
            },
            ...state.cartItems.slice(existingCartItemIndex + 1),
          ];
          return {
            ...state,
            ...sumItems(state.cartItems),
            cartItems: [...cartItems],
          };
        }
        return state;
      } else {
        return {
          ...state,
          ...sumItems(
            state.cartItems.filter((item) => item.id !== action.payload.id)
          ),
          cartItems: [
            ...state.cartItems.filter((item) => item.id !== action.payload.id),
          ],
        };
      }
    case "CHECKOUT":
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};
