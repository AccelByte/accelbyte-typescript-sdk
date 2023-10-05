/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContentSnapshot } from './ContentSnapshot.js'

export const ContentVersionResponse = z.object({ content: ContentSnapshot, id: z.string(), updatedAt: z.string(), version: z.string() })

export interface ContentVersionResponse extends z.TypeOf<typeof ContentVersionResponse> {}
