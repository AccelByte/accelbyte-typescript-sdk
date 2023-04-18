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
import { Button, ButtonStyle, ButtonType } from '../Button/Button'
import styles from './Alert.module.scss'

export interface AlertProps {
  className?: string
  type?: keyof typeof AlertType
  // There are 2 ways to use `children`:
  // 1. Pass JSX.
  // 2. Pass render function. This is usually for children elements that are stored in the state and need to be re-rendered
  //    when it's active on the DOM (e.g. translation changes).
  children: React.ReactNode | (() => React.ReactNode)
  onDismiss?: () => unknown
  dataQa?: string | null
  dismissDataQa?: string | null
}

export class Alert extends React.Component<AlertProps> {
  static defaultProps = {}

  static className = {
    withoutBackground: styles.withoutBackground
  }

  render() {
    const { className, children, type, onDismiss, dataQa = null, dismissDataQa = null } = this.props
    return (
      <div className={classNames(styles.alert, className, type && styles[type])} role="alert" data-qa-id={dataQa}>
        <div className={styles.messageContainer}>
          <span className={styles.icon}>{getAlertIcon(type)}</span>
          <span className={styles.message}>{typeof children === 'function' ? children() : children}</span>
        </div>
        {!!onDismiss && (
          <Button
            className={styles.close}
            data-qa-id={dismissDataQa}
            buttonStyle={ButtonStyle.NONE}
            buttonType={ButtonType.PLAIN}
            onClick={() => {
              if (onDismiss) onDismiss()
            }}>
            <X size="1em" />
          </Button>
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
