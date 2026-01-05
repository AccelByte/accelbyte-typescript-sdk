/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateInventoryReq = z.object({ inventoryConfigurationCode: z.string(), userId: z.string() })

export interface CreateInventoryReq extends z.TypeOf<typeof CreateInventoryReq> {}
