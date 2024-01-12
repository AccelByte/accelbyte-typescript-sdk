/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BuildAvailability } from './BuildAvailability.js'

export const BuildAvailabilityArray = z.array(BuildAvailability)

export interface BuildAvailabilityArray extends z.TypeOf<typeof BuildAvailabilityArray> {}
