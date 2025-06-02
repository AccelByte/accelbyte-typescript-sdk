/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeleteInventoryReq = z.object({ message: z.string() })

export interface DeleteInventoryReq extends z.TypeOf<typeof DeleteInventoryReq> {}
