/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { useCallback } from 'react'
import { AllWidgetRoutesWithPathMaker, RouteUtils } from '~/utils/RouteUtils'

import { createStore, useStore } from '../useStore'

const store = createStore(RouteUtils.createWidgetRoutes({}))

export function useRoutes() {
  const [state, setState] = useStore(store)

  const initRoutes = useCallback((routes: AllWidgetRoutesWithPathMaker) => {
    setState(routes)
  }, [])

  return {
    state,
    mutations: {
      initRoutes
    }
  }
}
