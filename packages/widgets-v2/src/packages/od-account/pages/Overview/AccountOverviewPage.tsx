/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { Loading } from '@od-components/components/Loading/Loading'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './AccountOverviewPage.module.scss'
import { PreviewLinkedAccounts } from './PreviewLinkedAccount'
import { PreviewMyGames } from './PreviewMyGames'
import { mockUserGameEntitlementRecord, mockUserGameInfoRecord, mockUserLinkedPlatform } from '@od-shared/mocks/MockVars'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useGames } from '~/hooks/platform/useGames'
import { useLinkedAccounts } from '~/hooks/iam/useLinkedAccounts'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { FetchUtils } from '~/utils/FetchUtils'

interface Props {
  isPreviewMode?: boolean
}

export const AccountOverviewPage = ({ isPreviewMode }: Props) => {
  const [error, setError] = useState<FetchErrorType | null>(null)
  const { state: gameState, mutations: gameMutations } = useGames()
  const { state: linkedAccountsState, mutations: linkedAccountsMutations } = useLinkedAccounts()
  const { state: userState } = useUserInfo()

  useEffect(() => {
    const userId = userState.user?.userId
    if (isPreviewMode || !userId) return

    init(userId)
  }, [isPreviewMode, userState.user?.userId])

  const init = async (userId: string) => {
    setError(null)

    const [, gameEntitlements] = await Promise.all([
      linkedAccountsMutations.getUserDistinctLinkedPlatform(userId),
      gameMutations.fetchGameEntitlements({ userId })
    ])

    if (gameEntitlements.error) {
      setError(error)
      return
    }

    if (gameEntitlements.data) {
      const appIds = gameEntitlements.data.map(entitlement => entitlement.appId).filter(Boolean) as string[]
      await gameMutations.fetchItemsInfo({ appIds })
    }
  }

  const isLoading = FetchUtils.isMatchStatus(
    [linkedAccountsState.linkAccountFetchStatus, gameState.gameEntitlementsFetchStatus, gameState.itemsInfoRecordFetchStatus],
    FetchStatus.FETCHING
  )
  const linkedPlatform = !isPreviewMode ? linkedAccountsState.linkedPlatform : mockUserLinkedPlatform
  const gameEntitlementsRecord = !isPreviewMode ? gameState.gameEntitlementsRecord : mockUserGameEntitlementRecord
  const gameInfoRecord = !isPreviewMode ? gameState.itemsInfoRecord : mockUserGameInfoRecord

  return (
    <main className={classNames(styles.accountOverviewPage)}>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      ) : (
        <>
          {error && (
            <div className={styles.errorContainer}>
              <CommonError error={error} />
            </div>
          )}
          {/*
            TODO CW-1184
            {Ctx.hasFeature(FeatureFlags.isSubscriptionsVisible) && <SubscriptionOverviewBanner />}
            */}
          <div className={styles.myGamesContainer}>
            <PreviewMyGames gameEntitlementsRecord={gameEntitlementsRecord || null} gameInfoRecord={gameInfoRecord || null} />
          </div>
          <div className={styles.linkedPlatformContainer}>
            <PreviewLinkedAccounts linkedPlatform={linkedPlatform} />
          </div>
        </>
      )}
    </main>
  )
}
