/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { PaymentAlert } from '@od-payment/components/PaymentAlert/PaymentAlert'
import { PaymentConfigHooks } from '@od-payment/hooks/PaymentConfigHooks'
import { RequestType } from '@od-payment/models/Payment'
import { AlertType } from '@od-shared/models/Alert'
import { CardCvcElement, CardExpiryElement, CardNumberElement, ElementsConsumer } from '@stripe/react-stripe-js'
import {
  PaymentMethod,
  Stripe,
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
  StripeCardNumberElementOptions,
  StripeElements
} from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import './SplitCardForm.scss'

export const StripePaymentType = z.enum(['card', 'ideal', 'sepa_debit', 'fpx'])

interface ExternalProps {
  onSubmit: (stripe: Stripe, paymentMethod: PaymentMethod) => void
  isLoading: boolean
}

interface Props extends ExternalProps {
  stripe: Stripe | null
  elements: StripeElements | null
}

type InputValidation = { cardNumber: boolean; CardExpiry: boolean; cardCvc: boolean }

const SplitCardForm$ = ({ stripe, elements, onSubmit, isLoading }: Props) => {
  const {
    state: { pageConfig }
  } = PaymentConfigHooks.usePaymentConfig()

  const [stripeHandler, setStripeHandler] = useState<RequestType<PaymentMethod | null>>({
    value: null,
    isLoading: false,
    error: null
  })
  const [inputValidation, setInputValidation] = useState<InputValidation>({
    cardNumber: false,
    cardCvc: false,
    CardExpiry: false
  })
  const [renderLoading, setRenderLoading] = useState<boolean>(isLoading)
  const [styleUI, setStyleUI] = useState<StripeCardNumberElementOptions>({
    classes: {
      base: 'stripeElement',
      complete: 'stripeElement--complete',
      empty: 'stripeElement--empty',
      focus: 'stripeElement--focus',
      invalid: 'stripeElement--invalid'
    },
    style: {
      base: {
        color: '#ffffff',
        '::placeholder': {
          color: '#3a3a3a'
        }
      },
      invalid: {
        color: '#E5605C'
      }
    }
  })

  const isAllValid = () => {
    return !Object.values(inputValidation)
      .map(isValid => isValid)
      .includes(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isAllValid() || !stripe || !elements || isLoading || stripeHandler.isLoading) return

    const card = elements.getElement(CardNumberElement)
    if (!card) return

    setStripeHandler({ value: null, isLoading: true, error: null })

    try {
      const result = await stripe.createPaymentMethod({
        card,
        type: StripePaymentType.enum.card
      })
      if (result.error) throw result.error
      if (!result.paymentMethod) throw new Error('No stripe payment method result')

      setStripeHandler({ value: result.paymentMethod, isLoading: false, error: null })
    } catch (error) {
      console.error(error)
      setStripeHandler({ error: error as Error, isLoading: false, value: null })
    }
  }

  const onCardNumberElementChange = (event: StripeCardNumberElementChangeEvent) => {
    const isInputValid = !event.empty && event.complete && !event.error
    setInputValidation({ ...inputValidation, cardNumber: isInputValid })
  }

  const onCardCardExpiryElementChange = (event: StripeCardExpiryElementChangeEvent) => {
    const isInputValid = !event.empty && event.complete && !event.error
    setInputValidation({ ...inputValidation, CardExpiry: isInputValid })
  }

  const onCardCvcElementChange = (event: StripeCardCvcElementChangeEvent) => {
    const isInputValid = !event.empty && event.complete && !event.error
    setInputValidation({ ...inputValidation, cardCvc: isInputValid })
  }

  useEffect(() => {
    const pageConfigGlobalColor = pageConfig?.data?.global?.colors
    if (pageConfigGlobalColor) {
      const {
        text: { hex, rgb }
      } = pageConfigGlobalColor
      setStyleUI({
        ...styleUI,
        style: {
          base: {
            color: hex,
            '::placeholder': {
              color: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.65)`
            }
          }
        }
      })
    }
  }, [])

  useEffect(() => {
    if (stripe && stripeHandler.value) {
      onSubmit(stripe, stripeHandler.value)
    }
  }, [stripeHandler.value, onSubmit, stripe])

  useEffect(() => {
    setRenderLoading(isLoading || stripeHandler.isLoading)
  }, [isLoading, stripeHandler.isLoading])

  if (stripeHandler.error) {
    return (
      <PaymentAlert
        type={AlertType.warning}
        message={'Something went wrong, Please reload the page or contact our administrator if the problem persist'}
      />
    )
  }

  return (
    <form className={'stripe-form'} onSubmit={handleSubmit}>
      <div className={'stripe-form-row'}>
        <label>
          Card number
          <CardNumberElement options={styleUI} onChange={onCardNumberElementChange} />
        </label>
      </div>
      <div className={'stripe-form-row'}>
        <div className={'stripe-form-col'}>
          <label>
            Expiration date
            <CardExpiryElement options={styleUI} onChange={onCardCardExpiryElementChange} />
          </label>
        </div>
        <div className={'stripe-form-col'}>
          <label>
            CVC
            <CardCvcElement options={styleUI} onChange={onCardCvcElementChange} />
          </label>
        </div>
      </div>

      <Button type="submit" buttonStyle={ButtonStyle.PRIMARY} buttonType={ButtonType.FLAT} disabled={renderLoading || !isAllValid()}>
        {renderLoading ? 'Processing...' : 'Pay'}
      </Button>
    </form>
  )
}

export const SplitCardForm = (props: ExternalProps) => {
  return <ElementsConsumer>{({ stripe, elements }) => <SplitCardForm$ stripe={stripe} elements={elements} {...props} />}</ElementsConsumer>
}
