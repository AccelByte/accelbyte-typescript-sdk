/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DefaultLaunchProfile = z.object({
  defaultClientId: z.string().nullish(),
  defaultEntryPoint: z.string().nullish(),
  defaultNamespace: z.string().nullish(),
  defaultRedirectURI: z.string().nullish()
})

export interface DefaultLaunchProfile extends z.TypeOf<typeof DefaultLaunchProfile> {}
