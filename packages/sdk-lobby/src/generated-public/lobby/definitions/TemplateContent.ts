/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TemplateContent = z.object({ draft: z.string(), published: z.string() })

export interface TemplateContent extends z.TypeOf<typeof TemplateContent> {}
