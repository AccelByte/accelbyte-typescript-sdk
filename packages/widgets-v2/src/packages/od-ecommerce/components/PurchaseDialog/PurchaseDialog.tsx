/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { BannedMessage, CommonError } from '@od-components/components/CommonError'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { Radio, RadioGroup } from '@od-components/components/Form/Radio/Radio'
import { Loading } from '@od-components/components/Loading/Loading'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { CurrencyType } from '@od-shared/models/EcommTypes'
import { MAX_INTEGER } from '@accelbyte/validator'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './PurchaseDialog.scss'
import { mockPaymentConstraint } from '@od-shared/mocks/MockVars'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { PurchaseConstants } from '@od-ecommerce/constants/PurchaseConstants'
import { useOrderProcess } from '~/hooks/platform/useOrderProcess'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { useSdkOptions } from '~/hooks/useSdk'
import { IamHelper } from '@accelbyte/sdk-iam'
import { ItemInfo, OrderInfo, OrderStatus, RegionDataItem } from '@accelbyte/sdk-platform'
import { DesktopChecker, UrlHelper } from '@accelbyte/sdk'

interface Props {
  title: React.ReactNode
  item: ItemInfo
  isOpen: boolean
  customItemNameTransform?: (item: ItemInfo) => string
  preSelectedRegionData?: RegionDataItem
  onClose?: () => unknown
  onOrderCreated: (order: OrderInfo) => unknown
  onPurchaseError?: () => void
  isPreviewMode?: boolean
}

interface State {
  quantity: number
  selectedRegionData: RegionDataItem | null
  alert: AlertValue | null
}

