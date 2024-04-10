/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientSelectedGroup = z.object({ groupId: z.string(), selectedActions: z.array(z.number().int()) })

export interface ClientSelectedGroup extends z.TypeOf<typeof ClientSelectedGroup> {}
