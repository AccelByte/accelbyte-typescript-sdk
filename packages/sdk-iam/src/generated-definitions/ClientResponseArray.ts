/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientResponse } from './ClientResponse.js'

export const ClientResponseArray = z.array(ClientResponse)

export interface ClientResponseArray extends z.TypeOf<typeof ClientResponseArray> {}
