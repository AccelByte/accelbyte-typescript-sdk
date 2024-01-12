/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { webcrypto } from 'crypto'

if (!global.crypto) {
  global.crypto = webcrypto as unknown as Crypto
}
