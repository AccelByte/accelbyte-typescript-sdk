/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { t } from '@od-components/i18n/index'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { FeUtils } from '@od-shared/utils/FeUtils'
import { translateServiceError } from '@accelbyte/error-translator'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Trans } from 'react-i18next'

interface Props {
  isReady: boolean
  isLoading: boolean
  loadError: Error | unknown | null

  requestCode: (email: string) => any
  isRequestingCode: boolean
  requestCodeError: Error | unknown | null

  upgradeAccount: (email: string, password: string, code: string) => any
  isUpgrading: boolean
  upgradeError: Error | unknown | null
}

interface State {
  emailAddress: string
  password: string
  code: string
  committedEmailAddress: string | null
}

export class UpgradeAccountPage extends React.Component<Props, State> {
  state: State = {
    code: '',
    password: '',
    emailAddress: '',
    committedEmailAddress: null
  }

  async upgrade() {
    const { upgradeAccount } = this.props
    const { committedEmailAddress, password, code } = this.state
    if (committedEmailAddress) {
      await upgradeAccount(committedEmailAddress, password, code)
    }
  }

  renderUpgradeError() {
    const { upgradeError: error } = this.props
    if (ErrorHelper.isAxiosServerError(error)) {
      return (
        <div>
          <Trans i18nKey="UpgradeAccountPage.upgradeError.serverError">
            <div>Something went wrong while upgrading your account.</div>
            <div>Please request the code again.</div>
          </Trans>
        </div>
      )
    }
    if (ErrorHelper.isAxiosNetworkError(error)) {
      return (
        <div>
          <Trans i18nKey="UpgradeAccountPage.upgradeError.networkError">
            <div>Unable to upgrade your account.</div>
            <div>Please check your internet connection and try again.</div>
          </Trans>
        </div>
      )
    }

    if (ErrorHelper.isAxiosError(error) && error.response && error.response.status) {
      const errorCode = ErrorHelper.extractServiceErrorCode(error) || 0
      const errorMessage = translateServiceError(errorCode)
      return errorMessage
    }

    return (
      <div>
        <Trans i18nKey="UpgradeAccountPage.upgradeError.unknownError">
          <div>Something went wrong while upgrading your account.</div>
          <div>Please contact support for assistance.</div>
        </Trans>
      </div>
    )
  }

