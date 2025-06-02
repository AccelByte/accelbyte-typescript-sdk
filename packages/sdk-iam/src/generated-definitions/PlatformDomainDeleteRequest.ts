/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformDomainDeleteRequest = z.object({ domain: z.string(), ssoGroups: z.array(z.string()) })

export interface PlatformDomainDeleteRequest extends z.TypeOf<typeof PlatformDomainDeleteRequest> {}
