/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Loading } from '@od-components/components/Loading/Loading'
import { PaymentAlert } from '@od-payment/components/PaymentAlert/PaymentAlert'
import { RequestType } from '@od-payment/models/Payment'
import { AlertType } from '@od-shared/models/Alert'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe, PaymentIntent, PaymentMethod, Stripe } from '@stripe/stripe-js'
import { PaymentOrderDetails, PaymentUrl, Platform } from '@accelbyte/sdk-platform'
import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import { SplitCardForm } from './components/SplitCardForm'
import styles from './StripeHandler.module.scss'
import { useSdk } from '~/hooks/useSdk'
import { PAYMENT_STATION_ACTION, usePayment } from '~/hooks/platform/usePayment'

export const StripePaymentIntentStatus = z.enum([
  'succeeded', // Payment flow is complete
  'canceled', // Payment intent is canceled
  'processing', // When the payment is being processed by stripe
  'requires_action', // If require additional action such as 3D Secure auth
  'requires_confirmation', // Require user action to confirm payment
  'requires_payment_method' // Happen when payment attempt fails
])

interface Props {
  paymentUrl: PaymentUrl
  paymentOrderDetails: PaymentOrderDetails
}

type StripeState = { isLoading: boolean; value: Stripe | null }

export function StripeHandler(props: Props) {
  const [sdk] = useSdk()
  const [paymentProviderCustomConfig, setPaymentProviderCustomConfig] = useState<RequestType<string | null>>({
    value: null,
    isLoading: false,
    error: null
  })
  const [stripeInstance, setStripeInstance] = useState<StripeState>({
    value: null,
    isLoading: false
  })
  const [confirmCardPayment, setConfirmCardPayment] = useState<RequestType<PaymentIntent | null>>({
    value: null,
    isLoading: false,
    error: null
  })

  const {
    mutations: { setPaymentStationMessage }
  } = usePayment()

  const loadPaymentProviderCustomConfig = async () => {
    const {
      paymentOrderDetails: { region, sandbox },
      paymentUrl: { paymentProvider }
    } = props
    if (paymentProviderCustomConfig.isLoading) return
    setPaymentProviderCustomConfig({ value: null, isLoading: true, error: null })

    try {
      const result = await Platform.PaymentStationApi(sdk).getPaymentPublicconfig({ paymentProvider, region: region || null, sandbox })
      const publicConfig: Record<string, unknown> = result as Record<string, unknown>
      if (!publicConfig.publishableKey || typeof publicConfig.publishableKey !== 'string') {
        throw new Error('Invalid configuration')
      }
      setPaymentProviderCustomConfig({ value: publicConfig.publishableKey, isLoading: false, error: null })
    } catch (error) {
      console.error(error)
      setPaymentProviderCustomConfig({ error: error as Error, isLoading: false, value: null })
    }
  }

  const fetchPaymentConfirmation = async (stripe: Stripe, paymentMethod: PaymentMethod) => {
    if (
      confirmCardPayment.isLoading ||
      confirmCardPayment.value?.status === StripePaymentIntentStatus.enum.succeeded ||
      !stripeInstance.value
    )
      return
    setConfirmCardPayment({ value: null, isLoading: true, error: null })

    try {
      const result = await stripe.confirmCardPayment(props.paymentUrl.paymentUrl || '', {
        payment_method: paymentMethod.id
      })
      if (result.error) throw result.error
      if (result.paymentIntent && result.paymentIntent.status === StripePaymentIntentStatus.enum.succeeded) {
        setConfirmCardPayment({
          value: result.paymentIntent,
          error: null,
          isLoading: false
        })
      }
    } catch (error) {
      console.error(error)
      setConfirmCardPayment({ error: error as Error, value: null, isLoading: false })
    }
  }

  useEffect(() => {
    if (confirmCardPayment.value && confirmCardPayment.value.status === StripePaymentIntentStatus.enum.succeeded) {
      setPaymentStationMessage({ message: { action: PAYMENT_STATION_ACTION.enum.complete } })
    }
  }, [confirmCardPayment.value])

  useEffect(() => {
    loadPaymentProviderCustomConfig()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { isLoading, value } = paymentProviderCustomConfig
    ;(async () => {
      if (value) {
        if (isLoading || !value) return
        setStripeInstance({ value: null, isLoading: true })

        const stripe = await loadStripe(value)
        setStripeInstance({ isLoading: false, value: stripe })
      }
    })()
  }, [paymentProviderCustomConfig])

  if (paymentProviderCustomConfig.error) {
    return (
      <PaymentAlert
        type={AlertType.warning}
        onRetry={loadPaymentProviderCustomConfig}
        message={'Something went wrong, Please retry or contact our administrator if the problem persist'}
      />
    )
  }

  return (
    <div className={styles.stripeHandler}>
      {!stripeInstance.value && <Loading />}
      {!!stripeInstance.value && (
        <Elements stripe={stripeInstance.value}>
          <div className={styles.formContainer}>
            {confirmCardPayment.error && (
              <PaymentAlert
                type={AlertType.warning}
                message={
                  confirmCardPayment.error.message
                    ? `${confirmCardPayment.error.message} Please contact our support team for further information`
                    : 'Something went wrong, Please retry or contact our administrator if the problem persist'
                }
              />
            )}
            {!confirmCardPayment.error && <SplitCardForm isLoading={confirmCardPayment.isLoading} onSubmit={fetchPaymentConfirmation} />}
          </div>
        </Elements>
      )}
    </div>
  )
}
