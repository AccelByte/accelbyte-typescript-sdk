/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateAlreadyUsedType = z.enum([CommonValidationErrorType.enum.alreadyUsed])
export type ValidateAlreadyUsedType = z.infer<typeof ValidateAlreadyUsedType>

export const validateAlreadyUsed = (list: string[], value: string) => {
  if (list.includes(value) && value) {
    return ValidateAlreadyUsedType.enum.alreadyUsed
  }
  return null
}
