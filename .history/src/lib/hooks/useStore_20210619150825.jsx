import React, { useReducer, useMemo, useCallback } from 'react';

export interface IActionReducer {
    type: string
    data: any
}

export interface IStateReducer {
    [key: string]: any
}

interface IState {
    [key: string]: {
        [k: string]: any
    }
}

export interface IModelStore {
    [key: string]: {
        state: any,
        reducer: {
            [key: string]: (global: any, state: any, data: any,dispatch: IDispatch) => any
        }
        asyncReducer: {
            [key: string]: (global: any, state: any, data: any, dispatch: IDispatch) => Promise<void>
        }
        selector: {
            [key: string]: (global: any, state: any, data: any) => any
        }
        asyncSelector: {
            [key: string]: (global: any, state: any, data: any) => Promise<void>
        }
    }
}

export const combineReducers = (model: IModelStore, dispatchedAction: IActionReducer) => Object.fromEntries(Object.keys(model).map(((key: string) => [
    key,
    model[key].reducer
])));

export const combineState = (model: IModelStore) => Object.fromEntries(Object.keys(model).map(((key: string) => [
    key,
    model[key].state
])));
export const defaultReducer = (state: any, action: IActionReducer) => state

const rootReducer = (model: IModelStore) => (state: any, action: IActionReducer) => {
    const [key, ...rest] = action.type.split('/')
    if (!model[key]) return defaultReducer(state, action)
    return {
        ...state,
        [`${key}`]: action.data.reducer(state, state[key], action.data.payload)
    }
}

export interface IStore {
    state: IState
    dispatch: React.Dispatch<IActionReducer>
}

export interface IDispatch {
    sync: {
        [key: string]: {
            [key: string]: (data: any) => any
        }

    }
    async: {
        [k: string]: {
            [k: string]: (data: any) => Promise<void>;
        };
    }

}

export interface ISelect {
    sync: {
        [key: string]: {
            [key: string]: (data: any) => any
        }

    }
    async: {
        [k: string]: {
            [k: string]: (data: any) => Promise<void>;
        };
    }

}

const useStore = (model: IModelStore) => {
    const [state, storeDispatch] = useReducer(rootReducer(model), combineState(model));
    const store: IStore = useMemo(() => ({
        state,
        dispatch: storeDispatch
    }), [state]);

    const dispatch = useCallback((model: IModelStore) => {
        return Object.fromEntries(Object.keys(model).map(((key: string) => [
            key,
            Object.fromEntries(Object.keys(model[key].reducer).map(((reducerKey: string) => [
                reducerKey,
                (data: any) => storeDispatch({
                    type: `${key}`, data:
                    {
                        payload: data,
                        reducer: model[key].reducer[reducerKey]
                    }
                })

            ])))

        ])))
    }, [])

    const asyncDispatch = useCallback((model: IModelStore) => {
        return Object.fromEntries(Object.keys(model).map(((key: string) => [
            key,
            Object.fromEntries(Object.keys(model[key].asyncReducer).map(((reducerKey: string) => [
                reducerKey,
                async (data: any) => await model[key].asyncReducer[reducerKey](state, state[key], data, {
                    sync: dispatch(model),
                    async: asyncDispatch(model)
                }
                )
            ])))

        ])))
    }, [])

    const selector = useCallback((model: IModelStore) => {
        return Object.fromEntries(Object.keys(model).map(((key: string) => [
            key,
            Object.fromEntries(Object.keys(model[key].selector).map(((reducerKey: string) => [
                reducerKey,
                (data: any) => model[key].selector[reducerKey](state, state[key], data)
            ])))

        ])))
    }, [state])

    const asyncSelector = useCallback((model: IModelStore) => {
        return Object.fromEntries(Object.keys(model).map(((key: string) => [
            key,
            Object.fromEntries(Object.keys(model[key].asyncSelector).map(((reducerKey: string) => [
                reducerKey,
                async (data: any) => await model[key].asyncSelector[reducerKey](state, state[key], data)
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