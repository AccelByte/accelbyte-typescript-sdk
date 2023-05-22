/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { useRouter } from 'next/router'
import React, { useEffect, useState, ReactElement } from 'react'
import { fetchOrderByUserId, fetchItemDetail, fetchItemLocale, orderItem } from '~/sdk'
import { initializeSDK } from '../../helper/configHelper'
import { ItemInfo, OrderPagingSlicedResult } from '@accelbyte/sdk-platform'
import { HeroItem } from '../../components/HeroItem/HeroItem'
import { StoreList } from '../../components/StoreList/StoreList'
import { OverviewItem } from '../../components/OverviewItem/OverviewItem'
import useAuth from '../../hooks/useAuth'
import { LoadingWrapper } from '../../components/LoadingWrapper/LoadingWrapper'
import { NextPageWithLayout } from '../_app'
import { Layout } from '../../components/Layout/Layout'

const sdk = initializeSDK()

interface OrderPayloadProps {
  quantity: number
  price: number
  discountedPrice: number
  currencyCode: string
  itemId: string
  returnUrl: string
}

const IngameItemStoreDetailPage: NextPageWithLayout = () => {
  const { auth } = useAuth()
  const [itemDetail, setItemDetail] = useState<ItemInfo | null>(null)
  const [userOrderList, setUserOrderList] = useState<OrderPagingSlicedResult | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPurchasing, setIsPurchasing] = useState<boolean>(false)
  const router = useRouter()
  const { itemId } = router.query

  useEffect(() => {
    const getItemDetail = async () => {
      if (!itemId) return
      try {
        const response = await fetchItemDetail(sdk, itemId as string)
        if (!response) return
      } catch (error) {
        console.error(error)
      }
    }

    const getItemLocale = async () => {
      if (!itemId) return
      setIsLoading(true)
      try {
        const response = await fetchItemLocale(sdk, itemId as string)
        if (!response) return
        setItemDetail(response)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    const fetchUserOrders = async () => {
      if (!auth?.userId) return
      const response = await fetchOrderByUserId(sdk, auth.userId, { itemId: itemId as string })
      if (!response) return
      setUserOrderList(response)
    }

    getItemDetail()
    getItemLocale()
    fetchUserOrders()
  }, [itemId, auth])

  const purchaseItem = async (orderPayload: OrderPayloadProps) => {
    if (!auth?.userId) return
    try {
      setIsPurchasing(true)
      const response = await orderItem(sdk, auth.userId, orderPayload)
      if (!response) return
      if (response.orderNo) {
        router.push(`/orders/${response.orderNo}`)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsPurchasing(false)
    }
  }

  const onClickOrder = (props: OrderPayloadProps) => {
    purchaseItem(props)
  }

  if (!itemId) return <div>Not found</div>

  return (
    <div className="container w-full">
      <LoadingWrapper isLoading={isLoading}>
        <HeroItem images={itemDetail?.images || null} />
      </LoadingWrapper>

      <LoadingWrapper isLoading={isLoading}>
        <OverviewItem
          itemDetail={itemDetail}
          onClickOrder={props => props !== null && onClickOrder(props)}
          userOrder={userOrderList}
          isPurchasing={isPurchasing}
        />
      </LoadingWrapper>

      <LoadingWrapper isLoading={isLoading}>
        <h3>Related Items</h3>
        <StoreList relatedId={itemDetail?.itemId} />
      </LoadingWrapper>
    </div>
  )
}

IngameItemStoreDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default IngameItemStoreDetailPage
