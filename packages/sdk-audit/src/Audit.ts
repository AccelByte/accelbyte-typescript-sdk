/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AccountHistoryAdminApi } from './generated-admin/AccountHistoryAdminApi.js'
import { AuditLogsAdminApi } from './generated-admin/AuditLogsAdminApi.js'
import { AccountHistoryApi } from './generated-public/AccountHistoryApi.js'

console.log(`${name}@${version}`)

const apis = {
  AuditLogsAdminApi,
  AccountHistoryAdminApi,
  AccountHistoryApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Audit = apis
