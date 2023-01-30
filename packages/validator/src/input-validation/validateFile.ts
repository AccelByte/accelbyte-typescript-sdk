/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateFileErrorType = z.enum([
  CommonValidationErrorType.enum.empty,
  CommonValidationErrorType.enum.invalidFileExtensions,
  CommonValidationErrorType.enum.exceedMaximumFileSize
])
export type ValidateFileErrorType = z.infer<typeof ValidateFileErrorType>

export interface ValidateFileOption {
  isRequired?: boolean
  acceptedFileExtensions?: string[]
  maxFileSize?: number
}

export const validateFile = (file: File | null, { isRequired = true, acceptedFileExtensions, maxFileSize }: ValidateFileOption = {}) => {
  const fileExtension = file ? `.${file.name.split('.').pop()}` : ''
  const fileSize = file ? file.size : 0

  if (isRequired && !file) {
    return ValidateFileErrorType.enum.empty
  }

  if (acceptedFileExtensions && (isEmpty(fileExtension) || acceptedFileExtensions.indexOf(fileExtension) === -1)) {
    return ValidateFileErrorType.enum.invalidFileExtensions
  }

  if (maxFileSize && fileSize > maxFileSize) {
    return ValidateFileErrorType.enum.exceedMaximumFileSize
  }

  return null
}
