/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemInfo, Platform } from '@accelbyte/sdk-platform'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useCallback, useState } from 'react'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'

export const IngameItemStoreDetailHooks = {
  useBaseApp
}

interface State {
  baseApp: ItemInfo | null
  baseAppFetchStatus: FetchStatus
  baseAppError: FetchErrorType | null
}

function useBaseApp() {
  const [sdk] = useSdk()
  const [state, setState] = useState<State>({
    baseApp: null,
    baseAppFetchStatus: FetchStatus.IDLE,
    baseAppError: null
  })

  const fetchBaseApp = useCallback(
    async ({
      country,
      language,
      baseAppId
    }: {
      country?: string
      language?: string
      baseAppId: string | null | undefined
    }): Promise<HookDataReturns<ItemInfo | null>> => {
      let nextBaseApp: State['baseApp'] = null
      let nextError: State['baseAppError'] = null

      try {
        setState(oldState => ({
          ...oldState,
          baseAppError: null,
          baseAppFetchStatus: FetchStatus.FETCHING
        }))

        if (!baseAppId) throw new NoBaseAppIdError('')

        nextBaseApp = await Platform.ItemApi(sdk).getItemsByAppId({
          appId: baseAppId,
          region: country,
          language
        })
        return { error: null, data: nextBaseApp }
      } catch (err) {
        nextError = WidgetErrorHelper.getErrorType(err)

        return { error: nextError, data: null }
      } finally {
        setState({
          baseApp: nextBaseApp,
          baseAppError: nextError,
          baseAppFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: { fetchBaseApp }
  }
}

export class NoBaseAppIdError extends Error {
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, NoBaseAppIdError.prototype)
  }
}
