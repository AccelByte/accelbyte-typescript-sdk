/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ObjectType = z.object({ objectType: z.string(), objectTypeDisplayName: z.string() })

export interface ObjectType extends z.TypeOf<typeof ObjectType> {}