  requestUpgradeForm() {
    const { isUpgrading } = this.props
    const { committedEmailAddress, password, code } = this.state
    if (!committedEmailAddress) return
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          this.upgrade()
        }}>
        <Helmet>
          <title>{FeUtils.makeTitleWithAppName(t('UpgradeAccountPage.title'))}</title>
        </Helmet>
        <InputGroup type="text" placeholder={t('UpgradeAccountPage.placeholder.emailAddress')} disabled value={committedEmailAddress} />
        <div>
          <Trans i18nKey="UpgradeAccountPage.code.instruction">
            <div>Fill in the code field using the verification code sent to your email.</div>
            <div>
              Want to send a new code to a different email address?
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  this.setState({ committedEmailAddress: null })
                }}>
                Change your email address here.
              </a>
            </div>
          </Trans>
        </div>
        <InputGroup
          type="text"
          placeholder={t('UpgradeAccountPage.placeholder.code')}
          disabled={isUpgrading}
          value={code}
          onChange={e => this.setState({ code: e.target.value })}
        />
        <InputGroup
          type="password"
          placeholder={t('UpgradeAccountPage.placeholder.password')}
          disabled={isUpgrading}
          value={password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        {isUpgrading && (
          <div>
            <Trans i18nKey="UpgradeAccountPage.upgrading">Upgrading your account...</Trans>
          </div>
        )}
        {this.renderUpgradeError()}
        <div>
          <button disabled={isUpgrading || !password || !code} type="submit">
            <Trans i18nKey="UpgradeAccountPage.upgradeButton">Upgrade</Trans>
          </button>
        </div>
      </form>
    )
  }

  async requestCode() {
    await this.props.requestCode(this.state.emailAddress)
    if (!this.props.requestCodeError) {
      await this.setState({ committedEmailAddress: this.state.emailAddress })
    }
  }

  renderRequestCodeError() {
    const { requestCodeError: error } = this.props
    if (!error) return
    if (ErrorHelper.isAxiosServerError(error)) {
      return (
        <div>
          <Trans i18nKey="UpgradeAccountPage.requestCodeError.serverError">
            <div>Something went wrong.</div>
            <div>Please try requesting code again</div>
          </Trans>
        </div>
      )
    }
    if (ErrorHelper.isAxiosNetworkError(error)) {
      return (
        <div>
          <Trans i18nKey="UpgradeAccountPage.requestCodeError.networkError">
            <div>Unable to send the verification code.</div>
            <div>Please make sure there are no issues with your internet connection and try again.</div>
          </Trans>
        </div>
      )
    }
    if (ErrorHelper.isAxiosError(error) && error.response && error.response.status) {
      const { status } = error.response
      if (status === 409) {
        return (
          <div>
            <Trans i18nKey="UpgradeAccountPage.requestCodeError.conflict">
              <div>This email address is already being used by another account.</div>
              <div>Please use a different email address.</div>
            </Trans>
          </div>
        )
      }
      if (status === 400) {
        return (
          <div>
            <Trans i18nKey="UpgradeAccountPage.requestCodeError.invalidRequest">
              <div>The email address you provided is invalid.</div>
              <div>Please use a valid email address.</div>
            </Trans>
          </div>
        )
      }
      if (status === 401) {
        return (
          <div>
            <Trans i18nKey="UpgradeAccountPage.requestCodeError.unauthorized">
              <div>You are unauthorized to upgrade your account</div>
              <div>Please contact administrator to resolve this issuee</div>
            </Trans>
          </div>
        )
      }
      if (status === 403) {
        return (
          <div>
            <Trans i18nKey="UpgradeAccountPage.requestCodeError.unauthorized">
              <div>You are forbidden to upgrade your account</div>
              <div>Please contact administrator to resolve this issuee</div>
            </Trans>
          </div>
        )
      }
    }
    return (
      <div>
        <Trans i18nKey="UpgradeAccountPage.requestCodeError.unknownError">
          <div>Something went wrong while sending the verification code to your email.</div>
          <div>Please request the code again.</div>
        </Trans>
      </div>
    )
  }

  renderRequestCodeForm() {
    const { isRequestingCode } = this.props
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          this.requestCode()
        }}>
        <InputGroup
          type="text"
          placeholder={t('UpgradeAccountPage.placeholder.emailAddress')}
          disabled={isRequestingCode}
          value={this.state.emailAddress}
          onChange={e => this.setState({ emailAddress: e.target.value })}
        />
        {isRequestingCode && (
          <div>
            <Trans i18nKey="UpgradeAccountPage.requestingCode">Sending the verification code to your email...</Trans>
          </div>
        )}
        {this.renderRequestCodeError()}
        <div>
          <button disabled={isRequestingCode} type="submit">
            <Trans i18nKey="UpgradeAccountPage.nextButton">Next</Trans>
          </button>
        </div>
      </form>
    )
  }

  renderLoadError() {
    return (
      <div>
        <Trans i18nKey="UpgradeAccountPage.loadingError">Loading user data failed. Please refresh or go back and try again.</Trans>
      </div>
    )
  }

  renderLoadingNotice() {
    return (
      <div>
        <Trans i18nKey="UpgradeAccountPage.loadingNotice">Loading user data...</Trans>
      </div>
    )
  }

  render() {
    const { isReady, isLoading, loadError } = this.props
    return (
      <div className="upgradeAccountPage">
        <h1>Upgrade Account</h1>
        {isLoading && this.renderLoadingNotice()}
        {loadError && this.renderLoadError()}
        {isReady && !this.state.committedEmailAddress && this.renderRequestCodeForm()}
        {isReady && this.state.committedEmailAddress && this.requestUpgradeForm()}
      </div>
    )
  }
}
