/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { V1AdminApi } from './generated-admin/V1AdminApi.js'
import { TicketV1Api } from './generated-public/TicketV1Api.js'

console.log(`${name}@${version}`)

const apis = {
  V1AdminApi,
  TicketV1Api,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const LoginQueue = apis
