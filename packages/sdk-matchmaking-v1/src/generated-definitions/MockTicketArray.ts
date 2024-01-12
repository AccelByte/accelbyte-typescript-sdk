/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MockTicket } from './MockTicket.js'

export const MockTicketArray = z.array(MockTicket)

export interface MockTicketArray extends z.TypeOf<typeof MockTicketArray> {}
