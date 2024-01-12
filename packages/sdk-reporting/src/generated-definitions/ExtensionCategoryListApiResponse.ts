/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ExtensionCategoryApiResponse } from './ExtensionCategoryApiResponse.js'

export const ExtensionCategoryListApiResponse = z.object({ data: z.array(ExtensionCategoryApiResponse) })

export interface ExtensionCategoryListApiResponse extends z.TypeOf<typeof ExtensionCategoryListApiResponse> {}
