/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { Loading } from '@od-components/components/Loading/Loading'
import { Pagination } from '@od-components/components/Pagination/Pagination'
import { PurchaseHelper } from '@od-shared/utils/PurchaseHelper'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { AccountMainSection, AccountMainSectionBody, AccountMainSectionHeader } from '../AccountMainSection/AccountMainSection'
import styles from './OrderHistory.module.scss'
import { OrderStatusTranslation } from './OrderStatusTranslation'
import { mockUserOrderHistory } from '@od-shared/mocks/MockVars'
import { OrdersHooks } from '@od-ecommerce/hooks/OrdersHooks'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { FetchStatus } from '~/constants/fetch-statuses'
import { DateUtils } from '~/utils/DateUtils'
import { OrderPagingSlicedResult } from '@accelbyte/sdk-platform'

export interface OrderHistoryProps {
  page: number
  isPreviewMode?: boolean
}

export function OrderHistory({ page, isPreviewMode }: OrderHistoryProps) {
  const {
    state: { user }
  } = useUserInfo()
  const userId = user?.userId

  const { state, mutations } = OrdersHooks.useOrdersList()

  useEffect(() => {
    if (!userId || isPreviewMode) return

    mutations.fetchOrdersList({ page, userId })
  }, [page, userId])

  const { ordersList, ordersListError, ordersListFetchStatus } = state

  const isFetching = ordersListFetchStatus === FetchStatus.FETCHING
  const orderInfoList = !isPreviewMode ? ordersList : mockUserOrderHistory

  return (
    <AccountMainSection className={styles.orderHistoryPage}>
      <AccountMainSectionHeader>
        <Trans i18nKey="OrderHistoryPage.title">Order History</Trans>
      </AccountMainSectionHeader>
      <AccountMainSectionBody>
        {isFetching && <Loading className="loading" />}

        {!isFetching && ordersListError && (
          <div className="errorContainer">
            <CommonError error={ordersListError} />
          </div>
        )}

        {!isFetching && orderInfoList && orderInfoList.data.length > 0 && <OrderTable currentPage={page} ordersList={orderInfoList} />}

        {!isFetching && orderInfoList && orderInfoList.data.length === 0 && (
          <div className="noData">
            <Trans i18nKey="OrderHistoryPage.dataNotFound">Order history data not found</Trans>
          </div>
        )}
      </AccountMainSectionBody>
    </AccountMainSection>
  )
}

// Composing components.
function OrderTable({ ordersList, currentPage }: { ordersList: OrderPagingSlicedResult; currentPage: number }) {
  const { state: routes } = useRoutes()
  const { data, paging } = ordersList
  const hasNext = !!paging?.next
  const hasPrev = !!paging?.previous

  return (
    <>
      <div className={styles.orderHistory}>
        <div className="tableHead">
          <div className="tableColumn first">
            <p className="title">
              <Trans i18nKey="OrderHistoryPage.date">Date</Trans>
            </p>
            <p className="title">
              <Trans i18nKey="OrderHistoryPage.itemName">Item name</Trans>
            </p>
          </div>
          <div className="tableColumn second">
            <p className="title">
              <Trans i18nKey="OrderHistoryPage.total">Total</Trans>
            </p>
            <p className="title">
              <Trans i18nKey="OrderHistoryPage.status">Status</Trans>
            </p>
          </div>
        </div>
        {data.map(order => {
          const createdDate = DateUtils.formatDate(order.createdTime, { type: 'dynamic', format: 'LLLL' })
          return (
            <div className="tableContent" key={order.orderNo}>
              <div className="tableColumn first">
                <div className="date">
                  <p>{createdDate}</p>
                </div>
                <div className="textContent ">{order.itemSnapshot && order.itemSnapshot.title}</div>
              </div>
              <div className="tableColumn second">
                <div className="textContent">
                  {`${order.currency.currencySymbol} ${PurchaseHelper.calculateIntegerPrice(order.totalPrice || 0, order.currency)}`}
                </div>
                <div className="textContent">
                  <OrderStatusTranslation status={order.status} />
                </div>
                <div className="btnView">
                  <Link
                    to={routes.account.orderHistory.detail.makePath({
                      params: { orderNo: order.orderNo }
                    })}>
                    <Trans i18nKey="OrderHistoryPage.view">View</Trans>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="paginationContainer">
        <Pagination
          next={hasNext && routes.account.orderHistory.index.makePath({ query: { page: currentPage + 1 } }).toString()}
          prev={hasPrev && routes.account.orderHistory.index.makePath({ query: { page: currentPage - 1 } }).toString()}
        />
      </div>
    </>
  )
}
