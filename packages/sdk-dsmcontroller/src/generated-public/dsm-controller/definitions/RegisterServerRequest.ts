/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RegisterServerRequest = z.object({ custom_attribute: z.string(), pod_name: z.string() })

export interface RegisterServerRequest extends z.TypeOf<typeof RegisterServerRequest> {}
