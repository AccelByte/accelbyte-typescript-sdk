/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CurrencyType, STORE_IMAGE_KEY } from '@od-shared/models/EcommTypes'
import { PurchaseHelper } from '@od-shared/utils/PurchaseHelper'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import defaultItemImage from '@od-assets/images/default-item-image.svg'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trans } from 'react-i18next'
import { OrdersHooks } from '@od-ecommerce/hooks/OrdersHooks'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { MediumHelper, YoutubeVideoMediumCodec } from '@od-medium-serde'
import { DateUtils } from '~/utils/DateUtils'
import { CommonError } from '@od-components/components/CommonError'
import { BackLinkIcon } from '@od-components/components/Icons/BackLinkIcon'
import { Loading } from '@od-components/components/Loading/Loading'
import { AccountMainSection, AccountMainSectionHeader, AccountMainSectionBody } from '../AccountMainSection/AccountMainSection'
import { useRoutes } from '~/hooks/routes/useRoutes'
import styles from './OrderHistoryDetail.module.scss'
import { FetchStatus } from '~/constants/fetch-statuses'
import { Image, ItemInfo, ItemSnapshot, OrderInfo } from '@accelbyte/sdk-platform'

interface Props {
  orderNo: string
}

export function OrderHistoryDetail({ orderNo }: Props) {
  const {
    state: { user }
  } = useUserInfo()
  const {
    state: { order, orderedItem, orderError, orderFetchStatus },
    mutations: { fetchOrder }
  } = OrdersHooks.useOrderDetail()

  const { state: routes } = useRoutes()
  const userId = user?.userId

  useEffect(() => {
    if (!userId) return

    fetchOrder({ userId, orderNo })
  }, [userId, orderNo])

  const isFetching = orderFetchStatus === FetchStatus.FETCHING

  return (
    <AccountMainSection className={styles.orderHistoryDetailPage}>
      <AccountMainSectionHeader>
        <span className="navigationContainer">
          <Link to={routes.account.orderHistory.index.link}>
            <BackLinkIcon />
          </Link>
        </span>
        <Trans i18nKey="OrderHistoryDetailPage.title">Order History</Trans>
      </AccountMainSectionHeader>
      <AccountMainSectionBody>
        {isFetching && <Loading className="loading" />}

        {!isFetching && orderError && (
          <div className="errorContainer">
            <CommonError error={orderError} />
          </div>
        )}

        {!isFetching && order && orderedItem && <OrderHistoryDetailSection order={order} itemInfo={orderedItem} />}
      </AccountMainSectionBody>
    </AccountMainSection>
  )
}

// Composing components.
function OrderHistoryDetailSection({ order, itemInfo }: { order: OrderInfo; itemInfo: ItemInfo }) {
  const createdDate = DateUtils.formatDate(order.createdTime, { type: 'dynamic', format: 'LLLL' })
  return (
    <React.Fragment>
      <div className="orderInfoContainer">
        <p className="infoTitle">
          <Trans i18nKey="OrderHistoryDetailPage.orderDate">Order date</Trans>
        </p>
        <p>{createdDate}</p>
      </div>
      <div className="orderInfoContainer">
        <p className="infoTitle">
          <Trans i18nKey="OrderHistoryDetailPage.orderID">Order No</Trans>
        </p>
        <p>{order.orderNo}</p>
      </div>

      {!order.itemSnapshot && (
        <div className="noData">
          <Trans i18nKey="OrderHistoryDetailPage.noItemDataFound">Item data not found</Trans>
        </div>
      )}

      {order.itemSnapshot && <OrderItem order={order} itemSnapshot={order.itemSnapshot} itemInfo={itemInfo} />}
    </React.Fragment>
  )
}

