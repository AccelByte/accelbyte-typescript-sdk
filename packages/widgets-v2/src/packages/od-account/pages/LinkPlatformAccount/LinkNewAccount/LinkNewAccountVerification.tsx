/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FormGroup } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { t } from '@od-components/i18n/i18n'
import {
  validateAlphanumeric,
  ValidateAlphaNumericErrorType,
  ValidateForbiddenWordsErrorType,
  ValidateLengthErrorType,
  ValidateNotEmptyErrorType,
  ValidateRegexErrorType,
  Validation
} from '@accelbyte/validator'
import * as React from 'react'
import { Trans } from 'react-i18next'
import { DisplayVerificationCodeError } from '../../../utils/FormValidationError'
import styles from './LinkNewAccount.module.scss'

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
    country: ValidateNotEmptyErrorType
    verificationCode: ValidateAlphaNumericErrorType
  }>
}

interface State {
  isPasteVerificationCode: boolean
}

export class LinkNewAccountVerification extends React.Component<Props, State> {
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
    const { onChangeVerificationCode, validation } = this.props
    const verificationCode = event.target.value.toString().toUpperCase()
    const trimSpaceOnPastedVerificationCode = !this.state.isPasteVerificationCode ? verificationCode : verificationCode.replace(/\s/g, '')
    validation.set('verificationCode', validateAlphanumeric(trimSpaceOnPastedVerificationCode))
    onChangeVerificationCode(trimSpaceOnPastedVerificationCode)
    this.setState({ isPasteVerificationCode: false })
  }

  onPasteVerificationCode = () => {
    this.setState({ isPasteVerificationCode: true })
  }

  render() {
    const { isRequestingVerificationCode, onRequestVerificationCode, verificationCode, onChangePage, validation } = this.props
    return (
      <>
        <FormGroup className={styles.formGroup}>
          <div className={styles.label}>
            <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.verificationCode">Verification Code</Trans>
          </div>
          <InputGroup
            type="text"
            value={verificationCode || ''}
            className={styles.input}
            placeholder={t('linkPlatformAccountPage.LinkNewAccount.placeholder.verificationCodePlaceholder')}
            onChange={this.onVerificationCodeChange}
            onPaste={this.onPasteVerificationCode}
          />
          {DisplayVerificationCodeError(validation.get('verificationCode'))}
          <div className={styles.resendCode}>
            <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.didntReceiveEmail">Didn't receive the email?</Trans>
            &nbsp;
            {isRequestingVerificationCode && (
              <span>
                <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.requestingCode">Requesting...</Trans>
              </span>
            )}
            {!isRequestingVerificationCode && (
              <span onClick={() => onRequestVerificationCode && onRequestVerificationCode()}>
                <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.resend">Click here to resend</Trans>
              </span>
            )}
          </div>
          <div className={styles.resendCode}>
            <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.enterWrongEmail">Entered the wrong email? </Trans>
            <span onClick={() => onChangePage && onChangePage()}>
              <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.clickToChange">Click here to change</Trans>
            </span>
          </div>
        </FormGroup>
      </>
    )
  }
}
