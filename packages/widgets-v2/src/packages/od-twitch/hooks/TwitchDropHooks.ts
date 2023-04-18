/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Iam, UserLinkedPlatformV3 } from '@accelbyte/sdk-iam'
import { LinkedPlatformId } from '@od-shared/models/Linked'
import { useCallback, useState } from 'react'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'

interface State {
  linkedTwitchAccount: UserLinkedPlatformV3 | null
  linkedTwitchAccountFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  linkedTwitchAccountError: FetchErrorType | null

  loginURL: string | null
  loginURLFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  loginURLError: FetchErrorType | null
}

export const TwitchDropHooks = {
  useTwitchDrop: () => {
    const [sdk] = useSdk()
    const [state, setState] = useState<State>({
      linkedTwitchAccount: null,
      linkedTwitchAccountError: null,
      linkedTwitchAccountFetchStatus: FetchStatus.IDLE,

      loginURL: null,
      loginURLError: null,
      loginURLFetchStatus: FetchStatus.IDLE
    })

    const updateState = useCallback((newState: Partial<State>) => {
      setState(oldState => ({
        ...oldState,
        ...newState
      }))
    }, [])

    const fetchLinkedTwitchAccount = useCallback(
      async (userId: string): Promise<HookDataReturns<UserLinkedPlatformV3 | null>> => {
        let linkedTwitchAccount: UserLinkedPlatformV3 | null = null
        let linkedTwitchAccountError: FetchErrorType | null = null

        try {
          updateState({ linkedTwitchAccountError: null, linkedTwitchAccountFetchStatus: FetchStatus.FETCHING })

          const result = await Iam.UsersApi(sdk).getPlatforms_ByUserId(userId)
          linkedTwitchAccount = result.data.find(account => account.platformId === LinkedPlatformId.enum.twitch) || null
          return { data: linkedTwitchAccount }
        } catch (error) {
          linkedTwitchAccountError = WidgetErrorHelper.getErrorType(error)
          return { error: linkedTwitchAccountError }
        } finally {
          updateState({ linkedTwitchAccount, linkedTwitchAccountError, linkedTwitchAccountFetchStatus: FetchStatus.IDLE })
        }
      },
      [sdk]
    )

    const fetchTwitchLoginURL = useCallback(
      async (redirectUri: string, clientId: string, namespace?: string): Promise<HookDataReturns<string>> => {
        let loginURL: string | null = null
        let loginURLError: FetchErrorType | null = null

        try {
          updateState({ loginURLError: null, loginURLFetchStatus: FetchStatus.FETCHING })

          const result = await Iam.UsersApi(sdk, { namespace }).getWebLinkMeUsers_ByPlatformId(LinkedPlatformId.enum.twitch, {
            redirectUri,
            clientId
          })

          loginURL = result.third_party_url
          return { data: loginURL }
        } catch (error) {
          loginURLError = WidgetErrorHelper.getErrorType(error)
          return { error: loginURLError }
        } finally {
          updateState({ loginURL, loginURLError, loginURLFetchStatus: FetchStatus.IDLE })
        }
      },
      [sdk]
    )

    return {
      state,
      mutations: {
        fetchLinkedTwitchAccount,
        fetchTwitchLoginURL
      }
    }
  }
}
