const state = {
  items: {},
  cart: [],
  itemCount: 0,
}

const reducer = {
  addToCart: (global, state, action) => {
    const key = `${action.title}${action.model ? `-${action.model}` : ""}${
      action.color ? `-${action.color}` : ""
    }`
    const items = {
      ...state.items,
      [key]: {
        key: state.items[key] ? state.items[key].key : key,
        title: state.items[key] ? state.items[key].title : `${action.title} ${action.model ? `${action.model}` : ""} ${
          action.color ? `${action.color}` : ""
        }`,
        price: state.items[key] ? state.items[key].price : action.price,
        model: state.items[key]
          ? state.items[key].model
            ? state.items[key].model
            : undefined
          : action.model
          ? action.model
          : undefined,
        color: state.items[key]
          ? state.items[key].color
            ? state.items[key].color
            : undefined
          : action.color
          ? action.color
          : undefined,
        quantity: state.items[key] ? state.items[key].quantity + 1 : 1,
      },
    }
    const cart = Object.values(items)
    const itemCount = cart.reduce((result, item) => result + item.quantity, 0)

    return {
      ...state,
      items: items,
      cart: cart,
      itemCount: itemCount,
    }
  },
  removeItem: (global, state, action) => {
    const key = action.key
    const items = {
      ...state.items,
      [key]: {
        ...state.items[key],
        quantity: state.items[key].quantity - action.quantityToRemove,
      },
    }
    if (items[key].quantity <= 0) {
      delete items[key]
    }
    const cart = Object.values(items)
    const itemCount = cart.reduce((result, item) => result + item.quantity, 0)

    return {
      ...state,
      items: items,
      cart: cart,
      itemCount: itemCount,
    }
  },
}

const asyncReducer = {
  Sample: async (global, state, data, dispatch) => {},
}

const selector = {
  Sample: (global, state, data) => {},
}

const asyncSelector = {
  test: async (global, state) => {},
}

const model = {
  state,
  reducer,
  asyncReducer,
  selector,
  asyncSelector,
}
export default model
