/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Ctx } from '@od-shared/Ctx'
import { Env } from '@od-shared/Env'
import { VerificationCodeContext } from '@od-shared/models/AccountTypes'
import { AppState } from '@od-shared/store/AppState'
import React from 'react'
import { UpgradeAccountPage } from './UpgradeAccountPage'

interface State {
  isReady: boolean
  isLoading: boolean
  loadError: Error | unknown | null
}

class UpgradeAccountPageContainer extends React.Component<{}, State> {
  appState: AppState = Ctx.getAppState()
  state: State = {
    isReady: false,
    isLoading: false,
    loadError: null
  }

  // @ts-ignore
  setStatePromise = (state: Partial<State>) => new Promise(resolve => this.setState(state as any, resolve))

  componentDidMount() {
    this.init()
  }

  async init() {
    try {
      await this.setStatePromise({ isLoading: true })
      await this.appState.fetchAllUserInformation()
      await this.setStatePromise({ isReady: true, loadError: null })
    } catch (error) {
      await this.setStatePromise({ loadError: error })
    } finally {
      await this.setStatePromise({ isLoading: false })
    }
  }

  render() {
    const { isReady, isLoading, loadError } = this.state
    const { isRequestingCode, requestCodeError, isUpgradingHeadless, upgradeHeadlessError } = this.appState.userAppManager.state
    const { upgradeHeadlessAccount } = this.appState.linkAccountManager
    const { sendVerificationCode } = this.appState.verificationManager
    return (
      <UpgradeAccountPage
        isReady={isReady}
        isLoading={isLoading}
        loadError={loadError}
        requestCode={(email: string) => sendVerificationCode(email, VerificationCodeContext.enum.upgradeHeadlessAccount)}
        isRequestingCode={isRequestingCode}
        requestCodeError={requestCodeError}
        upgradeAccount={(email: string, password: string, code: string) =>
          upgradeHeadlessAccount({ emailAddress: email, password, code, validateOnly: false }, Env.IS_DISABLE_USERNAME)
        }
        isUpgrading={isUpgradingHeadless}
        upgradeError={upgradeHeadlessError}
      />
    )
  }
}

export default UpgradeAccountPageContainer
