/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import styles from './StoreItem.module.css'
import { ItemInfo } from '@accelbyte/sdk-platform'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface Props {
  item: ItemInfo
}

export const StoreItem = ({ item }: Props) => {
  const router = useRouter()
  const onClickItem = (): void => {
    router.push(`/store/${item.itemId}`)
  }

  return (
    <div className={styles.storeItem} onClick={onClickItem}>
      <div className={styles.itemWrapper}>
        <div className={styles.square}>
          {item.images ? (
            <img src={item.images[0].imageUrl} alt="" />
          ) : (
            <Image src="/noImage.jpg" width={600} height={600} alt="no image" />
          )}
        </div>
        <div className="title">{item.name}</div>
        {item.regionData ? (
          <div className="prize">
            {item.regionData[0].currencyCode} {item.regionData[0].price}
          </div>
        ) : null}
      </div>
    </div>
  )
}
