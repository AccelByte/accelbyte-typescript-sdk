/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GrpcMethod } from './GrpcMethod.js'

export const GrpcService = z.object({ methods: z.array(GrpcMethod), name: z.string() })

export interface GrpcService extends z.TypeOf<typeof GrpcService> {}
