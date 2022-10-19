/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformDomainDeleteRequest = z.object({ domain: z.string() })

export type PlatformDomainDeleteRequest = z.TypeOf<typeof PlatformDomainDeleteRequest>
