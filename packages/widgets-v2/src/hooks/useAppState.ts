/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { DesktopChecker } from '@accelbyte/sdk'
import { useSdk } from './useSdk'
import { useCallback, useRef } from 'react'
import { DBKeys, DesktopDB } from '@od-shared/models/DesktopDB'
import { useUserInfo } from './iam/useUserInfo'
import { useGdpr } from './gdpr/useGdpr'
import { useRoutes } from './routes/useRoutes'
import { useHistory } from './routes/useHistory'
import { useLegal } from './legal/useLegal'
import { useDiscoveryConfigs } from './odin-config/useDiscoveryConfigs'
import { useLinkedAccounts } from './iam/useLinkedAccounts'
import { IamHelper, IamUserAuthorizationClient, TokenResponseV3 } from '@accelbyte/sdk-iam'

export function useAppState() {
  const db = useRef<DesktopDB | null>(DesktopChecker.isDesktopApp() ? new DesktopDB(Device.desktopStorage) : null)
  const [sdk] = useSdk()

  const { state: userState, mutations: userMutations } = useUserInfo()
  const { mutations: legalMutations } = useLegal()
  const { state: gdprState, mutations: gdprMutations } = useGdpr()
  const { mutations: linkedMutations } = useLinkedAccounts()
  const { state: discoveryConfigsState } = useDiscoveryConfigs()

  const { state: routesState } = useRoutes()
  const { state: historyState } = useHistory()

  const refreshSession = useCallback(
    (accessToken?: string, refreshToken?: string | null) => {
      if (!db.current) return

      if (refreshToken && accessToken) {
        db.current.set(DBKeys.ACCESS_TOKEN, accessToken)
        db.current.set(DBKeys.REFRESH_TOKEN, refreshToken)
      }
      sdk.refreshTokens(accessToken, refreshToken)
    },
    [sdk]
  )

  const clearSession = useCallback(
    (onSessionExpired?: () => void) => {
      if (!DesktopChecker.isDesktopApp()) {
        const user = userState.user
        const deletionMark = gdprState.deletionMark
        if (user && !deletionMark && onSessionExpired) {
          onSessionExpired()
        }
        if (deletionMark) {
          logout()
        }
      }

      if (DesktopChecker.isDesktopApp()) {
        clear()
        refreshSession(undefined, undefined)
        if (onSessionExpired) {
          onSessionExpired()
        }
      }
    },
    [sdk]
  )

  /**
   * Clear all app state and DB
   */
  const clear = useCallback(() => {
    userMutations.resetState()
    legalMutations.resetState()
    gdprMutations.resetState()
    linkedMutations.resetState()

    if (!db.current) return

    for (const DBKey of Object.keys(DBKeys)) {
      if (DBKey !== DBKeys.SETTINGS) {
        db.current.delete(DBKey)
      }
    }
  }, [userMutations])

  const refreshToken = useCallback(async () => {
    const result = await new IamUserAuthorizationClient(sdk).refreshToken()
    if (!result) {
      clear()
      return null
    }
    const resultParse = TokenResponseV3.safeParse(result)
    if (!resultParse.success) return null
    return resultParse.data
  }, [sdk])

  const logout = useCallback(
    async (returnPath?: string) => {
      if (DesktopChecker.isDesktopApp()) {
        // TODO: implement this when migrating launcher into widget v2
        // const { gameEntitlementsRecord } = this.gameManager.state
        // const gameIds = gameEntitlementsRecord && Object.keys(gameEntitlementsRecord)
        // this.downloadManagerState?.stopAllDownload(gameIds)
        // const token = this.getPersistDB().getAccessToken() as string
        // await this.userAppManager.revoke({ token })
        // this.clear()
        // this.refreshSession(undefined, undefined)
        // this.state.appHistory.replace(returnPath || LoginPath.Login.link)
      }

      if (!DesktopChecker.isDesktopApp()) {
        await userMutations.logout()
        clear()

        historyState.replace(returnPath || routesState.home.link)
      }
    },
    [historyState]
  )

  const fetchAllUserInformation = useCallback(async () => {
    if (!sdk) return

    const isLegalEnabled = discoveryConfigsState.flags?.isLegalEnabled

    try {
      const [userResult, unsignedPoliciesResult] = await Promise.allSettled([
        userMutations.fetchCurrentUserInformation(),
        legalMutations.fetchUnsignedPolicies()
      ])
      const user = (userResult.status === 'fulfilled' && userResult.value.data) || null

      if (IamHelper.currentUserIsEligible(user)) {
        const eligibilities = unsignedPoliciesResult.status === 'fulfilled' ? unsignedPoliciesResult.value.data : null

        // There are two scenarios where a user can bypass legal requirements:
        // 1. If the user is not blocked by legal, which means there are no mandatory legal agreements for them to accept (eligibilities?.length === 0).
        // 2. If the legal feature flag is disabled (isLegalEnabled === false) and there are no published legal agreements (eligibilities === null).
        const isUserNotBlockedByLegal = eligibilities?.length === 0
        const isIgnoreLegal = !isLegalEnabled && !eligibilities
        if ((isIgnoreLegal || isUserNotBlockedByLegal) && user?.userId) {
          await gdprMutations.fetchGdprDeletionStatus(user?.userId)
          await userMutations.fetchUserProfile(true)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }, [sdk, discoveryConfigsState.flags?.isLegalEnabled])

  const refreshUser = useCallback(async () => {
    await fetchAllUserInformation()
    // TODO: implement this when migrating ecommerce into widget v2
    // await this.refreshWallet()

    if (DesktopChecker.isDesktopApp()) {
      // TODO: implement this when migrating launcher into widget v2 (CW-2240)
      // const PATH_REDIRECT_TO_HOME = [
      //   routesState.upgradeAccount,
      //   routesState.promptLegal,
      //   routesState.accountDeletionSuccess,
      //   routesState.emailVerification,
      //   `${routesState.account}/${routesState.changeEmail}`,
      //   routesState.twoFA
      // ]
      // const currentLocation = historyState.location?.pathname
      // GameHelper.loadGameInfo()
      // if (PATH_REDIRECT_TO_HOME.find(path => path === currentLocation)) {
      //   this.state.appHistory.replace(GlobalPath.Home.link)
      // }
    }
  }, [fetchAllUserInformation])

  return {
    tokens: {
      accessToken: db.current?.get(DBKeys.ACCESS_TOKEN),
      refreshToken: db.current?.get(DBKeys.REFRESH_TOKEN)
    },
    refreshSession,
    clearSession,
    refreshToken,
    logout,
    fetchAllUserInformation,
    refreshUser,
    clear
  }
}
