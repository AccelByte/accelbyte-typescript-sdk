/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Checkbox } from '@od-components/components/Form/Checkbox/Checkbox'
import { t } from '@od-components/i18n/i18n'
import { Verify2FAParam } from '@accelbyte/sdk-iam'
import React from 'react'
import { Trans } from 'react-i18next'
import OtpInput from 'react-otp-input'

// TODO: Fix default import error on remix
const ReactOtpInput: typeof OtpInput = typeof OtpInput === 'object' ? (OtpInput as any).default : OtpInput

interface Props {
  onTryAnother?: () => void
  onSubmit: (param: Verify2FAParam) => void
  factor: string
  isSubmitting: boolean
  codeLength: number
  helperText?: React.ReactNode
}

interface State {
  code: string
  rememberDevice: boolean
}

export class CodeInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      code: '',
      rememberDevice: true
    }
  }

  componentDidMount(): void {
    window.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.onKeyDown)
  }

  onCodeChange = (value: string) => {
    this.setState({ code: value })
  }

  onRememberDeviceChange = () => {
    this.setState(prevState => ({
      rememberDevice: !prevState.rememberDevice
    }))
  }

  submit = () => {
    const { factor } = this.props
    const { code, rememberDevice } = this.state
    this.props.onSubmit({ code, factor, rememberDevice })
  }

  onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' || this.state.code.length < this.props.codeLength) return
    this.submit()
  }

  render() {
    const { codeLength, isSubmitting, onTryAnother, helperText } = this.props
    const { code, rememberDevice } = this.state

    return (
      <>
        <ReactOtpInput
          value={code}
          onChange={this.onCodeChange}
          numInputs={codeLength}
          className="otpInput"
          containerStyle="otpInputContainer"
          focusStyle="otpInput__focus"
          shouldAutoFocus
          isDisabled={isSubmitting}
        />
        {helperText}
        <div className="rememberDeviceContainer">
          <Checkbox isChecked={rememberDevice} onChange={this.onRememberDeviceChange} label={t('twoFAPage.checkbox.rememberDevice')} />
          {!!onTryAnother && (
            <span className="tryAnother" onClick={onTryAnother}>
              <Trans i18nKey="twoFAPage.tryAnother">Try another way</Trans>
            </span>
          )}
        </div>
        <Button
          loadingIndicator="SPINNER"
          className="continueButton btn btn-primary"
          onClick={this.submit}
          disabled={code.length < codeLength}
          isLoading={isSubmitting}>
          {t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.continue')}
        </Button>
      </>
    )
  }
}
