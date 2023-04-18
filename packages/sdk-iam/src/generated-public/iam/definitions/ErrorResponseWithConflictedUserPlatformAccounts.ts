/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConflictedUserPlatformAccounts } from './ConflictedUserPlatformAccounts'

export const ErrorResponseWithConflictedUserPlatformAccounts = z.object({
  errorCode: z.number().int(),
  errorMessage: z.string(),
  messageVariables: ConflictedUserPlatformAccounts.nullish()
})

export interface ErrorResponseWithConflictedUserPlatformAccounts extends z.TypeOf<typeof ErrorResponseWithConflictedUserPlatformAccounts> {}
