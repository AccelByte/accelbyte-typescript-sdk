/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Loading } from '@od-components/components/Loading/Loading'
import { AlertType } from '@od-shared/models/Alert'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { PaymentMethod, PaymentMethodArray, PaymentOrderDetails } from '@accelbyte/sdk-platform'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { AppUrlParamContext } from '../../contexts/AppUrlParamContext'
import { PAYMENT_PROVIDER_WITHOUT_PAYMENT_URL } from '../../models/Payment'
import { PaymentAlert } from '../PaymentAlert/PaymentAlert'
import { OrderInfo } from '../OrderInfo/OrderInfo'
import { PaymentMethodHandler } from '../PaymentMethodHandler/PaymentMethodHandler'
import { PaymentMethodOption } from '../PaymentMethodOption/PaymentMethodOption'
import styles from './PaymentMethodSelector.module.scss'
import { usePayment } from '~/hooks/platform/usePayment'
import { PaymentInfoHooks } from '@od-payment/hooks/PaymentInfoHooks'
import { FetchStatus } from '~/constants/fetch-statuses'

interface Props {
  paymentOrderDetails: PaymentOrderDetails
  paymentMethods: PaymentMethodArray
}

export function PaymentMethodSelector({ paymentOrderDetails, paymentMethods }: Props) {
  const { paymentOrderNo, returnUrl } = useContext(AppUrlParamContext)
  const {
    state: { paymentData },
    mutations: { setPaymentData }
  } = usePayment()

  const [activePaymentMethod, setActivePaymentMethod] = useState<PaymentMethod>(paymentMethods[0])
  const {
    state: { paymentUrl, paymentUrlError, paymentUrlFetchStatus, tax, taxError },
    mutations: { fetchPaymentMethodUrl, fetchPaymentTax, resetPaymentMethodUrl }
  } = PaymentInfoHooks.usePaymentMethodUrlAndTax()

  const isPaymentWithoutPaymentUrl = useMemo(
    () => PAYMENT_PROVIDER_WITHOUT_PAYMENT_URL.includes(activePaymentMethod.paymentProvider.toUpperCase()),
    [activePaymentMethod]
  )

  const errorMessage = renderErrorMessage(paymentUrlError || taxError)

  const processPaymentMethodUrl = async () => {
    fetchPaymentMethodUrl({ activePaymentMethod, paymentData, paymentOrderNo, returnUrl })
  }

  const processTax = async () => {
    const result = await fetchPaymentTax({ activePaymentMethod, paymentData, paymentOrderNo })
    if (result.data) {
      setPaymentData({ tax: result.data })
    }
  }

  const onPaymentMethodChange = (paymentMethod: PaymentMethod) => {
    setActivePaymentMethod(paymentMethod)
  }

  useEffect(() => {
    if (!isPaymentWithoutPaymentUrl) {
      // It means the payment requires payment URL. Process it.
      processPaymentMethodUrl()
    } else {
      // Otherwise, reset it.
      resetPaymentMethodUrl()
    }

    processTax()
  }, [activePaymentMethod])

  const isPaymentUrlLoading = paymentUrlFetchStatus === FetchStatus.FETCHING

  return (
    <div className={styles.paymentMethodSelector}>
      {paymentMethods.length > 1 && (
        <div className={styles.paymentMethodContainer}>
          <PaymentMethodOption
            paymentMethods={paymentMethods}
            activePaymentMethod={activePaymentMethod}
            onPaymentMethodChange={onPaymentMethodChange}
            disabled={isPaymentUrlLoading}
          />
        </div>
      )}

      {tax && <OrderInfo paymentOrderDetails={paymentOrderDetails} />}

      <div className={styles.paymentMethodCheckout}>
        {isPaymentUrlLoading && <Loading />}
        {!!paymentUrlError && !isPaymentWithoutPaymentUrl && (
          <PaymentAlert
            type={AlertType.warning}
            message={errorMessage || 'Something went wrong, Please retry or contact our administrator if the problem persist'}
            onRetry={processPaymentMethodUrl}
          />
        )}
        {!isPaymentUrlLoading && (
          <PaymentMethodHandler
            paymentUrl={!isPaymentWithoutPaymentUrl ? paymentUrl : undefined}
            paymentOrderDetails={paymentOrderDetails}
            activePaymentMethod={activePaymentMethod}
          />
        )}
      </div>
    </div>
  )
}

// Helper functions.
function renderErrorMessage(error: Error | null) {
  if (!error) return ''

  if (ErrorHelper.isAxiosError(error)) {
    return `${error.response?.data.errorCode}: ${error.response?.data.errorMessage}`
  }

  return error.message
}
