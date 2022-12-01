/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RegisteredDomain } from './RegisteredDomain'

export const PlatformDomainResponse = z.object({ registeredDomains: z.array(RegisteredDomain) })

export type PlatformDomainResponse = z.TypeOf<typeof PlatformDomainResponse>
