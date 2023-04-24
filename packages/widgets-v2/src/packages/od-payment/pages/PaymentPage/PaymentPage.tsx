/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { Loading } from '@od-components/components/Loading/Loading'
import { AlertType } from '@od-shared/models/Alert'
import { PaymentStatus } from '@od-shared/models/EcommTypes'
import { UrlHelper, DesktopChecker } from '@accelbyte/sdk'
import { parseISO, format } from 'date-fns'
import React, { useCallback, useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import './PaymentPage.scss'
import { PaymentStation } from '../../components/PaymentStation/PaymentStation'
import { LegacyPaymentStation } from '../../components/PaymentStation/LegacyPaymentStation'
import { OrdersHooks } from '@od-ecommerce/hooks/OrdersHooks'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useHistory } from '~/hooks/routes/useHistory'
import {
  OrderCancelledDialog,
  OrderExpiredDialog,
  PaymentStatusFailedDialog,
  PaymentStatusNeedMoreTimeProcessedDialog,
  PaymentStatusProcessedCountDownDialog,
  PaymentStatusSuccessDialog
} from '@od-ecommerce/components/PaymentStatusDialog/PaymentStatusDialog'
import { z } from 'zod'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { useWallet } from '~/hooks/platform/useWallet'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useOrderProcess } from '~/hooks/platform/useOrderProcess'
import { useSdkOptions } from '~/hooks/useSdk'
import { Env } from '@od-shared/Env'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { ItemSnapshot, OrderInfo, OrderStatus } from '@accelbyte/sdk-platform'

const PROCESSED_DIALOG_COUNTDOWN_IN_SECOND = 5
const DEFAULT_RETRY_TIMEOUT = 1000

const CancellationDialogType = z.enum(['CANCELLATION_PROMPT', 'CANCELLATION_SUCCESS'])
type CancellationDialogType = z.infer<typeof CancellationDialogType>
const PaymentDialogType = z.enum(['PAYMENT_NEED_MORE_PROCESSING_TIME', 'PAYMENT_PROCESSED_COUNTDOWN', 'PAYMENT_SUCCESSFUL'])
type PaymentDialogType = z.infer<typeof PaymentDialogType>

export interface PaymentPageProps {
  orderNo: string
  redirectPath?: string
  // This is for widgets.
  onClosePaymentDialog?: (
    orderInfo:
      | {
          status: 'orders-cancelled' | 'payment-processing'
        }
      | {
          status: 'payment-succeeded'
          order: OrderInfo
        }
  ) => void
  isOnlyShowCloseButton?: boolean
}

type State = {
  paymentStatus: PaymentStatus | null
  orderInfo: OrderInfo | null
  currentlyOpenDialog: CancellationDialogType | PaymentDialogType | undefined
}

