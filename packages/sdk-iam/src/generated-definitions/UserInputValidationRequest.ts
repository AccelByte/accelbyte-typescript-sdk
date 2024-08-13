/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserInputValidationRequest = z.object({
  displayName: z.string().nullish(),
  password: z.string().nullish(),
  uniqueDisplayName: z.string().nullish(),
  username: z.string().nullish()
})

export interface UserInputValidationRequest extends z.TypeOf<typeof UserInputValidationRequest> {}
