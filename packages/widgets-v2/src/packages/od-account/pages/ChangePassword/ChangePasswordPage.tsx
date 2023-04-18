/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroupPassword } from '@od-components/components/Form/InputPassword/InputPassword'
import { PasswordConstraint } from '@od-components/components/InputConstraint/PasswordConstraint'
import { Loading, LoadingSize } from '@od-components/components/Loading/Loading'
import { Spinner, SpinnerStyle } from '@od-components/components/Spinner/Spinner'
import { getCurrentLanguage, t } from '@od-components/i18n/index'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import classNames from 'classnames'
import { ValidateForbiddenWordsErrorType, ValidateLengthErrorType, ValidateRegexErrorType, Validation } from '@accelbyte/validator'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { AccountMainSection, AccountMainSectionBody, AccountMainSectionHeader } from '../AccountMainSection/AccountMainSection'
import './ChangePasswordPage.scss'
import { TwoFactorAuthenticatorSection } from './TwoFactorAuthenticator/TwoFactorAuthenticatorSection'
import { mockInputValidationPassword, mockPassword } from '@od-shared/mocks/MockVars'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { FetchStatus } from '~/constants/fetch-statuses'
import { CommonEntryGroup, CommonEntryGroupInput, CommonEntryGroupLabel } from '@od-account/components/CommonEntryGroup/CommonEntryGroup'
import { InputValidationHelper, ValidateableInputField } from '@accelbyte/sdk-iam'

interface PasswordValidation {
  match: boolean
  differentPassword: boolean
}

interface State {
  currentPassword: string
  password: string
  passwordConfirm: string
  passwordValidation: PasswordValidation
  alert: AlertValue | null
}

interface Props {
  isPreviewMode?: boolean
}

