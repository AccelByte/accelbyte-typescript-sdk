/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'

export const IamConfigData = z.object({
  usernameDisabled: z.boolean().default(false),
  uniqueDisplayNameEnabled: z.boolean().default(false),
  mandatoryEmailVerificationEnabled: z.boolean().default(true)
})

export interface IamConfigData extends z.infer<typeof IamConfigData> {}
