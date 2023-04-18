/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { GameItem } from '../PurchasedItems/GameItem'
import { NoGame } from '../PurchasedItems/NoGame'
import purchasedItemsListStyles from '../PurchasedItems/PurchasedGames.module.scss'
import { AccountOverviewSubSection, AccountOverviewSubSectionBody, AccountOverviewSubSectionHeader } from './AccountOverviewSubSection'
import { AppEntitlementInfo, ItemInfo, ItemSnapshot } from '@accelbyte/sdk-platform'

interface Props {
  gameEntitlementsRecord: Record<string, AppEntitlementInfo> | null
  gameInfoRecord: Record<string, ItemInfo | ItemSnapshot> | null
}

export const PreviewMyGames = ({ gameEntitlementsRecord, gameInfoRecord }: Props) => {
  const { state: routesState } = useRoutes()

  return (
    <AccountOverviewSubSection className={purchasedItemsListStyles.myGamesSubSection}>
      <AccountOverviewSubSectionHeader>
        <Trans i18nKey="AccountOverviewPage.subSectionGames.title">My Games</Trans>
        <Link to={routesState.account.purchasedItems.games.link}>
          <Trans i18nKey="AccountOverviewPage.subSectionGames.seeAll">See all</Trans>
        </Link>
      </AccountOverviewSubSectionHeader>
      <AccountOverviewSubSectionBody>
        <div className={purchasedItemsListStyles.purchasedItemsListWrapper}>
          <div className={purchasedItemsListStyles.myGameList}>
            {gameEntitlementsRecord ? (
              Object.keys(gameEntitlementsRecord).map(appId => {
                const item = gameInfoRecord && gameInfoRecord[appId]
                return item ? <GameItem key={item?.itemId} item={item} /> : null
              })
            ) : (
              <NoGame />
            )}
          </div>
        </div>
      </AccountOverviewSubSectionBody>
    </AccountOverviewSubSection>
  )
}
