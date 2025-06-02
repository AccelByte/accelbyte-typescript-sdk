/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AccountEventsAdminApi } from './generated-admin/AccountEventsAdminApi.js'
import { AccountHistoryAdminApi } from './generated-admin/AccountHistoryAdminApi.js'
import { AuditLogCommentAdminApi } from './generated-admin/AuditLogCommentAdminApi.js'
import { AuditLogsAdminApi } from './generated-admin/AuditLogsAdminApi.js'
import { AccountHistoryApi } from './generated-public/AccountHistoryApi.js'

console.log(`${name}@${version}`)

const apis = {
  AuditLogsAdminApi,
  AccountHistoryAdminApi,
  AuditLogCommentAdminApi,
  AccountEventsAdminApi,
  AccountHistoryApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Audit = apis
