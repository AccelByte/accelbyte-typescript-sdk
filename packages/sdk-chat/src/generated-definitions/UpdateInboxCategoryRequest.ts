/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CategoryHook } from './CategoryHook.js'

export const UpdateInboxCategoryRequest = z.object({
  enabled: z.boolean(),
  expiresIn: z.number().int(),
  hook: CategoryHook,
  jsonSchema: z.record(z.any()).nullish(),
  saveInbox: z.boolean(),
  sendNotification: z.boolean()
})

export interface UpdateInboxCategoryRequest extends z.TypeOf<typeof UpdateInboxCategoryRequest> {}
