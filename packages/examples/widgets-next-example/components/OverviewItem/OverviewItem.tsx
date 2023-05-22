/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { useState } from 'react'
import styles from './OverviewItem.module.css'
import { ItemInfo, OrderPagingSlicedResult } from '@accelbyte/sdk-platform'
import { useRouter } from 'next/router'
import { REDIRECT_URL } from '../../pages/constants'

interface OrderPayloadProps {
  quantity: number
  price: number
  discountedPrice: number
  currencyCode: string
  itemId: string
  returnUrl: string
}
interface Props {
  itemDetail: ItemInfo | null
  isPurchasing: boolean
  userOrder: OrderPagingSlicedResult | null
  onClickOrder: (order: OrderPayloadProps | null) => void
}

export const OverviewItem = ({ itemDetail, userOrder, onClickOrder, isPurchasing }: Props) => {
  const [toggleContinuePayment, setToggleContinuePayment] = useState<boolean>(false)
  const router = useRouter()
  const getOrderPayload = () => {
    const regionData = itemDetail?.regionData && itemDetail?.regionData[0]
    if (!regionData) return null
    return {
      quantity: 1,
      price: regionData.price || 0,
      discountedPrice: regionData.discountedPrice || 0,
      currencyCode: regionData.currencyCode,
      itemId: itemDetail.itemId,
      returnUrl: `${REDIRECT_URL}/store/${itemDetail.itemId}`
    }
  }
  const getItemPrice = () => {
    if (!itemDetail) return ''
    return `${itemDetail.regionData ? itemDetail.regionData[0].currencyCode : ''} ${
      itemDetail.regionData ? itemDetail.regionData[0].price : ''
    }`
  }
  const getItemTitle = () => itemDetail?.title || ''
  const getItemOverview = () => (itemDetail?.longDescription ? `${itemDetail.longDescription}` : 'No Overview')
  return (
    <div className={styles.overviewItem}>
      <div className={styles.overviewItemLeft}>
        <h3>Overview</h3>
        <div>{getItemOverview()}</div>
      </div>
      <div className={styles.overviewItemRight}>
        <div className={styles.gametitle}>{getItemTitle()}</div>

        {userOrder &&
          userOrder.data.length > 0 &&
          userOrder.data.map((order, i) => (
            <div key={i} className={styles.overviewItemBuy}>
              <span>complete order</span>
              <button onClick={() => router.push(`/orders/${order.orderNo}`)}>Buy Now</button>
            </div>
          ))}
        {userOrder && userOrder.data.length === 0 && !toggleContinuePayment && (
          <div className={styles.overviewItemBuy}>
            <span>{getItemPrice()}</span>
            <button onClick={() => setToggleContinuePayment(true)}>Buy Now</button>
          </div>
        )}
        {toggleContinuePayment && (
          <div className={styles.confirmPayment}>
            <table>
              <tbody>
                <tr>
                  <td>Item</td>
                  <td>{getItemTitle()}</td>
                </tr>
                <tr>
                  <td>Price options</td>
                  <td>{getItemPrice()}</td>
                </tr>
                <tr>
                  <td>Amount to pay </td>
                  <td>{getItemPrice()}</td>
                </tr>
              </tbody>
            </table>
            <button className={styles.cancelButton} onClick={() => setToggleContinuePayment(false)}>
              Cancel
            </button>
            <button
              disabled={getOrderPayload === null || isPurchasing}
              className={styles.continueButton}
              onClick={() => onClickOrder(getOrderPayload())}>
              {isPurchasing ? 'Process Order...' : 'Continue to Payment'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
