/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AccountProfileConfigAdminApi } from './generated-admin/AccountProfileConfigAdminApi.js'
import { CommonConfigurationAdminApi } from './generated-admin/CommonConfigurationAdminApi.js'
import { EmailSenderApiKeyAdminApi } from './generated-admin/EmailSenderApiKeyAdminApi.js'
import { EmailSenderConfigurationAdminApi } from './generated-admin/EmailSenderConfigurationAdminApi.js'
import { EmailSenderTemplateAdminApi } from './generated-admin/EmailSenderTemplateAdminApi.js'
import { CommonConfigurationApi } from './generated-public/CommonConfigurationApi.js'

console.log(`${name}@${version}`)

const apis = {
  CommonConfigurationAdminApi,
  EmailSenderConfigurationAdminApi,
  AccountProfileConfigAdminApi,
  EmailSenderApiKeyAdminApi,
  EmailSenderTemplateAdminApi,
  CommonConfigurationApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Config = apis
