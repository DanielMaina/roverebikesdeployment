


const state = {
    cart: []
}


const reducer = {
    setInitialData: (global, state, action ) => {
    
        

        return {
            ...state,
        }
    }
}

const asyncReducer = {
    'newRegistration': async (global, state, data, dispatch) => {
      
    },
}



const selector = {
    'newRegistrationByDate': (global, state, data) => {

      
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

