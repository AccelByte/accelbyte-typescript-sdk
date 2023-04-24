/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Config } from './Config'

export const Configs = z.record(Config)

export interface Configs extends z.TypeOf<typeof Configs> {}
