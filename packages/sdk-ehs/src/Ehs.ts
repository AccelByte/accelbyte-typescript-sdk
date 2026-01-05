/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { UtilityAdminApi } from './generated-admin/UtilityAdminApi.js'
import { AccessApi } from './generated-public/AccessApi.js'

console.log(`${name}@${version}`)

const apis = {
  UtilityAdminApi,
  AccessApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Ehs = apis
