/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemHelper } from '@od-shared/utils/ItemHelper'
import classNames from 'classnames'
import { ItemInfo } from '@accelbyte/sdk-platform'
import React from 'react'
import styles from './SubscriptionImages.module.scss'
import { useSubscription } from '~/hooks/platform/useSubscription'
import { SubscriptionHelper } from '@od-ecommerce/helpers/SubscriptionHelper'

export const SubscriptionImages = ({ item, className }: { item: ItemInfo; className?: string }) => {
  const {
    state: { subscriptionItems }
  } = useSubscription()
  if (!ItemHelper.isItemInSubscription(item)) return null

  return (
    <div className={classNames(styles.subscriptionImages, 'subscriptionImages', className)}>
      {item.features &&
        SubscriptionHelper.getSubscriptionImagesBySKUs(subscriptionItems, item.features).map(url => (
          <img key={url} src={url} loading="lazy" />
        ))}
    </div>
  )
}
