/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import {
  CommonValidationErrorType,
  MAX_SHORT_TEXT_LENGTH,
  ValidateAlphaNumericErrorType,
  ValidateDisplayNameErrorType,
  ValidateEmailErrorType,
  ValidateLengthErrorType,
  ValidateRegexErrorType
} from '@accelbyte/validator'
import * as React from 'react'
import { Trans } from 'react-i18next'

export const PasswordValidationError = (errorType: CommonValidationErrorType | null, params: { min?: number; max?: number }) => {
  if (!errorType || !params.min || !params.max) return null

  switch (errorType) {
    case ValidateLengthErrorType.enum.empty:
      return (
        <FormGroupError>
          <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.form.passwordEmptyError">You must fill in a password</Trans>
        </FormGroupError>
      )
    case ValidateLengthErrorType.enum.lessThanLengthLimit:
      return (
        <FormGroupError>
          <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.form.passwordLessThanLengthLimit">
            Your password must contain at least {{ PASSWORD_MIN_LIMIT: params.min }} characters
          </Trans>
        </FormGroupError>
      )
    case ValidateLengthErrorType.enum.exceedLengthLimit:
      return (
        <FormGroupError>
          <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.form.passwordExceedLimit">
            Your password must not exceed {{ PASSWORD_MAX_LENGTH: params.max }} characters
          </Trans>
        </FormGroupError>
      )
    case ValidateRegexErrorType.enum.invalidFormat:
      return (
        <FormGroupError>
          <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.form.passwordInvalidFormat">Please enter a valid password</Trans>
        </FormGroupError>
      )
    default:
      return <Trans i18nKey="CommonError.unknownError">Something went wrong. Please contact support for assistance.</Trans>
  }
}

export const DisplayNameValidationError = (errorType: CommonValidationErrorType | null, params: { min?: number; max?: number } = {}) => {
  if (!errorType) return null

  switch (errorType) {
    case ValidateLengthErrorType.enum.empty:
      return (
        <FormGroupError>
          <Trans i18nKey="AccountMyProfilePage.form.displayNameEmptyError">The display name cannot be empty.</Trans>
        </FormGroupError>
      )
    case ValidateLengthErrorType.enum.lessThanLengthLimit:
      return (
        <FormGroupError>
          <Trans i18nKey="AccountMyProfilePage.form.lessThanLengthLimit">
            Your display name must contain at least {{ DISPLAY_NAME_MIN_LIMIT: params.min }} characters
          </Trans>
        </FormGroupError>
      )
    case ValidateLengthErrorType.enum.exceedLengthLimit:
      return (
        <FormGroupError>
          <Trans i18nKey="AccountMyProfilePage.form.displayNameExceedLimit">
            Display name must not exceed {{ MAX_DISPLAY_NAME_LENGTH: params.max }} characters
          </Trans>
        </FormGroupError>
      )
    case ValidateRegexErrorType.enum.invalidFormat:
      return (
        <FormGroupError>
          <Trans i18nKey="AccountMyProfilePage.form.displayNameInvalidFormat">Please enter a valid display name format</Trans>
        </FormGroupError>
      )
    default:
      return <Trans i18nKey="CommonError.unknownError">Something went wrong. Please contact support for assistance.</Trans>
  }
}

export const UserNameValidationError = (errorType: CommonValidationErrorType | null, params: { min?: number; max?: number } = {}) => {
  if (!errorType) return null

  switch (errorType) {
    case ValidateLengthErrorType.enum.empty:
      return (
        <FormGroupError>
          <Trans i18nKey="AccountMyProfilePage.form.userName.emptyError">The username cannot be empty</Trans>
        </FormGroupError>
      )
    case ValidateLengthErrorType.enum.lessThanLengthLimit:
      return (
        <FormGroupError>
          <Trans i18nKey="AccountMyProfilePage.form.userName.lessThanLengthLimit">
            Your username must contain at least {{ MIN_USERNAME_LENGTH: params.min }} characters
          </Trans>
        </FormGroupError>
      )
    case ValidateLengthErrorType.enum.exceedLengthLimit:
      return (
        <FormGroupError>
          <Trans i18nKey="AccountMyProfilePage.form.userName.exceedLimit">
            Your username must not exceed {{ MAX_USERNAME_LENGTH: params.max }} characters
          </Trans>
        </FormGroupError>
      )
    case ValidateRegexErrorType.enum.invalidFormat:
      return (
        <FormGroupError>
          <Trans i18nKey="AccountMyProfilePage.form.userName.invalidFormat">Please enter a valid username format</Trans>
        </FormGroupError>
      )
    default:
      return <Trans i18nKey="CommonError.unknownError">Something went wrong. Please contact administrator.</Trans>
  }
}

export const DisplayVerificationCodeError = (errorType: CommonValidationErrorType | null) => {
  if (!errorType) return null
  switch (errorType) {
    case ValidateAlphaNumericErrorType.enum.empty:
      return (
        <FormGroupError>
          <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.verifyCodeError.empty">You must enter your verification code</Trans>
        </FormGroupError>
      )
    case ValidateAlphaNumericErrorType.enum.exceedLengthLimit:
      return (
        <FormGroupError>
          <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.verifyCodeError.ExceedLimit">
            Verification code must not exceed {{ MAX_SHORT_TEXT_LENGTH }} characters
          </Trans>
        </FormGroupError>
      )
    case ValidateAlphaNumericErrorType.enum.invalidFormat:
      return (
        <FormGroupError>
          <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.verifyCodeError.invalidFormat">
            Please enter a valid verification code
          </Trans>
        </FormGroupError>
      )
    default:
      return <Trans i18nKey="CommonError.unknownError">Something went wrong. Please contact support for assistance.</Trans>
  }
}

export const DisplayEmailValidationError = (
  errorType: CommonValidationErrorType | null,
  { minLength, maxLength }: { minLength?: number; maxLength?: number } = {}
) => {
  if (!errorType) return null

  const displayNameErrorMap = {
    [ValidateEmailErrorType.enum.empty]: <Trans i18nKey="LinkPlatformAccountPage.LinkNewAccount.emailError.empty">Email is required</Trans>,
    [ValidateEmailErrorType.enum.lessThanLengthLimit]: (
      <Trans i18nKey="LinkPlatformAccountPage.LinkNewAccount.emailError.lessThanLengthLimit">
        Email must not less than {{ MIN_EMAIL_LENGTH: minLength }} characters
      </Trans>
    ),
    [ValidateEmailErrorType.enum.exceedLengthLimit]: (
      <Trans i18nKey="LinkPlatformAccountPage.LinkNewAccount.emailError.ExceedLimit">
        Email must not exceed {{ MAX_EMAIL_LENGTH: maxLength }} characters
      </Trans>
    ),
    [ValidateDisplayNameErrorType.enum.invalidFormat]: (
      <Trans i18nKey="LinkPlatformAccountPage.LinkNewAccount.emailError.InvalidFormat">Please provide a valid Email format</Trans>
    ),
    [CommonValidationErrorType.enum.containsForbiddenWords]: (
      <Trans i18nKey="LinkPlatformAccountPage.LinkNewAccount.emailError.containsForbiddenWords">
        Email contains prohibited word or use blocked domain
      </Trans>
    )
  }

  return <FormGroupError>{displayNameErrorMap[errorType]}</FormGroupError>
}
