/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { t } from '@od-components/i18n/index'
import { AlertValue } from '@od-shared/models/Alert'
import classNames from 'classnames'
import { MAX_SHORT_TEXT_LENGTH, validateAlphanumeric, ValidateAlphaNumericErrorType, Validation } from '@accelbyte/validator'
import React from 'react'
import { Trans } from 'react-i18next'
import isEmpty from 'validator/lib/isEmpty.js'
import styles from './EmailVerificationPage.module.scss'

interface Props {
  isRequestingCode: boolean
  isVerifying: boolean
  onResend: () => void
  onVerify: (code: string) => void
  onChangeEmail: () => void
  alert: AlertValue | null
  onDismissAlert?: () => void
  isSuccess: boolean
}

interface State {
  verificationCode: string
}

export class UpdatingEmailVerificationForm extends React.Component<Props, State> {
  private validation: Validation<{
    verificationCode: ValidateAlphaNumericErrorType
  }>

  constructor(props: Props) {
    super(props)
    this.state = {
      verificationCode: ''
    }
    this.validation = new Validation()
    this.validation.listen(() => this.setState({}))
  }

  onVerificationCodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const verificationCode = event.target.value.toString().toUpperCase()
    this.validation.set('verificationCode', validateAlphanumeric(verificationCode))
    this.setState({
      verificationCode
    })
  }

  renderVerificationCodeError(errorType: ValidateAlphaNumericErrorType | null) {
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

  render() {
    const { isRequestingCode, isVerifying, onChangeEmail, onResend, onVerify, alert, onDismissAlert, isSuccess } = this.props
    const { verificationCode } = this.state
    const isSubmitButtonDisabled = isEmpty(verificationCode) || isVerifying || isSuccess || !this.validation.isAllValid()
    return (
      <div>
        <div className={styles.title}>
          <Trans i18nKey="NewEmailVerificationPage.title">Verify your new email</Trans>
        </div>
        {!!alert && (
          <Alert type={alert.type} onDismiss={onDismissAlert} className="mb-6">
            {alert.element}
          </Alert>
        )}
        <div className={styles.description}>
          <p>
            <Trans i18nKey={'NewEmailVerificationPage.verificationCodeForm.description'}>
              A verification code has been sent to your new email address. Please enter the verification code below.
            </Trans>
          </p>
        </div>
        <FormGroup>
          <InputGroup
            className={styles.input}
            value={verificationCode || ''}
            placeholder={t('NewEmailVerificationPage.placeholder.verificationCode')}
            onChange={this.onVerificationCodeChange}
          />
          {this.renderVerificationCodeError(this.validation.get('verificationCode'))}
        </FormGroup>
        <div className="mt-2 flex flex-row">
          <Button
            loadingIndicator="SPINNER"
            disabled={isSubmitButtonDisabled}
            className={classNames(styles.btnActionVerify, 'btn btn-primary')}
            onClick={() => onVerify(verificationCode)}
            isLoading={isVerifying}>
            <Trans i18nKey="NewEmailVerificationPage.submitButton">Verify</Trans>
          </Button>
        </div>
        <div className={classNames(styles.description, 'mt-2')}>
          <Trans i18nKey="NewEmailVerificationPage.sendVerificationCode.didntReceiveEmail">Didn't receive the email?</Trans>
          {isRequestingCode && (
            <span className="ml-1">
              <Trans i18nKey={'NewEmailVerificationPage.sendVerificationCode.requesting'}>Requesting...</Trans>
            </span>
          )}
          {!isRequestingCode && (
            <span onClick={() => onResend()}>
              <Trans i18nKey={'NewEmailVerificationPage.sendVerificationCode.click'}> Click here to resend</Trans>
            </span>
          )}
        </div>
        <div className={classNames(styles.description, 'mt-2')}>
          <Trans i18nKey="NewEmailVerificationPage.changeEmail">
            Entered the wrong email?
            <span onClick={() => onChangeEmail()}> Click here to change</span>
          </Trans>
        </div>
      </div>
    )
  }
}
