/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OculusIapConfigRequest = z.object({ appId: z.string(), appSecret: z.string().nullish() })

export interface OculusIapConfigRequest extends z.TypeOf<typeof OculusIapConfigRequest> {}
