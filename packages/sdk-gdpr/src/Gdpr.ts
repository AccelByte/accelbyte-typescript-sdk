/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { ConfigurationAdminApi } from './generated-admin/ConfigurationAdminApi.js'
import { DataDeletionAdminApi } from './generated-admin/DataDeletionAdminApi.js'
import { DataRetrievalAdminApi } from './generated-admin/DataRetrievalAdminApi.js'
import { PlatformAccountClosureClientAdminApi } from './generated-admin/PlatformAccountClosureClientAdminApi.js'
import { PlatformAccountClosureHistoryAdminApi } from './generated-admin/PlatformAccountClosureHistoryAdminApi.js'
import { DataDeletionApi } from './generated-public/DataDeletionApi.js'
import { DataDeletionS2SApi } from './generated-public/DataDeletionS2SApi.js'
import { DataRetrievalApi } from './generated-public/DataRetrievalApi.js'
import { DataRetrievalS2SApi } from './generated-public/DataRetrievalS2SApi.js'

console.log(`${name}@${version}`)

const apis = {
  DataRetrievalAdminApi,
  DataDeletionAdminApi,
  ConfigurationAdminApi,
  PlatformAccountClosureClientAdminApi,
  PlatformAccountClosureHistoryAdminApi,
  DataDeletionApi,
  DataRetrievalS2SApi,
  DataDeletionS2SApi,
  DataRetrievalApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Gdpr = apis
