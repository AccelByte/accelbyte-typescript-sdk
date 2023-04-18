/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { PasswordConstraint } from '@od-components/components/InputConstraint/PasswordConstraint'
import { t } from '@od-components/i18n/index'
import { AlertValue } from '@od-shared/models/Alert'
import {
  CommonValidationErrorType,
  MAX_SHORT_TEXT_LENGTH,
  validateAlphanumeric,
  ValidateAlphaNumericErrorType,
  ValidateEmailErrorType,
  Validation
} from '@accelbyte/validator'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import isEmpty from 'validator/lib/isEmpty.js'
import './VerifyCodeForm.scss'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { InputValidationHelper, ValidateableInputField } from '@accelbyte/sdk-iam'

interface Props {
  email: string
  isRequestingCode: boolean
  onResendCode: () => void
  alert: AlertValue | null
  onDismissAlert?: () => unknown
  oldEmail: string
  onUpdateEmail: (code: string, newEmail: string) => void
  isUpdatingEmail: boolean
  isFromEmailVerification?: boolean
  onCancel?: () => void
  newEmail?: string
  emailVerified?: boolean
}

interface State {
  verificationCode: string
  inputEmail: string
  isPasteVerificationCode: boolean
}

export const VerifyCodeForm = (props: Props) => {
  const validation = React.useRef<
    Validation<{
      verificationCode: ValidateAlphaNumericErrorType
      newEmail: CommonValidationErrorType
    }>
  >(new Validation())
  const [state, setState] = useState<State>({
    verificationCode: '',
    inputEmail: '',
    isPasteVerificationCode: false
  })
  const { state: inputValidationsState } = useInputValidations()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const {
    email,
    isRequestingCode,
    onResendCode,
    alert,
    onDismissAlert,
    onUpdateEmail,
    isUpdatingEmail,
    isFromEmailVerification,
    onCancel,
    oldEmail,
    newEmail,
    emailVerified
  } = props
  const { verificationCode, inputEmail, isPasteVerificationCode } = state

  const isSubmitButtonDisabled =
    !validation.current.isAllValid() ||
    isEmpty(verificationCode) ||
    isEmpty(inputEmail) ||
    isUpdatingEmail ||
    inputEmail === oldEmail ||
    inputEmail === newEmail

  const onVerificationCodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const verificationCode = event.target.value.toString().toUpperCase()
    const trimSpaceOnPastedVerificationCode = !isPasteVerificationCode ? verificationCode : verificationCode.replace(/\s/g, '')
    validation.current.set('verificationCode', validateAlphanumeric(trimSpaceOnPastedVerificationCode))
    updateState({ verificationCode: trimSpaceOnPastedVerificationCode, isPasteVerificationCode: false })
  }

  const onNewEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const email = event.target.value.toString().toLocaleLowerCase()
    validation.current.set('newEmail', InputValidationHelper.validateEmail(email, inputValidationsState.validations))
    updateState({ inputEmail: event.target.value })
  }

  const onPasteVerificationCode = () => {
    updateState({
      isPasteVerificationCode: true
    })
  }

  const renderVerificationCodeError = (errorType: CommonValidationErrorType | null) => {
    if (!errorType) return null

    const verificationCodeErrorMap = {
      [ValidateAlphaNumericErrorType.enum.empty]: (
        <Trans i18nKey="ChangeEmailPage.verifyCodeForm.verifyCodeError.empty">You must enter your verification code</Trans>
      ),
      [ValidateAlphaNumericErrorType.enum.exceedLengthLimit]: (
        <Trans i18nKey="ChangeEmailPage.verifyCodeForm.verifyCodeError.ExceedLimit">
          The verification code must not exceed {{ MAX_SHORT_TEXT_LENGTH }} characters
        </Trans>
      ),
      [ValidateAlphaNumericErrorType.enum.invalidFormat]: (
        <Trans i18nKey="ChangeEmailPage.verifyCodeForm.verifyCodeError.invalidFormat">
          The verification code must be alphanumeric and cannot include spaces
        </Trans>
      )
    }

    return <FormGroupError>{verificationCodeErrorMap[errorType]}</FormGroupError>
  }

  const renderNewEmailError = (errorType: CommonValidationErrorType | null) => {
    const emailProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.email, inputValidationsState.validations)
    if (!emailVerified && inputEmail === newEmail) {
      return (
        <FormGroupError>
          <Trans i18nKey="ChangeEmailPage.newEmailForm.newEmailError.sameAsEarlier">
            You entered the email that you just set earlier. Please enter a different email.
          </Trans>
        </FormGroupError>
      )
    }

    if (inputEmail === oldEmail) {
      return (
        <FormGroupError>
          <Trans i18nKey="ChangeEmailPage.newEmailForm.newEmailError.sameAsOldPassword">
            Your new email address cannot be the same as your old email address
          </Trans>
        </FormGroupError>
      )
    }

    if (!errorType) return null

    const newEmailErrorMap = {
      [ValidateEmailErrorType.enum.empty]: (
        <Trans i18nKey="ChangeEmailPage.newEmailForm.newEmailError.empty">Sorry, you must enter a new email address</Trans>
      ),
      [ValidateEmailErrorType.enum.lessThanLengthLimit]: (
        <Trans i18nKey="ChangeEmailPage.newEmailForm.newEmailError.lessThanLengthLimit">
          Your email address must contain at least {{ MIN_EMAIL_LENGTH: emailProps?.minLength }} characters
        </Trans>
      ),
      [ValidateEmailErrorType.enum.exceedLengthLimit]: (
        <Trans i18nKey="ChangeEmailPage.newEmailForm.newEmailError.ExceedLimit">
          Your email address must not exceed {{ MAX_EMAIL_LENGTH: emailProps?.maxLength }} characters
        </Trans>
      ),
      [ValidateEmailErrorType.enum.invalidFormat]: (
        <Trans i18nKey="ChangeEmailPage.newEmailForm.newEmailError.InvalidFormat">
          Please enter a valid email address, e.g. someone@example.com
        </Trans>
      ),
      [CommonValidationErrorType.enum.containsForbiddenWords]: (
        <Trans i18nKey="ChangeEmailPage.newEmailForm.newEmailError.containsForbiddenWords">
          Email contains prohibited word or use blocked domain
        </Trans>
      )
    }

    return <FormGroupError>{newEmailErrorMap[errorType]}</FormGroupError>
  }

  return (
    <div className="verifyCodeForm">
      <h1 className="title">
        <Trans i18nKey={'ChangeEmailPage.verifyCodeForm.title'}>Change email address</Trans>
      </h1>
      {!!alert && (
        <Alert type={alert.type} onDismiss={onDismissAlert}>
          {alert.element}
        </Alert>
      )}
      <div className="description">
        <Trans i18nKey={'ChangeEmailPage.verifyCodeForm.description'}>Please enter the verification code sent to {{ email }}</Trans>
      </div>
      <FormGroup>
        <InputGroup
          value={verificationCode}
          placeholder={t('ChangeEmailPage.verifyCodeForm.verificationCodePlaceholder')}
          onChange={onVerificationCodeChange}
          onPaste={onPasteVerificationCode}
        />
        {renderVerificationCodeError(validation.current.get('verificationCode'))}
      </FormGroup>
      <div className="description">
        <Trans i18nKey="ChangeEmailPage.verifyCodeForm.sendVerificationCode.didntReceiveEmail">Didn't receive the email?</Trans>
        {isRequestingCode && (
          <span>
            <Trans i18nKey={'ChangeEmailPage.verifyCodeForm.sendVerificationCode.requesting'}>Requesting...</Trans>
          </span>
        )}
        {!isRequestingCode && (
          <span onClick={() => onResendCode()}>
            <Trans i18nKey={'ChangeEmailPage.verifyCodeForm.sendVerificationCode.click'}> Click here to resend</Trans>
          </span>
        )}
      </div>
      <div className="description">
        <Trans i18nKey={'ChangeEmailPage.verifyCodeForm.newEmail.label'}>Set a new email address</Trans>
      </div>
      <FormGroup>
        <InputGroup
          value={inputEmail}
          placeholder="user@example.com"
          onChange={onNewEmailChange}
          popoverContent={
            <PasswordConstraint
              descriptions={InputValidationHelper.getValidationDescription(
                ValidateableInputField.enum.email,
                inputValidationsState.validations
              )}
            />
          }
        />
        {renderNewEmailError(validation.current.get('newEmail'))}
      </FormGroup>
      <div className="btnContainer">
        <Button
          loadingIndicator="SPINNER"
          disabled={isSubmitButtonDisabled}
          className="btn big btn-primary btnSubmit"
          onClick={() => {
            onUpdateEmail(verificationCode, inputEmail)
          }}
          isLoading={isUpdatingEmail}>
          <Trans i18nKey="EmailVerificationPage.continueButton">CONTINUE</Trans>
        </Button>
        {isFromEmailVerification && (
          <Button className="btn big btnCancel" onClick={() => onCancel && onCancel()}>
            <Trans i18nKey="NewEmailVerificationPage.cancelButton">Cancel</Trans>
          </Button>
        )}
      </div>
    </div>
  )
}
