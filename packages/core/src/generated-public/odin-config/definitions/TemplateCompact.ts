/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TemplateCompact = z.object({ namespace: z.string(), template: z.string() })

export type TemplateCompact = z.TypeOf<typeof TemplateCompact>
