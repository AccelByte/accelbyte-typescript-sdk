/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { PaymentProviderConfigInfo } from './PaymentProviderConfigInfo.js'

export const PaymentProviderConfigPagingSlicedResult = z.object({ data: z.array(PaymentProviderConfigInfo), paging: Paging.nullish() })

export interface PaymentProviderConfigPagingSlicedResult extends z.TypeOf<typeof PaymentProviderConfigPagingSlicedResult> {}
