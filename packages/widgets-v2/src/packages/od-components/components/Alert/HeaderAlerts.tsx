/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import { AlertValue, AlertValueWithId } from '@od-shared/models/Alert'
import './HeaderAlerts.scss'
import { FloatingAlert } from './FloatingAlert'
import { useHeaderAlerts } from '~/hooks/header/useHeaderAlerts'

interface Props {
  // The className for the container. This className is expected to
  // have the syntax `@extend %commonAlertsContainer` so it can "extend" the styles
  // instead of overriding it. That way, we can still customize the alerts' container className,
  // which will be useful when selecting it in Odin Editor. For example, we may have different
  // alerts container, such as (1) header alerts container, (2) account page alerts container, etc.
  className?: string
}

const TIME_OUT = 4000

export const HeaderAlerts = (props: Props) => {
  const [headerAlerts, setHeaderAlerts] = useState<Set<AlertValueWithId>>(new Set())
  const { state, mutations } = useHeaderAlerts()

  const convertAlertToAlertWithId = (alert: AlertValue): AlertValueWithId => {
    return { ...alert, id: shortid() }
  }

  useEffect(() => {
    addAlerts(Array.from(mutations.popAll()).map(convertAlertToAlertWithId))
  }, [])

  const previousAlertsLength = useRef<typeof state.alerts.length>(0)
  useEffect(() => {
    // Skip if previous alerts length is equal or more then current alert length.
    // popAlertFromStore should be trigger if there is new alert pushed on store
    if (previousAlertsLength.current >= state.alerts.length) return

    popAlertFromStore()
    previousAlertsLength.current = state.alerts.length
  }, [state.alerts.length])

  const addAlerts = (alertWithIds: AlertValueWithId[]) => {
    for (const alert of alertWithIds) {
      headerAlerts.add(alert)
      if (alert.autoDismiss) {
        setTimeout(() => {
          removeAlert(alert)
        }, TIME_OUT)
      }
    }
    setHeaderAlerts(new Set(headerAlerts))
  }

  const removeAlert = (alertWithId: AlertValueWithId) => {
    headerAlerts.delete(alertWithId)
    setHeaderAlerts(new Set(headerAlerts))
  }

  const popAlertFromStore = () => {
    const alert = mutations.pop()
    if (alert) {
      addAlerts([convertAlertToAlertWithId(alert)])
    }
  }

  const renderAlerts = (): React.ReactNode[] => {
    return Array.from(headerAlerts)
      .map(accountAlert => (
        <FloatingAlert
          key={accountAlert.id}
          type={accountAlert.type}
          onDismiss={() => {
            headerAlerts.delete(accountAlert)
            setHeaderAlerts(new Set())
            if (accountAlert.dismiss) {
              accountAlert.dismiss()
            }
          }}>
          {accountAlert.element}
        </FloatingAlert>
      ))
      .slice(-1)
  }

  const { className = 'commonAlertsContainer' } = props
  return <div className={className}>{renderAlerts()}</div>
}
