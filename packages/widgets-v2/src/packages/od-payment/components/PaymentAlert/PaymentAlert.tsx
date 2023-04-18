/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { getAlertIcon } from '@od-components/components/Alert/Alert'
import { Button, ButtonFontSize, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { AlertType } from '@od-shared/models/Alert'
import classNames from 'classnames'
import React from 'react'
import styles from './PaymentAlert.module.scss'

interface Props {
  className?: string
  type: keyof typeof AlertType
  message: string
  onRetry?: () => void
  retryText?: string
}

export const PaymentAlert = ({ className, message, type, retryText, onRetry }: Props) => {
  return (
    <div className={classNames(styles.paymentAlert, className)}>
      <div className={styles.message}>
        <div
          className={classNames(styles.icon, {
            [styles.warning!]: type === AlertType.warning,
            [styles.danger!]: type === AlertType.danger,
            [styles.success!]: type === AlertType.success,
            [styles.info!]: type === AlertType.info,
            [styles.help!]: type === AlertType.help
          })}>
          {getAlertIcon(type)}
        </div>
        {message}
      </div>
      {(!!retryText || !!onRetry) && (
        <div className={styles.retry}>
          <Button
            className="button"
            onClick={onRetry}
            buttonStyle={ButtonStyle.PRIMARY}
            buttonFontSize={ButtonFontSize.SMALL}
            buttonType={ButtonType.FLAT}>
            {retryText || 'Retry'}
          </Button>
        </div>
      )}
    </div>
  )
}
