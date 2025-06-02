/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InstanceType } from './InstanceType.js'

export const InstanceTypesResponse = z.object({ availableInstanceTypes: z.array(InstanceType) })

export interface InstanceTypesResponse extends z.TypeOf<typeof InstanceTypesResponse> {}
