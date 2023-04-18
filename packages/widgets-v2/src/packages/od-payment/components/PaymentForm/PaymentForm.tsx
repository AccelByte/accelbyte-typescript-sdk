/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Loading } from '@od-components/components/Loading/Loading'
import { AppUrlParamContext } from '@od-payment/contexts/AppUrlParamContext'
import { AlertType } from '@od-shared/models/Alert'
import React, { useContext, useEffect, useState } from 'react'
import { z } from 'zod'
import { OrderStatusIsChargingError } from '../../models/Payment'
import { PaymentAlert } from '../PaymentAlert/PaymentAlert'
import { BillingInfoForm } from '../BillingInfoForm/BillingInfoForm'
import { PaymentMethodSelector } from '../PaymentMethodSelector/PaymentMethodSelector'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { PaymentInfoHooks } from '@od-payment/hooks/PaymentInfoHooks'
import { usePayment } from '~/hooks/platform/usePayment'
import { FetchUtils } from '~/utils/FetchUtils'
import { FetchStatus } from '~/constants/fetch-statuses'
import { PaymentConfigHooks } from '@od-payment/hooks/PaymentConfigHooks'

const PaymentStep = z.enum(['BILLING_INFO', 'PAYMENT'])
type PaymentStep = z.infer<typeof PaymentStep>

export const PaymentForm = (props: AppUrlParamContext) => (
  <AppUrlParamContext.Provider value={props}>
    <PaymentForm$ />
  </AppUrlParamContext.Provider>
)

const PaymentForm$ = () => {
  const { paymentOrderNo } = useContext(AppUrlParamContext)
  const [paymentStep, setPaymentStep] = useState<PaymentStep>(PaymentStep.enum.BILLING_INFO)

  const {
    mutations: { setPaymentData }
  } = usePayment()
  const {
    state: { userProfile, fetchUserProfileStatus },
    mutations: { fetchUserProfile }
  } = useUserInfo()
  const {
    state: { paymentInfo, paymentInfoFetchStatus, paymentInfoError, paymentMethods, paymentMethodsFetchStatus, paymentMethodsError },
    mutations: { fetchPaymentInfo, fetchPaymentMethods }
  } = PaymentInfoHooks.usePaymentInfo()
  const {
    state: { discoveryConfigData },
    mutations: { fetchPaymentConfigs }
  } = PaymentConfigHooks.usePaymentConfig()

  useEffect(() => {
    if (!discoveryConfigData) return

    fetchPaymentConfigs(discoveryConfigData)
  }, [discoveryConfigData])

  useEffect(() => {
    fetchUserProfile()
  }, [])

  useEffect(() => {
    fetchPaymentInfo({ orderNo: paymentOrderNo })
  }, [paymentOrderNo])

  useEffect(() => {
    async function processPaymentMethods() {
      const result = await fetchPaymentMethods({ orderNo: paymentOrderNo })
      if (!result.data) return

      const hasTaxEnabled = result.data.find(method => method.enableTax?.includes('true'))
      if (!hasTaxEnabled) {
        setPaymentStep(PaymentStep.enum.PAYMENT)
      }
    }

    if (paymentInfo) {
      processPaymentMethods()
    }
  }, [paymentOrderNo, paymentInfo])

  const onSubmitBillingInfo = (zipCode: string) => {
    setPaymentData({ zipCode })
    setPaymentStep(PaymentStep.enum.PAYMENT)
  }

  if (paymentInfoError) {
    if (paymentInfoError instanceof OrderStatusIsChargingError) {
      return <PaymentAlert type={AlertType.warning} message={'This payment order is being processed'} />
    } else {
      return (
        <PaymentAlert
          type={AlertType.warning}
          message={'Something went wrong. Please retry or contact our administrator if the problem persist'}
          onRetry={() => fetchPaymentInfo({ orderNo: paymentOrderNo })}
        />
      )
    }
  }

  if (paymentMethodsError) {
    return (
      <PaymentAlert
        type={AlertType.warning}
        message={'Something went wrong. Please retry or contact our administrator if the problem persist'}
        onRetry={() => fetchPaymentMethods({ orderNo: paymentOrderNo })}
      />
    )
  }

  const isLoading = FetchUtils.isMatchStatus(
    [fetchUserProfileStatus, paymentInfoFetchStatus, paymentMethodsFetchStatus],
    FetchStatus.FETCHING
  )
  if (isLoading) {
    return <Loading />
  }

  if (paymentStep === PaymentStep.enum.PAYMENT) {
    if (paymentInfo && paymentMethods) {
      if (paymentMethods.length > 0) {
        return <PaymentMethodSelector paymentOrderDetails={paymentInfo} paymentMethods={paymentMethods} />
      }
      return (
        <PaymentAlert
          type={AlertType.warning}
          message={'No payment method available for this purchase, Please contact our administrator if you see this error.'}
        />
      )
    }
  }

  return <BillingInfoForm userProfile={userProfile} onSubmit={onSubmitBillingInfo} />
}
