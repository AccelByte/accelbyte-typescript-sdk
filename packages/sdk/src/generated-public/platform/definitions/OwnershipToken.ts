/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OwnershipToken = z.object({ ownershipToken: z.string().nullish() })

export type OwnershipToken = z.TypeOf<typeof OwnershipToken>
