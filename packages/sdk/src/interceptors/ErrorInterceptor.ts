/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { injectResponseInterceptors } from '@accelbyte/sdk/utils/Network'
import { AxiosError } from 'axios'

const ERROR_ELIGIBILITY_CODE = 13130

export const injectErrorInterceptors = (baseUrl: string, onUserEligibilityChange?: () => void, onError?: (error: AxiosError) => void) => {
  injectResponseInterceptors(
    response => {
      return response
    },
    (error: AxiosError<any>) => {
      if (error.response) {
        const { response } = error as AxiosError<any>
        if (response?.status === 403 && (response?.config as any).url.includes(baseUrl) && response?.config.withCredentials) {
          if (response.data.errorCode === ERROR_ELIGIBILITY_CODE && onUserEligibilityChange) {
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
