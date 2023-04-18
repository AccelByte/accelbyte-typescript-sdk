/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { AlertValue } from '@od-shared/models/Alert'
import React from 'react'

interface Props {
  title: string
  alert?: AlertValue | null
  withAlert?: boolean
  onDismissAlert?: () => void
  description: React.ReactNode
}

export const PageContent = (props: React.PropsWithChildren<Props>) => {
  const { title, alert, withAlert, description, children, onDismissAlert } = props
  return (
    <>
      <div className="titleWrapper">
        <p className="title">{title}</p>
        {!!alert && withAlert && (
          <Alert type={alert.type} onDismiss={onDismissAlert} className="text-left">
            {alert.element}
          </Alert>
        )}
        <p className="description">{description}</p>
      </div>
      {children}
    </>
  )
}
