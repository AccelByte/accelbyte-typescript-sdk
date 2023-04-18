/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AppName } from '@od-shared/constants/ShConstants'
import { AppBuilderUtils } from '@od-shared/utils/AppBuilderUtils'
import { useCallback } from 'react'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { useSdk } from '../useSdk'
import { createStore, useStore } from '../useStore'
import {
  DiscoveryConfigData,
  LauncherConfigData,
  PaymentConfigData,
  PlayerPortalConfigData,
  TwitchDropConfigData
} from '@accelbyte/sdk-odinconfig'

type TwitchDropGameData = {
  value: string
  label: string
  namespace: string
  clientId: string
}

interface PlayerPortalConfigState {
  playerPortalConfigData: PlayerPortalConfigData | null
  playerPortalConfigError: FetchErrorType | null
  playerPortalConfigFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  launcherData: LauncherConfigData | null
  launcherError: FetchErrorType | null
  launcherFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  paymentData: PaymentConfigData | null
  paymentError: FetchErrorType | null
  paymentFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  twitchDropData: TwitchDropConfigData | null
  twitchDropGamesData: TwitchDropGameData[] | null
  twitchDropError: FetchErrorType | null
  twitchDropFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
}

const DEFAULT_STATE: PlayerPortalConfigState = {
  playerPortalConfigData: null,
  playerPortalConfigError: null,
  playerPortalConfigFetchStatus: FetchStatus.IDLE,

  launcherData: null,
  launcherError: null,
  launcherFetchStatus: FetchStatus.IDLE,

  paymentData: null,
  paymentError: null,
  paymentFetchStatus: FetchStatus.IDLE,

  twitchDropData: null,
  twitchDropGamesData: null,
  twitchDropError: null,
  twitchDropFetchStatus: FetchStatus.IDLE
}

const store = createStore(DEFAULT_STATE)

export function useAppConfigs() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchPlayerPortalConfigs = useCallback(
    async (
      discoveryData: DiscoveryConfigData,
      widgetOptionPlayerPortalConfig?: PlayerPortalConfigData
    ): Promise<HookDataReturns<PlayerPortalConfigData>> => {
      let playerPortalConfigData: PlayerPortalConfigData | null = null
      let playerPortalConfigError: FetchErrorType | null = null

      try {
        setState({ playerPortalConfigError: null, playerPortalConfigFetchStatus: FetchStatus.FETCHING })

        const configs = await AppBuilderUtils.fetchConfigs({
          sdk,
          appName: AppName.WIDGET,
          discoveryData,
          widgetOptions: widgetOptionPlayerPortalConfig
        })

        playerPortalConfigData = (configs as PlayerPortalConfigData) || null
        return { data: playerPortalConfigData }
      } catch (error) {
        playerPortalConfigError = WidgetErrorHelper.getErrorType(error)
        return { error: playerPortalConfigError }
      } finally {
        setState({
          playerPortalConfigData,
          playerPortalConfigError,
          playerPortalConfigFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const fetchLauncherConfigs = useCallback(
    async (
      discoveryData: DiscoveryConfigData,
      widgetOptionLauncherConfig?: LauncherConfigData
    ): Promise<HookDataReturns<LauncherConfigData>> => {
      let launcherConfigData: LauncherConfigData | null = null
      let launcherConfigError: FetchErrorType | null = null

      try {
        setState({ launcherData: null, launcherFetchStatus: FetchStatus.FETCHING })

        const configs = await AppBuilderUtils.fetchConfigs({
          sdk,
          appName: AppName.LAUNCHER,
          discoveryData,
          widgetOptions: widgetOptionLauncherConfig
        })
        launcherConfigData = (configs as LauncherConfigData) || null
        return { data: launcherConfigData }
      } catch (error) {
        launcherConfigError = WidgetErrorHelper.getErrorType(error)
        return { error: launcherConfigError }
      } finally {
        setState({
          launcherData: launcherConfigData,
          launcherError: launcherConfigError,
          launcherFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const fetchPaymentConfigs = useCallback(
    async (
      discoveryData: DiscoveryConfigData,
      widgetOptionPaymentConfig?: PaymentConfigData
    ): Promise<HookDataReturns<PaymentConfigData>> => {
      let nextPaymentData: PaymentConfigData | null = null
      let nextPaymentDataError: FetchErrorType | null = null

      try {
        setState({ paymentError: null, launcherFetchStatus: FetchStatus.FETCHING })

        const configs = await AppBuilderUtils.fetchConfigs({
          sdk,
          appName: AppName.PAYMENT,
          discoveryData,
          widgetOptions: widgetOptionPaymentConfig
        })
        nextPaymentData = (configs as PaymentConfigData) || null
        return { data: nextPaymentData }
      } catch (error) {
        nextPaymentDataError = WidgetErrorHelper.getErrorType(error)
        return { error: nextPaymentDataError }
      } finally {
        setState({
          paymentData: nextPaymentData,
          paymentError: nextPaymentDataError,
          launcherFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const fetchTwitchDropConfigs = useCallback(
    async (
      discoveryData: DiscoveryConfigData,
      widgetOptionTwitchDropConfig?: TwitchDropConfigData
    ): Promise<HookDataReturns<TwitchDropConfigData>> => {
      let twitchDropData: TwitchDropConfigData | null = null
      let twitchDropGamesData: TwitchDropGameData[] | null = null
      let twitchDropError: FetchErrorType | null = null

      try {
        setState({ twitchDropError: null, twitchDropFetchStatus: FetchStatus.FETCHING })

        const configs = await AppBuilderUtils.fetchConfigs({
          sdk,
          appName: AppName.TWITCHDROP,
          discoveryData,
          widgetOptions: widgetOptionTwitchDropConfig
        })

        twitchDropData = (configs as TwitchDropConfigData) || null

        const gameListData = twitchDropData?.gameList.data.games || []
        twitchDropGamesData = gameListData.map(game => ({
          value: game.gameId,
          label: game.gameName,
          namespace: game.namespace,
          clientId: game.clientId
        }))

        return { data: twitchDropData }
      } catch (error) {
        twitchDropError = WidgetErrorHelper.getErrorType(error)
        return { error: twitchDropError }
      } finally {
        setState({
          twitchDropData,
          twitchDropGamesData,
          twitchDropError,
          twitchDropFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      resetState,
      fetchPlayerPortalConfigs,
      fetchLauncherConfigs,
      fetchPaymentConfigs,
      fetchTwitchDropConfigs
    }
  }
}
