/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Attribute = z.object({ name: z.string().nullish(), value: z.string().nullish() })

export interface Attribute extends z.TypeOf<typeof Attribute> {}
