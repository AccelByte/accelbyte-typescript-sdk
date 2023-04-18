/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { Loading } from '@od-components/components/Loading/Loading'
import React, { useEffect } from 'react'
import { GameItem } from './GameItem'
import { mockUserPurchasedGameList } from '@od-shared/mocks/MockVars'
import { useGames } from '~/hooks/platform/useGames'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { FetchUtils } from '~/utils/FetchUtils'
import { FetchStatus } from '~/constants/fetch-statuses'
import { NoGame } from './NoGame'

import styles from './PurchasedGames.module.scss'
import { EntitlementInfo } from '@accelbyte/sdk-platform'

export interface PurchasedGamesProps {
  limit?: number
  isPreviewMode?: boolean
}

export function PurchasedGames({ isPreviewMode, limit }: PurchasedGamesProps) {
  const {
    state: {
      gameEntitlementsFetchStatus,
      gameEntitlementsRecord,
      gameEntitlementsError,
      itemsLocaleRecord,
      itemsLocaleRecordFetchStatus,
      itemsLocaleRecordError
    },
    mutations: { fetchGameEntitlements, fetchItemsLocale }
  } = useGames()
  const {
    state: { user }
  } = useUserInfo()
  const userId = user?.userId

  useEffect(() => {
    async function fetchData() {
      if (!userId) return

      const fetchEntitlementsResult = await fetchGameEntitlements({ userId, limit })
      if (!fetchEntitlementsResult.data) return

      await fetchItemsLocale({ itemIds: fetchEntitlementsResult.data.map(item => item.itemId) })
    }

    fetchData()
  }, [userId])

  const gameList = !isPreviewMode ? Object.values(gameEntitlementsRecord) : mockUserPurchasedGameList
  const isFetching = FetchUtils.isMatchStatus([gameEntitlementsFetchStatus, itemsLocaleRecordFetchStatus], FetchStatus.FETCHING)
  const error = gameEntitlementsError || itemsLocaleRecordError

  return (
    <div className={styles.purchasedItemsListWrapper}>
      {isFetching && <Loading />}
      {!isFetching && error && (
        <div className="errorContainer">
          <CommonError error={error} />
        </div>
      )}

      {!isFetching && gameList && itemsLocaleRecord && (
        <div className={styles.myGameList}>
          {Object.keys(itemsLocaleRecord).length > 0 && gameList.length ? (
            gameList.map((appEntitlement: EntitlementInfo) => {
              const { itemId } = appEntitlement
              const item = itemId && itemsLocaleRecord[itemId]
              return item ? <GameItem key={item.itemId} item={item} /> : null
            })
          ) : (
            <NoGame />
          )}
        </div>
      )}
    </div>
  )
}
