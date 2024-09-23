/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateCustomClassErrorType = z.enum([
  CommonValidationErrorType.enum.invalidCustomClassName,
  CommonValidationErrorType.enum.invalidElementSelector,
  CommonValidationErrorType.enum.invalidCSS,
  CommonValidationErrorType.enum.invalidHTMLCSS,
  CommonValidationErrorType.enum.invalidHTML,
  CommonValidationErrorType.enum.elementSelectorNotExist,
  CommonValidationErrorType.enum.customClassNotExist
])

export type ValidateCustomClassErrorType = z.infer<typeof ValidateCustomClassErrorType>
