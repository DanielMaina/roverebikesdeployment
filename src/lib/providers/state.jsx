import React, { createContext, memo } from "react"
import useStore from "../hooks/useStore"

const defaultEvent = {
  sync: {},
  async:{}
}
const defaultStore = {
  state: {},
  dispatch: () => null
}

const DispatchContext = createContext(defaultEvent)
const SelectContext = createContext(defaultEvent)
const StoreContext = createContext(defaultStore)
const { Provider: DisptchProvider } = DispatchContext
const { Provider: StoreProvider } = StoreContext
const { Provider: SelectProvider } = SelectContext



const StateProvider = memo(({ model,children }) => {
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
