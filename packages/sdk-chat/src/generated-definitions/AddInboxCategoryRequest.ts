/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CategoryHook } from './CategoryHook.js'

export const AddInboxCategoryRequest = z.object({
  enabled: z.boolean(),
  expiresIn: z.number().int(),
  hook: CategoryHook.nullish(),
  jsonSchema: z.record(z.any()).nullish(),
  name: z.string(),
  saveInbox: z.boolean(),
  sendNotification: z.boolean()
})

export interface AddInboxCategoryRequest extends z.TypeOf<typeof AddInboxCategoryRequest> {}
