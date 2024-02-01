/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AxiosError, HttpStatusCode } from 'axios'
import { injectResponseInterceptors } from '../utils/Network'

const ERROR_ELIGIBILITY_CODE = 13130

type ErrorInterceptor = {
  baseUrl: string
  onUserEligibilityChange?: () => void
  onError?: (error: AxiosError) => void
  onTooManyRequest?: (error: AxiosError) => void
}

export const injectErrorInterceptors = ({ baseUrl, onError, onTooManyRequest, onUserEligibilityChange }: ErrorInterceptor) => {
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

        if (response?.status === HttpStatusCode.TooManyRequests && onTooManyRequest) {
          onTooManyRequest(error)
        }
      }
      if (onError) {
        onError(error)
      }
      throw error
    }
  )
}
