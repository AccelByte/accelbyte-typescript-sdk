/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PartySessionResponse } from './PartySessionResponse'

export const PartySessionResponseArray = z.array(PartySessionResponse)

export interface PartySessionResponseArray extends z.TypeOf<typeof PartySessionResponseArray> {}
