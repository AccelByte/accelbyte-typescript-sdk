/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ServiceConfigDto = z.object({ protocol: z.enum(['GRPC']), url: z.string() })

export interface ServiceConfigDto extends z.TypeOf<typeof ServiceConfigDto> {}
