


const state = {
    cart: []
}


const reducer = {
  addToCart: (global, state, action ) => {
    
        

        return {
            ...state,
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

