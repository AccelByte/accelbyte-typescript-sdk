/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConsumeItem } from './ConsumeItem.js'
import { CreateItem } from './CreateItem.js'
import { RemoveItem } from './RemoveItem.js'
import { UpdateItem } from './UpdateItem.js'

export const Operation = z.object({
  consumeItems: z.array(ConsumeItem),
  createItems: z.array(CreateItem),
  removeItems: z.array(RemoveItem),
  targetUserId: z.string(),
  updateItems: z.array(UpdateItem)
})

export interface Operation extends z.TypeOf<typeof Operation> {}
