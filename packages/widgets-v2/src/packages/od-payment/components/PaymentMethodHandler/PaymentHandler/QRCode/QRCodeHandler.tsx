/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { PaymentAlert } from '@od-payment/components/PaymentAlert/PaymentAlert'
import { PaymentProvider, RequestType } from '@od-payment/models/Payment'
import { AlertType } from '@od-shared/models/Alert'
import { PaymentOrderPaidResult, PaymentUrl, Platform } from '@accelbyte/sdk-platform'
import React, { useContext, useEffect, useState } from 'react'
import styles from './QRCodeHandler.module.scss'
import { PAYMENT_STATION_ACTION, usePayment } from '~/hooks/platform/usePayment'
import { AppUrlParamContext } from '@od-payment/contexts/AppUrlParamContext'
import { useSdk } from '~/hooks/useSdk'

interface Props {
  paymentUrl: PaymentUrl
}

const PAYMENT_STATUS_CHECK_INTERVAL_IN_SECONDS = 30

export function QRCodeHandler({ paymentUrl }: Props) {
  const [sdk] = useSdk()
  const { paymentOrderNo } = useContext(AppUrlParamContext)
  const [paymentOrderPaidStatus, setPaymentOrderPaidStatus] = useState<RequestType<PaymentOrderPaidResult | null>>({
    value: null,
    isLoading: false,
    error: null
  })
  const [countDown, setCountDown] = useState<number>(PAYMENT_STATUS_CHECK_INTERVAL_IN_SECONDS)

  const {
    mutations: { setPaymentStationMessage }
  } = usePayment()

  const checkOrderPaymentStatus = async () => {
    if (paymentOrderPaidStatus.isLoading) return
    setPaymentOrderPaidStatus({ value: null, isLoading: true, error: null })

    try {
      const result = await Platform.PaymentStationApi(sdk).getStatusPayment_ByPaymentOrderNo(paymentOrderNo)
      setPaymentOrderPaidStatus({ value: result, isLoading: false, error: null })
    } catch (error) {
      console.error(error)
      setPaymentOrderPaidStatus({ error: error as Error, value: null, isLoading: false })
    }
  }

  const getTranslation = () => {
    switch (paymentUrl.paymentProvider) {
      case PaymentProvider.enum.WXPAY:
        return 'Scan with WeChat to continue payment'
      case PaymentProvider.enum.ALIPAY:
        return 'Scan with mobile Alipay to continue payment'
      default:
        return 'Scan barcode above to continue the payment'
    }
  }

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1)
      }, 1000)
    } else {
      checkOrderPaymentStatus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDown])

  useEffect(() => {
    if (!paymentOrderPaidStatus.isLoading) {
      if (paymentOrderPaidStatus.value && paymentOrderPaidStatus.value.success) {
        setPaymentStationMessage({ message: { action: PAYMENT_STATION_ACTION.enum.complete } })
      } else if (!paymentOrderPaidStatus.error) {
        setCountDown(PAYMENT_STATUS_CHECK_INTERVAL_IN_SECONDS)
      }
    }
  }, [paymentOrderPaidStatus])

  const isPlural = new Intl.PluralRules('en-US').select(countDown) === 'other'

  const loadingText = paymentOrderPaidStatus.isLoading ? '(checking payment status...)' : `in ${countDown} second${isPlural ? 's' : ''}`

  return (
    <div className={styles.qrCodeHandler}>
      <div className={styles.qrCodeWrapper}>
        <div className={styles.qrCodeBox}>
          <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfVKYYpzDWBkDUZkozpBr7Stphkj-GKTaZg&usqp=CAU'}
            alt={'QR code'}
          />
          {/* <img src={paymentUrl.paymentUrl} alt={"QR code"} /> */}
          <div className={styles.description}>{getTranslation()}</div>
        </div>
        <div className={styles.statusCheck}>
          {!paymentOrderPaidStatus.error && `Automatically check payment status ${loadingText}`}
          {!!paymentOrderPaidStatus.error && (
            <PaymentAlert
              type={AlertType.warning}
              message={'Failed to get payment status, Please retry or reload the page if the problem persist'}
              onRetry={checkOrderPaymentStatus}
            />
          )}
        </div>
      </div>
    </div>
  )
}
