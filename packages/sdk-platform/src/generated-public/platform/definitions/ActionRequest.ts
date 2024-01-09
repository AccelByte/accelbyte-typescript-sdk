/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OperationRequest } from './OperationRequest.js'

export const ActionRequest = z.object({ operations: z.array(OperationRequest).nullish(), userId: z.string().nullish() })

export interface ActionRequest extends z.TypeOf<typeof ActionRequest> {}
