/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useCallback } from 'react'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { createStore, useStore } from '~/hooks/useStore'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'
import { EntitlementInfo, ItemInfo, Platform, PopulatedItemInfo } from '@accelbyte/sdk-platform'

interface GameState {
  itemsInfoRecord: Record<string, ItemInfo>
  itemsInfoRecordError: Record<string, FetchErrorType | null>
  itemsInfoRecordFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  itemsLocaleRecord: Record<string, PopulatedItemInfo> | null
  itemsLocaleRecordError: FetchErrorType | null
  itemsLocaleRecordFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  gameEntitlementsRecord: Record<string, EntitlementInfo>
  gameEntitlementsError: FetchErrorType | null
  gameEntitlementsFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  activeGame: ItemInfo | null
}

const DEFAULT_STATE: GameState = {
  itemsInfoRecord: {},
  itemsInfoRecordError: {},
  itemsInfoRecordFetchStatus: FetchStatus.IDLE,

  itemsLocaleRecord: null,
  itemsLocaleRecordError: null,
  itemsLocaleRecordFetchStatus: FetchStatus.IDLE,

  gameEntitlementsRecord: {},
  gameEntitlementsError: null,
  gameEntitlementsFetchStatus: FetchStatus.IDLE,

  activeGame: null
}

const activeGameStore = createStore(DEFAULT_STATE)

export function useGames() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(activeGameStore)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchItemInfo = useCallback(
    async ({ appId }: { appId: string | undefined }): Promise<HookDataReturns<ItemInfo> | undefined> => {
      if (!appId) return

      let itemInfo: ItemInfo | null = null
      let itemInfoError: FetchErrorType | null = null

      try {
        setState({
          itemsInfoRecordError: { [appId]: itemInfoError },
          itemsInfoRecordFetchStatus: FetchStatus.FETCHING
        })
        itemInfo = await Platform.ItemApi(sdk).getItemsByAppId({ appId })
        return { data: itemInfo }
      } catch (error) {
        itemInfoError = WidgetErrorHelper.getErrorType(error)
        return { error: itemInfoError }
      } finally {
        if (itemInfo) {
          setState(oldState => ({
            ...oldState,
            itemsInfoRecord: {
              ...oldState.itemsInfoRecord,
              [appId]: itemInfo as ItemInfo
            }
          }))
        }

        setState(oldState => ({
          ...oldState,
          itemsInfoRecordError: {
            ...oldState.itemsInfoRecordError,
            [appId]: itemInfoError
          },
          itemsInfoRecordFetchStatus: FetchStatus.IDLE,
          activeGame: itemInfo
        }))
      }
    },
    [sdk]
  )

  const setActiveGame = useCallback((record: Record<string, ItemInfo | null>, appId: string): HookDataReturns<ItemInfo> => {
    const itemInfo = record[appId]
    if (itemInfo) {
      setState({ activeGame: itemInfo })
      return { error: null, data: itemInfo }
    }

    return {
      error: new Error(`no game with ID ${appId} found`),
      data: null
    }
  }, [])

  const fetchItemsInfo = useCallback(
    async ({ appIds }: { appIds: string[] }): Promise<HookDataReturns<Record<string, ItemInfo>> | undefined> => {
      let itemsInfoRecord: Record<string, ItemInfo> = {}
      let itemsInfoRecordError: Record<string, FetchErrorType | null> = {}

      try {
        setState({ itemsInfoRecordError, itemsInfoRecordFetchStatus: FetchStatus.FETCHING })

        const results = await Promise.allSettled(
          appIds.map(async appId => {
            return await Platform.ItemApi(sdk).getItemsByAppId({ appId })
          })
        )

        for (let i = 0; i < results.length; i++) {
          const resultItem = results[i]
          const appId = appIds[i]

          if (resultItem.status === 'rejected') {
            itemsInfoRecordError = {
              ...itemsInfoRecordError,
              [appId]: resultItem.reason
            }
          } else {
            itemsInfoRecord = {
              ...itemsInfoRecord,
              [appId]: resultItem.value
            }
          }
        }

        return { data: itemsInfoRecord }
      } catch (error) {
        return { error: WidgetErrorHelper.getErrorType(error) }
      } finally {
        setState({
          itemsInfoRecord,
          itemsInfoRecordError,
          itemsInfoRecordFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const fetchItemsLocale = useCallback(
    async ({ itemIds }: { itemIds: string[] }): Promise<HookDataReturns<GameState['itemsLocaleRecord']> | undefined> => {
      const itemsLocaleRecord: GameState['itemsLocaleRecord'] = {}
      const itemsLocaleRecordError: GameState['itemsLocaleRecordError'] = null

      try {
        setState({ itemsLocaleRecordError, itemsLocaleRecordFetchStatus: FetchStatus.FETCHING })

        const results = await Promise.allSettled(
          itemIds.map(async itemId => {
            return await Platform.ItemApi(sdk).getLocale_ByItemId(itemId)
          })
        )

        for (let i = 0; i < results.length; i++) {
          const resultItem = results[i]
          const itemId = itemIds[i]

          if (resultItem.status === 'rejected') {
            throw new Error(resultItem.reason)
          } else {
            itemsLocaleRecord[itemId] = resultItem.value
          }
        }

        return { data: itemsLocaleRecord }
      } catch (error) {
        return { error: WidgetErrorHelper.getErrorType(error) }
      } finally {
        setState({
          itemsLocaleRecord,
          itemsLocaleRecordError,
          itemsLocaleRecordFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const fetchGameEntitlements = useCallback(
    async ({ limit, userId }: { userId: string; limit?: number }): Promise<HookDataReturns<EntitlementInfo[] | null>> => {
      const gameEntitlementsRecord: GameState['gameEntitlementsRecord'] = {}
      let gameEntitlementsError: GameState['gameEntitlementsError'] = null

      try {
        setState({ gameEntitlementsRecord, gameEntitlementsFetchStatus: FetchStatus.FETCHING })
        const result = await Platform.EntitlementApi(sdk).getEntitlements_ByUserId(userId, {
          entitlementClazz: 'APP',
          limit
        })
        const gameEntitlements = result.data
        if (!gameEntitlements) return { data: null }

        for (const entitlement of gameEntitlements) {
          if (entitlement.appId) {
            gameEntitlementsRecord[entitlement.appId] = entitlement
          }
        }
        return { data: gameEntitlements }
      } catch (error) {
        gameEntitlementsError = WidgetErrorHelper.getErrorType(error)
        return { error: gameEntitlementsError }
      } finally {
        setState({ gameEntitlementsRecord, gameEntitlementsError, gameEntitlementsFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      resetState,
      fetchItemInfo,
      fetchItemsInfo,
      fetchItemsLocale,
      fetchGameEntitlements,
      setActiveGame
    }
  }
}
