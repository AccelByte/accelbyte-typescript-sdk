/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AxiosInstance } from 'axios'
import { SDKRequestConfig } from '../Types'
import { CodeGenUtil } from '../utils/CodeGenUtil'
import { IResponse, Validate } from '../utils/Validate'

// FIXME(try.ajitiono): these are duplicated from @sdk-iam. We need to find a better way,
// so that when these types change in sdk-iam, it's still compatible (without breaking).
const NamespaceRole = z.object({ namespace: z.string(), roleId: z.string() })

interface NamespaceRole extends z.TypeOf<typeof NamespaceRole> {}

const PermissionV3 = z.object({
  action: z.number().int(),
  resource: z.string(),
  schedAction: z.number().int().nullish(),
  schedCron: z.string().nullish(),
  schedRange: z.array(z.string()).nullish()
})

interface PermissionV3 extends z.TypeOf<typeof PermissionV3> {}

const JwtBanV3 = z.object({
  ban: z.string(),
  disabledDate: z.string().nullish(),
  enabled: z.boolean(),
  endDate: z.string(),
  targetedNamespace: z.string()
})

interface JwtBanV3 extends z.TypeOf<typeof JwtBanV3> {}

export const TokenWithDeviceCookieResponseV3 = z.object({
  access_token: z.string(),
  auth_trust_id: z.string().nullish(),
  bans: z.array(JwtBanV3),
  display_name: z.string().nullish(),
  expires_in: z.number().int(),
  is_comply: z.boolean().nullish(),
  jflgs: z.number().int().nullish(),
  namespace: z.string(),
  namespace_roles: z.array(NamespaceRole),
  permissions: z.array(PermissionV3),
  platform_id: z.string().nullish(),
  platform_user_id: z.string().nullish(),
  refresh_expires_in: z.number().int().nullish(),
  refresh_token: z.string().nullish(),
  roles: z.array(z.string()),
  scope: z.string(),
  token_type: z.string(),
  user_id: z.string().nullish(),
  xuid: z.string().nullish()
})

export interface TokenWithDeviceCookieResponseV3 extends z.TypeOf<typeof TokenWithDeviceCookieResponseV3> {}

/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export class OAuth20$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  postOauthToken<T = TokenWithDeviceCookieResponseV3>(data: {
    grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token'
    username?: string | null
    password?: string | null
    code?: string | null
    code_verifier?: string | null
    client_id?: string | null
    redirect_uri?: string | null
    refresh_token?: string | null
    extend_exp?: boolean | null
  }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenWithDeviceCookieResponseV3, 'TokenWithDeviceCookieResponseV3')
  }
}
