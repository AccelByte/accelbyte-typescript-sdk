/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { DangerIcon } from '@od-components/components/Icons/DangerIcon'
import { HelpIcon } from '@od-components/components/Icons/HelpIcon'
import { InfoIcon } from '@od-components/components/Icons/InfoIcon'
import { AlertType } from '@od-shared/models/Alert'
import classNames from 'classnames'
import React from 'react'
import { AlertCircle, CheckCircle, X } from 'react-feather'
import styles from './FloatingAlert.module.scss'

interface Props {
  className?: string
  type?: AlertType
  children: React.ReactNode
  onDismiss?: () => unknown
}

export class FloatingAlert extends React.Component<Props> {
  static defaultProps = {}

  constructor(props: Props) {
    super(props)
  }

  render() {
    const { className, children, type, onDismiss } = this.props
    return (
      <div className={classNames(styles.floatingAlert, className, type && styles[type])} role="alert">
        <div className={styles.messageContainer}>
          <span className={styles.icon}>{getAlertIcon(type)}</span>
          <span className={styles.message}>{children}</span>
        </div>
        {!!onDismiss && (
          <span
            className={styles.close}
            onClick={() => {
              if (onDismiss) onDismiss()
            }}>
            <X size="1em" />
          </span>
        )}
      </div>
    )
  }
}

export function getAlertIcon(alertType?: keyof typeof AlertType) {
  switch (alertType) {
    case AlertType.success:
      return <CheckCircle />
    case AlertType.danger:
      return <DangerIcon />
    case AlertType.warning:
      return <AlertCircle />
    case AlertType.info:
      return <InfoIcon />
    case AlertType.help:
      return <HelpIcon />
    default:
      return null
  }
}
