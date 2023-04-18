/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { getCurrentLanguage, t } from '@od-components/i18n/index'
import { VerificationCodeContext } from '@od-shared/models/AccountTypes'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { MAX_SHORT_TEXT_LENGTH, validateAlphanumeric, ValidateAlphaNumericErrorType, Validation } from '@accelbyte/validator'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import isEmpty from 'validator/lib/isEmpty.js'
import styles from './EmailVerificationPage.module.scss'
import { useAppState } from '~/hooks/useAppState'
import { useUserVerification } from '~/hooks/iam/useUserVerification'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useHeaderAlerts } from '~/hooks/header/useHeaderAlerts'

interface State {
  verificationCode: string
  alert: AlertValue | null
  isVerificationSuccess: boolean
  isPasteVerificationCode: boolean
}

export const NewAccountVerificationForm = () => {
  const validation = React.useRef<Validation<{ verificationCode: ValidateAlphaNumericErrorType }>>(new Validation())
  const [state, setState] = useState<State>({
    verificationCode: '',
    alert: null,
    isVerificationSuccess: false,
    isPasteVerificationCode: false
  })
  const { state: userState } = useUserInfo()
  const { state: userVerificationState, mutations: userVerificationMutations } = useUserVerification()
  const appState = useAppState()
  const { mutations: headerAlertsMutations } = useHeaderAlerts()

  const isVerifying = userVerificationState.fetchVerificationStatus === FetchStatus.VERIFYING
  const isRequestingVerificationCode = userVerificationState.fetchVerificationStatus === FetchStatus.REQUESTING
  const isSubmitButtonDisabled =
    !validation.current.isAllValid() || isEmpty(state.verificationCode) || isVerifying || state.isVerificationSuccess

  const notifyVerificationCodeSent = (): void => {
    setState(oldState => ({
      ...oldState,
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="ChangeEmailPage.verifyCodeForm.codeSent">A verification code has been sent to your email</Trans>
      }
    }))
  }

  const setErrorAlert = (error: Error | unknown): void => {
    setState(oldState => ({
      ...oldState,
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    }))
  }

  const handleNewAccountVerified = async (): Promise<void> => {
    setState(oldState => ({
      ...oldState,
      isVerificationSuccess: true
    }))

    await appState.fetchAllUserInformation()
    headerAlertsMutations.push({
      type: AlertType.success,
      element: <Trans i18nKey={'EmailVerificationPage.accountVerified'}>Congratulations! The registration process is complete.</Trans>,
      autoDismiss: true
    })
  }

  const verifyCode = async (code: string): Promise<void> => {
    const result = await userVerificationMutations.verify(code, getCurrentLanguage())
    if (result.error) {
      setState(oldState => ({
        ...oldState,
        error: result.error
      }))
      return
    }

    handleNewAccountVerified()
  }

  const logout = () => {
    appState.logout()
  }

  const onVerificationCodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { isPasteVerificationCode } = state
    const verificationCode = event.target.value.toString().toUpperCase()
    const trimSpaceOnPastedVerificationCode = !isPasteVerificationCode ? verificationCode : verificationCode.replace(/\s/g, '')
    validation.current.set('verificationCode', validateAlphanumeric(trimSpaceOnPastedVerificationCode))
    setState(oldState => ({
      ...oldState,
      verificationCode: trimSpaceOnPastedVerificationCode,
      isPasteVerificationCode: false
    }))
  }

  const onPasteVerificationCode = () => {
    setState(oldState => ({
      ...oldState,
      isPasteVerificationCode: true
    }))
  }

  const renderVerificationCodeError = (errorType: ValidateAlphaNumericErrorType | null) => {
    if (!errorType) return null

    const verificationCodeErrorMap = {
      [ValidateAlphaNumericErrorType.enum.empty]: (
        <Trans i18nKey="EmailVerificationPage.verifyCodeForm.verifyCodeError.empty">Please enter your verification code.</Trans>
      ),
      [ValidateAlphaNumericErrorType.enum.exceedLengthLimit]: (
        <Trans i18nKey="EmailVerificationPage.verifyCodeForm.verifyCodeError.ExceedLimit">
          Verification code must not exceed {{ MAX_SHORT_TEXT_LENGTH }} characters
        </Trans>
      ),
      [ValidateAlphaNumericErrorType.enum.invalidFormat]: (
        <Trans i18nKey="EmailVerificationPage.verifyCodeForm.verifyCodeError.invalidFormat">
          The verification code must be alphanumeric and cannot contain spaces or special characters.
        </Trans>
      )
    }

    return <FormGroupError>{verificationCodeErrorMap[errorType]}</FormGroupError>
  }

  const sendVerificationCode = async () => {
    const email = userState.user?.emailAddress || ''
    const result = await userVerificationMutations.sendVerificationCode(email, VerificationCodeContext.enum.UserAccountRegistration)
    if (result.error) {
      setErrorAlert(result.error)
      return
    }

    notifyVerificationCodeSent()
  }

  return (
    <div className="newEmailVerification">
      <div className={styles.title}>
        <Trans i18nKey="EmailVerificationPage.title">Enter the Verification Code</Trans>
      </div>
      {!!state.alert && (
        <Alert
          className="mb-6"
          type={state.alert.type}
          onDismiss={() =>
            setState(oldState => ({
              ...oldState,
              alert: null
            }))
          }>
          {state.alert.element}
        </Alert>
      )}
      <div className={styles.description}>
        <div>
          <Trans i18nKey={'EmailVerificationPage.instruction1'}>
            A verification code has been sent to your email. Please verify your email address to complete the registration process.
          </Trans>
        </div>
        <div>
          <Trans i18nKey={'EmailVerificationPage.instruction2'}>Please enter the verification code below:</Trans>
        </div>
      </div>
      <FormGroup>
        <InputGroup
          className={styles.input}
          value={state.verificationCode || ''}
          placeholder={t('EmailVerificationPage.placeholder.verificationCode')}
          onChange={onVerificationCodeChange}
          onPaste={onPasteVerificationCode}
        />
        {renderVerificationCodeError(validation.current.get('verificationCode'))}
      </FormGroup>
      <div className={styles.description}>
        <Trans i18nKey="EmailVerificationPage.sendVerificationCode.didntReceiveEmail">Didn't receive an email?</Trans>
        {isRequestingVerificationCode && (
          <span className="ml-1">
            <Trans i18nKey={'EmailVerificationPage.sendVerificationCode.requesting'}>Requesting..</Trans>
          </span>
        )}
        {!isRequestingVerificationCode && (
          <span onClick={sendVerificationCode}>
            <Trans i18nKey={'EmailVerificationPage.sendVerificationCode.click'}> Click here to resend</Trans>
          </span>
        )}
      </div>
      <div className="flex flex-row">
        <Button
          loadingIndicator="SPINNER"
          disabled={isSubmitButtonDisabled}
          className="btn big btn-primary mt-6 uppercase"
          onClick={() => verifyCode(state.verificationCode)}
          isLoading={isVerifying}>
          <Trans i18nKey="EmailVerificationPage.submitButton">VERIFY</Trans>
        </Button>
        <Button className="btn big text-blue-40 mt-6 capitalize" onClick={logout} disabled={isVerifying || state.isVerificationSuccess}>
          <Trans i18nKey="EmailVerificationPage.notNowBtn">Not Now</Trans>
        </Button>
      </div>
    </div>
  )
}
