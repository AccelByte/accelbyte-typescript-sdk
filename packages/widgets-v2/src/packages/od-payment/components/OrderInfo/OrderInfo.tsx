/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { PaymentOrderDetails } from '@accelbyte/sdk-platform'
import { PaymentUtils } from '@od-payment/utils/PaymentUtils'
import React from 'react'
import { usePayment } from '~/hooks/platform/usePayment'
import styles from './OrderInfo.module.scss'

interface Props {
  paymentOrderDetails: PaymentOrderDetails
}

export const OrderInfo = ({ paymentOrderDetails }: Props) => {
  const {
    state: {
      paymentData: { tax }
    }
  } = usePayment()

  return (
    <div className={styles.orderInfo}>
      <dl className={styles.row}>
        <dt>{paymentOrderDetails.title}</dt>
        <dd>
          {paymentOrderDetails.currencySymbol} {paymentOrderDetails.price}
        </dd>
      </dl>

      <div className={styles.separator} />

      <div className={styles.listGroup}>
        <dl className={styles.row}>
          <dt>Subtotal</dt>
          <dd>
            {paymentOrderDetails.currencySymbol} {paymentOrderDetails.price}
          </dd>
        </dl>
        <dl className={styles.row}>
          <dt>Sales Tax</dt>
          <dd>
            {paymentOrderDetails.currencySymbol} {(tax && tax.formattedTax) || '0.00'}
          </dd>
        </dl>
      </div>

      <div className={styles.separator} />

      <dl className={styles.totalRow}>
        <dt>Total</dt>
        <dd>
          {paymentOrderDetails.currencySymbol} {PaymentUtils.getTotalPrice(paymentOrderDetails.price, tax?.formattedTax || undefined)}
        </dd>
      </dl>
    </div>
  )
}
