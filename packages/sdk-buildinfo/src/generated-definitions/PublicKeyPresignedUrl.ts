/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicKeyPresignedUrl = z.object({ namespace: z.string().nullish(), url: z.string().nullish() })

export interface PublicKeyPresignedUrl extends z.TypeOf<typeof PublicKeyPresignedUrl> {}
