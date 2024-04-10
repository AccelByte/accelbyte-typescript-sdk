/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientTemplate } from './ClientTemplate.js'

export const ListTemplatesResponse = z.object({ clientTemplates: z.array(ClientTemplate) })

export interface ListTemplatesResponse extends z.TypeOf<typeof ListTemplatesResponse> {}
