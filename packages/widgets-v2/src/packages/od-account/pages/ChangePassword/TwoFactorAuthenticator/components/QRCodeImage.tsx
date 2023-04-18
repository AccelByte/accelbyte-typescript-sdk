/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import Qrious from 'qrious'
import React from 'react'
import { ErrorWarning } from './ErrorWarning'

interface Props {
  qrValue?: string
  onRetry?: () => void
}

export const QRCodeImage = (props: Props) => {
  const { qrValue, onRetry } = props

  const generateQRCodeImageURL = () => {
    const qr = new Qrious({ value: qrValue })
    return qr.toDataURL()
  }

  if (!qrValue) {
    return <ErrorWarning message="Failed to load QR code" onRetryLabel="Try Again" onRetry={onRetry} />
  }

  return (
    <div className="boxQRCode bg-white">
      <img alt="2fa-qr-code" src={generateQRCodeImageURL()} loading="lazy" />
    </div>
  )
}
