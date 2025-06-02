/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AdminAdminApi } from './generated-admin/AdminAdminApi.js'
import { PublicApi } from './generated-public/PublicApi.js'
import { ServerApi } from './generated-public/ServerApi.js'

console.log(`${name}@${version}`)

const apis = {
  AdminAdminApi,
  PublicApi,
  ServerApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Qosmanager = apis
