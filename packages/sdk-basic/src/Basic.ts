/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AnonymizationAdminApi } from './generated-admin/AnonymizationAdminApi.js'
import { ConfigAdminApi } from './generated-admin/ConfigAdminApi.js'
import { FileUploadAdminApi } from './generated-admin/FileUploadAdminApi.js'
import { MiscAdminApi } from './generated-admin/MiscAdminApi.js'
import { NamespaceAdminApi } from './generated-admin/NamespaceAdminApi.js'
import { UserProfileAdminApi } from './generated-admin/UserProfileAdminApi.js'
import { FileUploadApi } from './generated-public/FileUploadApi.js'
import { MiscApi } from './generated-public/MiscApi.js'
import { NamespaceApi } from './generated-public/NamespaceApi.js'
import { UserProfileApi } from './generated-public/UserProfileApi.js'

console.log(`${name}@${version}`)

const apis = {
  NamespaceAdminApi,
  ConfigAdminApi,
  MiscAdminApi,
  UserProfileAdminApi,
  FileUploadAdminApi,
  AnonymizationAdminApi,
  MiscApi,
  NamespaceApi,
  UserProfileApi,
  FileUploadApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Basic = apis
