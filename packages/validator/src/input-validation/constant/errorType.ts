/*
 * Copyright (c) 2019-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'

export type CommonValidationErrorType = z.infer<typeof CommonValidationErrorType>
export const CommonValidationErrorType = z.enum([
  'empty',
  'lessThanLengthLimit',
  'exceedLengthLimit',
  'invalidFormat',
  'lessThanMinimumValue',
  'exceedMaximumValue',
  'invalidValue',
  'notContainsLetterAndNumber',
  'notContainsUpperCaseAndLowerCase',
  'containsTwoCharactersInArrow',
  'containsBadWords',
  'containsForbiddenWords',
  'containsProfanityWords',
  'containsDecimal',
  'invalidFileExtensions',
  'exceedMaximumFileSize',
  'alreadyUsed',
  'nameIsNotAllowed',
  'exceedPageTitleLength',
  'emptyPageTitle',
  'emptyRetryDuration',
  'exceedRetryDuration',
  'invalidElementSelector',
  'elementSelectorNotExist',
  'customClassNotExist',
  'invalidCustomClassName',
  'invalidHTML',
  'invalidHTMLCSS',
  'invalidCSS'
])

export type ThrownErrorType = z.infer<typeof ThrownErrorType>
export const ThrownErrorType = z.enum(['invalidOption'])
