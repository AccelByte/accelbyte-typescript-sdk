/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { RequestType } from '@od-payment/models/Payment'
import PayPalTextOnlySvg from '@od-assets/images/paypalTextOnly.svg'
import PayPalWhiteSvg from '@od-assets/images/payPalWhite.svg'
import xSVG from '@od-assets/images/x.svg'
import { PaymentOrderPaidResult, PaymentUrl, Platform } from '@accelbyte/sdk-platform'
import React, { useContext, useEffect, useState } from 'react'
import styles from './PayPalHandler.module.scss'
import { useSdk } from '~/hooks/useSdk'
import { AppUrlParamContext } from '@od-payment/contexts/AppUrlParamContext'
import { PAYMENT_STATION_ACTION, usePayment } from '~/hooks/platform/usePayment'

interface Props {
  paymentUrl: PaymentUrl
}

const WINDOW_WIDTH = 450
const WINDOW_HEIGHT = 600

const getPaypalWindowFeatures = () => {
  return [
    'resizable',
    'scrollbars',
    'status',
    `width=${WINDOW_WIDTH}`,
    `height=${WINDOW_HEIGHT}`,
    `top=${(window.screen.height - WINDOW_HEIGHT) / 4}`,
    `left=${(window.screen.width - WINDOW_WIDTH) / 2}`
  ].join(',')
}

const PayPalOverlay = ({ onClick, onClose }: { onClick: () => void; onClose: () => void }) => (
  <div className={styles.overlay}>
    <div className={styles.closeButton}>
      <button onClick={onClose}>
        <img src={xSVG} alt="close" />
      </button>
    </div>
    <div className={styles.content}>
      <div className={styles.logo}>
        <img src={PayPalWhiteSvg} alt="paypal-logo" />
      </div>
      <div className={styles.description}>
        Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.
      </div>
      <button onClick={onClick}>Click to Continue</button>
    </div>
  </div>
)

export function PaypalHandler({ paymentUrl }: Props) {
  const [sdk] = useSdk()
  const { paymentOrderNo, returnUrl } = useContext(AppUrlParamContext)
  const [childWindow, setChildWindow] = useState<Window | null>(null)
  const [orderPaidStatus, setOrderPaidStatus] = useState<RequestType<PaymentOrderPaidResult | null>>({
    value: null,
    isLoading: false,
    error: null
  })
  const {
    mutations: { setPaymentStationMessage }
  } = usePayment()

  const checkOrderPaidStatus = async () => {
    if (orderPaidStatus.isLoading) return

    setOrderPaidStatus({ value: null, isLoading: true, error: null })

    try {
      const result = await Platform.PaymentStationApi(sdk).getStatusPayment_ByPaymentOrderNo(paymentOrderNo)
      setOrderPaidStatus({ value: result, isLoading: false, error: null })
    } catch (error) {
      console.error(error)
      setOrderPaidStatus({ error: error as Error, value: null, isLoading: false })
    }
  }

  const openChildWindow = () => {
    if (orderPaidStatus.isLoading || !paymentUrl.paymentUrl) return

    const windowObjectReference = window.open(paymentUrl.paymentUrl, 'paypal_child_window', getPaypalWindowFeatures())
    if (windowObjectReference) {
      setChildWindow(windowObjectReference)

      const timer = setInterval(() => {
        if (!windowObjectReference || windowObjectReference.closed) {
          checkOrderPaidStatus()
          setChildWindow(null)
          clearInterval(timer)
        }
      }, 1000)
    }
  }

  const bringChildWindowToTop = () => {
    if (childWindow) childWindow.focus()
  }

  const closeChildWindow = () => {
    if (!childWindow) return
    childWindow.close()
    setChildWindow(null)
  }

  useEffect(() => {
    const listenToCallback = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data)
        if (data?.message?.action === PAYMENT_STATION_ACTION.enum.complete && childWindow) {
          setPaymentStationMessage({ message: { action: PAYMENT_STATION_ACTION.enum.complete } })
          childWindow.close()
        } else if (data?.message?.action === PAYMENT_STATION_ACTION.enum.cancel && childWindow) {
          setPaymentStationMessage({ message: { action: PAYMENT_STATION_ACTION.enum.cancel } })
          childWindow.close()
        }
      } catch (e) {
        console.error(e)
      }
    }

    const onBeforeWindowUnload = (_event: Event) => {
      if (childWindow) childWindow.close()
    }

    if (childWindow) {
      window.addEventListener('beforeunload', onBeforeWindowUnload)
      window.addEventListener('message', listenToCallback)
      return function () {
        if (childWindow) childWindow.close()
        window.removeEventListener('beforeunload', onBeforeWindowUnload)
        window.removeEventListener('message', listenToCallback)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return function () {}
  }, [childWindow, returnUrl])

  useEffect(() => {
    if (orderPaidStatus.value && orderPaidStatus.value.success) {
      setPaymentStationMessage({ message: { action: PAYMENT_STATION_ACTION.enum.complete } })
    }
  }, [orderPaidStatus])

  return (
    <div className={styles.wrapper}>
      <div className={styles.paypalContainer}>
        <p>
          Continuing will take you to your PayPal account.
          <br />
          Please make sure pop-ups aren't blocked.
        </p>
        <button onClick={() => openChildWindow()} disabled={!!childWindow || orderPaidStatus.isLoading}>
          <span>Pay with</span>
          <img src={PayPalTextOnlySvg} alt={'paypal logo'} />
        </button>
      </div>
      {childWindow && <PayPalOverlay onClick={bringChildWindowToTop} onClose={closeChildWindow} />}
    </div>
  )
}
