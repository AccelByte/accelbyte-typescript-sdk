/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { Loading } from '@od-components/components/Loading/Loading'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import {
  LegalHelper,
  LocalizedPolicyVersionObject,
  PolicyVersionWithLocalizedVersionObject,
  RetrieveUserEligibilitiesResponse,
  RetrieveUserEligibilitiesResponseArray
} from '@accelbyte/sdk-legal'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import './PromptLegalPage.scss'
import { LegalUtils } from '@od-legal/utils/LegalUtils'
import { useLegal } from '~/hooks/legal/useLegal'
import { useAppState } from '~/hooks/useAppState'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { HeaderLogoContainer } from '@od-account/components/HeaderLogoContainer'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { AcceptedPoliciesRequest } from '@accelbyte/sdk-iam'

export const PromptLegalPage = () => {
  const [alert, setAlert] = useState<AlertValue | null>(null)

  const { state: userState, mutations: userMutations } = useUserInfo()
  const { state: legalState, mutations: legalMutations } = useLegal()
  const { state: discoveryConfigsState } = useDiscoveryConfigs()
  const appState = useAppState()

  const isAcceptingLegal = legalState.bulkAcceptPoliciesFetchStatus === FetchStatus.FETCHING
  const isFetchingPolicy = legalState.policiesFetchStatus === FetchStatus.FETCHING
  const hasEligibility = !isFetchingPolicy && legalState.eligibilities && legalState.eligibilities.length > 0
  const isLegalV2Enabled = !!discoveryConfigsState.flags?.isPaymentV2Enabled

  // useEffect(() => {
  //   UIEvent.updateBackground(`url(${bgCommon})`)

  //   return () => {
  //     UIEvent.updateBackground(null)
  //   }
  // }, [])

  const getEligibilities = (): RetrieveUserEligibilitiesResponseArray => {
    const { eligibilities } = legalState
    return eligibilities || []
  }

  const setErrorAlert = (error: Error | unknown): void => {
    setAlert({
      type: AlertType.danger,
      element: <CommonError error={error} />
    })
  }

  const bulkAcceptPolicies = async () => {
    const eligibilities = getEligibilities()
    if (eligibilities && userState.user) {
      const acceptedPolicies: AcceptedPoliciesRequest[] = LegalHelper.getAcceptedPolicies(eligibilities)
      const result = await legalMutations.bulkAcceptPolicies(acceptedPolicies)
      if (result.error) {
        setErrorAlert(result.error)
        return
      }

      const tokenResponse = await userMutations.refreshToken()
      if (tokenResponse) {
        appState.refreshSession(tokenResponse.access_token, tokenResponse.refresh_token)
        await appState.refreshUser()
      }
    }
  }

  const renderPolicies = () => {
    const eligibilities = getEligibilities()
    if (!eligibilities) return null
    return (
      <ul className="policies">
        {eligibilities.map((legalEligibility: RetrieveUserEligibilitiesResponse) => {
          return (
            legalEligibility.policyVersions &&
            legalEligibility.policyVersions.map((policyVersion: PolicyVersionWithLocalizedVersionObject) => {
              if (!Array.isArray(policyVersion.localizedPolicyVersions)) return null
              return policyVersion.localizedPolicyVersions.map((localizedPolicyVersion: LocalizedPolicyVersionObject) => {
                return (
                  <li key={localizedPolicyVersion.id} className="policyItem">
                    {legalEligibility.policyName}
                    <a
                      href={LegalHelper.createLegalURL(LegalUtils.getLegalUrl(isLegalV2Enabled), localizedPolicyVersion.id)}
                      className="readMore"
                      target="_blank"
                      rel="noreferrer">
                      <Trans i18nKey="PromptLegalPage.readMore">Read More</Trans>
                    </a>
                  </li>
                )
              })
            })
          )
        })}
      </ul>
    )
  }

  return (
    <div className="promptLegalPage">
      <div className="promptLegalPageContainer">
        <HeaderLogoContainer />
        <div className="legalContent">
          {legalState.policiesFetchStatus === FetchStatus.FETCHING && <Loading />}
          {(hasEligibility || isAcceptingLegal) && (
            <>
              <div className="legalHeader">
                <h1>
                  <Trans i18nKey="PromptLegalPage.title">New Agreement and Policy Terms</Trans>
                </h1>
              </div>
              <div className="legalBody">
                {!isAcceptingLegal && !!alert && (
                  <Alert className="legalBodyAlert" type={alert.type} onDismiss={() => setAlert(null)}>
                    {alert.element}
                  </Alert>
                )}
                <Trans i18nKey="PromptLegalPage.description">
                  <p>
                    We have updated our user agreement and policy to better explain what data we collect from you, why we collect it, and
                    how it's used.
                  </p>
                  <p>The following terms have been updated:</p>
                </Trans>
                {renderPolicies()}
                <div className="notes">
                  <Trans i18nKey="PromptLegalPage.notes">
                    <p>
                      Please take a moment to read and understand the updated agreement. By clicking the Accept button, you agree to these
                      changes.
                    </p>
                  </Trans>
                </div>
              </div>
              <div className="legalFooter">
                <Button
                  loadingIndicator="SPINNER"
                  className="btn-primary btn-accept"
                  isLoading={isAcceptingLegal}
                  disabled={isAcceptingLegal}
                  onClick={bulkAcceptPolicies}>
                  <Trans i18nKey="PromptLegalPage.accept">Accept</Trans>
                </Button>
                <Button
                  className="btn-decline"
                  buttonType={ButtonType.TEXT}
                  buttonStyle={ButtonStyle.NONE}
                  onClick={() => appState.logout()}
                  disabled={isAcceptingLegal}>
                  <Trans i18nKey="PromptLegalPage.decline">Decline</Trans>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
