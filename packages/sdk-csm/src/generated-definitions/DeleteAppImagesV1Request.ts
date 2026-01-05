/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeleteAppImagesV1Request = z.object({ imageTags: z.array(z.string()) })

export interface DeleteAppImagesV1Request extends z.TypeOf<typeof DeleteAppImagesV1Request> {}
