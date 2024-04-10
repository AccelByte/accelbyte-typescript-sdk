/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateItemTypeReq = z.object({ name: z.string() })

export interface CreateItemTypeReq extends z.TypeOf<typeof CreateItemTypeReq> {}
