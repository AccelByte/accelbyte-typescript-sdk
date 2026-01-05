/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission.js'

export const ErrorEntity = z.object({
  devStackTrace: z.string().nullish(),
  errorCode: z.number().int(),
  errorMessage: z.string(),
  messageVariables: z.record(z.string()).nullish(),
  requiredPermission: Permission.nullish()
})

export interface ErrorEntity extends z.TypeOf<typeof ErrorEntity> {}
