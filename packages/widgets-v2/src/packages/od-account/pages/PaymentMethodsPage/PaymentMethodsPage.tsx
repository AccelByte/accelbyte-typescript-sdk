/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { CommonError } from '@od-components/components/CommonError'
import { CommonError as CommonErrorPage } from '@od-components/components/ErrorPage/CommonError'
import { Loading } from '@od-components/components/Loading/Loading'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { EcommerceErrorCode, PaymentAccountType } from '@od-shared/models/EcommTypes'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { PaymentAccount } from '@accelbyte/sdk-platform'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { AccountMainSection, AccountMainSectionBody, AccountMainSectionHeader } from '../AccountMainSection/AccountMainSection'
import { SkeletonCard } from '../../components/SkeletonCard/SkeletonCard'
import { DeletePaymentDialog } from './DeletePaymentDialog'
import './PaymentMethodsPage.scss'
import { mockUserPaymentMethods } from '@od-shared/mocks/MockVars'
import { usePayment } from '~/hooks/platform/usePayment'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { FetchStatus } from '~/constants/fetch-statuses'

export const createReadablePaymentAccountType = (type: PaymentAccountType) => {
  switch (type) {
    case PaymentAccountType.enum.card:
      return 'Card'
    case PaymentAccountType.enum.paypal:
      return 'Paypal'
    default:
      return 'Unknown'
  }
}

export const createReadablePaymentName = (payment: PaymentAccount): string => {
  if (payment.type === PaymentAccountType.enum.card) {
    return `**** **** **** ${payment.name.slice(-4)}`
  }

  return payment.name
}

interface State {
  selectedPaymentAccount: PaymentAccount | null
  alert: AlertValue | null
  isLoading: boolean
}

interface Props {
  isPreviewMode?: boolean
}

export const PaymentMethodsPage = (props: Props) => {
  const [state, setState] = useState<State>({
    selectedPaymentAccount: null,
    alert: null,
    isLoading: true
  })
  const { selectedPaymentAccount, alert, isLoading } = state
  const {
    state: { paymentAccountsError, paymentAccounts: paymentAccountsState, paymentAccountsFetchStatus, deletePaymentAccountFetchStatus },
    mutations: { getPaymentAccounts, deletePaymentAccount }
  } = usePayment()
  const {
    state: { user }
  } = useUserInfo()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    if (props.isPreviewMode) {
      return updateState({ isLoading: false })
    }

    fetchPaymentAccounts()
  }, [])

  const fetchPaymentAccounts = async () => {
    if (user) {
      const result = await getPaymentAccounts(user.userId)
      if (result.error) {
        onFetchError(result.error)
      }

      updateState({ isLoading: false })
    }
  }

  const onFetchError = (error: Error | unknown): void => {
    updateState({
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    })
  }

  const onDeleteSuccess = (): void => {
    updateState({
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="PaymentMethodsPage.deleteSuccess">The selected payment method has been deleted.</Trans>
      }
    })
  }

  const onDeleteError = (error: Error | unknown): void => {
    updateState({
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    })
  }

  const deletePaymentMethod = async (): Promise<void> => {
    const { selectedPaymentAccount } = state
    if (!selectedPaymentAccount || !user) return

    const result = await deletePaymentAccount(user.userId, selectedPaymentAccount)
    if (result.error) {
      onDeleteError(result.error)
      return
    }

    updateState({ selectedPaymentAccount: null })
    await fetchPaymentAccounts()
    onDeleteSuccess()
  }

  const isError = (): boolean => {
    return (
      ErrorHelper.isAxiosError(paymentAccountsError) &&
      paymentAccountsError?.response?.data.errorCode === EcommerceErrorCode.PAYMENT_METHOD_SAVING_UNSUPPORTED
    )
  }

  const isInEditor = props.isPreviewMode
  const paymentAccounts = !isInEditor ? paymentAccountsState : mockUserPaymentMethods
  const isFetching = paymentAccountsFetchStatus === FetchStatus.FETCHING
  const isDeleting = deletePaymentAccountFetchStatus === FetchStatus.DELETING

  if (isError()) {
    return <CommonErrorPage error={paymentAccountsError} />
  }
  if (isLoading) {
    return <SkeletonCard />
  }
  return (
    <AccountMainSection className="paymentMethodsPage">
      <AccountMainSectionHeader>
        <Trans i18nKey="PaymentMethodsPage.title">Payment Methods</Trans>
      </AccountMainSectionHeader>
      <AccountMainSectionBody>
        {alert && (
          <Alert
            type={alert.type}
            className="alert"
            onDismiss={() => {
              updateState({ alert: null })
            }}>
            {alert.element}
          </Alert>
        )}
        {isFetching && (
          <Loading>
            <Trans i18nKey="PaymentMethodsPage.loading.message">Loading your saved payment methods...</Trans>
          </Loading>
        )}
        {paymentAccounts && (
          <div className="paymentAccountsTable">
            {paymentAccounts.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>
                      <Trans i18nKey="PaymentMethodPage.paymentAccounts.type">Payment Type</Trans>
                    </th>
                    <th className="left name" />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {paymentAccounts.map((paymentAccount: PaymentAccount) => (
                    <tr key={`${paymentAccount.id}`}>
                      <td>{createReadablePaymentAccountType(paymentAccount.type)}</td>
                      <td className="name">{createReadablePaymentName(paymentAccount)}</td>
                      <td>
                        <button
                          disabled={isDeleting}
                          onClick={!isInEditor ? () => updateState({ selectedPaymentAccount: paymentAccount }) : undefined}>
                          <Trans i18nKey="PaymentMethodPage.delete.button">Delete</Trans>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {selectedPaymentAccount && (
              <DeletePaymentDialog
                isDeleting={isDeleting}
                onClose={() => updateState({ selectedPaymentAccount: null })}
                onDelete={deletePaymentMethod}
              />
            )}
            {!paymentAccounts.length && (
              <div className="noData">
                <Trans i18nKey="PaymentMethodPage.paymentAccounts.noData">You have no payment methods saved</Trans>
              </div>
            )}
          </div>
        )}
      </AccountMainSectionBody>
    </AccountMainSection>
  )
}
