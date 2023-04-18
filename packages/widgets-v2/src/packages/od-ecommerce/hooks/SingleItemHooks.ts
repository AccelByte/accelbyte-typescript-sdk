/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { useCallback, useState } from 'react'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '~/hooks/useSdk'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { AppInfo, Platform } from '@accelbyte/sdk-platform'

interface State {
  appInfo: AppInfo | null
  appInfoFetchStatus: FetchStatus
  appInfoError: FetchErrorType | null
}

export const SingleItemHooks = {
  useAppInfo: () => {
    const [sdk] = useSdk()
    const [state, setState] = useState<State>({
      appInfo: null,
      appInfoError: null,
      appInfoFetchStatus: FetchStatus.IDLE
    })

    const requestAdditionalAppInfo = useCallback(
      async (itemId: string | undefined) => {
        if (!itemId) return

        let nextAppInfo: State['appInfo'] = null
        let nextAppInfoError: State['appInfoError'] = null

        try {
          setState(oldState => ({
            ...oldState,
            appInfoError: null,
            appInfoFetchStatus: FetchStatus.FETCHING
          }))
          nextAppInfo = await Platform.ItemApi(sdk).getAppLocale_ByItemId(itemId)
        } catch (err) {
          nextAppInfoError = WidgetErrorHelper.getErrorType(err)
        } finally {
          setState({
            appInfo: nextAppInfo,
            appInfoError: nextAppInfoError,
            appInfoFetchStatus: FetchStatus.IDLE
          })
        }
      },
      [sdk]
    )

    return {
      state,
      mutations: { requestAdditionalAppInfo }
    }
  }
}
