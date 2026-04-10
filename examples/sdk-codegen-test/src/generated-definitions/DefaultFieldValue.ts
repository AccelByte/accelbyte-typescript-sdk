/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DefaultFieldValueValue } from './DefaultFieldValueValue.js'

export const DefaultFieldValue = z.object({ field: z.string(), value: DefaultFieldValueValue })

export interface DefaultFieldValue extends z.TypeOf<typeof DefaultFieldValue> {}
