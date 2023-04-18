/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useCallback, useState } from 'react'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { useSdk } from '~/hooks/useSdk'
import { FulfillmentResult, Platform } from '@accelbyte/sdk-platform'
import { UserResponseV3 } from '@accelbyte/sdk-iam'

export const RedeemCodeHooks = { useRedeemCode }

interface State {
  redeemedCode: FulfillmentResult | null
  redeemCodeFetchStatus: FetchStatus.IDLE | FetchStatus.REDEEMING
  redeemCodeError: FetchErrorType | null
}

export function useRedeemCode() {
  const [sdk] = useSdk()
  const [state, setState] = useState<State>({
    redeemedCode: null,
    redeemCodeFetchStatus: FetchStatus.IDLE,
    redeemCodeError: null
  })

  const redeemCode = useCallback(
    async ({
      user,
      code,
      language
    }: {
      user: UserResponseV3
      code: string
      language: string
    }): Promise<HookDataReturns<State['redeemedCode']>> => {
      const nextRedeemedCode: State['redeemedCode'] = null
      let nextRedeemCodeError: State['redeemCodeError'] = null

      try {
        setState(oldState => ({
          ...oldState,
          redeemCodeError: null,
          redeemCodeFetchStatus: FetchStatus.REDEEMING
        }))

        const result = await Platform.FulfillmentApi(sdk).createFulfillmentCode_ByUserId(user.userId, {
          code,
          language,
          region: user.country
        })

        return { data: result }
      } catch (err) {
        nextRedeemCodeError = WidgetErrorHelper.getErrorType(err)
        return { error: nextRedeemCodeError }
      } finally {
        setState({
          redeemedCode: nextRedeemedCode,
          redeemCodeError: nextRedeemCodeError,
          redeemCodeFetchStatus: FetchStatus.IDLE
        })
      }
    },
    []
  )

  return {
    state,
    mutations: { redeemCode }
  }
}
