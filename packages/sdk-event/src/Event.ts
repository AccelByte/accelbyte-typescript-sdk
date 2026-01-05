/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { EventV2AdminApi } from './generated-admin/EventV2AdminApi.js'
import { EventApi } from './generated-public/EventApi.js'
import { EventDescriptionsApi } from './generated-public/EventDescriptionsApi.js'
import { EventRegistryApi } from './generated-public/EventRegistryApi.js'
import { EventV2Api } from './generated-public/EventV2Api.js'
import { UserInformationApi } from './generated-public/UserInformationApi.js'

console.log(`${name}@${version}`)

const apis = {
  EventV2AdminApi,
  EventDescriptionsApi,
  EventRegistryApi,
  EventApi,
  UserInformationApi,
  EventV2Api,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Event = apis
