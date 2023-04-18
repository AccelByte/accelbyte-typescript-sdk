/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '../useSdk'
import { useCallback } from 'react'
import { createStore, useStore } from '../useStore'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { HookDataReturns } from '~/models/hook'
import { Event, EventResponseV2 } from '@accelbyte/sdk-event'

interface GdprState {
  accountHistory: EventResponseV2 | null
  accountHistoryError: FetchErrorType | null
  accountHistoryFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
}

const DEFAULT_STATE: GdprState = {
  accountHistory: null,
  accountHistoryError: null,
  accountHistoryFetchStatus: FetchStatus.IDLE
}

const store = createStore(DEFAULT_STATE)

export function useAccountHistory() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const resetErrorState = useCallback(() => {
    setState({ accountHistoryError: null })
  }, [])

  const fetchAccountHistory = useCallback(
    async ({
      userId,
      type,
      startDate,
      endDate,
      offset,
      pageSize
    }: {
      userId: string
      type: string
      startDate: string
      endDate: string
      offset: number
      pageSize: number
    }): Promise<HookDataReturns<EventResponseV2>> => {
      let accountHistory: EventResponseV2 | null = null
      let accountHistoryError: FetchErrorType | null = null

      try {
        setState({ accountHistoryError: null, accountHistoryFetchStatus: FetchStatus.FETCHING })

        accountHistory = await Event.EventV2Api(sdk).getEdithistory_ByUserId(userId, {
          type,
          startDate,
          endDate,
          offset,
          pageSize
        })

        return { data: accountHistory }
      } catch (error) {
        accountHistoryError = WidgetErrorHelper.getErrorType(error)
        return { error: error as Error }
      } finally {
        setState({ accountHistory, accountHistoryError, accountHistoryFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      resetState,
      fetchAccountHistory,
      resetErrorState
    }
  }
}
