/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TemplateCompact } from './TemplateCompact.js'

export const TemplateCompactArray = z.array(TemplateCompact)

export interface TemplateCompactArray extends z.TypeOf<typeof TemplateCompactArray> {}
