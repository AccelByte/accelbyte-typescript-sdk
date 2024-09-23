/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidatePageTitleErrorType = z.enum([
  CommonValidationErrorType.enum.exceedPageTitleLength,
  CommonValidationErrorType.enum.emptyPageTitle
])
export type ValidatePageTitleErrorType = z.infer<typeof ValidatePageTitleErrorType>

export const validatePageTitle = (value: string, maxLength: number) => {
  if (isEmpty(value)) return ValidatePageTitleErrorType.enum.emptyPageTitle

  if (value.length > maxLength) return ValidatePageTitleErrorType.enum.exceedPageTitleLength

  return null
}
