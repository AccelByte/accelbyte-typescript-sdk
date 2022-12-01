/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientV3Response } from './ClientV3Response'
import { PaginationV3 } from './PaginationV3'

export const ClientsV3Response = z.object({ data: z.array(ClientV3Response), paging: PaginationV3 })

export type ClientsV3Response = z.TypeOf<typeof ClientsV3Response>
