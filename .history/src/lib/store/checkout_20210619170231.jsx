import { ContactsOutlined } from "@material-ui/icons"



const state = {
    cart: [],
    itemCount: 0
}


const reducer = {
  addToCart: (global, state, action ) => {
        const newCartState = [
          ...state.cart,
          {
            title:action.title,
            price:action.price,
          }
        ]

        return {
            ...state,
            cart: newCartState,
            itemCount: newCartState.length
        }
    }
}

const asyncReducer = {
    'Sample': async (global, state, data, dispatch) => {
      
    },
}



const selector = {
    'Sample': (global, state, data) => {

      
    }
}

const asyncSelector = {
    'test': async (global, state) => {

    }
}


const model = {
    state,
    reducer,
    asyncReducer,
    selector,
    asyncSelector
}
export default model

