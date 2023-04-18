/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { EligibleUser, UserResponseV3 } from '@accelbyte/sdk-iam'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useCallback, useState } from 'react'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { NoBaseAppIdError } from '../IngameItemStoreDetail/IngameItemStoreDetailHooks'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { AppInfo, ItemInfo, Platform } from '@accelbyte/sdk-platform'

const ENTITLEMENT_NOT_FOUND = 31142

export const DlcStoreDetailHooks = {
  useDlcInformation
}

interface State {
  baseApp: ItemInfo | null
  isBaseAppOwned: boolean | null
  appInfo: AppInfo | null

  dlcInformationFetchStatus: FetchStatus
  dlcInformationError: FetchErrorType | null
}

function useDlcInformation() {
  const [sdk] = useSdk()
  const [state, setState] = useState<State>({
    baseApp: null,
    isBaseAppOwned: null,
    appInfo: null,

    dlcInformationFetchStatus: FetchStatus.IDLE,
    dlcInformationError: null
  })

  const fetchDlcInformation = useCallback(
    async ({
      country,
      language,
      user,
      dlcItem
    }: {
      country?: string
      language?: string
      user: UserResponseV3 | null
      dlcItem: ItemInfo
    }): Promise<HookDataReturns<Pick<State, 'appInfo' | 'baseApp' | 'isBaseAppOwned'> | null>> => {
      let nextBaseApp: State['baseApp'] = null
      let nextAppInfo: State['appInfo'] = null
      let nextIsBaseAppOwned: State['isBaseAppOwned'] = null
      let nextError: State['dlcInformationError'] = null

      try {
        if (!dlcItem.appId) throw new NoAppIdError('')
        if (!dlcItem.baseAppId) throw new NoBaseAppIdError('')

        setState(oldState => ({
          ...oldState,
          dlcInformationError: null,
          dlcInformationFetchStatus: FetchStatus.FETCHING
        }))

        const parsedUser = EligibleUser.safeParse(user)
        let appInfoResult, baseAppResult, baseAppEntitlementResult
        try {
          [appInfoResult, baseAppResult, baseAppEntitlementResult] = await Promise.all([
            Platform.ItemApi(sdk).getAppLocale_ByItemId(dlcItem.itemId),
            Platform.ItemApi(sdk).getItemsByAppId({
              appId: dlcItem.baseAppId,
              region: country,
              language
            }),
            parsedUser.success
              ? Platform.EntitlementApi(sdk).getEntitlementsByAppId_ByUserId(parsedUser.data.userId, { appId: dlcItem.baseAppId })
              : Promise.resolve(null)
          ])
        } catch (error) {
          // TODO verify if original code below still behaves as expetced after refactoring
          // if (appInfoResult.error) throw appInfoResult.error
          // if (baseAppResult.error) throw baseAppResult.error
          // if (baseAppEntitlementResult?.error) {
          //   if (ErrorHelper.extractServiceErrorCode(baseAppEntitlementResult.error) === ENTITLEMENT_NOT_FOUND) {
          //     nextIsBaseAppOwned = false
          //   } else {
          //     throw baseAppResult.error
          //   }
          // }
          if (ErrorHelper.extractServiceErrorCode(error) === ENTITLEMENT_NOT_FOUND) {
            nextIsBaseAppOwned = false
          } else {
            throw error
          }
        }

        // If it's not "filled" yet, then do further checks.
        if (nextIsBaseAppOwned === null) {
          nextIsBaseAppOwned = baseAppEntitlementResult !== null
        }

        nextAppInfo = appInfoResult
        nextBaseApp = baseAppResult

        return {
          error: null,
          data: {
            appInfo: nextAppInfo,
            baseApp: nextBaseApp,
            isBaseAppOwned: nextIsBaseAppOwned
          }
        }
      } catch (err) {
        nextError = WidgetErrorHelper.getErrorType(err)

        return { error: nextError, data: null }
      } finally {
        setState({
          appInfo: nextAppInfo,
          baseApp: nextBaseApp,
          isBaseAppOwned: nextIsBaseAppOwned,
          dlcInformationError: nextError,
          dlcInformationFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: { fetchDlcInformation }
  }
}

export class NoAppIdError extends Error {
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, NoAppIdError.prototype)
  }
}
