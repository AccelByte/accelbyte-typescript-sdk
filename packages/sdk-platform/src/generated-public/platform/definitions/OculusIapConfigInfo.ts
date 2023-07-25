/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OculusIapConfigInfo = z.object({ appId: z.string().nullish(), appSecret: z.string().nullish(), namespace: z.string() })

export interface OculusIapConfigInfo extends z.TypeOf<typeof OculusIapConfigInfo> {}