export const PurchaseDialog = ({
  item,
  onOrderCreated,
  title,
  customItemNameTransform,
  isOpen,
  isPreviewMode,
  onClose,
  onPurchaseError,
  preSelectedRegionData
}: Props) => {
  const [state, setState] = useState<State>({
    quantity: 1,
    selectedRegionData: preSelectedRegionData || (item.regionData || [])[0] || null,
    alert: null
  })

  const [sdkOptions] = useSdkOptions()
  const {
    state: { user }
  } = useUserInfo()
  const {
    state: { flags }
  } = useDiscoveryConfigs()
  const { state: history } = useHistory()
  const { state: routes } = useRoutes()

  // Purchase hooks.
  const {
    state: { prepurchaseInformation, prepurchaseInformationFetchStatus, purchaseProcessFetchStatus },
    mutations: { purchase, onOrderCreatedHook, onOrderFulfilledHook }
  } = useOrderProcess()
  const {
    state: { pendingOrders }
  } = usePendingOrders()

  useEffect(() => {
    if (IamHelper.isUserBanned(user)) {
      setState(oldState => ({
        ...oldState,
        alert: {
          type: AlertType.danger,
          element: <BannedMessage />
        }
      }))
    }
  }, [user])

  const handlePurchaseError = (error: Error | unknown): void => {
    if (onPurchaseError) onPurchaseError()

    setState(oldState => ({
      ...oldState,
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    }))
  }

  const handlePurchase = async () => {
    const { selectedRegionData, quantity } = state
    if (!selectedRegionData) {
      return
    }
    const { data: createdOrder, error: purchaseError } = await purchase({
      item,
      userId: user?.userId,
      regionData: selectedRegionData,
      quantity,
      returnUrl: DesktopChecker.isDesktopApp()
        ? PurchaseConstants.AVOID_REDIRECT_TO_FILE_PROTOCOL
        : UrlHelper.combineURLPaths(window.location.origin, sdkOptions.baseURL)
    })

    if (createdOrder) {
      onOrderCreated(createdOrder)
      onOrderCreatedHook({ createdOrder, user, flags })

      if (createdOrder.status === OrderStatus.enum.FULFILLED) {
        onOrderFulfilledHook({ createdOrder, user, flags })
      }
    }

    if (purchaseError) {
      handlePurchaseError(purchaseError)
    }
  }
  const { alert, selectedRegionData, quantity } = state

  const isFetching = prepurchaseInformationFetchStatus === FetchStatus.FETCHING
  const isPurchasing = purchaseProcessFetchStatus === FetchStatus.PURCHASING

  const purchaseConstraint = !isPreviewMode ? prepurchaseInformation?.purchaseConstraint : mockPaymentConstraint
  const currentPaymentConstraint = purchaseConstraint?.paymentConstraints?.find(
    constraint => JSON.stringify(constraint.paymentOption.regionData) === JSON.stringify(selectedRegionData)
  )

  const entitlementConstraint = purchaseConstraint && purchaseConstraint.entitlementConstraint
  const currentPaymentOption = currentPaymentConstraint && currentPaymentConstraint.paymentOption
  const balanceInsufficient = currentPaymentConstraint && currentPaymentConstraint.walletConstraint.maxPurchase < quantity

  return (
    <Dialog className="purchaseDialog" title={title} isOpen={isOpen} isPreviewMode={isPreviewMode}>
      <DialogBody>
        {balanceInsufficient && (
          <Alert type={AlertType.danger}>
            <div className="alertContainer">
              <Trans i18nKey="PurchaseDialog.notice.insufficientBalance">Insufficient Balance</Trans>
              {/* TODO: re-introduce this once we have the path added to `useRoutes`. */}
              {/* <button className="btnRecharge" onClick={() => history.push(EcomPath.Recharge.link)}>
                <Trans i18nKey="PurchaseDialog.button.recharge">Recharge</Trans>
              </button> */}
            </div>
          </Alert>
        )}
        <table>
          <tbody>
            <tr>
              <th>
                <Trans i18nKey="PurchaseDialog.key.item">Item</Trans>
              </th>
              <td>{(customItemNameTransform && customItemNameTransform(item)) || item.title}</td>
            </tr>
            {isFetching && (
              <tr>
                <td colSpan={2}>
                  <Loading />
                </td>
              </tr>
            )}
            {purchaseConstraint && (
              <>
                <tr>
                  <th>
                    <Trans i18nKey="PurchaseDialog.key.options">Price option</Trans>
                  </th>
                  <td>
                    <RadioGroup>
                      {purchaseConstraint.paymentConstraints.map((constraint, index) => {
                        const { regionData, currencySymbol, finalPrice } = constraint.paymentOption
                        const { currencyCode } = regionData
                        return (
                          <Radio
                            key={`${currencyCode}-${index}`}
                            onClick={() =>
                              setState(oldState => ({
                                ...oldState,
                                selectedRegionData: regionData
                              }))
                            }
                            checked={JSON.stringify(selectedRegionData) === JSON.stringify(regionData)}
                            label={`${currencySymbol} ${finalPrice}`}
                          />
                        )
                      })}
                    </RadioGroup>
                  </td>
                </tr>
                {entitlementConstraint && (
                  <React.Fragment>
                    {entitlementConstraint.maxAllowedPurchase > 1 && (
                      <tr>
                        <th>
                          <Trans i18nKey="PurchaseDialog.key.quantity">Quantity</Trans>
                        </th>
                        <td>
                          <div className="quantitySelector">
                            <button
                              onClick={() => {
                                setState(oldState => ({
                                  ...oldState,
                                  quantity: quantity - 1
                                }))
                              }}
                              disabled={quantity <= 1}
                              className="quantityControl"
                              type="button">
                              -
                            </button>
                            <span className="value">{quantity}</span>
                            <button
                              onClick={() => {
                                setState(oldState => ({
                                  ...oldState,
                                  quantity: quantity + 1
                                }))
                              }}
                              disabled={quantity >= entitlementConstraint.maxAllowedPurchase || quantity >= MAX_INTEGER}
                              className="quantityControl"
                              type="button">
                              +
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}

                    {currentPaymentOption && currentPaymentOption.finalPrice > 0 && (
                      <tr>
                        <th>
                          <Trans i18nKey="PurchaseDialog.key.payable">Amount to pay</Trans>
                        </th>
                        <td>{`${currentPaymentOption.currencySymbol} ${(quantity * currentPaymentOption.finalPrice).toFixed(
                          currentPaymentOption.decimals
                        )}`}</td>
                      </tr>
                    )}

                    {entitlementConstraint.maxAllowedPurchase < 0 && (
                      <tr>
                        <td colSpan={2}>
                          <div className="itemUnavailableNotice">
                            <Trans i18nKey="PurchaseDialog.notice.itemUnavailable">Item Unavailable</Trans>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )}
              </>
            )}

            {pendingOrders && pendingOrders.length > 0 && (
              <tr>
                <td colSpan={2}>
                  <Trans i18nKey="PurchaseDialog.notice.pendingOrders.message">
                    You already have another pending order that contains this item. Please
                    <Link
                      to={routes.orders.detail.makePath({
                        params: { orderNo: pendingOrders[0].orderNo },
                        state: { referrer: history.location.pathname }
                      })}>
                      complete
                    </Link>{' '}
                    that order before making another purchase.
                  </Trans>
                </td>
              </tr>
            )}

            {!!alert && (
              <tr>
                <td colSpan={2}>
                  <div>
                    <Alert type={alert.type} onDismiss={() => setState(oldState => ({ ...oldState, alert: null }))}>
                      {alert.element}
                    </Alert>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button disabled={isPurchasing} onClick={() => onClose && onClose()} className="btn btn-ghost">
          <Trans i18nKey="PurchaseDialog.buttons.cancel">CANCEL</Trans>
        </button>
        <Button
          loadingIndicator="SPINNER"
          disabled={
            (pendingOrders && pendingOrders.length > 0) ||
            isPurchasing ||
            !purchaseConstraint ||
            purchaseConstraint.entitlementConstraint.maxAllowedPurchase < quantity ||
            (currentPaymentConstraint && currentPaymentConstraint.walletConstraint.maxPurchase < quantity) ||
            IamHelper.isUserBanned(user)
          }
          onClick={handlePurchase}
          className="btn btn-primary"
          isLoading={isPurchasing || isFetching}>
          {!isPurchasing && currentPaymentConstraint && (
            <>
              {currentPaymentConstraint.paymentOption.finalPrice > 0 && (
                <>
                  {currentPaymentConstraint.paymentOption.regionData.currencyType === CurrencyType.enum.REAL && (
                    <Trans i18nKey="PurchaseDialog.buttons.continuePayment">CONTINUE TO PAYMENT</Trans>
                  )}
                  {currentPaymentConstraint.paymentOption.regionData.currencyType === CurrencyType.enum.VIRTUAL && (
                    <Trans i18nKey="PurchaseDialog.buttons.payNow">PAY NOW</Trans>
                  )}
                </>
              )}
              {currentPaymentConstraint.paymentOption.finalPrice === 0 && <Trans i18nKey="PurchaseDialog.buttons.claim">CLAIM</Trans>}
            </>
          )}
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
