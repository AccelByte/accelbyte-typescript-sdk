/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import '@adyen/adyen-web/dist/adyen.css'
// Dev's note(anas.alqoyyum): Adyen non-modern ESM bundle broke our build for some reason
// https://github.com/Adyen/adyen-web/pull/1343 -> "Modern" doesn't come with polyfills
// @ts-ignore
import AdyenCheckout from '@adyen/adyen-web/modern'
import { Loading } from '@od-components/components/Loading/Loading'
import { PaymentAlert } from '@od-payment/components/PaymentAlert/PaymentAlert'
import { RequestType } from '@od-payment/models/Payment'
import { AlertType } from '@od-shared/models/Alert'
import { PaymentOrderDetails, PaymentUrl, Platform } from '@accelbyte/sdk-platform'
import React, { useContext, useEffect, useState } from 'react'
import { z } from 'zod'
import styles from './AdyenHandler.module.scss'
import './_adyen.scss'
import { AppUrlParamContext } from '@od-payment/contexts/AppUrlParamContext'
import { useSdk } from '~/hooks/useSdk'
import { PAYMENT_STATION_ACTION, usePayment } from '~/hooks/platform/usePayment'

interface Props {
  paymentUrl: PaymentUrl
  paymentOrderDetails: PaymentOrderDetails
}

const ADYEN_CHECKOUT_ELEMENT_ID = 'adyenCheckout'
const AdyenPaymentStatus = z.enum(['Authorised', 'Refused'])
const Environment = z.enum(['test', 'live'])
const COMMON_ERROR_MSG = 'Something went wrong, Please retry or contact our administrator if the problem persist'

export function AdyenHandler(props: Props) {
  const [sdk] = useSdk()
  const { paymentOrderNo } = useContext(AppUrlParamContext)
  const [paymentProviderPublicConfig, setPaymentProviderPublicConfig] = useState<RequestType<Record<string, unknown> | null>>({
    value: null,
    isLoading: false,
    error: null
  })
  const [isPaymentRefused, setIsPaymentRefused] = useState(false)
  const [paymentError, setPaymentError] = useState('')
  const [isLoadingComponent, setIsLoadingComponent] = useState(false)

  const {
    mutations: { setPaymentStationMessage }
  } = usePayment()

  const loadPaymentProviderPublicConfig = async () => {
    const {
      paymentOrderDetails: { region, sandbox },
      paymentUrl: { paymentProvider }
    } = props
    if (paymentProviderPublicConfig.isLoading) return
    setPaymentProviderPublicConfig({ value: null, isLoading: true, error: null })

    try {
      const result = await Platform.PaymentStationApi(sdk).getPaymentPublicconfig({ paymentProvider, region: region || null, sandbox })

      setPaymentProviderPublicConfig({ value: result as Record<string, unknown>, isLoading: false, error: null })
    } catch (error) {
      console.error(error)
      setPaymentProviderPublicConfig({ error: error as Error, isLoading: false, value: null })
    }
  }

  useEffect(() => {
    async function initData() {
      const {
        paymentOrderDetails: { sandbox },
        paymentUrl: { sessionId, sessionData }
      } = props
      if (paymentProviderPublicConfig.value) {
        let settingsObj = {}
        try {
          // eslint-disable-next-line no-eval
          settingsObj = eval(`(${paymentProviderPublicConfig.value.dropInSettings})`)
        } catch (e) {
          console.error('Invalid settings object')
        }
        const clientKey = paymentProviderPublicConfig.value.clientKey
        const configuration = {
          environment: sandbox ? Environment.enum.test : Environment.enum.live,
          clientKey: typeof clientKey === 'string' ? clientKey : undefined,
          session: {
            id: sessionId,
            sessionData
          },
          beforeSubmit: async (data: any, _component: any, actions: any) => {
            const result = await Platform.PaymentStationApi(sdk).getInfoPayment_ByPaymentOrderNo(paymentOrderNo)
            if (result.charging) {
              actions.reject()
              setPaymentError('Please do not pay for the order repeatedly.')
              return
            }
            actions.resolve(data)
          },
          onPaymentCompleted: (result: any, _component: any) => {
            const resultCode = result.resultCode
            if (resultCode === AdyenPaymentStatus.enum.Authorised) {
              setPaymentStationMessage({ message: { action: PAYMENT_STATION_ACTION.enum.complete } })
            } else if (resultCode === AdyenPaymentStatus.enum.Refused) {
              setPaymentError('The payment was refused, please try the payment again, you can choose a different payment method or card.')
            }
          },
          onError: (error: any, component: any) => {
            console.error(error.name, error.message, error.stack, component)
          },
          paymentMethodsConfiguration: {
            card: {
              hasHolderName: true,
              holderNameRequired: true,
              billingAddressRequired: true
            }
          },
          ...settingsObj
        }

        setIsLoadingComponent(true)
        const checkout = await AdyenCheckout(configuration)
        checkout
          .create('dropin', {
            onReady: () => {
              setIsLoadingComponent(false)
            }
          })
          .mount(`#${ADYEN_CHECKOUT_ELEMENT_ID}`)
      }
    }

    initData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentProviderPublicConfig.value])

  useEffect(() => {
    loadPaymentProviderPublicConfig()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isPaymentRefused) {
    return (
      <PaymentAlert
        type={AlertType.warning}
        onRetry={() => {
          setIsPaymentRefused(false)
          loadPaymentProviderPublicConfig()
        }}
        message={COMMON_ERROR_MSG}
      />
    )
  }

  if (paymentError) {
    return (
      <PaymentAlert
        type={AlertType.warning}
        onRetry={() => {
          setPaymentError('')
          loadPaymentProviderPublicConfig()
        }}
        message={paymentError}
      />
    )
  }

  if (paymentProviderPublicConfig.error) {
    return (
      <PaymentAlert
        type={AlertType.warning}
        message={
          paymentProviderPublicConfig.error.message
            ? `${paymentProviderPublicConfig.error.message} Please contact our support team for further information`
            : COMMON_ERROR_MSG
        }
        onRetry={loadPaymentProviderPublicConfig}
      />
    )
  }

  return (
    <>
      {(paymentProviderPublicConfig.isLoading || isLoadingComponent) && <Loading />}
      <div className={styles.adyenIntent} id={ADYEN_CHECKOUT_ELEMENT_ID} />
    </>
  )
}
