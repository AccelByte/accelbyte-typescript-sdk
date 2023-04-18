/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { useCallback } from 'react'
import { createStore, useStore } from '../useStore'
import { AlertValue } from '@od-shared/models/Alert'

interface State {
  alerts: AlertValue[]
}

const DEFAULT_STATE: State = {
  alerts: []
}

const store = createStore(DEFAULT_STATE)

export function useHeaderAlerts() {
  const [state, setState] = useStore(store)

  const push = useCallback((value: AlertValue) => {
    setState(oldState => ({ alerts: [...oldState.alerts, value] }))
  }, [])

  const pop = useCallback((): AlertValue | undefined => {
    const val = state.alerts.shift()
    setState({ alerts: state.alerts })
    return val
  }, [state.alerts])

  const popAll = useCallback((): AlertValue[] => {
    const currentAlerts = state.alerts
    setState({ alerts: [] })
    return currentAlerts
  }, [state.alerts])

  return {
    state,
    mutations: {
      push,
      pop,
      popAll
    }
  }
}
