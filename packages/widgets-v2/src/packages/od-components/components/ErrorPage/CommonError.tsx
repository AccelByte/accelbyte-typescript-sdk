/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import starBgGradient from '@od-assets/images/starBgGradient.svg'
import { translateServiceError } from '@accelbyte/error-translator'
import React from 'react'
import { Trans } from 'react-i18next'
import './CommonError.scss'
import { FetchErrorType } from '~/constants/fetch-statuses'

interface Props {
  error: unknown | null
}

// eslint-disable-next-line react/display-name
// TODO(try.ajitiono): merge this with "accelbyte-web-sdk/packages/widgets-v2/~/packages/od-components/components/CommonError.tsx".
export const CommonError = (props: Props) => {
  const { error } = props
  if (!error) return null

  if (ErrorHelper.isAxiosNetworkError(error)) {
    return <Trans i18nKey="CommonError.networkError">The server cannot be reached. Please try again.</Trans>
  }

  const errorCode = ErrorHelper.extractServiceErrorCode(error) || 0
  const errorMessage = translateServiceError(errorCode)
  if (errorMessage) return <>{errorMessage}</>

  const responseStatus = ErrorHelper.isAxiosError(error) && error?.response?.status

  if (responseStatus === 403) {
    return <Trans i18nKey="CommonError.playerPortal.forbidden">You cannot access this page. Please go back.</Trans>
  }

  if (ErrorHelper.isAxiosServerError(error)) {
    return <Trans i18nKey="CommonError.serverError">We are experiencing some technical issues right now. Please try again later.</Trans>
  }

  return <Trans i18nKey="CommonError.unknownError">Something went wrong. Please contact support for assistance.</Trans>
}

// Error for missing game from the store.
interface NoMatchingGameErrorProps {
  error: FetchErrorType | null
  appId: string
  isWithBackground?: boolean
}

export const NoMatchingGameError = ({ error, appId, isWithBackground = true }: NoMatchingGameErrorProps) => {
  if (ErrorHelper.isAxiosError(error) && appId && error.response?.status === 404) {
    return (
      <div className="noMatchingGameError" style={{ backgroundImage: isWithBackground ? `url(${starBgGradient})` : undefined }}>
        <div>
          <h2 className="heading">
            <Trans i18nKey="CommonError.noMatchingGame">Game "{{ appId }}" doesn't exist in the store.</Trans>
          </h2>
          <p className="paragraph">
            <Trans i18nKey="CommonError.noMatchingGameResolution">To fix this, do one of the following:</Trans>
          </p>
          <ol className="list">
            <li>
              <Trans i18nKey="CommonError.noMatchingGameResolutionEnsure">Ensure the game "{{ appId }}" exists in the store,</Trans>
            </li>
            <li>
              <Trans i18nKey="CommonError.noMatchingGameResolutionChangeAppID">Change the App ID to an existing game, or</Trans>
            </li>
            <li>
              <Trans i18nKey="CommonError.noMatchingGameResolutionChangeTemplateConfig">Change the Template Config to multiple game.</Trans>
            </li>
          </ol>
        </div>
      </div>
    )
  }

  return <CommonError error={error} />
}
