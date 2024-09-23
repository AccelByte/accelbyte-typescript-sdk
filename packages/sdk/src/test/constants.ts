/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { TokenWithDeviceCookieResponseV3, UserResponseV3 } from '@accelbyte/sdk-iam'
import { generateMock } from '@anatine/zod-mock'
import { AxiosError } from 'axios'
import { Interceptor } from '../Types'

export const coreConfig = { baseURL: 'http://localhost:3000', clientId: '1234', namespace: 'sdk', redirectURI: 'http://localhost:3000' }
export const coreConfigWithDefault = { ...coreConfig, useSchemaValidation: true }
export const defaultAxiosConfig = {
  timeout: 60000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}

export const responseInterceptor: Interceptor = {
  type: 'response',
  name: 'session-expired',
  onError: () => {},
  onSuccess: config => config
}

export const requestInterceptor: Interceptor = {
  type: 'request',
  name: 'get-session',
  onError: () => {},
  onRequest: config => config
}

export const tooManyRequestInterceptor: Interceptor = {
  type: 'response',
  name: 'too-many-request',
  onError: e => {
    const error = e as AxiosError<any>
    if (error.response) {
      const { response } = error
      if (response?.status === 429 /* TooManyRequests */) {
        // onTooManyRequest(error)
      }
    }

    return Promise.reject(error)
  }
}

export const GET_USER_ME_PATH = '/iam/v3/public/users/me'

export const HEADLESS_USER: UserResponseV3 = {
  authType: 'email',
  bans: [],
  country: '',
  createdAt: '',
  dateOfBirth: '',
  deletionStatus: false,
  displayName: '',
  emailAddress: '',
  emailVerified: false,
  enabled: true,
  lastDateOfBirthChangedTime: '',
  lastEnabledChangedTime: '',
  namespace: coreConfig.namespace,
  oldEmailAddress: '',
  permissions: [],
  phoneVerified: false,
  roles: [],
  userId: '',
  namespaceRoles: []
}

export const USER_RESPONSE_V3 = generateMock(UserResponseV3)
export const TOKEN_WITH_DEVICE_COOKIE_RESPONSE_V3 = generateMock(TokenWithDeviceCookieResponseV3)
export const EMAIL_AND_PASSWORD = { username: 'test@mail.com', password: '123456' }

export const TOKEN_CONFIG = {
  accessToken: '1234',
  refreshToken: '1234'
}
export const CUSTOM_HEADERS = { 'x-ab-hello': 'world' }
