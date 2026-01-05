/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GrpcService } from './GrpcService.js'

export const GetGrpcReflectionInfo = z.object({ services: z.array(GrpcService) })

export interface GetGrpcReflectionInfo extends z.TypeOf<typeof GetGrpcReflectionInfo> {}
