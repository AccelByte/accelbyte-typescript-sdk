/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const V3ClientUpdateSecretRequest = z.object({ newSecret: z.string() })

export interface V3ClientUpdateSecretRequest extends z.TypeOf<typeof V3ClientUpdateSecretRequest> {}
