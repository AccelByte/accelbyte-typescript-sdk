/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformDomainDeleteRequest = z.object({ domain: z.string() })

export interface PlatformDomainDeleteRequest extends z.TypeOf<typeof PlatformDomainDeleteRequest> {}
