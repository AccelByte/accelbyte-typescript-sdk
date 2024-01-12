/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BuildIdVersion } from './BuildIdVersion.js'

export const BuildIdVersionArray = z.array(BuildIdVersion)

export interface BuildIdVersionArray extends z.TypeOf<typeof BuildIdVersionArray> {}
