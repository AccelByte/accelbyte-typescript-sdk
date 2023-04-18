/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { LanguageSelector } from '@od-components/components/LanguageSelector/LanguageSelector'
import { Loading, LoadingSize } from '@od-components/components/Loading/Loading'
import { getCurrentLanguage } from '@od-components/i18n/index'
import { Env } from '@od-shared/Env'
import { VerificationCodeContext } from '@od-shared/models/AccountTypes'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { InputValidationOutdatedModal } from '../InputValidationOutdatedModal/InputValidationOutdatedModal'
import { UpgradeHeadlessAccountData, UpgradeHeadlessAccountForm } from './UpgradeHeadlessAccountForm'
import styles from './UpgradeHeadlessAccountPage.module.scss'
import { EmailVerificationForm } from './EmailVerificationForm'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useUserVerification } from '~/hooks/iam/useUserVerification'
import { useLegal } from '~/hooks/legal/useLegal'
import { useLinkedAccounts } from '~/hooks/iam/useLinkedAccounts'
import { useAppState } from '~/hooks/useAppState'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { FetchStatus } from '~/constants/fetch-statuses'
import { HeaderLogoContainer } from '@od-account/components/HeaderLogoContainer'
import { useSdk } from '~/hooks/useSdk'
import { AcceptedPoliciesRequest, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'
import { DisplayedPolicy, LegalHelper } from '@accelbyte/sdk-legal'

enum UPGRADE_STEP {
  email = 'email',
  otherData = 'otherData'
}

const REGISTRATION_EMAIL_STORAGE_KEY = 'registration_email'
type UpgradeAccountStep = keyof typeof UPGRADE_STEP

interface State {
  email: string
  alert: AlertValue | null
  displayedPolicies: DisplayedPolicy[]
  step: UpgradeAccountStep
}

export const UpgradeHeadlessAccountPage = () => {
  const [state, setState] = useState<State>({
    email: '',
    alert: null,
    displayedPolicies: [],
    step: UPGRADE_STEP.email
  })
  const { displayedPolicies, alert, step, email } = state

  const { state: userState, mutations: userMutations } = useUserInfo()
  const { state: userVerificationState, mutations: userVerificationMutations } = useUserVerification()
  const { state: linkedAccountsState, mutations: linkedAccountsMutations } = useLinkedAccounts()
  const { state: inputValidationsState, mutations: inputValidationsMutations } = useInputValidations()
  const { state: legalState, mutations: legalMutations } = useLegal()
  const { state: discoveryConfigsState } = useDiscoveryConfigs()
  const appState = useAppState()
  const [sdk] = useSdk()

  const publisherName = discoveryConfigsState.discoveryConfigData?.brandName.data.value || ''

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  // useEffect(() => {
  //   UIEvent.updateBackground(`url(${bgCommon})`)

  //   return () => {
  //     UIEvent.updateBackground(null)
  //   }
  // }, [])

  const getInputValidations = async () => {
    const result = await inputValidationsMutations.fetchValidations(getCurrentLanguage())
    if (result.error) {
      setErrorAlert(result.error)
    }
  }

  useEffect(() => {
    getInputValidations()
    const savedEmail = sessionStorage.getItem(REGISTRATION_EMAIL_STORAGE_KEY)
    updateState({ email: savedEmail || '' })

    if (savedEmail) {
      updateState({ step: UPGRADE_STEP.otherData })
    }

    return () => {
      resetSessionStorage()
    }
  }, [])

  useEffect(() => {
    const userCountry = userState.user?.country
    if (userCountry) {
      const getDisplayedPolicies = async () => {
        const result = await legalMutations.fetchPoliciesList(userCountry)
        if (result.error) {
          setErrorAlert(result.error)
          return
        }

        updateState({ displayedPolicies: LegalHelper.convertPoliciesToDisplayedPolicies(result.data || [], Env.NAMESPACE) })
      }

      getDisplayedPolicies()
    }
  }, [userState.user, legalMutations.fetchPoliciesList])

  const requestVerificationCode = async (email: string = state.email): Promise<void> => {
    if (!email) return

    const result = await userVerificationMutations.sendVerificationCode(email, VerificationCodeContext.enum.upgradeHeadlessAccount)
    if (result.error) {
      setErrorAlert(result.error)
      return
    }
    updateState({ email })
    redirectToOtherData()
  }

  const setErrorAlert = async (error: Error) => {
    const isValidationOutdated = await inputValidationsMutations.refetchIfValidationError(error)
    if (isValidationOutdated) {
      updateState({ alert: null })
      return
    }

    const errorCode = ErrorHelper.extractServiceErrorCode(error)
    updateState({
      alert: {
        type: AlertType.danger,
        element: (() => {
          switch (errorCode) {
            case 10130:
              return <Trans i18nKey="UpdateUser.error.updateErrorUnderage">You are below the required age</Trans>
            default:
              return <CommonError error={error} />
          }
        })()
      }
    })
  }

  const dismissAlert = (): void => {
    updateState({ alert: null })
  }

  const redirectToOtherData = () => {
    sessionStorage.setItem(REGISTRATION_EMAIL_STORAGE_KEY, state.email)
    updateState({
      step: UPGRADE_STEP.otherData,
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="ChangeEmailPage.verifyCodeForm.codeSent">A verification code has been sent to your email</Trans>
      }
    })
  }

  const onReload = () => {
    updateState({ alert: null })
    getInputValidations()
  }

  const onChangePage = () => {
    updateState({ step: UPGRADE_STEP.email, email: '' })
    resetSessionStorage()
  }

  const onContinue = async ({
    password,
    displayName,
    username,
    reachMinimumAge,
    verificationCode,
    acceptedPolicyIds
  }: UpgradeHeadlessAccountData): Promise<void> => {
    const country = userState.user?.country ?? ''

    const result = await linkedAccountsMutations.upgradeHeadlessAccount(
      {
        displayName,
        password,
        username,
        country,
        reachMinimumAge,
        emailAddress: state.email,
        code: verificationCode
      },
      Env.IS_DISABLE_USERNAME
    )
    if (result.error) {
      setErrorAlert(result.error)
      return
    }

    await bulkAcceptPolicies(acceptedPolicyIds)
    resetSessionStorage()
    const tokenResponse = await userMutations.refreshToken()
    if (tokenResponse) {
      appState.refreshSession(tokenResponse.access_token, tokenResponse.refresh_token)
    }
    await appState.refreshUser()
  }

  const resetSessionStorage = () => {
    sessionStorage.removeItem(REGISTRATION_EMAIL_STORAGE_KEY)
  }

  const getEligibilities = (policyIds: string[]): AcceptedPoliciesRequest[] => {
    const eligibilities: AcceptedPoliciesRequest[] = []
    for (const displayedPolicy of state.displayedPolicies) {
      eligibilities.push({
        policyId: displayedPolicy.policyId,
        policyVersionId: displayedPolicy.policyVersionId,
        localizedPolicyVersionId: displayedPolicy.localizedPolicyVersionId,
        isAccepted: policyIds.includes(displayedPolicy.policyId)
      })
    }
    return eligibilities
  }

  const bulkAcceptPolicies = async (policyIds: string[]) => {
    const user = userState.user
    const acceptedPolicies = getEligibilities(policyIds)
    if (acceptedPolicies && user) {
      await legalMutations.bulkAcceptPolicies(acceptedPolicies)
    }
  }

  const backToLogin = () => {
    resetSessionStorage()
    appState.logout()

    const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL()
    window.location.replace(loginURL)
  }

  return (
    <div className={styles.headlessAccountPage}>
      <LanguageSelector className="fixed top-0 right-0 mt-8 mr-8" />
      <div className={styles.headlessAccountPageContainer}>
        <HeaderLogoContainer />
        <div className={styles.headlessAccountPageContainerForm}>
          <div className={styles.contentWrapper}>
            <div className={styles.title}>
              {step === UPGRADE_STEP.email && (
                <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.title">Upgrade to Full Account</Trans>
              )}
              {step === UPGRADE_STEP.otherData && (
                <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.title">Finish Account Setup</Trans>
              )}
            </div>
            <div className={styles.description}>
              {step === UPGRADE_STEP.email && (
                <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.description">
                  Enter your email address below to start creating your {{ publisherName }} account
                </Trans>
              )}
              {step === UPGRADE_STEP.otherData && (
                <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.description">
                  Enter the verification code we’ve sent to your email at <strong>{{ email }}</strong>, and complete the form below
                </Trans>
              )}
            </div>
          </div>
          <div className={styles.formWrapper}>
            {!!alert && (
              <div className={styles.alert}>
                <Alert type={alert.type} onDismiss={dismissAlert}>
                  {alert.element}
                </Alert>
                {!!inputValidationsState.validationsError && (
                  <Button className="btn btn-primary mt-4 w-full" onClick={onReload}>
                    <Trans i18nKey="Common.reload">Reload</Trans>
                  </Button>
                )}
              </div>
            )}
            {state.step === UPGRADE_STEP.email && (
              <EmailVerificationForm
                styles={styles}
                onRequestVerificationCode={requestVerificationCode}
                isRequesting={userVerificationState.fetchVerificationStatus === FetchStatus.REQUESTING}
              />
            )}
            {state.step === UPGRADE_STEP.otherData && (
              <div>
                {inputValidationsState.validations.length <= 0 && inputValidationsState.validationsFetchStatus === FetchStatus.FETCHING && (
                  <Loading className={LoadingSize.medium} />
                )}
                {inputValidationsState.validations.length > 0 && !inputValidationsState.validationsError && userState.user && (
                  <UpgradeHeadlessAccountForm
                    onChangePage={onChangePage}
                    onContinue={onContinue}
                    onRequestVerificationCode={requestVerificationCode}
                    policies={displayedPolicies}
                    isUpgradingUser={
                      linkedAccountsState.upgradeHeadlessAccountFetchStatus === FetchStatus.FETCHING ||
                      legalState.bulkAcceptPoliciesFetchStatus === FetchStatus.FETCHING
                    }
                    isRequestingVerificationCode={userVerificationState.fetchVerificationStatus === FetchStatus.REQUESTING}
                    user={userState.user}
                    styles={styles}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <div className={styles.backContainer}>
          <button onClick={backToLogin}>
            <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.logout">Back to Login</Trans>
          </button>
        </div>

        <InputValidationOutdatedModal />
      </div>
    </div>
  )
}
