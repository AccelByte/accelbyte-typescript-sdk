/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
// import { z } from 'zod'
import { AxiosInstance } from 'axios'
import { SDKRequestConfig } from '../Types'
import { CodeGenUtil } from '../utils/CodeGenUtil'
import { IResponse, Validate } from '../utils/Validate'
import { TokenWithDeviceCookieResponseV3 } from '~/iam-definitions/TokenWithDeviceCookieResponseV3'

export { TokenWithDeviceCookieResponseV3 }

/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export class OAuth20$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string) {}

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
