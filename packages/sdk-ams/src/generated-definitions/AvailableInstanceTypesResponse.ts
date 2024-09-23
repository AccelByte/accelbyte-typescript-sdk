/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InstanceTypeDescriptionResponse } from './InstanceTypeDescriptionResponse.js'

export const AvailableInstanceTypesResponse = z.object({ availableInstanceTypes: z.array(InstanceTypeDescriptionResponse) })

export interface AvailableInstanceTypesResponse extends z.TypeOf<typeof AvailableInstanceTypesResponse> {}
