/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { useCallback } from 'react'
import { ChildUtils } from '@od-components/components/Iframe/ChildUtils'
import { z } from 'zod'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { createStore, useStore } from '../useStore'
import { PaymentAccount, Platform, TaxResult } from '@accelbyte/sdk-platform'

export interface PaymentData {
  zipCode?: string
  tax?: TaxResult
}

interface Message {
  action: z.TypeOf<typeof PAYMENT_STATION_ACTION>
  type?: string
  event?: {
    name: keyof typeof PAYMENT_STATION_ACTION_PAYMENT_STATUS_NAME
    orderNo: string
  }
}

interface State {
  paymentAccounts: PaymentAccount[] | null
  paymentAccountsFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  paymentAccountsError: FetchErrorType | null

  deletePaymentAccountFetchStatus: FetchStatus.IDLE | FetchStatus.DELETING
  deletePaymentAccountError: FetchErrorType | null

  paymentData: PaymentData
  paymentStationMessage: string | null
}

export const PAYMENT_STATION_ACTION = z.enum(['complete', 'cancel'])
const PAYMENT_STATION_ACTION_PAYMENT_STATUS_NAME = z.enum(['paymentSuccess', 'paymentGenericError'])
const DEFAULT_STATE: State = {
  paymentAccounts: null,
  paymentAccountsFetchStatus: FetchStatus.IDLE,
  paymentAccountsError: null,

  deletePaymentAccountFetchStatus: FetchStatus.IDLE,
  deletePaymentAccountError: null,

  paymentData: {},
  paymentStationMessage: null
}

const store = createStore<State>(DEFAULT_STATE)

export function usePayment() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)

  const getPaymentAccounts = useCallback(
    async (userId: string): Promise<HookDataReturns<State['paymentAccounts']>> => {
      let nextPaymentAccounts: State['paymentAccounts'] = null
      let nextPaymentAccountsError: State['paymentAccountsError'] = null

      try {
        setState(oldState => ({
          ...oldState,
          paymentAccountsFetchStatus: FetchStatus.FETCHING,
          paymentAccountsError: null
        }))

        nextPaymentAccounts = await Platform.PaymentAccountApi(sdk).getPaymentAccounts_ByUserId(userId)
        return { data: nextPaymentAccounts }
      } catch (err) {
        nextPaymentAccountsError = WidgetErrorHelper.getErrorType(err)
        return { error: nextPaymentAccountsError }
      } finally {
        setState(oldState => ({
          ...oldState,
          paymentAccounts: nextPaymentAccounts,
          paymentAccountsError: nextPaymentAccountsError,
          paymentAccountsFetchStatus: FetchStatus.IDLE
        }))
      }
    },
    [sdk]
  )

  const deletePaymentAccount = useCallback(
    async (userId: string, paymentAccount: PaymentAccount): Promise<HookDataReturns<unknown>> => {
      let nextDeletePaymentAccountError: State['deletePaymentAccountError'] = null

      try {
        setState(oldState => ({
          ...oldState,
          deletePaymentAccountFetchStatus: FetchStatus.DELETING,
          deletePaymentAccountError: null
        }))

        await Platform.PaymentAccountApi(sdk).deletePaymentAccount_ByUserId_ByType_ById(userId, paymentAccount.type, paymentAccount.id)
        return { data: true }
      } catch (err) {
        nextDeletePaymentAccountError = WidgetErrorHelper.getErrorType(err)
        return { error: nextDeletePaymentAccountError }
      } finally {
        setState(oldState => ({
          ...oldState,
          deletePaymentAccountError: nextDeletePaymentAccountError,
          deletePaymentAccountFetchStatus: FetchStatus.IDLE
        }))
      }
    },
    [sdk]
  )

  const setPaymentStationMessage = useCallback(({ message, origin = '*' }: { message: Message | string; origin?: string }) => {
    let messageString = ''
    if (typeof message === 'object') {
      if (!PAYMENT_STATION_ACTION.options.includes(message?.action)) {
        return
      }

      messageString = JSON.stringify(message)
    } else if (typeof message === 'string') {
      messageString = message
    }

    // If we're not in iframe, then we can't send message to parent window.
    if (!ChildUtils.isInIframe()) {
      setState(oldState => ({ ...oldState, paymentStationMessage: messageString }))
      return
    }

    // If we're in iframe, then we post it to the parent window instead.
    window.parent.postMessage(messageString, origin)
  }, [])

  const setPaymentData = useCallback((paymentData: Partial<PaymentData>) => {
    setState(oldState => ({ ...oldState, paymentData }))
  }, [])

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  return {
    state,
    mutations: {
      getPaymentAccounts,
      deletePaymentAccount,
      setPaymentData,
      setPaymentStationMessage,
      resetState
    }
  }
}
