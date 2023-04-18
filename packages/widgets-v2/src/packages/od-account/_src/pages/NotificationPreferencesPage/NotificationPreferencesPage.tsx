/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { Checkbox } from '@od-components/components/Form/Checkbox/Checkbox'
import { Loading } from '@od-components/components/Loading/Loading'
import { Ctx } from '@od-shared/Ctx'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { LegalAppManager } from '@od-state/managers/LegalAppManager'
import { AcceptAgreementRequest, UserAgreementPolicyVersion } from '@accelbyte/sdk'
import React from 'react'
import { Trans } from 'react-i18next'
import { AccountMainSection, AccountMainSectionBody, AccountMainSectionHeader } from '../AccountMainSection/AccountMainSection'
import './NotificationPreferencesPage.scss'

interface State {
  policyMap: Map<string, boolean>
  alert: AlertValue | null
}

export default class NotificationPreferencesPage extends React.Component<{}, State> {
  logic: LegalAppManager

  constructor(props: {}) {
    super(props)
    this.logic = Ctx.getAppState().legalAppManager
    this.logic.subscribe(() => this.setState({}))
    this.state = {
      policyMap: new Map<string, boolean>(),
      alert: null
    }
  }

  async componentDidMount(): Promise<void> {
    this.fetchMarketingPreferences()
    this.setPolicyMapFromLogic()
  }

  fetchMarketingPreferences = async () => {
    try {
      await Promise.all([this.logic.fetchMarketingPreferences(), this.logic.fetchMarketingPreferenceRecord()])
    } catch (error) {
      this.setErrorAlert(error)
    }
  }

  onAcceptSuccess = async () => {
    await this.fetchMarketingPreferences()
    this.setPolicyMapFromLogic()
    this.notifyAcceptSuccess()
  }

  setErrorAlert = (error: Error | unknown): void => {
    this.setState({
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    })
  }

  notifyAcceptSuccess = (): void => {
    this.setState({
      alert: {
        type: AlertType.success,
        element: (
          <Trans i18nKey="NotificationPreferencesPage.acceptSuccess">Your notification preferences have been successfully updated</Trans>
        )
      }
    })
  }

  isPolicyChanged(): boolean {
    const { marketingPreferences: preferences } = this.logic.state
    if (preferences) {
      return (
        preferences.filter((preference: UserAgreementPolicyVersion) => {
          // eslint-disable-next-line array-callback-return
          if (!preference.policyId) return
          return this.state.policyMap.get(preference.policyId) !== preference.isAccepted
        }).length > 0
      )
    }
    return false
  }

  setPolicyMapFromLogic(): void {
    const { marketingPreferences: preferences } = this.logic.state
    if (preferences) {
      const policyMap = new Map<string, boolean>()
      // eslint-disable-next-line array-callback-return
      preferences.map((preference: UserAgreementPolicyVersion) => {
        // eslint-disable-next-line array-callback-return
        if (!preference.policyId || !preference.isAccepted) return
        policyMap.set(preference.policyId, preference.isAccepted)
      })
      this.setState({ policyMap })
    }
  }

  handleSubmit = async (): Promise<void> => {
    const acceptPolicies: AcceptAgreementRequest[] = []
    const { policyMap } = this.state
    const { marketingPreferences: preferences } = this.logic.state
    if (preferences) {
      preferences.forEach((preference: UserAgreementPolicyVersion) => {
        if (!preference.policyId || !preference.policyVersion || !preference.localizedPolicyVersion) return
        acceptPolicies.push({
          policyId: preference.policyId,
          policyVersionId: preference.policyVersion.id,
          localizedPolicyVersionId: preference.localizedPolicyVersion.id,
          isAccepted: !!policyMap.get(preference.policyId)
        })
      })
    }
    this.logic
      .updateMarketingPreferences(acceptPolicies)
      .then(() => {
        this.onAcceptSuccess()
      })
      .catch(error => {
        this.setErrorAlert(error)
      })
  }

  renderPolicySection(): React.ReactNode {
    const { marketingPreferences: preferences } = this.logic.state
    if (preferences !== null && preferences.length > 0) {
      return (
        <section>
          <h2>
            <Trans i18nKey="NotificationPreferencesPage.PolicyTitle">News and Products</Trans>
          </h2>
          <ul className="policyList">
            {preferences.map((preference: UserAgreementPolicyVersion) => {
              // eslint-disable-next-line array-callback-return
              if (!preference || !preference.policyId) return
              const policyId = preference.policyId
              const checked = this.state.policyMap.get(policyId)

              return (
                <li className="policyItem" key={policyId}>
                  <Checkbox
                    // @ts-ignore
                    label={preference.description}
                    isChecked={checked}
                    isLabelFirst
                    onChange={() => {
                      const { policyMap } = this.state
                      policyMap.set(policyId, !checked)
                      this.setState({ policyMap })
                    }}
                  />
                </li>
              )
            })}
          </ul>
        </section>
      )
    }
    return null
  }

  render() {
    const { isLoading, isUpdating, marketingPreferences } = this.logic.state
    const { alert } = this.state
    return (
      <AccountMainSection className="notificationsPage">
        <AccountMainSectionHeader>
          <Trans i18nKey={'NotificationPreferencesPage.title'}>Notifications</Trans>
        </AccountMainSectionHeader>
        <AccountMainSectionBody className="mainBody">
          {!isLoading && !isUpdating && !!alert && (
            <Alert type={alert.type} className="alert" onDismiss={() => this.setState({ alert: null })}>
              {alert.element}
            </Alert>
          )}
          {isLoading && <Loading />}
          {!isLoading && (
            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault()
                this.handleSubmit()
              }}>
              {this.renderPolicySection()}
              {Array.isArray(marketingPreferences) && marketingPreferences.length > 0 && (
                <div className="btnContainer">
                  <Button
                    loadingIndicator="SPINNER"
                    className="btn-primary btnSave"
                    type="submit"
                    disabled={isUpdating || !this.isPolicyChanged()}
                    isLoading={isUpdating}>
                    <Trans i18nKey="NotificationPreferencesPage.save">Save</Trans>
                  </Button>
                </div>
              )}
              {Array.isArray(marketingPreferences) && marketingPreferences.length === 0 && (
                <Trans i18nKey="NotificationPreferencesPage.noPreferences">Your notification preferences are unavailable</Trans>
              )}
            </form>
          )}
        </AccountMainSectionBody>
      </AccountMainSection>
    )
  }
}
