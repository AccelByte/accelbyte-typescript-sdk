/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GenerateContentUploadUrlRequest = z.object({ contentType: z.string().nullish(), fileExtension: z.string().nullish() })

export interface GenerateContentUploadUrlRequest extends z.TypeOf<typeof GenerateContentUploadUrlRequest> {}
