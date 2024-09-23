/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DnsData } from './DnsData.js'

export const Dns = z.object({ dkim1: DnsData, dkim2: DnsData, mail_cname: DnsData })

export interface Dns extends z.TypeOf<typeof Dns> {}
