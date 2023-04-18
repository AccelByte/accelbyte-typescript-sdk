/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemImageTag } from '@od-ecommerce/helpers/ItemHelper'
import { ItemHelper } from '@od-shared/utils/ItemHelper'
import gameImagePlaceholder from '@od-assets/images/placeholder-mygames.svg'
import React from 'react'
import { ExtendedLink } from '@od-components/components/ExtendedLink/ExtendedLink'
import styles from './GameItem.module.scss'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { ItemInfo, ItemSnapshot } from '@accelbyte/sdk-platform'

const GameItemSnapShot = ({ item }: { item: ItemSnapshot }) => {
  return (
    <div className={styles.gameItem}>
      <div className={styles.imageContainer}>
        <img alt={item.title} src={gameImagePlaceholder} loading="lazy" />
      </div>
      <div className={styles.title}>{item.title}</div>
    </div>
  )
}

const GameItemImpl = ({ item }: { item: ItemInfo }) => {
  const { state: routesState } = useRoutes()
  const {
    state: { isSingleGame }
  } = useDiscoveryConfigs()
  if (!item) return null
  const itemCoverImageUrl = ItemHelper.getFilteredImageUrlByTag(item.images, ItemImageTag.productCover) || gameImagePlaceholder

  return (
    <div className={styles.gameItem}>
      <ExtendedLink
        to={routesState.store.apps.detail.makePath({
          params: { itemId: item.itemId }
        })}
        isDisabled={isSingleGame}>
        <div className={styles.imageContainer}>
          <img alt={item.title} src={itemCoverImageUrl} loading="lazy" />
        </div>
        <div className={styles.title}>{item.title}</div>
      </ExtendedLink>
    </div>
  )
}

export const GameItem = ({ item }: { item: ItemInfo | ItemSnapshot | null }) => {
  if (!item) return null
  const itemInfoParseResult = ItemInfo.safeParse(item)
  return itemInfoParseResult.success ? <GameItemImpl item={itemInfoParseResult.data} /> : <GameItemSnapShot item={item} />
}