export const ChangePasswordPage = ({ isPreviewMode }: Props) => {
  const validation = React.useRef<
    Validation<{
      password: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
    }>
  >(new Validation())
  const [state, setState] = useState<State>({
    currentPassword: '',
    password: '',
    passwordConfirm: '',
    passwordValidation: {
      match: false,
      differentPassword: false
    },
    alert: null
  })
  const { currentPassword, password, passwordConfirm, passwordValidation, alert } = state

  const { state: userState, mutations: userMutations } = useUserInfo()
  const { state: inputValidationsState, mutations: inputValidationsMutations } = useInputValidations()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    if (isPreviewMode) return
    if (inputValidationsState.validations.length === 0) {
      inputValidationsMutations.fetchValidations(getCurrentLanguage())
    }
  }, [])

  useEffect(() => {
    updateValidationObject()
  }, [state.password, state.currentPassword, state.passwordConfirm])

  const resetState = () => {
    updateState({
      currentPassword: '',
      password: '',
      passwordConfirm: '',
      alert: null
    })
  }

  const onUpdateSuccess = () => {
    resetState()
    notifyUpdateSuccess()
    updateValidationObject()
  }

  const notifyUpdateSuccess = () => {
    updateState({
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="AccountChangePasswordPage.updateSuccess">Password successfully updated.</Trans>
      }
    })
  }

  const notifyUpdateError = async (error: Error) => {
    const isInputValidationError = await inputValidationsMutations.refetchIfValidationError(error)
    if (isInputValidationError) {
      resetState()
      return
    }

    const errorCode = ErrorHelper.extractServiceErrorCode(error)
    updateState({
      alert: {
        type: AlertType.danger,
        element: errorCode ? (
          <CommonError error={error} />
        ) : (
          <Trans i18nKey="AccountChangePasswordPage.updateError">We are unable to process this request. Please try again.</Trans>
        )
      }
    })
  }

  const getValidationObject = (): PasswordValidation => {
    const validation: PasswordValidation = {
      match: false,
      differentPassword: false
    }

    if (currentPassword && password && currentPassword !== password) {
      validation.differentPassword = true
    }

    if (password && passwordConfirm && password === passwordConfirm) {
      validation.match = true
    }

    return validation
  }

  const updateValidationObject = () => {
    updateState({
      passwordValidation: getValidationObject()
    })
  }

  const onCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentPassword = event.target.value
    updateState({ currentPassword })
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value
    validation.current.set('password', InputValidationHelper.validatePassword(password, inputValidationsState.validations))
    updateState({ password })
  }

  const onPasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordConfirm = event.target.value
    updateState({ passwordConfirm })
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    updateState({ alert: null })
    const result = await userMutations.updatePassword(currentPassword, password, getCurrentLanguage())
    if (result.error) {
      notifyUpdateError(result.error)
      return
    }

    onUpdateSuccess()
  }

  const onReload = async () => {
    updateState({ alert: null })
    const result = await inputValidationsMutations.fetchValidations(getCurrentLanguage())
    if (result.error) {
      notifyUpdateError(result.error)
    }
  }

  const isFieldValid = () => {
    const allFieldFilled = !!currentPassword && !!password && !!passwordConfirm
    const allFieldValid = Object.keys(passwordValidation).reduce(
      (accumulator, currentValue) => accumulator && passwordValidation[currentValue],
      true
    )

    return allFieldFilled && allFieldValid && validation.current.isAllValid()
  }

  const passwordMismatch = Boolean(password && passwordConfirm && password !== passwordConfirm)
  const isSamePassword = Boolean(currentPassword && password && currentPassword === password)
  const isPasswordInvalid = Boolean(password && !isSamePassword && validation.current.get('password'))
  const { validationsError, validationsFetchStatus } = inputValidationsState
  const validations = !isPreviewMode ? inputValidationsState.validations : mockInputValidationPassword
  const isFetching = validationsFetchStatus === FetchStatus.FETCHING
  const isUpdatingPassword = userState.fetchUserStatus === FetchStatus.FETCHING

  return (
    <>
      <AccountMainSection className={'accountChangePasswordPage'}>
        <AccountMainSectionHeader>
          <Trans i18nKey={'AccountChangePasswordPage.title'}>Change Password</Trans>
        </AccountMainSectionHeader>
        <AccountMainSectionBody className="w-full">
          {!!alert && (
            <div>
              <Alert type={alert.type} onDismiss={() => updateState({ alert: null })}>
                {alert.element}
              </Alert>
              {!!validationsError && (
                <Button className="btn btn-primary mt-4" onClick={onReload}>
                  <Trans i18nKey="Common.reload">Reload</Trans>
                </Button>
              )}
            </div>
          )}
          {validations.length <= 0 && isFetching && <Loading className={LoadingSize.medium} />}
          {validations.length > 0 && !validationsError && (
            <form onSubmit={onSubmit} className="mt-4 w-full">
              <div className="md:flex md:items-center">
                <div className="md:w-2/3">
                  <div className="w-full">
                    <CommonEntryGroup>
                      <CommonEntryGroupLabel>
                        <Trans i18nKey={'AccountChangePasswordPage.form.currentPasswordLabel'}>Current password</Trans>
                      </CommonEntryGroupLabel>
                      <CommonEntryGroupInput className="flex items-center">
                        <FormGroup className="w-full">
                          <InputGroupPassword
                            value={!isPreviewMode ? currentPassword : mockPassword}
                            name="currentPassword"
                            placeholder={t('AccountChangePasswordPage.form.currentPasswordPlaceholder')}
                            onChange={onCurrentPasswordChange}
                            togglePassword
                            readOnly={isPreviewMode}
                          />
                        </FormGroup>
                      </CommonEntryGroupInput>
                    </CommonEntryGroup>
                    <CommonEntryGroup>
                      <CommonEntryGroupLabel>
                        <Trans i18nKey={'AccountChangePasswordPage.form.newPasswordLabel'}>New password</Trans>
                      </CommonEntryGroupLabel>
                      <CommonEntryGroupInput className="flex items-center">
                        <FormGroup className="w-full">
                          <InputGroupPassword
                            value={!isPreviewMode ? password : `${mockPassword}new`}
                            name="password"
                            onChange={onPasswordChange}
                            togglePassword
                            hasStrengthMeter={!isSamePassword && !isPasswordInvalid && !!password}
                            readOnly={isPreviewMode}
                          />
                          {isSamePassword && (
                            <FormGroupError>
                              <Trans i18nKey="AccountChangePasswordPage.form.newPasswordLabelError">
                                Your new password cannot be the same as the previous one
                              </Trans>
                            </FormGroupError>
                          )}
                          {isPasswordInvalid && (
                            <FormGroupError>
                              <Trans i18nKey={'AccountChangePasswordPage.form.newPasswordInvalid'}>Please enter a valid password</Trans>
                            </FormGroupError>
                          )}
                          <PasswordConstraint
                            descriptions={InputValidationHelper.getValidationDescription(ValidateableInputField.enum.password, validations)}
                          />
                        </FormGroup>
                      </CommonEntryGroupInput>
                    </CommonEntryGroup>
                    <CommonEntryGroup>
                      <CommonEntryGroupLabel>
                        <Trans i18nKey={'AccountChangePasswordPage.form.confirmPasswordLabel'}>Confirm new password</Trans>
                      </CommonEntryGroupLabel>
                      <CommonEntryGroupInput className="flex items-center">
                        <FormGroup className="w-full" hasError={passwordMismatch}>
                          <InputGroupPassword
                            value={!isPreviewMode ? passwordConfirm : `${mockPassword}new`}
                            name="passwordConfirm"
                            onChange={onPasswordConfirmChange}
                            togglePassword
                            readOnly={isPreviewMode}
                          />
                          {passwordMismatch && (
                            <FormGroupError>
                              <Trans i18nKey="AccountChangePasswordPage.form.confirmPasswordLabelError">
                                The password that you entered does not match
                              </Trans>
                            </FormGroupError>
                          )}
                        </FormGroup>
                      </CommonEntryGroupInput>
                    </CommonEntryGroup>
                  </div>
                </div>
                <div className="md:w-1/3" />
              </div>
              <div className="border-gray-90 block border-t pt-6 text-right">
                <div className="inline-block">
                  <button
                    type={'submit'}
                    className={classNames('btn btn-primary uppercase')}
                    disabled={isUpdatingPassword || !isFieldValid()}>
                    {isUpdatingPassword ? (
                      <Spinner className={SpinnerStyle.inline} />
                    ) : (
                      <Trans i18nKey={'AccountChangePasswordPage.form.updatePassword'}>Update Password</Trans>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </AccountMainSectionBody>
      </AccountMainSection>
      <TwoFactorAuthenticatorSection isPreviewMode={isPreviewMode} />
    </>
  )
}
