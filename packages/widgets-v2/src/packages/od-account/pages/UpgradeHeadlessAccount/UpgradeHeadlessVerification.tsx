/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { t } from '@od-components/i18n/index'
import {
  CommonValidationErrorType,
  MAX_SHORT_TEXT_LENGTH,
  validateAlphanumeric,
  ValidateAlphaNumericErrorType,
  ValidateForbiddenWordsErrorType,
  ValidateLengthErrorType,
  ValidateRegexErrorType,
  Validation
} from '@accelbyte/validator'
import React from 'react'
import { Trans } from 'react-i18next'

interface Props {
  verificationCode: string
  isRequestingVerificationCode: boolean
  onChangeVerificationCode: (code: string) => void
  onRequestVerificationCode: () => Promise<void>
  onChangePage?: () => void
  validation: Validation<{
    displayName: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
    username: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
    password: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
    verificationCode: ValidateAlphaNumericErrorType
  }>
  styles: CSSModuleClasses
}

interface State {
  isPasteVerificationCode: boolean
}

export class UpgradeHeadlessVerification extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isPasteVerificationCode: false
    }
  }

  refreshComponent = () => this.setState({})

  componentDidMount(): void {
    this.props.validation.listen(this.refreshComponent)
  }

  componentWillUnmount(): void {
    this.props.validation.unlisten(this.refreshComponent)
  }

  onVerificationCodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const verificationCode = event.target.value.toString().toUpperCase()
    const trimSpaceOnPastedVerificationCode = !this.state.isPasteVerificationCode ? verificationCode : verificationCode.replace(/\s/g, '')
    this.props.validation.set('verificationCode', validateAlphanumeric(trimSpaceOnPastedVerificationCode))
    this.props.onChangeVerificationCode(trimSpaceOnPastedVerificationCode)
    this.setState({ isPasteVerificationCode: false })
  }

  onPasteVerificationCode = () => {
    this.setState({ isPasteVerificationCode: true })
  }

  renderVerificationCodeError = (errorType: CommonValidationErrorType | null) => {
    if (!errorType) return null
    switch (errorType) {
      case ValidateAlphaNumericErrorType.enum.empty:
        return (
          <FormGroupError>
            <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.verifyCodeError.empty">
              You must enter your verification code
            </Trans>
          </FormGroupError>
        )
      case ValidateAlphaNumericErrorType.enum.exceedLengthLimit:
        return (
          <FormGroupError>
            <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.verifyCodeError.ExceedLimit">
              Verification code must not exceed {{ MAX_SHORT_TEXT_LENGTH }} characters
            </Trans>
          </FormGroupError>
        )
      case ValidateAlphaNumericErrorType.enum.invalidFormat:
        return (
          <FormGroupError>
            <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.verifyCodeError.invalidFormat">
              Please enter a valid verification code
            </Trans>
          </FormGroupError>
        )
      default:
        return <Trans i18nKey="CommonError.unknownError">Something went wrong. Please contact support for assistance.</Trans>
    }
  }

  render() {
    const { isRequestingVerificationCode, onRequestVerificationCode, verificationCode, onChangePage, validation, styles } = this.props
    return (
      <>
        <FormGroup className={styles.formGroup}>
          <div className={styles.label}>
            <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.verificationCode">Verification Code</Trans>
          </div>
          <InputGroup
            type="text"
            value={verificationCode || ''}
            className={styles.input}
            placeholder={t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.placeholder.verificationCodePlaceholder')}
            onChange={this.onVerificationCodeChange}
            onPaste={this.onPasteVerificationCode}
          />
          {this.renderVerificationCodeError(validation.get('verificationCode'))}
          <div className={styles.resendCode}>
            <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.didntReceiveEmail">Didn't receive the email?</Trans>
            {isRequestingVerificationCode && (
              <span>
                <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.requestingCode"> Requesting...</Trans>
              </span>
            )}
            {!isRequestingVerificationCode && (
              <span onClick={() => onRequestVerificationCode && onRequestVerificationCode()}>
                <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.resend">Click here to resend</Trans>
              </span>
            )}
          </div>
          <div className={styles.resendCode}>
            <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.enterWrongEmail">Entered the wrong email? </Trans>
            <span onClick={() => onChangePage && onChangePage()}>
              <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.clickToChange">Click here to change</Trans>
            </span>
          </div>
        </FormGroup>
      </>
    )
  }
}
