/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { IFRAME_SANDBOX_OPTIONS } from '@od-payment/constants/iframes'
import React, { useEffect } from 'react'
import { usePayment } from '~/hooks/platform/usePayment'
import styles from './iframe.module.scss'

interface Props {
  url?: string
}

export const WebViewClient = ({ url }: Props) => {
  const {
    mutations: { setPaymentStationMessage }
  } = usePayment()

  useEffect(() => {
    const listenToCallback = (event: MessageEvent) => {
      setPaymentStationMessage({ message: event.data })
    }

    window.addEventListener('message', listenToCallback)

    return () => {
      window.removeEventListener('message', listenToCallback)
    }
  }, [setPaymentStationMessage])

  return <iframe src={url} title={'payment-iframe'} className={styles.paymentStationIframe} sandbox={IFRAME_SANDBOX_OPTIONS} />
}
