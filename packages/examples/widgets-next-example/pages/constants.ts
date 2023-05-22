/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'

export const LOCAL_STORAGE_KEY = z.enum(['access_token', 'refresh_token'])

// AGS Starter config
export const GAME_NAMESPACE = 'widget1game'
export const CLIENT_ID = 'b248c5d080aa4c1daaf9f39d18e77500'
export const BASE_URL = 'http://localhost:3030/api'
export const REDIRECT_URL = 'http://localhost:3030'
