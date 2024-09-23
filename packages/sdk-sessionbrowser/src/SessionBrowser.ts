/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { SessionAdminApi } from './generated-admin/SessionAdminApi.js'
import { SessionApi } from './generated-public/SessionApi.js'

console.log(`${name}@${version}`)

const apis = {
  SessionAdminApi,
  SessionApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const SessionBrowser = apis
