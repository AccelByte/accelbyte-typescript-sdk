/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Config } from './Config'

export const Template = z.object({ configs: z.record(Config), namespace: z.string(), template: z.string(), version: z.number().int() })

export type Template = z.TypeOf<typeof Template>
