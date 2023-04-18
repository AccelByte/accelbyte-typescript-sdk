/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import { Spinner, SpinnerStyle } from '@od-components/components/Spinner/Spinner'
import { t } from '@od-components/i18n/index'
import { ItemType } from '@od-shared/models/EcommTypes'
import { PurchaseHelper } from '@od-shared/utils/PurchaseHelper'
import orderExpiredImage from '@od-assets/images/order-expired.svg'
import orderPendingImage from '@od-assets/images/order-pending.svg'
import paymentFailedImage from '@od-assets/images/payment-failed.svg'
import paymentSuccessImage from '@od-assets/images/payment-success.svg'
import classNames from 'classnames'
import { OrderInfo } from '@accelbyte/sdk-platform'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Trans } from 'react-i18next'
import './PaymentStatusDialog.scss'
import { useRoutes } from '~/hooks/routes/useRoutes'

interface PaymentStatusSuccessProps extends PaymentStatusProps {
  orderInfo: OrderInfo
  isPreviewMode?: boolean
  isOnlyShowCloseButton?: boolean
}

interface PaymentStatusSuccessState {
  isLoading: boolean
}

interface CloseButtonProps {
  className?: string
  onClick?: () => void
  isLoading?: boolean
}

function CloseButton({ className, isLoading, onClick }: CloseButtonProps) {
  return (
    <button onClick={onClick} className={classNames('btn btnClose btn-ghost uppercase', className)} disabled={isLoading}>
      {isLoading && <Spinner className={SpinnerStyle.inline} />}
      <Trans i18nKey="PaymentStatusDialog.paymentSuccess.close">CLOSE</Trans>
    </button>
  )
}

export function PaymentStatusSuccessDialog({
  orderInfo,
  className,
  isOnlyShowCloseButton,
  isPreviewMode,
  onCloseDialog
}: PaymentStatusSuccessProps) {
  const [state, setState] = useState<PaymentStatusSuccessState>({
    isLoading: false
  })
  const { state: routes } = useRoutes()

  useEffect(() => {
    if (isPreviewMode) return
    try {
      setState({ isLoading: true })
      // await GameHelper.loadGameInfo()
    } finally {
      setState({ isLoading: false })
    }
  }, [isPreviewMode])

  const { isLoading } = state
  const price = `${orderInfo.currency.currencySymbol} ${PurchaseHelper.calculateIntegerPrice(
    orderInfo.totalPrice || 0,
    orderInfo.currency
  )}`
  const itemSnapshot = orderInfo.itemSnapshot
  const itemType = itemSnapshot && itemSnapshot.itemType

  return (
    <Dialog
      title={t('PaymentStatusDialog.paymentSuccess.title')}
      isOpen={true}
      className={classNames('paymentStatusDialog', className, {
        orderCode: itemType === ItemType.enum.CODE
      })}
      isPreviewMode={isPreviewMode}>
      <DialogBody className={classNames('dialogBody', { nonCode: itemType !== ItemType.enum.CODE })}>
        <img src={paymentSuccessImage} alt="Payment Success" />

        {itemType === ItemType.enum.CODE ? (
          <>
            <Trans i18nKey="PaymentStatusDialog.content.thanks">
              <p className="code heading above">
                Thank you! Your payment of <span className="price">{{ price }}</span> was
              </p>
              <p className="code heading bottom">successful.</p>
            </Trans>
            <Trans i18nKey="PaymentStatusDialog.paymentSuccess.code.description">
              <p className="description">Your product key has been sent to your email. You can also see</p>
              <p className="description code bottom">the key by clicking the See My Keys button below, or going to</p>
            </Trans>
            <Trans i18nKey="PaymentStatusDialog.paymentSuccess.code.goToMyPurchasedItem">
              <p className="goToPurchasedItemContainer">
                <span>My Account</span>
                <ArrowIcon className={classNames('arrow', ArrowIconStyles.right)} />
                <span>Purchased Items</span>
                <ArrowIcon className={classNames('arrow', ArrowIconStyles.right)} />
                <span>Product Keys</span>
              </p>
            </Trans>
          </>
        ) : itemType === ItemType.enum.OPTIONBOX ? (
          <div className="optionboxPayment">
            <p className="headingPayment">
              <Trans i18nKey="PaymentStatusDialog.content.optionbox.thanks">
                Thank you! Your payment of <span className="text-[color:rgb(var(--od-rgba-text))]">{{ price }}</span> was successful.
              </Trans>
            </p>

            <Trans i18nKey="PaymentStatusDialog.paymentSuccess.optionbox.description">
              <p className="paymentDescription mt-5">
                Please click the button below to open the option box and select the item you want to claim.
              </p>

              <p className="paymentDescription mt-7">You also can open the option box later at:</p>
            </Trans>

            <Trans i18nKey="PaymentStatusDialog.paymentSuccess.optionbox.goToMyPurchasedItem">
              <p className="goToOptionBoxPage">
                <span>My Account</span>
                <ArrowIcon className={classNames('arrow', ArrowIconStyles.right)} />
                <span>Purchased Items</span>
                <ArrowIcon className={classNames('arrow', ArrowIconStyles.right)} />
                <span>Option Box</span>
              </p>
            </Trans>
          </div>
        ) : (
          <Trans i18nKey="PaymentStatusDialog.paymentSuccess.content">
            <p className="description above">Thank you!</p>
            <p className="description">
              Your payment of <span className="price">{{ price }}</span> was successful.
            </p>
          </Trans>
        )}
      </DialogBody>
      <DialogFooter className="dialogFooter">
        {itemType === ItemType.enum.CODE ? (
          <>
            <CloseButton isLoading={isLoading} onClick={onCloseDialog} />
            {!isOnlyShowCloseButton && (
              <Link to={routes.account.purchasedItems.keys.link}>
                <Button className="btn btn-primary btnSeeKeys">
                  <Trans i18nKey="PaymentStatusDialog.paymentSuccess.button.seeMyKeys">See My Keys</Trans>
                </Button>
              </Link>
            )}
          </>
        ) : itemType === ItemType.enum.OPTIONBOX ? (
          <>
            <CloseButton isLoading={isLoading} onClick={onCloseDialog} />
            {!isOnlyShowCloseButton && (
              <Link to={routes.account.purchasedItems.optionboxes.link}>
                <Button className="btn btn-primary btnSeeKeys">
                  <Trans i18nKey="PaymentStatusDialog.paymentSuccess.button.optionbox">See My Optionbox</Trans>
                </Button>
              </Link>
            )}
          </>
        ) : (
          <CloseButton className="nonCode" isLoading={isLoading} onClick={onCloseDialog} />
        )}
      </DialogFooter>
    </Dialog>
  )
}

