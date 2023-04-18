/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/ErrorPage/CommonError'
import { PaymentAlert } from '@od-payment/components/PaymentAlert/PaymentAlert'
import { IFRAME_CHANNEL, PaymentStatusType } from '@od-payment/models/Payment'
import { PaymentForm } from '@od-payment/components/PaymentForm/PaymentForm'
import { PaymentUtils } from '@od-payment/utils/PaymentUtils'
import { IpcChannels as Ipc } from '@od-shared/constants/IpcChannels'
import { AppName } from '@od-shared/constants/ShConstants'
import { AlertType } from '@od-shared/models/Alert'
import { PaymentStatus } from '@od-shared/models/EcommTypes'
import classNames from 'classnames'
import { DesktopChecker } from '@accelbyte/sdk'
import React, { useCallback, useEffect } from 'react'
import { IFRAME_SANDBOX_OPTIONS } from '@od-payment/constants/iframes'
import { PAYMENT_STATION_ACTION, usePayment } from '~/hooks/platform/usePayment'
import { useAppState } from '~/hooks/useAppState'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { useSdkOptions } from '~/hooks/useSdk'
import { useHistory } from '~/hooks/routes/useHistory'
import { OrderInfo } from '@accelbyte/sdk-platform'

interface Props {
  order?: OrderInfo
  className?: string
  onPaymentProcessed: (paymentStatus: PaymentStatus, orderInfo?: OrderInfo) => void
  paymentStationUrl?: string | null
  returnUrl: string
}

const IFRAME_ID = 'payment-station-iframe'

export function PaymentStation({ onPaymentProcessed, returnUrl, className, order, paymentStationUrl }: Props) {
  const {
    state: { paymentStationMessage },
    mutations: { setPaymentStationMessage }
  } = usePayment()

  const listenToPaymentCallback = useCallback(
    (event?: MessageEvent) => {
      const message = DesktopChecker.isDesktopApp() && event ? event.data : paymentStationMessage

      if (!message) return
      try {
        const paymentResult = PaymentUtils.extractPaymentResult(message)
        if (paymentResult) {
          switch (paymentResult.paymentStatus) {
            case PaymentStatus.enum.DONE:
              onPaymentProcessed(paymentResult.paymentStatus)
              break
            case PaymentStatus.enum.FAILED:
              onPaymentProcessed(paymentResult.paymentStatus)
              break
          }
        }
      } catch (error) {
        console.error(error)
      }
    },
    [paymentStationMessage]
  )

  const { state: history } = useHistory()

  useEffect(listenToPaymentCallback, [paymentStationMessage])
  useEffect(() => {
    if (DesktopChecker.isDesktopApp()) {
      window.addEventListener('message', listenToPaymentCallback)
      Device.receive(Ipc.OPEN_URL, (url: string) => {
        const newURL = new URL(url)
        const search = newURL.search
        const pathname = newURL.pathname
          .split('/')
          .filter(path => path !== '')
          .join('/')
        const searchParams = new URLSearchParams(newURL.search)
        const paymentStatus = searchParams.get('paymentStatus')

        if (paymentStatus === PaymentStatus.enum.DONE) {
          onPaymentProcessed(PaymentStatus.enum.DONE)
        }
        if (paymentStatus === PaymentStatus.enum.FAILED) {
          onPaymentProcessed(PaymentStatus.enum.FAILED)
        }

        history.replace(`/${pathname}${search}`)
      })

      window.addEventListener('message', listenToPaymentCallback)
    }

    return () => {
      if (DesktopChecker.isDesktopApp()) {
        window.removeEventListener('message', listenToPaymentCallback)
        Device.remove(Ipc.OPEN_URL)
      }
    }
  }, [listenToPaymentCallback])

  const query = new URLSearchParams(window.location.search)
  const paymentStatus = query.get('paymentStatus')

  useEffect(() => {
    // TODO: investigate these cases
    if (!DesktopChecker.isDesktopApp()) return

    if (paymentStatus === PaymentStatusType.enum.DONE) {
      // It's used to process child window case (Ex: Paypal).
      if (window.opener) {
        // Child window ----> PP window
        window.opener.postMessage(JSON.stringify({ message: { action: PAYMENT_STATION_ACTION.enum.complete } }), '*')
      }

      // It's used to process redirect case in webview.
      setPaymentStationMessage({ message: { action: PAYMENT_STATION_ACTION.enum.complete } })
      const url = `${returnUrl}?paymentStatus=${paymentStatus}`
      PaymentUtils.redirectToUrlIfExist(url)
    } else if (paymentStatus === PaymentStatusType.enum.CANCELLED) {
      // For now it only happen in Paypal, since it uses child window
      if (window.opener) {
        // Child window ----> PP window
        window.opener.postMessage(JSON.stringify({ message: { action: PAYMENT_STATION_ACTION.enum.cancel } }), '*')
      }

      // It's used to process redirect case in webview.
      setPaymentStationMessage({ message: { action: PAYMENT_STATION_ACTION.enum.cancel } })
      const url = `${returnUrl}?paymentStatus=${paymentStatus}`
      PaymentUtils.redirectToUrlIfExist(url)
    }
  }, [paymentStatus])

  const [sdkOptions] = useSdkOptions()
  const namespace = sdkOptions.namespace

  if (DesktopChecker.isDesktopApp()) {
    return <DesktopPaymentStation returnUrl={returnUrl} className={className} order={order} paymentStationUrl={paymentStationUrl} />
  }

  if (paymentStatus === PaymentStatusType.enum.DONE) {
    return <PaymentAlert type={AlertType.success} message={'Payment Success'} />
  } else if (paymentStatus === PaymentStatusType.enum.CANCELLED) {
    return <PaymentAlert type={AlertType.info} message={'Payment Cancelled'} />
  }

  if (!order?.paymentOrderNo) {
    return (
      <div className="errorContainer">
        <CommonError error={new Error('Invalid request: paymentOrderNo is required')} />
      </div>
    )
  }

  return <PaymentForm paymentOrderNo={order.paymentOrderNo} namespace={namespace} returnUrl={returnUrl} />
}

