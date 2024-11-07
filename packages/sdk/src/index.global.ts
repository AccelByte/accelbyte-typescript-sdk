/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

// This needs to be imported otherwise the polyfill will appear after all of the code bundles.
import * as AccelByteSDK from './index'
import './polyfills/browser'

import * as abValidator from '@accelbyte/validator'
import axios from 'axios'
import buffer from 'buffer'
import cryptojs from 'crypto-js'
import platform from 'platform'
import * as uuid from 'uuid'
import validator from 'validator'
import * as zod from 'zod'

// @ts-ignore
window.AccelByteSDKDependencies = {
  abValidator,
  axios,
  buffer,
  cryptojs,
  platform,
  uuid,
  validator,
  zod
}

// @ts-ignore
window.AccelByteSDK = AccelByteSDK