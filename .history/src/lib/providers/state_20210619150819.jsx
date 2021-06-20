import React, { createContext, memo } from "react"
import useStore, { IModelStore, IStore, IDispatch, ISelect, defaultReducer } from "../hooks/useStore"

const defaultEvent = {
  sync: {},
  async:{}
}
const defaultStore = {
  state: {},
  dispatch: () => null
}

const DispatchContext = createContext<IDispatch>(defaultEvent)
const SelectContext = createContext<ISelect>(defaultEvent)
const StoreContext = createContext<IStore>(defaultStore)
const { Provider: DisptchProvider } = DispatchContext
const { Provider: StoreProvider } = StoreContext
const { Provider: SelectProvider } = SelectContext



interface IStateProvider {
  children: React.ReactChild,
  model: IModelStore
}

const StateProvider = memo(({ model,children }: IStateProvider) => {
  const { store, dispatch, asyncDispatch, selector, asyncSelector } = useStore(model)
  const dispatches = {
    sync: dispatch,
    async: asyncDispatch,
  }

  const selects = {
    sync: selector,
    async: asyncSelector,
  }
  return (
    <SelectProvider value={selects}>
      <DisptchProvider value={dispatches}>
        <StoreProvider value={store}> {children} </StoreProvider>
      </DisptchProvider>
    </SelectProvider>
  )
})

export { DispatchContext, StoreContext, StateProvider, SelectContext }
