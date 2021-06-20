import React, { useReducer, useMemo, useCallback } from 'react';


const combineState = (model) => Object.fromEntries(Object.keys(model).map(((key) => [
    key,
    model[key].state
])));

const defaultReducer = (state, action) => state

const rootReducer = (model) => (state, action) => {
    const [key, ...rest] = action.type.split('/')
    if (!model[key]) return defaultReducer(state, action)
    return {
        ...state,
        [`${key}`]: action.data.reducer(state, state[key], action.data.payload)
    }
}

const useStore = (model) => {
    const [state, storeDispatch] = useReducer(rootReducer(model), combineState(model));
    const store = useMemo(() => ({
        state,
        dispatch: storeDispatch
    }), [state]);

    const dispatch = useCallback((model) => {
        return Object.fromEntries(Object.keys(model).map(((key) => [
            key,
            Object.fromEntries(Object.keys(model[key].reducer).map(((reducerKey) => [
                reducerKey,
                (data) => storeDispatch({
                    type: `${key}`, data:
                    {
                        payload: data,
                        reducer: model[key].reducer[reducerKey]
                    }
                })

            ])))

        ])))
    }, [])

    const asyncDispatch = useCallback((model) => {
        return Object.fromEntries(Object.keys(model).map(((key) => [
            key,
            Object.fromEntries(Object.keys(model[key].asyncReducer).map(((reducerKey) => [
                reducerKey,
                async (data) => await model[key].asyncReducer[reducerKey](state, state[key], data, {
                    sync: dispatch(model),
                    async: asyncDispatch(model)
                }
                )
            ])))

        ])))
    }, [])

    const selector = useCallback((model) => {
        return Object.fromEntries(Object.keys(model).map(((key) => [
            key,
            Object.fromEntries(Object.keys(model[key].selector).map(((reducerKey) => [
                reducerKey,
                (data) => model[key].selector[reducerKey](state, state[key], data)
            ])))

        ])))
    }, [state])

    const asyncSelector = useCallback((model) => {
        return Object.fromEntries(Object.keys(model).map(((key) => [
            key,
            Object.fromEntries(Object.keys(model[key].asyncSelector).map(((reducerKey) => [
                reducerKey,
                async (data) => await model[key].asyncSelector[reducerKey](state, state[key], data)
            ])))

        ])))
    }, [state])

    return {
        store,
        dispatch: dispatch(model),
        asyncDispatch: asyncDispatch(model),
        selector: selector(model),
        asyncSelector: asyncSelector(model),
    }
}

export default useStore