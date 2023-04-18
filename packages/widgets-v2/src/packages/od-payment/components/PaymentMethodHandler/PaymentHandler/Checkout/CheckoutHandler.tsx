/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Loading } from '@od-components/components/Loading/Loading'
import { PaymentAlert } from '@od-payment/components/PaymentAlert/PaymentAlert'
import { RequestType } from '@od-payment/models/Payment'
import { AlertType } from '@od-shared/models/Alert'
import {
  CardNumber,
  Cvv,
  ExpiryDate,
  FrameCardTokenizationFailedEvent,
  FrameCardTokenizedEvent,
  FrameCardValidationChangedEvent,
  FramePaymentMethodChangedEvent,
  Frames,
  FrameValidationChangedEvent,
  PaymentMethod
} from 'frames-react'
import { PaymentOrderDetails, PaymentProcessResult, PaymentMethod as SupportedPaymentMethod , Platform } from '@accelbyte/sdk-platform'
import React, { useContext, useEffect, useState } from 'react'
import americanExpressIcon from './assets-icon/american-express.svg'
import commonCardError from './assets-icon/card-error.svg'
import cardIcon from './assets-icon/card.svg'
import cvvIcon from './assets-icon/cvv.svg'
import dinerClubIcon from './assets-icon/diners-club.svg'
import errorIcon from './assets-icon/error.svg'
import expDateIconError from './assets-icon/exp-date-error.svg'
import expDateIcon from './assets-icon/exp-date.svg'
import masterCardIcon from './assets-icon/mastercard.svg'
import visaIcon from './assets-icon/visa.svg'
import './CheckoutHandler.scss'
import { PAYMENT_STATION_ACTION, usePayment } from '~/hooks/platform/usePayment'
import { useSdk } from '~/hooks/useSdk'
import { AppUrlParamContext } from '@od-payment/contexts/AppUrlParamContext'
import { PaymentUtils } from '@od-payment/utils/PaymentUtils'
import { PaymentConfigHooks } from '@od-payment/hooks/PaymentConfigHooks'

interface Props {
  paymentOrderDetails: PaymentOrderDetails
  paymentProvider: SupportedPaymentMethod['paymentProvider']
}

