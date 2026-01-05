/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Action } from './Action.js'
import { ObjectType } from './ObjectType.js'

export const Category = z.object({
  actions: z.array(Action),
  category: z.string(),
  categoryDisplayName: z.string(),
  objectTypes: z.array(ObjectType)
})

export interface Category extends z.TypeOf<typeof Category> {}
