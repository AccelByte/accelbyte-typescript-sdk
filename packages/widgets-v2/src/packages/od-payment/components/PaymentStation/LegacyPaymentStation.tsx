/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { PaymentStatus } from '@od-shared/models/EcommTypes'
import classNames from 'classnames'
import { OrderInfo } from '@accelbyte/sdk-platform'
import React, { useEffect, useState } from 'react'
import { PaymentUtils } from '@od-payment/utils/PaymentUtils'

interface Props {
  order?: OrderInfo
  returnUrl: string
  className?: string
  onPaymentProcessed: (paymentStatus: PaymentStatus, orderInfo?: OrderInfo) => void
  orderNo?: string | null
  paymentStationUrl?: string | null
}

interface State {
  iframeKey: string
}

const IFRAME_SANDBOX_OPTIONS = [
  'allow-forms',
  'allow-modals',
  'allow-orientation-lock',
  'allow-pointer-lock',
  'allow-presentation',
  'allow-same-origin',
  'allow-scripts',
  'allow-popups'
].join(' ')

export const LegacyPaymentStation = (props: Props) => {
  const [state, setState] = useState<State>({ iframeKey: '0' })

  useEffect(() => {
    function reloadIframe() {
      setState({ iframeKey: getRandomIframeKey() })
    }

    function listenToPaymentCallback(event: MessageEvent) {
      const { onPaymentProcessed } = props
      try {
        const paymentResult = PaymentUtils.extractPaymentResult(event.data)
        if (paymentResult) {
          switch (paymentResult.paymentStatus) {
            case PaymentStatus.enum.DONE:
              onPaymentProcessed(paymentResult.paymentStatus)
              break
            case PaymentStatus.enum.FAILED:
              onPaymentProcessed(paymentResult.paymentStatus)
              reloadIframe()
              break
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    window.addEventListener('message', listenToPaymentCallback)

    return () => {
      window.removeEventListener('message', listenToPaymentCallback)
    }
  }, [])

  const url = getPaymentStationUrl({ returnUrl: props.returnUrl, order: props.order, paymentStationUrl: props.paymentStationUrl })
  if (!url) {
    return (
      <div className="errorContainer">
        <CommonError error={new Error()} />
      </div>
    )
  }

  return (
    <iframe
      key={state.iframeKey}
      className={classNames('paymentStation', props.className)}
      title="Pay station"
      src={url}
      sandbox={IFRAME_SANDBOX_OPTIONS}
    />
  )
}

// Helper functions.
function getPaymentStationUrl(params: Pick<Props, 'order' | 'returnUrl' | 'paymentStationUrl'>) {
  try {
    const { returnUrl, order, paymentStationUrl } = params
    const url = new URL(paymentStationUrl || (order && order.paymentStationUrl) || '')
    if (returnUrl) {
      url.searchParams.append('returnUrl', returnUrl)
    }
    return url.toString()
  } catch (error) {
    return null
  }
}

// This is used to re-render the iframe.
function getRandomIframeKey() {
  return String(Math.floor(Math.random() * 100))
}
