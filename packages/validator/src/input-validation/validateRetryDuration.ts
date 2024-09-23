/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateRetryDurationErrorType = z.enum([
  CommonValidationErrorType.enum.emptyRetryDuration,
  CommonValidationErrorType.enum.exceedRetryDuration
])
export type ValidateRetryDurationErrorType = z.infer<typeof ValidateRetryDurationErrorType>

const MAX_RETRY_LIMIT = 576000 // 400 day in minutes

export const validateRetryDuration = (value: number | null) => {
  if (!value || value < 1) return ValidateRetryDurationErrorType.enum.emptyRetryDuration

  if (value > MAX_RETRY_LIMIT) {
    return ValidateRetryDurationErrorType.enum.exceedRetryDuration
  }

  return null
}
