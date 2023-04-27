/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RegisteredDomain } from './RegisteredDomain.js'

export const PlatformDomainResponse = z.object({ registeredDomains: z.array(RegisteredDomain) })

export interface PlatformDomainResponse extends z.TypeOf<typeof PlatformDomainResponse> {}
