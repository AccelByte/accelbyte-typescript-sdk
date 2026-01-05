/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { CachingAdminApi } from './generated-admin/CachingAdminApi.js'
import { DlcAdminApi } from './generated-admin/DlcAdminApi.js'
import { DownloaderAdminApi } from './generated-admin/DownloaderAdminApi.js'
import { GdprAdminApi } from './generated-admin/GdprAdminApi.js'
import { MultipartUploaderAdminApi } from './generated-admin/MultipartUploaderAdminApi.js'
import { ReleaseNoteAdminApi } from './generated-admin/ReleaseNoteAdminApi.js'
import { UploaderV1AdminApi } from './generated-admin/UploaderV1AdminApi.js'
import { UploaderV2AdminApi } from './generated-admin/UploaderV2AdminApi.js'
import { UploaderV3AdminApi } from './generated-admin/UploaderV3AdminApi.js'
import { UtilityAdminApi } from './generated-admin/UtilityAdminApi.js'
import { CachingApi } from './generated-public/CachingApi.js'
import { DlcApi } from './generated-public/DlcApi.js'
import { DownloaderApi } from './generated-public/DownloaderApi.js'
import { DrmApi } from './generated-public/DrmApi.js'

console.log(`${name}@${version}`)

const apis = {
  DlcAdminApi,
  UploaderV3AdminApi,
  CachingAdminApi,
  GdprAdminApi,
  UtilityAdminApi,
  UploaderV1AdminApi,
  MultipartUploaderAdminApi,
  UploaderV2AdminApi,
  DownloaderAdminApi,
  ReleaseNoteAdminApi,
  DownloaderApi,
  DlcApi,
  DrmApi,
  CachingApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Buildinfo = apis
