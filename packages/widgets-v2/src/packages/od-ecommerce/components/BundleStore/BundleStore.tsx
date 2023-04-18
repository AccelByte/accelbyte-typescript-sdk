/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { getCurrentLanguage } from '@od-components/i18n'
import { StoreConstants } from '@od-ecommerce/constants/StoreConstants'
import { ItemType } from '@od-shared/models/EcommTypes'
import React from 'react'
import { Trans } from 'react-i18next'
import { createStoreForItemsStore } from '~/hooks/platform/useStoreItems'
import { BaseStore, ExposedBaseStoreProps } from '../BaseStore/BaseStore'
import { BaseStoreCompact, BaseStoreCompactProps } from '../BaseStore/BaseStoreCompact'

// Multiple game.
const storeForMultipleGameBundleStore = createStoreForItemsStore()

export const BundleStore = ({ pageSize = StoreConstants.MULTIPLE_GAME_STORE_PAGE_SIZE, ...props }: ExposedBaseStoreProps) => (
  <BaseStore {...props} itemType={ItemType.Enum.BUNDLE} pageSize={pageSize} store={storeForMultipleGameBundleStore} />
)

// Single game.
const storeForSingleGameBundleStore = createStoreForItemsStore()

export const SingleGameBundleStore = ({ baseItem }: { baseItem: BaseStoreCompactProps['baseItem'] | null }) => {
  if (!baseItem) return null

  return (
    <BaseStoreCompact
      store={storeForSingleGameBundleStore}
      baseItem={baseItem}
      itemType={ItemType.enum.BUNDLE}
      pageSize={StoreConstants.SINGLE_GAME_STORE_PAGE_SIZE}
      language={getCurrentLanguage()}
      noItemMessage={<Trans i18nKey="AppDetailPage.inAppStore.noItem">Looks like there aren`t any items for this game yet.</Trans>}
    />
  )
}