// Composing components.
function DesktopPaymentStation({
  paymentStationUrl,
  order,
  returnUrl,
  className
}: Pick<Props, 'order' | 'returnUrl' | 'paymentStationUrl' | 'className'>) {
  const {
    state: { discoveryConfigData }
  } = useDiscoveryConfigs()
  const {
    state: { launcherData }
  } = useAppConfigs()
  const {
    tokens: { accessToken }
  } = useAppState()

  const url = getPaymentStationUrl({ paymentStationUrl, order, returnUrl })
  if (!url) {
    return (
      <div className="errorContainer">
        <CommonError error={new Error()} />
      </div>
    )
  }

  function onIframeLoaded() {
    if (DesktopChecker.isDesktopApp() && paymentStationUrl) {
      const message = JSON.stringify({
        accessToken,
        config: launcherData,
        globalPageConfig: discoveryConfigData,
        channel: IFRAME_CHANNEL
      })
      const iframeElement = (document.getElementById(IFRAME_ID) as HTMLIFrameElement).contentWindow
      if (!iframeElement) {
        return console.log('Message to iframe window ignored')
      }
      iframeElement.postMessage(message, paymentStationUrl)
    }
  }

  return (
    <iframe
      onLoad={onIframeLoaded}
      id={IFRAME_ID}
      className={classNames('paymentStation', className)}
      title="Pay station"
      src={url}
      sandbox={IFRAME_SANDBOX_OPTIONS}
    />
  )
}

// Helper functions.
function getPaymentStationUrl(params: Pick<Props, 'order' | 'returnUrl' | 'paymentStationUrl'>) {
  try {
    const { order, paymentStationUrl, returnUrl } = params
    const url = new URL(paymentStationUrl || (order && order.paymentStationUrl) || '')
    url.searchParams.append('returnUrl', returnUrl)
    url.searchParams.append('parentAppName', DesktopChecker.isDesktopApp() ? AppName.LAUNCHER : AppName.PP)
    if (order?.paymentOrderNo) {
      url.searchParams.append('paymentOrderNo', order.paymentOrderNo)
    }
    return url.toString()
  } catch (error) {
    return null
  }
}
