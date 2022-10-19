/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BuildAvailability } from './BuildAvailability'

export const BuildAvailabilityArray = z.array(BuildAvailability)

export type BuildAvailabilityArray = z.TypeOf<typeof BuildAvailabilityArray>
