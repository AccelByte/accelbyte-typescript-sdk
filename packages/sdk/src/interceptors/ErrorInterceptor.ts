/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AxiosError } from 'axios'
import { Interceptor } from '../Types'

const ERROR_ELIGIBILITY_CODE = 13130

export const ErrorInterceptors: Array<Interceptor> = [
  {
    type: 'response',
    name: 'user-eligibilitiy-change',
    onError: e => {
      const error = e as AxiosError<any>
      if (error.response) {
        const { response } = error
        if (response?.status === 403 && (response?.config as any).url.includes(process.env.BASE_URL) && response?.config.withCredentials) {
          if (response.data.errorCode === ERROR_ELIGIBILITY_CODE) {
            // onUserEligibilityChange()
          }
        }
      }

      return Promise.reject(error)
    }
  },
  {
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
]
