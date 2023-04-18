/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { useState, useEffect, useCallback } from 'react'
import { nanoid } from 'nanoid'

// This defines the store "subscribers" The subscribe function has the same typing as `setState`.
interface StoreListener<State = any> {
  id: string
  setState: React.Dispatch<React.SetStateAction<State>>
}

// This defines the store's content, which contains the state and the subscribers.
export interface StoreContent<State = any> {
  state: State
  // Mostly for Storybook uses only.
  initialState: State
  subscribers: StoreListener<State>[]
}

// A dictionary of stores.
const stores: {
  [index: string]: StoreContent
} = {}

// Create the store with a unique ID and have its subscribers
// initially set to an empty array. We'll use it later.
export function createStore<State>(initialState?: State): StoreContent<State> {
  const id = nanoid()
  stores[id] = {
    state: initialState,
    initialState,
    subscribers: []
  }

  return stores[id]
}

export function resetStores() {
  for (const store in stores) {
    stores[store].state = stores[store].initialState
  }
}

// useStore accepts a store parameter, then in the effect,
// it will add a listener to the store's subscribers list.
// Upon cleanup, then the subscribe function will be removed.
export function useStore<State>(store: StoreContent<State>) {
  const [state, setState] = useState(store.state)

  useEffect(() => {
    const listener = {
      id: nanoid(),
      setState
    }

    store.subscribers.push(listener)

    return () => {
      const idx = store.subscribers.findIndex(i => i === listener)
      if (idx > -1) {
        const newSubscribers = store.subscribers.slice(0, idx).concat(store.subscribers.slice(idx + 1))
        store.subscribers = newSubscribers
      }
    }
  }, [store])

  // Since we want to "update" all the `useStore` calls,
  // we need to call the subscriber functions.
  const set = useCallback(
    (param: Partial<State> | ((p: State) => State)) => {
      const newState = typeof param === 'function' ? (param as (p: State) => State)(store.state) : { ...store.state, ...param }
      store.state = newState

      for (let i = 0; i < store.subscribers.length; i++) {
        store.subscribers[i].setState(newState)
      }
    },
    [store]
  )

  return [state, set] as const
}
