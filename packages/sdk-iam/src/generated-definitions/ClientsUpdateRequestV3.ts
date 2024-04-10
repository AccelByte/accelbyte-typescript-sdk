/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientUpdateV3Request } from './ClientUpdateV3Request.js'

export const ClientsUpdateRequestV3 = z.object({ clientIds: z.array(z.string()), clientUpdateRequest: ClientUpdateV3Request })

export interface ClientsUpdateRequestV3 extends z.TypeOf<typeof ClientsUpdateRequestV3> {}
