/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { EnabledFactorsResponseV4 } from '@accelbyte/sdk-iam'

export interface ConfirmDialog {
  title: string
  message: React.ReactNode
  onConfirm: () => Promise<void>
  onCancel: () => void
  isOpen: boolean
  cancelBtnLabel?: string
  confirmBtnLabel?: string
}

export interface FactorDialogProps {
  onSuccess: () => void
  onError: (error: Error | unknown) => void
  enabledFactors: EnabledFactorsResponseV4 | null
  onUpdated: () => void
  setConfirmDialogData: (dialogData: ConfirmDialog) => void
  closeConfirmDialog: () => void
  isPreviewMode?: boolean
}

export interface BackupCodeError {
  message: React.ReactNode
  retryLabel: string
  onRetry: () => void
}