export function PaymentPage({ orderNo, isOnlyShowCloseButton, onClosePaymentDialog, redirectPath }: PaymentPageProps) {
  const [state, setState] = useState<State>({
    paymentStatus: null,
    orderInfo: null,
    currentlyOpenDialog: undefined
  })

  // TODO: update background properly
  // UIEvent.updateBackground(`url(${bgCommon})`)

  const [sdkOptions] = useSdkOptions()
  const {
    state: { flags }
  } = useDiscoveryConfigs()
  const {
    state: { user }
  } = useUserInfo()
  const {
    state: { order, orderFetchStatus, orderError, isOrderExpired },
    mutations: { fetchOrder }
  } = OrdersHooks.useOrderDetail()
  const {
    state: { cancelProcessFetchStatus, cancelProcessError },
    mutations: { cancelAllPendingOrders }
  } = usePendingOrders()
  const {
    mutations: { refreshWallet }
  } = useWallet()

  const userId = user?.userId

  useEffect(() => {
    if (!userId) return

    fetchOrder({ userId, orderNo })
  }, [userId, orderNo])

  const onReloadPageWarningWhileStillInCountdown = useCallback((e: BeforeUnloadEvent) => {
    e.preventDefault()
  }, [])

  useEffect(() => {
    window.addEventListener('beforeunload', onReloadPageWarningWhileStillInCountdown, false)

    return () => {
      window.removeEventListener('beforeunload', onReloadPageWarningWhileStillInCountdown, false)
    }
  }, [])

  const { state: history } = useHistory()

  function redirect() {
    if (redirectPath) {
      history.push(redirectPath)
      return
    }
    return null
  }

  function updateState(newState: Partial<State>) {
    setState(oldState => ({ ...oldState, ...newState }))
  }

  function closeDialog() {
    updateState({ currentlyOpenDialog: undefined })
  }

  function renderCancellationDialog() {
    const isCancelling = cancelProcessFetchStatus === FetchStatus.CANCELLING

    return (
      <Dialog
        className="orderDialog"
        title={<Trans i18nKey="OrderPage.cancellationDialog.title">Confirm Cancellation</Trans>}
        isOpen={true}>
        <DialogBody>
          <p>
            <Trans i18nKey="OrderPage.cancellationDialog.message">
              You're just one step away from completing payment, are you sure you want to cancel this order?
            </Trans>
          </p>
          {cancelProcessError && (
            <div className="errorContainer">
              <CommonError error={cancelProcessError} />
            </div>
          )}
        </DialogBody>
        <DialogFooter className="orderCancellationDialogFooter">
          <div className="btnContainer">
            <Button
              disabled={isCancelling}
              onClick={closeDialog}
              className="btn btn-ghost uppercase"
              buttonType={ButtonType.TEXT}
              buttonStyle={ButtonStyle.NONE}>
              <Trans i18nKey="OrderPage.cancellationDialog.backButton">Back</Trans>
            </Button>
            <Button loadingIndicator="SPINNER" className="btn-primary uppercase" isLoading={isCancelling} onClick={() => cancelOrder()}>
              <Trans i18nKey="OrderPage.cancellationDialog.cancelButton">Cancel Order</Trans>
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    )
  }

  function renderExpiryDialog() {
    if (!order) return null
    if (order.status !== OrderStatus.enum.CLOSED && !isOrderExpired) return
    return <OrderExpiredDialog className="orderDialog" onCloseDialog={redirect} />
  }

  function onClosePaymentSuccessfulDialog() {
    redirect()

    if (!order) return
    onClosePaymentDialog?.({ status: 'payment-succeeded', order })
  }

  function onCloseOrderCancelledDialog() {
    onClosePaymentDialog?.({ status: 'orders-cancelled' })
    redirect()
  }

  function renderCancellationNotice() {
    return <OrderCancelledDialog className="orderDialog" onCloseDialog={onCloseOrderCancelledDialog} />
  }

  async function cancelOrder() {
    if (!order || !userId) return

    const result = await cancelAllPendingOrders([order], userId)
    if (!result.error) {
      updateState({
        currentlyOpenDialog: CancellationDialogType.enum.CANCELLATION_SUCCESS
      })
    }
  }

  async function onPaymentSuccess() {
    if (!userId) return

    const orderResult = await fetchOrder({ orderNo, userId })
    await refreshWallet(user, flags)

    updateState({ paymentStatus: PaymentStatus.enum.DONE })
    if (!orderResult.data?.order) return

    switch (orderResult.data.order.status) {
      case OrderStatus.enum.INIT:
        retryCheckOrderStatus()
        updateState({
          currentlyOpenDialog: PaymentDialogType.enum.PAYMENT_PROCESSED_COUNTDOWN
        })
        break
      case OrderStatus.enum.CHARGED:
      case OrderStatus.enum.FULFILLED:
        updateState({
          currentlyOpenDialog: PaymentDialogType.enum.PAYMENT_SUCCESSFUL
        })
        break
    }
  }

  async function retryCheckOrderStatus(retry: number = PROCESSED_DIALOG_COUNTDOWN_IN_SECOND, timeout: number = DEFAULT_RETRY_TIMEOUT) {
    if (!userId) return

    const orderResult = await fetchOrder({ orderNo, userId })
    const order = orderResult.data?.order

    if (!order) return
    if (order.status === OrderStatus.enum.FULFILLED) {
      window.removeEventListener('beforeunload', onReloadPageWarningWhileStillInCountdown, false)
      updateState({
        currentlyOpenDialog: PaymentDialogType.enum.PAYMENT_SUCCESSFUL
      })
      onClosePaymentDialog?.({ status: 'payment-succeeded', order })
    }
    if (order.status === OrderStatus.enum.INIT && retry > 0) {
      setTimeout(() => {
        retryCheckOrderStatus(retry - 1, timeout)
      }, timeout)
    }
    if (retry === 0) {
      updateState({
        currentlyOpenDialog: PaymentDialogType.enum.PAYMENT_NEED_MORE_PROCESSING_TIME
      })
      onClosePaymentDialog?.({ status: 'payment-processing' })
    }
  }

  const {
    mutations: { onOrderFulfilledHook }
  } = useOrderProcess()
  const { state: routes } = useRoutes()

  function renderPaymentStation(order: OrderInfo) {
    const isPaymentV2Enabled = flags?.isPaymentV2Enabled
    const currentPath = `${UrlHelper.trimSlashFromStringStart(history.location.pathname)}${history.location.search}`

    return isPaymentV2Enabled ? (
      <PaymentStation
        order={order}
        onPaymentProcessed={(paymentStatus: PaymentStatus) => {
          switch (paymentStatus) {
            case PaymentStatus.enum.DONE:
              onOrderFulfilledHook({ user, flags, createdOrder: order })
              onPaymentSuccess()
              break
            case PaymentStatus.enum.FAILED:
              updateState({ paymentStatus })
              break
          }
        }}
        paymentStationUrl={
          DesktopChecker.isDesktopApp()
            ? UrlHelper.combineURLPaths(
                process.env.NODE_ENV === 'development' ? 'http://localhost:3030' : sdkOptions.baseURL,
                Env.PLAYER_PORTAL_BASE_URL,
                'payment/index.html'
              )
            : undefined
        }
        returnUrl={
          DesktopChecker.isDesktopApp()
            ? `${Env.REDIRECT_URL}${currentPath}`
            : UrlHelper.combineURLPaths(window.location.origin, Env.PLAYER_PORTAL_BASE_URL, routes.paymentSuccessCallback.link)
        }
      />
    ) : (
      <LegacyPaymentStation
        order={order}
        onPaymentProcessed={(paymentStatus: PaymentStatus) => {
          switch (paymentStatus) {
            case PaymentStatus.enum.DONE:
              onOrderFulfilledHook({ user, flags, createdOrder: order })
              onPaymentSuccess()
              break
            case PaymentStatus.enum.FAILED:
              updateState({ paymentStatus })
              break
          }
        }}
        returnUrl={UrlHelper.combineURLPaths(window.location.origin, Env.PLAYER_PORTAL_BASE_URL, routes.paymentSuccessCallback.link)}
      />
    )
  }

  function renderOrderContent(order: OrderInfo, itemSnapshot: ItemSnapshot): React.ReactNode {
    if (!order.expireTime) return
    const { paymentStatus } = state
    const expirationTime = format(parseISO(order.expireTime), 'd MMM yyyy hh:mm a')
    return (
      <div className="orderContent">
        <div className="orderCard">
          <div className="orderHeader">
            <Trans i18nKey="OrderPage.orderContent.title">Payment</Trans>
          </div>
          <div className="orderExpire">
            {itemSnapshot.regionDataItem && (
              <Alert type={AlertType.info}>
                <Trans i18nKey="OrderPage.orderExpire.title">This order will expire on</Trans>&nbsp;{expirationTime}
              </Alert>
            )}
          </div>
          {order && order.status === OrderStatus.enum.INIT && paymentStatus !== PaymentStatus.enum.DONE && (
            <section className="paymentSection" id="paymentSection">
              {renderPaymentStation(order)}
              <div className="btnContainer">
                <button
                  disabled={order.status !== OrderStatus.enum.INIT}
                  onClick={() =>
                    updateState({
                      currentlyOpenDialog: CancellationDialogType.enum.CANCELLATION_PROMPT
                    })
                  }
                  className="btn btn-ghost">
                  <Trans i18nKey="OrderPage.cancelOrder">Cancel</Trans>
                </button>
              </div>
            </section>
          )}
        </div>

        <button
          disabled={order.status !== OrderStatus.enum.INIT}
          onClick={() =>
            updateState({
              currentlyOpenDialog: CancellationDialogType.enum.CANCELLATION_PROMPT
            })
          }
          className="btn btnCancel">
          <Trans i18nKey="OrderPage.cancelOrder">Cancel</Trans>
        </button>
      </div>
    )
  }

  function restartPayment() {
    updateState({ paymentStatus: null, currentlyOpenDialog: undefined })
  }

  const { paymentStatus, currentlyOpenDialog } = state
  const isPaymentStatusDialogOpen = PaymentDialogType.safeParse(currentlyOpenDialog).success
  const isFetching = orderFetchStatus === FetchStatus.FETCHING

  if (order?.status === OrderStatus.enum.FULFILLED) {
    return (
      <PaymentStatusSuccessDialog
        className="orderDialog"
        orderInfo={order}
        onCloseDialog={onClosePaymentSuccessfulDialog}
        isOnlyShowCloseButton={isOnlyShowCloseButton}
      />
    )
  }

  return (
    <div className="paymentBox h-full">
      {currentlyOpenDialog === PaymentDialogType.enum.PAYMENT_NEED_MORE_PROCESSING_TIME && (
        <PaymentStatusNeedMoreTimeProcessedDialog onClose={redirect} />
      )}
      {currentlyOpenDialog === PaymentDialogType.enum.PAYMENT_PROCESSED_COUNTDOWN && <PaymentStatusProcessedCountDownDialog />}
      {currentlyOpenDialog === PaymentDialogType.enum.PAYMENT_SUCCESSFUL && order && (
        <PaymentStatusSuccessDialog
          className="orderDialog"
          orderInfo={order}
          onCloseDialog={onClosePaymentSuccessfulDialog}
          isOnlyShowCloseButton={isOnlyShowCloseButton}
        />
      )}

      {paymentStatus === PaymentStatus.enum.FAILED && (
        <PaymentStatusFailedDialog className="orderDialog" onCloseDialog={() => restartPayment()} />
      )}

      {renderExpiryDialog()}
      {currentlyOpenDialog === CancellationDialogType.enum.CANCELLATION_SUCCESS && renderCancellationNotice()}
      {currentlyOpenDialog === CancellationDialogType.enum.CANCELLATION_PROMPT && renderCancellationDialog()}

      {isFetching && (
        <div className="flex h-full items-center justify-center">
          <Loading />
        </div>
      )}

      {!isFetching && (
        <>
          {orderError && (
            <div className="errorContainer">
              <CommonError error={orderError} />
            </div>
          )}
          {order?.itemSnapshot && !isPaymentStatusDialogOpen && renderOrderContent(order, order.itemSnapshot)}
        </>
      )}
    </div>
  )
}