export function CheckoutHandler({ paymentOrderDetails, paymentProvider }: Props) {
  const [sdk] = useSdk()
  const {
    state: { pageConfig }
  } = PaymentConfigHooks.usePaymentConfig()
  const { paymentOrderNo } = useContext(AppUrlParamContext)

  const [paymentProviderPublicConfig, setPaymentProviderPublicConfig] = useState<RequestType<string | null>>({
    value: null,
    isLoading: false,
    error: null
  })
  const [processPayment, setProcessPayment] = useState<RequestType<PaymentProcessResult | null>>({
    value: null,
    isLoading: false,
    error: null
  })
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
  const [validCardNumberField, setValidCardNumberField] = useState<boolean | null>(null)
  const [validExpDateField, setValidExpDateField] = useState<boolean | null>(null)
  const [validCvvField, setValidCvvField] = useState<boolean | null>(null)
  const [validCard, setValidCard] = useState<boolean>(false)
  const [colorUI, setColorUI] = useState<{ base: string; placeholder: string }>({ base: '#FFFFFF', placeholder: '#3a3a3a' })

  const {
    state: {
      paymentData: { tax, zipCode }
    },
    mutations: { setPaymentStationMessage }
  } = usePayment()

  const notValidNumberField = validCardNumberField !== null && !validCardNumberField
  const notValidExpDateField = validExpDateField !== null && !validExpDateField
  const notValidCvvField = validCvvField !== null && !validCvvField

  const loadPaymentProviderPublicConfig = async () => {
    const { region, sandbox } = paymentOrderDetails
    if (paymentProviderPublicConfig.isLoading) return
    setPaymentProviderPublicConfig({ value: null, isLoading: true, error: null })

    try {
      const result = await Platform.PaymentStationApi(sdk).getPaymentPublicconfig({ paymentProvider, region: region || null, sandbox })
      const publicConfig: Record<string, unknown> = result as Record<string, unknown>
      if (!publicConfig.publicKey || typeof publicConfig.publicKey !== 'string') {
        throw new Error('Invalid configuration')
      }

      setPaymentProviderPublicConfig({ value: publicConfig.publicKey, isLoading: false, error: null })
    } catch (error) {
      console.error(error)
      setPaymentProviderPublicConfig({ error: error as Error, isLoading: false, value: null })
    }
  }

  useEffect(() => {
    loadPaymentProviderPublicConfig()

    const pageConfigGlobalColor = pageConfig?.data?.global?.colors
    if (pageConfigGlobalColor) {
      const {
        text: { hex, rgb }
      } = pageConfigGlobalColor
      setColorUI({ base: hex, placeholder: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.65)` })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFrameValidationChanged = ({ isValid, element, isEmpty }: FrameValidationChangedEvent) => {
    switch (element) {
      case 'card-number':
        setValidCardNumberField(isEmpty ? null : isValid)
        break
      case 'expiry-date':
        setValidExpDateField(isEmpty ? null : isValid)
        break
      case 'cvv':
        setValidCvvField(isEmpty ? null : isValid)
        break
      default:
        break
    }
  }

  const onPaymentMethodChanged = ({ paymentMethod }: FramePaymentMethodChangedEvent) => {
    setPaymentMethod(paymentMethod)
  }

  const onCardValidationChanged = ({ isValid }: FrameCardValidationChangedEvent) => {
    setValidCard(isValid)
  }

  const onCardSubmitted = () => {
    setProcessPayment({ value: null, isLoading: true, error: null })
  }

  const onProcessPayment = async (event: FrameCardTokenizedEvent) => {
    if (processPayment.isLoading) return
    setProcessPayment({ value: null, isLoading: true, error: null })

    try {
      const result = await Platform.PaymentStationApi(sdk).createPayPayment_ByPaymentOrderNo(
        paymentOrderNo,
        { token: event.token },
        { zipCode }
      )
      if (!result.success) throw new Error(result.reason || 'Cannot process payment')

      setProcessPayment({ value: result, isLoading: false, error: null })
    } catch (error) {
      setProcessPayment({ error: error as Error, value: null, isLoading: false })
    }
  }

  const onCardTokenizationFailed = (event: FrameCardTokenizationFailedEvent) => {
    setProcessPayment({ value: null, isLoading: false, error: new Error(event.message) })
  }

  useEffect(() => {
    if (!!processPayment.value && !!processPayment.value.success) {
      setPaymentStationMessage({ message: { action: PAYMENT_STATION_ACTION.enum.complete } })
    }
  }, [processPayment.value])

  const renderPaymentMethodCard = () => {
    if (!paymentMethod) return

    switch (paymentMethod) {
      case 'Visa':
        return <img className="icon-show" src={visaIcon} alt={'Visa'} />
      case 'Mastercard':
        return <img className="icon-show" src={masterCardIcon} alt={'Mastercard'} />
      case 'American Express':
        return <img className="icon-show" src={americanExpressIcon} alt={'American Express'} />
      case 'Diners Club':
        return <img className="icon-show" src={dinerClubIcon} alt={'Diners Club'} />
      default:
        return null
    }
  }

  if (paymentProviderPublicConfig.error) {
    return (
      <PaymentAlert
        type={AlertType.warning}
        onRetry={loadPaymentProviderPublicConfig}
        message={'Something went wrong, Please retry or contact our administrator if the problem persist'}
      />
    )
  }

  return (
    <div className="checkout-com">
      {paymentProviderPublicConfig.isLoading && <Loading />}
      {processPayment.error && (
        <PaymentAlert
          type={AlertType.warning}
          message={'Something went wrong, Please reload the page or contact our administrator if the problem persist'}
        />
      )}
      {!!paymentProviderPublicConfig.value && !processPayment.error && (
        <div className="app" id="payment-form">
          <Frames
            config={{
              debug: paymentOrderDetails.sandbox,
              publicKey: paymentProviderPublicConfig.value,
              style: {
                base: {
                  color: colorUI.base,
                  fontSize: '14px'
                },
                placeholder: {
                  base: {
                    color: colorUI.placeholder
                  }
                }
              }
            }}
            frameValidationChanged={onFrameValidationChanged}
            paymentMethodChanged={onPaymentMethodChanged}
            cardValidationChanged={onCardValidationChanged}
            cardSubmitted={onCardSubmitted}
            cardTokenized={onProcessPayment}
            cardTokenizationFailed={onCardTokenizationFailed}>
            <div className="field-container">
              <label htmlFor="card-number">Card number</label>
              <div className="input-container card-number">
                <div className="icon-container">
                  {notValidNumberField ? (
                    <img id="icon-card-number" src={commonCardError} alt="PAN" />
                  ) : (
                    <img id="icon-card-number" src={cardIcon} alt="PAN" />
                  )}
                </div>
                <CardNumber />
                <div className="icon-container">
                  {!notValidNumberField && renderPaymentMethodCard()}
                  <img className={notValidNumberField ? 'icon-show' : 'icon-hide'} src={errorIcon} alt={'error icon'} />
                </div>
              </div>
              {notValidNumberField && <div className="error-message error-message__card-number">Invalid card number</div>}
            </div>

            <div className="date-and-code field-container">
              <div>
                <label htmlFor="expiry-date">Expiry date</label>
                <div className="input-container expiry-date">
                  <div className="icon-container">
                    {notValidExpDateField ? (
                      <img id="icon-card-number" src={expDateIconError} alt="Expiry date" />
                    ) : (
                      <img id="icon-card-number" src={expDateIcon} alt="Expiry date" />
                    )}
                  </div>
                  <ExpiryDate />
                  <div className="icon-container">
                    <img className={notValidExpDateField ? 'icon-show' : 'icon-hide'} src={errorIcon} alt={'error-icon'} />
                  </div>
                </div>
                {notValidExpDateField && <span className="error-message error-message__expiry-date">Invalid expiry date</span>}
              </div>
              <div>
                <label htmlFor="cvv">Security code</label>
                <div className="input-container cvv">
                  <div className="icon-container">
                    {notValidCvvField ? (
                      <img id="icon-card-number" src={commonCardError} alt="Expiry date" />
                    ) : (
                      <img id="icon-card-number" src={cvvIcon} alt="Expiry date" />
                    )}
                  </div>
                  <Cvv />
                  <div className="icon-container">
                    <img className={notValidCvvField ? 'icon-show' : 'icon-hide'} src={errorIcon} alt={'error icon'} />
                  </div>
                </div>
                {notValidCvvField && <span className="error-message error-message__cvv">Invalid cvv code</span>}
              </div>
            </div>

            <Button
              className="pay-button"
              onClick={Frames.submitCard}
              buttonStyle={ButtonStyle.PRIMARY}
              buttonType={ButtonType.FLAT}
              disabled={!validCard || processPayment.isLoading}>
              {processPayment.isLoading
                ? 'PROCESSING...'
                : `PAY ${paymentOrderDetails.currencySymbol}${PaymentUtils.getTotalPrice(
                    paymentOrderDetails.price,
                    tax?.formattedTax || undefined
                  )}`}
            </Button>
          </Frames>
        </div>
      )}
    </div>
  )
}
