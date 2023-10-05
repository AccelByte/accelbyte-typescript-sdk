/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ContentSnapshot = z.object({ fileExtension: z.string(), name: z.string(), url: z.string() })

export interface ContentSnapshot extends z.TypeOf<typeof ContentSnapshot> {}
