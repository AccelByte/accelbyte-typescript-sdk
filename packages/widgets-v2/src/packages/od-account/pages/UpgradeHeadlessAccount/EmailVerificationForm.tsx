/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { useState } from 'react'
import { CommonValidationErrorType, ValidateEmailErrorType, Validation } from '@accelbyte/validator'
import { Trans } from 'react-i18next'
import { Button } from '@od-components/components/Button/Button'
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { PasswordConstraint } from '@od-components/components/InputConstraint/PasswordConstraint'
import { t } from '@od-components/i18n/index'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { InputValidationHelper, ValidateableInputField } from '@accelbyte/sdk-iam'

interface Props {
  onRequestVerificationCode: (email: string) => Promise<void>
  isRequesting: boolean
  styles: CSSModuleClasses
}

export const EmailVerificationForm = ({ onRequestVerificationCode, isRequesting, styles }: Props) => {
  const validation = React.useRef<
    Validation<{
      email: CommonValidationErrorType
    }>
  >(new Validation())
  const [email, setEmail] = useState('')

  const { state: inputValidationsState } = useInputValidations()

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const email = event.target.value.toString().toLocaleLowerCase()
    validation.current.set('email', InputValidationHelper.validateEmail(email, inputValidationsState.validations))
    setEmail(email)
  }

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validation.current.get('email') && email) {
      onRequestVerificationCode(email)
    }
  }

  const renderEmailError = (errorType: CommonValidationErrorType | null) => {
    if (!errorType) return null

    const { validations } = inputValidationsState
    const emailProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.email, validations)
    const displayNameErrorMap = {
      [ValidateEmailErrorType.enum.empty]: (
        <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.emailError.empty">You must enter a new email address</Trans>
      ),
      [ValidateEmailErrorType.enum.lessThanLengthLimit]: (
        <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.emailError.lessThanLengthLimit">
          Email must not less than {{ MIN_EMAIL_LENGTH: emailProps?.minLength }} characters
        </Trans>
      ),
      [ValidateEmailErrorType.enum.exceedLengthLimit]: (
        <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.emailError.ExceedLimit">
          Email must not exceed {{ MAX_EMAIL_LENGTH: emailProps?.maxLength }} characters
        </Trans>
      ),
      [ValidateEmailErrorType.enum.invalidFormat]: (
        <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.emailError.InvalidFormat">
          Please provide a valid Email format
        </Trans>
      ),
      [CommonValidationErrorType.enum.containsForbiddenWords]: (
        <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.emailError.containsForbiddenWords">
          Email contains prohibited word or use blocked domain
        </Trans>
      )
    }

    return <FormGroupError>{displayNameErrorMap[errorType]}</FormGroupError>
  }

  return (
    <form onSubmit={onFormSubmit} noValidate>
      <FormGroup>
        <div className={styles.label}>
          <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.email">Email</Trans>
        </div>
        <InputGroup
          type={'email'}
          className={styles.input}
          value={email}
          placeholder={t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.placeholder.email')}
          onChange={onEmailChange}
          popoverContent={
            <PasswordConstraint
              descriptions={InputValidationHelper.getValidationDescription(
                ValidateableInputField.enum.email,
                inputValidationsState.validations
              )}
            />
          }
        />
        {renderEmailError(validation.current.get('email'))}
      </FormGroup>
      <Button
        loadingIndicator="SPINNER"
        disabled={!!validation.current.get('email') || !email}
        className="btn btn-primary w-full uppercase"
        type="submit"
        isLoading={isRequesting}>
        <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.continue">CONTINUE</Trans>
      </Button>
    </form>
  )
}
