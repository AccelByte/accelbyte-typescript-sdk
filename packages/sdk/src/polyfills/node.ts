/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { webcrypto } from 'crypto'
import WebSocket from 'ws'

if (!global.crypto) {
  global.crypto = webcrypto as unknown as Crypto
}

if (!global.WebSocket) {
  global.WebSocket = WebSocket
}