export function PaymentStatusProcessedCountDownDialog({ isOpen = true }: { isOpen?: boolean }) {
  return (
    <Dialog title="Processing Payment" isOpen={isOpen} className={classNames('paymentStatusDialog')}>
      <DialogBody className="dialogBody processedCountdown">
        <Spinner className={classNames(SpinnerStyle.blue, 'spinner')} />
        <Trans i18nKey={'PaymentStatusDialog.StatusProcessedTimeout.content'}>
          <p>Your payment is now being processed. Please wait for a few seconds...</p>
        </Trans>
      </DialogBody>
    </Dialog>
  )
}

interface PaymentStatusNeedMoreTimeProcessedDialogProps {
  onClose?: () => void
  isOpen?: boolean
}

export function PaymentStatusNeedMoreTimeProcessedDialog({ isOpen = true, onClose }: PaymentStatusNeedMoreTimeProcessedDialogProps) {
  return (
    <Dialog title="Processing Payment" isOpen={isOpen} className={classNames('paymentStatusDialog needMoreTime')}>
      <DialogBody className="dialogBody needMoreTime">
        <img src={orderPendingImage} alt="order pending" />
        <Trans i18nKey={'PaymentStatusDialog.paymentProcessed.content'}>
          <p className="description above">
            Your payment is still being processed, which may take up to 15 minutes. You will be notified via email
          </p>
          <p className="description ">when your payment has been processed. For assistance, please contact support.</p>
        </Trans>
      </DialogBody>
      {onClose && (
        <DialogFooter className="dialogFooter">
          <button className="btn btnClose failed" onClick={onClose}>
            <Trans i18nKey="PaymentStatusDialog.paymentFailed.close">CLOSE</Trans>
          </button>
        </DialogFooter>
      )}
    </Dialog>
  )
}

interface PaymentStatusProps {
  onCloseDialog?: () => void
  className?: string
}

export function PaymentStatusFailedDialog({ className, onCloseDialog }: PaymentStatusProps) {
  return (
    <Dialog title={t('PaymentStatusDialog.paymentFailed.title')} isOpen={true} className={classNames('paymentStatusDialog', className)}>
      <DialogBody className="dialogBody failed">
        <img src={paymentFailedImage} alt="Payment Failed" />
        <Trans i18nKey={'PaymentStatusDialog.paymentFailed.content'}>
          <p className="description above">Your payment has failed.</p>
          <p className="description">Please contact support for assistance.</p>
        </Trans>
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button onClick={onCloseDialog} className="btn btnClose failed">
          <Trans i18nKey="PaymentStatusDialog.paymentFailed.close">CLOSE</Trans>
        </button>
      </DialogFooter>
    </Dialog>
  )
}

export function OrderCancelledDialog({ className, onCloseDialog }: PaymentStatusProps) {
  return (
    <Dialog
      title={<Trans i18nKey="OrderPage.cancellationnotice.title">Order Cancelled</Trans>}
      isOpen={true}
      className={classNames('paymentStatusDialog', className)}>
      <DialogBody className="dialogBody">
        <img src={orderExpiredImage} alt="Order cancelled" />
        <p className="description above">
          <Trans i18nKey="OrderPage.cancellationNotice.message">
            Your order has been successfully canceled. Head back to the store to explore other awesome games.
          </Trans>
        </p>
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button className="btn btnClose cancelled" onClick={onCloseDialog}>
          <Trans i18nKey="OrderPage.cancellationNotice.closeButton">Close</Trans>
        </button>
      </DialogFooter>
    </Dialog>
  )
}

export function OrderExpiredDialog({ className, onCloseDialog }: PaymentStatusProps) {
  return (
    <Dialog
      title={<Trans i18nKey="OrderPage.expiryDialog.title">Order Expired</Trans>}
      isOpen={true}
      className={classNames('paymentStatusDialog', className)}>
      <DialogBody className="dialogBody">
        <img src={orderExpiredImage} alt="Order expired" />
        <p className="description above">
          <Trans i18nKey="OrderPage.expiryDialog.message">Your order has expired. Please return to the store to place a new order.</Trans>
        </p>
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button className="btn btnClose expired" onClick={onCloseDialog}>
          <Trans i18nKey="OrderPage.expiryDialog.closeButton">Close</Trans>
        </button>
      </DialogFooter>
    </Dialog>
  )
}
