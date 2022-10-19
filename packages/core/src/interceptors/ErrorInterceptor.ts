/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { injectResponseInterceptors } from '@od-web-sdk/utils/Network'
import { AxiosError } from 'axios'

const errorInterceptorImpl = (baseUrl: string, onUserEligibilityChange?: () => void, onError?: (error: AxiosError) => void) => {
  injectResponseInterceptors(
    response => {
      return response
    },
    (error: AxiosError<any>) => {
      if (error.response) {
        const { response } = error as AxiosError<any, any>
        if (
          response &&
          response.config &&
          response.status === 403 &&
          (response.config as any).url.includes(baseUrl) &&
          response.config.withCredentials
        ) {
          const errorCode = response.data.errorCode
          if (errorCode === 13130 && onUserEligibilityChange) {
            onUserEligibilityChange()
          }
        }
      }
      if (onError) {
        onError(error)
      }
      throw error
    }
  )
}

export const injectErrorInterceptors = errorInterceptorImpl
