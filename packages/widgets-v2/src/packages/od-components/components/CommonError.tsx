/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { gaSendErrorEvent } from '@od-shared/app-events/telemetry/google-analytics/gaErrorTracking'
import { Env } from '@od-shared/Env'
import {
  FileUploadUrlInfoDecodeError,
  GenerateUploadFileUrlError,
  SendVerificationCodeRawDecodeError,
  UserAlreadyFullAccountError,
  UserAlreadyLinkedError,
  UserUpdateEmailError,
  UserUpgradeHeadlessAccountWithVerificationCodeError
} from '@od-shared/models/User'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { AxiosError } from 'axios'
import { translateServiceError } from '@accelbyte/error-translator'
import React from 'react'
import { Trans } from 'react-i18next'

interface Props {
  error: Error | AxiosError | unknown | null
  defaultMessage?: string
}

const CONTACT_SUPPORT_EMAIL = Env.CONTACT_SUPPORT_EMAIL
export const BannedMessage = () => (
  <>
    {!CONTACT_SUPPORT_EMAIL && <Trans i18nKey="BaseStoreDetailCatalog.userBanned">You have been banned from making any purchases.</Trans>}
    {CONTACT_SUPPORT_EMAIL && (
      <Trans i18nKey="BaseStoreDetailCatalog.userBannedWithEmail">
        You have been banned from making any purchases. For more information, please contact{' '}
        <a href={`mailto:${CONTACT_SUPPORT_EMAIL}`}>{{ CONTACT_SUPPORT_EMAIL }}</a>
      </Trans>
    )}
  </>
)

// TODO(try.ajitiono): merge this with "accelbyte-web-sdk/packages/widgets-v2/~/packages/od-components/components/ErrorPage/CommonError.tsx".
export const CommonError = (props: Props) => {
  const { error, defaultMessage } = props
  if (!error) return null

  if (ErrorHelper.isAxiosNetworkError(error)) {
    gaSendErrorEvent({ eventCategory: 'NetworkError', eventLabel: ErrorHelper.errorToString(error) })
    return <Trans i18nKey="CommonError.networkError">The server cannot be reached. Please try again.</Trans>
  }

  switch (true) {
    // // referenced as a read but never initialized
    // case error instanceof PaymentAccountDeleteError:
    //   gaSendErrorEvent({ eventCategory: 'PaymentAccountDeleteError', eventLabel: ShUtils.errorToString(error) })
    //   return (
    //     <Trans i18nKey={'CommonError.ecommerce.paymentAccount.delete'}>Deleting the payment method has failed. Please try again.</Trans>
    //   )
    case error instanceof FileUploadUrlInfoDecodeError:
      gaSendErrorEvent({ eventCategory: 'FileUploadUrlInfoDecodeError', eventLabel: ErrorHelper.errorToString(error) })
      return <Trans i18nKey={'CommonError.iam.user.files.uploadUrlInfo'}>Invalid upload URL</Trans>
    case error instanceof GenerateUploadFileUrlError:
      gaSendErrorEvent({ eventCategory: 'GenerateUploadFileUrlError', eventLabel: ErrorHelper.errorToString(error) })
      return (
        <Trans i18nKey={'CommonError.iam.user.files.generateUploadUrl'}>
          An error has occurred while generating the upload URL. Please try again.
        </Trans>
      )
    case error instanceof UserUpdateEmailError:
      gaSendErrorEvent({ eventCategory: 'UserUpdateEmailError', eventLabel: ErrorHelper.errorToString(error) })
      return (
        <Trans i18nKey={'CommonError.iam.user.updateEmail'}>
          An error has occurred while updating your email address. Please try again.
        </Trans>
      )
    case error instanceof SendVerificationCodeRawDecodeError:
      gaSendErrorEvent({ eventCategory: 'SendVerificationCodeRawDecodeError', eventLabel: ErrorHelper.errorToString(error) })
      return (
        <Trans i18nKey={'CommonError.iam.user.requestCode'}>
          An error has occurred while requesting your verification code. Please try again.
        </Trans>
      )
    case error instanceof UserUpgradeHeadlessAccountWithVerificationCodeError:
      gaSendErrorEvent({
        eventCategory: 'UserUpgradeHeadlessAccountWithVerificationCodeError',
        eventLabel: ErrorHelper.errorToString(error)
      })
      return (
        <Trans i18nKey={'CommonError.iam.user.upgradeHeadlessAccount'}>
          An error has occurred while upgrading your account. Please try again.
        </Trans>
      )
    case error instanceof UserAlreadyFullAccountError:
      gaSendErrorEvent({ eventCategory: 'UserAlreadyFullAccountError', eventLabel: ErrorHelper.errorToString(error) })
      return <Trans i18nKey={'CommonError.iam.user.userAlreadyFullAccount'}>Your account has already been upgraded.</Trans>
    case error instanceof UserAlreadyLinkedError:
      gaSendErrorEvent({ eventCategory: 'UserAlreadyFullAccountError', eventLabel: ErrorHelper.errorToString(error) })
      return (
        <Trans i18nKey={'CommonError.iam.user.userAlreadyLinked'}>
          The Twitch account is already linked with other account. Please try with another one.
        </Trans>
      )
  }

  const errorCode = ErrorHelper.extractServiceErrorCode(error) || 0
  const errorMessage = translateServiceError(errorCode, undefined, defaultMessage)
  if (errorMessage) return <>{errorMessage}</>

  const responseStatus = ErrorHelper.isAxiosError(error) && error.response && error.response.status
  if (responseStatus === 403) {
    gaSendErrorEvent({ eventCategory: 'AxiosForbiddenError', eventLabel: ErrorHelper.errorToString(error) })
    return <Trans i18nKey="CommonError.playerPortal.forbidden">You cannot access this page. Please go back.</Trans>
  }

  if (ErrorHelper.isAxiosServerError(error)) {
    gaSendErrorEvent({ eventCategory: 'ServerError', eventLabel: ErrorHelper.errorToString(error) })
    return <Trans i18nKey="CommonError.serverError">We're experiencing some technical issues right now. Please try again later.</Trans>
  }

  return <Trans i18nKey="CommonError.unknownError">Something went wrong. Please contact support for assistance.</Trans>
}
