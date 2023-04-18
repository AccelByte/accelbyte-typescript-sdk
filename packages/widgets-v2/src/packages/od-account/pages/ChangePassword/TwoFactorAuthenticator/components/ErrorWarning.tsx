/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { WarningIcon } from '@od-components/components/Icons/WarningIcon'
import React from 'react'
import './ErrorWarning.scss'

interface Props {
  message: string
  onRetry?: () => void
  onRetryLabel?: string
}

export const ErrorWarning = (props: Props) => {
  const { message, onRetry, onRetryLabel } = props

  return (
    <div className="boxQRCode flex flex-col items-center justify-center bg-white text-center text-sm text-[color:rgb(var(--od-rgb-text),0.65)]">
      <WarningIcon outline className="errorWarning" />
      <div>{message}</div>
      <div className="cursor-pointer text-blue-50" onClick={onRetry}>
        {onRetryLabel}
      </div>
    </div>
  )
}
