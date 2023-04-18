/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Trans } from 'react-i18next'
import { OrderStatus } from '@accelbyte/sdk-platform'

export const OrderStatusTranslation = (props: { status: string }) => {
  const { status } = props
  switch (true) {
    case status === OrderStatus.enum.INIT:
      return <Trans i18nKey="OrderStatus.init">Initialized</Trans>
    case status === OrderStatus.enum.CHARGEBACK:
      return <Trans i18nKey="OrderStatus.chargeback">Chargeback</Trans>
    case status === OrderStatus.enum.CHARGEBACK_REVERSED:
      return <Trans i18nKey="OrderStatus.chargebackReversed">Chargeback Reversed</Trans>
    case status === OrderStatus.enum.CHARGED:
      return <Trans i18nKey="OrderStatus.charged">Charged</Trans>
    case status === OrderStatus.enum.FULFILLED:
      return <Trans i18nKey="OrderStatus.fulfilled">Fulfilled</Trans>
    case status === OrderStatus.enum.FULFILL_FAILED:
      return <Trans i18nKey="OrderStatus.fulfillFailed">Fulfill Failed</Trans>
    case status === OrderStatus.enum.REFUNDING:
      return <Trans i18nKey="OrderStatus.refunding">Refunding</Trans>
    case status === OrderStatus.enum.REFUNDED:
      return <Trans i18nKey="OrderStatus.refunded">Refunded</Trans>
    case status === OrderStatus.enum.REFUND_FAILED:
      return <Trans i18nKey="OrderStatus.refundFailed">Refund Failed</Trans>
    case status === OrderStatus.enum.CLOSED:
      return <Trans i18nKey="OrderStatus.closed">Closed</Trans>
    case status === OrderStatus.enum.DELETED:
      return <Trans i18nKey="OrderStatus.deleted">Deleted</Trans>
    default:
      return <span>status</span>
  }
}