function OrderItem({ order, itemInfo, itemSnapshot }: { order: OrderInfo; itemSnapshot: ItemSnapshot; itemInfo: ItemInfo }) {
  return (
    <React.Fragment>
      <div className="orderItemContainer">
        <div className="tableHead">
          <p className="itemName">
            <Trans i18nKey="OrderHistoryDetailPage.item">Item</Trans>
          </p>
          <p className="itemText">
            <Trans i18nKey="OrderHistoryDetailPage.price">Price</Trans>
          </p>
          <p className="itemText">
            <Trans i18nKey="OrderHistoryDetailPage.quantity">Quantity</Trans>
          </p>
          <p className="itemText">
            <Trans i18nKey="OrderHistoryDetailPage.subtotal">Subtotal</Trans>
          </p>
        </div>
        <div className="divider top" />
        {itemSnapshot.regionDataItem && (
          <div className="itemInfoContainer">
            <div className="itemContainer">
              <img className="itemImage" src={getItemImage(itemInfo)} alt={itemInfo.title} loading="lazy" />
              <p className="itemName">{itemInfo.title}</p>
            </div>
            <p className="itemText">{`${order.currency.currencySymbol} ${PurchaseHelper.calculateIntegerPrice(
              (order.subtotalPrice ? order.subtotalPrice : 0) / order.quantity,
              order.currency
            )}`}</p>
            <p className="itemText">{order.quantity}</p>
            <p className="itemText">
              {`${order.currency.currencySymbol} ${PurchaseHelper.calculateIntegerPrice(
                order.subtotalPrice ? order.subtotalPrice : 0,
                order.currency
              )}`}
            </p>
          </div>
        )}
      </div>
      <div className="divider bottom" />

      <TotalOrder order={order} />
    </React.Fragment>
  )
}

function TotalOrder({ order }: { order: OrderInfo }) {
  const {
    status,
    currency: { currencySymbol },
    totalPrice = 0,
    totalTax = 0
  } = order
  const tax = PurchaseHelper.calculateIntegerPrice(totalTax, order.currency)
  const calculatedTotalPrice = PurchaseHelper.calculateIntegerPrice(totalPrice, order.currency)
  const showTax = order.currency.currencyType === CurrencyType.enum.REAL
  return (
    <div className="totalOrderContainer">
      <div className="infoNameColumn">
        {showTax && (
          <p className="infoText">
            <Trans i18nKey="OrderHistoryDetailPage.tax">Tax</Trans>
          </p>
        )}
        <p className="infoText">
          <Trans i18nKey="OrderHistoryDetailPage.total">Total</Trans>
        </p>
        <p className="infoText">
          <Trans i18nKey="OrderHistoryDetailPage.status">Status</Trans>
        </p>
      </div>
      <div className="emptyDividerColumn" />
      <div className="infoAmountColumn">
        {showTax && (
          <p className="infoAmount">
            {currencySymbol} {tax}
          </p>
        )}
        <p className="infoAmount">
          {currencySymbol} {calculatedTotalPrice}
        </p>
        <p className="infoAmount">{status}</p>
      </div>
    </div>
  )
}

// Helper functions.
function getItemImage(itemInfo: ItemInfo) {
  const { thumbnailUrl } = itemInfo
  if (thumbnailUrl && UrlUtils.isValidUrl(thumbnailUrl)) return thumbnailUrl

  const iconImage = getGameIconImage(itemInfo)
  if (iconImage && UrlUtils.isValidUrl(iconImage)) return iconImage

  return defaultItemImage
}

function getGameIconImage(gameData: ItemInfo): string | undefined {
  const gameBackground = getGameImageByKey(gameData, STORE_IMAGE_KEY.GAME_ICON)
  if (Array.isArray(gameBackground) && gameBackground.length > 0) {
    return gameBackground[0].imageUrl
  }
  return undefined
}

function getGameImageByKey(app: ItemInfo, keyString: string): Image[] | undefined {
  const { images } = app
  if (!!images && Array.isArray(images) && images.length) {
    const filteredImageByKeystring = images.filter(
      (image: Image) => image.as === keyString && UrlUtils.transformToValidURLOrUndefined(image.imageUrl)
    )
    if (keyString !== STORE_IMAGE_KEY.SCREENSHOT) {
      return filteredImageByKeystring
    } else {
      const filteredImageWithoutYoutube: Image[] = []
      filteredImageByKeystring.forEach((rawItemMedium: Image) => {
        const [medium, error] = MediumHelper.fromRaw(rawItemMedium)
        if (!error && medium && !YoutubeVideoMediumCodec.safeParse(medium).success) {
          filteredImageWithoutYoutube.push(rawItemMedium)
        }
      })

      return filteredImageWithoutYoutube
    }
  }
  return undefined
}
