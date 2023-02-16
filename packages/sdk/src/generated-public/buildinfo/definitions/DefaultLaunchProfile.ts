/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DefaultLaunchProfile = z.object({
  defaultEntryPoint: z.string().nullish(),
  defaultClientId: z.string().nullish(),
  defaultRedirectURI: z.string().nullish()
})

export interface DefaultLaunchProfile extends z.TypeOf<typeof DefaultLaunchProfile> {}
