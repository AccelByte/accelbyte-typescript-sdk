/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { WarningIcon } from '@od-components/components/Icons/WarningIcon'
import * as React from 'react'
import './ErrorGenerateCode.scss'

interface Props {
  message: React.ReactNode
  onRetry: () => void
  retryLabel: string
}

export const ErrorGenerateCode = (props: Props) => {
  const { onRetry, message, retryLabel } = props

  return (
    <div className="errorGenerateCode flex h-64 flex-col items-center justify-center text-sm">
      <WarningIcon outline className="iconError mb-4 fill-current text-[color:rgb(var(--od-rgba-text))]" />
      <div className="mb-4 text-center">{message}</div>
      <div className="cursor-pointer text-blue-50" onClick={onRetry}>
        {retryLabel}
      </div>
    </div>
  )
}
