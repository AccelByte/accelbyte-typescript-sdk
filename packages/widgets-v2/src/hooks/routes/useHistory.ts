/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { useCallback } from 'react'
import { createStore, useStore } from '../useStore'

export interface WidgetLocation {
  state: any
  key: string
  pathname: string
  hash: string
  search: string
}

export interface WidgetHistory {
  location: WidgetLocation
  push: (to: WidgetLocation | string, state?: any) => void
  replace: (to: string, state?: any) => void
}

const DEFAULT_STATE: WidgetHistory = {
  location: {
    state: {},
    key: '',
    pathname: '',
    hash: '',
    search: ''
  },
  push: () => null,
  replace: () => null
}

const store = createStore(DEFAULT_STATE)

export function useHistory() {
  const [state, setState] = useStore(store)

  const initHistory = useCallback((history: WidgetHistory) => {
    setState(history)
  }, [])

  const setLocation = useCallback((location: WidgetHistory['location']) => {
    setState({ location })
  }, [])

  return {
    state,
    mutations: {
      initHistory,
      setLocation
    }
  }
}
