/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { getCurrentLanguage } from '@od-components/i18n'
import { StoreConstants } from '@od-ecommerce/constants/StoreConstants'
import { AppType, ItemType } from '@od-shared/models/EcommTypes'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import React from 'react'
import { Trans } from 'react-i18next'
import { createStoreForItemsStore } from '~/hooks/platform/useStoreItems'
import { BaseStore, ExposedBaseStoreProps } from '../BaseStore/BaseStore'
import { BaseStoreCompact, BaseStoreCompactProps } from '../BaseStore/BaseStoreCompact'
import './AppStore.scss'
import { useHistory } from '~/hooks/routes/useHistory'

// Multiple game.
const storeForMultipleGameAppStore = createStoreForItemsStore()

export const AppStore = ({ pageSize = StoreConstants.MULTIPLE_GAME_STORE_PAGE_SIZE, ...props }: ExposedBaseStoreProps) => {
  const { state: historyState } = useHistory()
  const plan = UrlUtils.silentSearchParamsBuilder(historyState.location.search).get('plan') || undefined

  return (
    <BaseStore {...props} pageSize={pageSize} itemType={ItemType.Enum.APP} plan={plan} store={storeForMultipleGameAppStore}>
      {/* TODO CW-1184
      {Ctx.hasFeature(FeatureFlags.isSubscriptionsVisible) && <SubscriptionFilter />}
      */}
    </BaseStore>
  )
}

// Single game.
const storeForSingleGameAppStore = createStoreForItemsStore()

export const SingleGameAppStore = ({ baseItem }: { baseItem: BaseStoreCompactProps['baseItem'] | null }) => {
  if (!baseItem) return null

  return (
    <BaseStoreCompact
      store={storeForSingleGameAppStore}
      baseItem={baseItem}
      itemType={ItemType.enum.APP}
      appType={AppType.enum.DLC}
      pageSize={StoreConstants.SINGLE_GAME_STORE_PAGE_SIZE}
      language={getCurrentLanguage()}
      noItemMessage={<Trans i18nKey="AppDetailPage.inAppStore.noItem">Looks like there aren`t any items for this game yet.</Trans>}
    />
  )
}
