/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { useEffect, useState } from 'react'
import styles from './StoreList.module.css'
import { StoreItem } from '../StoreItem/StoreItem'
import { fetchStoreItems } from '~/sdk'
import { initializeSDK } from '../../helper/configHelper'
import { ItemInfo } from '@accelbyte/sdk-platform'

const sdk = initializeSDK()

interface Props {
  relatedId?: string
}

export const StoreList = ({ relatedId }: Props) => {
  const [storeItems, setStoreItems] = useState<ItemInfo[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getStoreItems = async () => {
    setIsLoading(true)
    try {
      const queryParams = {}
      const response = await fetchStoreItems(sdk, queryParams)
      if (response) {
        setStoreItems(response.data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getStoreItems()
  }, [])

  const filterByRelatedId = (data: ItemInfo) => data.itemId !== relatedId
  if (isLoading) return <div>Loading ...</div>

  return (
    <div className={styles.storeList}>
      {storeItems
        ? storeItems.filter(filterByRelatedId).map((item, i) => {
            return <StoreItem key={i} item={item} />
          })
        : 'No Data'}
    </div>
  )
}
