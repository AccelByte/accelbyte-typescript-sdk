/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateFileLocationRequest = z.object({ fileExtension: z.string().nullish(), fileLocation: z.string() })

export interface UpdateFileLocationRequest extends z.TypeOf<typeof UpdateFileLocationRequest> {}
