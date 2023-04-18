/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import classNames from 'classnames'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { Env } from '@od-shared/Env'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { VerificationCodeContext } from '@od-shared/models/AccountTypes'
import { getCurrentLanguage, t } from '@od-components/i18n/index'
import { Alert } from '@od-components/components/Alert/Alert'
import { Button, ButtonStyle } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { Loading, LoadingSize } from '@od-components/components/Loading/Loading'
import { Trans } from 'react-i18next'
import styles from '../LinkAccountWithOneTimeCodePage.module.scss'
import { UpgradeHeadlessAccountData, UpgradeHeadlessAccountForm } from '../../UpgradeHeadlessAccount/UpgradeHeadlessAccountForm'
import { EmailVerificationForm } from '../../UpgradeHeadlessAccount/EmailVerificationForm'
import { SuccessMessage } from '../SuccessMessage'
import { EXPIRED_CODE_MESSAGE, ONE_TIME_CODE_LENGTH } from '../constants'
import { RestartMessage } from './RestartMessage'
import { CommonTitle } from './CommonTitle'
import { useLinkedAccounts } from '~/hooks/iam/useLinkedAccounts'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { useLegal } from '~/hooks/legal/useLegal'
import { useUserVerification } from '~/hooks/iam/useUserVerification'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useSdk, useSdkOptions } from '~/hooks/useSdk'
import { useAppState } from '~/hooks/useAppState'
import { FetchStatus } from '~/constants/fetch-statuses'
import { AcceptedPoliciesRequest, Iam } from '@accelbyte/sdk-iam'
import { DisplayedPolicy, LegalHelper } from '@accelbyte/sdk-legal'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'

enum UpgradeStep {
  email = 'email',
  otherData = 'otherData',
  shouldRestart = 'shouldRestart',
  success = 'success'
}

interface Props {
  onShowTitle: () => void
  onHideTitle: () => void
  onRestart: () => void
  oneTimeLinkCode: string
}

interface State {
  step: keyof typeof UpgradeStep
  email: string
  alert: AlertValue | null
  displayedPolicies: DisplayedPolicy[]
  isRequestingVerificationCode: boolean
  alreadyRefreshToken: boolean
}

export const UpgradeToFullAccount = (props: Props) => {
  const [state, setState] = React.useState<State>({
    email: '',
    alert: null,
    displayedPolicies: [],
    step: UpgradeStep.email,
    isRequestingVerificationCode: false,
    alreadyRefreshToken: false
  })

  const { state: userState, mutations: userMutations } = useUserInfo()
  const { state: linkedAccountsState, mutations: linkedAccountsMutations } = useLinkedAccounts()
  const { state: inputValidationsState, mutations: inputValidationsMutations } = useInputValidations()
  const { state: legalState, mutations: legalMutations } = useLegal()
  const { state: userVerificationState, mutations: userVerificationMutations } = useUserVerification()
  const [sdk] = useSdk()
  const [sdkOptions] = useSdkOptions()
  const appState = useAppState()
  const {
    state: { discoveryConfigData }
  } = useDiscoveryConfigs()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  React.useEffect(() => {
    fetchValidations()
  }, [])

  const fetchPolicies = async () => {
    const user = userState.user
    if (!user) return

    const result = await legalMutations.fetchPoliciesList(user.country)
    if (result.error) {
      setErrorAlert(result.error)
      return
    }

    updateState({
      displayedPolicies: LegalHelper.convertPoliciesToDisplayedPolicies(result.data || [], sdkOptions.namespace)
    })
  }

  const fetchValidations = async () => {
    const result = await inputValidationsMutations.fetchValidations(getCurrentLanguage())
    if (result.error) {
      setErrorAlert(result.error)
    }
  }

  const redirectToOtherData = () => {
    updateState({
      step: UpgradeStep.otherData,
      alert: {
        type: AlertType.success,
        element: t('ChangeEmailPage.verifyCodeForm.codeSent')
      }
    })
    props.onHideTitle()
  }

  const requestVerificationCode = async (email: string = state.email): Promise<void> => {
    const { step, isRequestingVerificationCode, alreadyRefreshToken } = state
    const { oneTimeLinkCode } = props
    const isInEmailStep = step === UpgradeStep.email

    try {
      if (!email || isRequestingVerificationCode) return

      updateState({ isRequestingVerificationCode: true })
      userVerificationMutations.resetErrorState()

      if (isInEmailStep && !alreadyRefreshToken) {
        const tokenExhangeResult = await Iam.OAuth20ExtensionApi(sdk).postLinkTokenExchange({
          oneTimeLinkCode,
          client_id: sdkOptions.clientId
        })

        const { access_token: accessToken, refresh_token: refreshToken } = tokenExhangeResult
        updateState({ alreadyRefreshToken: true })
        appState.refreshSession(accessToken, refreshToken)
      }

      await userVerificationMutations.sendVerificationCode(email, VerificationCodeContext.enum.upgradeHeadlessAccount)
      await appState.refreshUser()

      if (isInEmailStep) {
        fetchPolicies()
      }
      updateState({ email, isRequestingVerificationCode: false })
      redirectToOtherData()
    } catch (error) {
      updateState({ isRequestingVerificationCode: false })

      if (userVerificationState.requestVerificationCodeError) {
        setErrorAlert(userVerificationState.requestVerificationCodeError)
        return
      }

      setErrorAlert(error)
    }
  }

  const setErrorAlert = async (error: Error | unknown) => {
    const isInputValidationError = await inputValidationsMutations.refetchIfValidationError(error as Error)
    if (isInputValidationError) {
      updateState({ alert: null })
      return
    }

    const { oneTimeLinkCode, onHideTitle } = props
    const errorDescription = ErrorHelper.isAxiosError(error) ? (error.response?.data.error_description as string) : ''
    const isCodeExpired = errorDescription?.includes(EXPIRED_CODE_MESSAGE)
    const errorCode = ErrorHelper.extractServiceErrorCode(error)

    if (isCodeExpired) {
      onHideTitle()
      updateState({
        step: UpgradeStep.shouldRestart,
        alert: {
          type: AlertType.danger,
          element:
            oneTimeLinkCode.length === ONE_TIME_CODE_LENGTH
              ? t('LinkAccountWithOneTimeCodePage.error.expired')
              : t('LinkAccountWithOneTimeCodePage.error.invalid')
        }
      })
      return
    }

    updateState({
      alert: {
        type: AlertType.danger,
        element: (() => {
          switch (errorCode) {
            case 10130:
              return t('UpdateUser.error.updateErrorUnderage')
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

  const onReload = () => {
    updateState({ alert: null })
    fetchValidations()
  }

  const onGoBackToEmail = () => {
    updateState({ step: UpgradeStep.email, email: '' })
    props.onShowTitle()
  }

  const onCompleteProcess = async ({
    password,
    displayName,
    username,
    reachMinimumAge,
    verificationCode,
    acceptedPolicyIds
  }: UpgradeHeadlessAccountData): Promise<void> => {
    const { email } = state
    const user = userState.user
    const country = user?.country || ''

    try {
      const result = await linkedAccountsMutations.upgradeHeadlessAccount(
        {
          displayName,
          password,
          username,
          country,
          reachMinimumAge,
          emailAddress: email,
          code: verificationCode
        },
        Env.IS_DISABLE_USERNAME
      )
      if (result.error) throw result.error

      await bulkAcceptPolicies(acceptedPolicyIds)

      const tokenResponse = await userMutations.refreshToken()
      if (tokenResponse) {
        appState.refreshSession(tokenResponse.access_token, tokenResponse.refresh_token)
      }
      appState.refreshUser()
      updateState({ alert: null, step: UpgradeStep.success })
    } catch (error) {
      setErrorAlert(error)
    }
  }

  const getEligibilities = (policyIds: string[]): AcceptedPoliciesRequest[] => {
    const eligibilities: AcceptedPoliciesRequest[] = []
    const { displayedPolicies } = state
    for (const displayedPolicy of displayedPolicies) {
      const { policyId, policyVersionId, localizedPolicyVersionId } = displayedPolicy

      eligibilities.push({
        policyId,
        policyVersionId,
        localizedPolicyVersionId,
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

  const { displayedPolicies, alert, step, email, isRequestingVerificationCode } = state
  const user = userState.user
  const publisherName = discoveryConfigData?.brandName.data.value || ''
  const isUpgradingHeadlessAccount = linkedAccountsState.upgradeHeadlessAccountFetchStatus === FetchStatus.FETCHING
  const isAccepting = legalState.bulkAcceptPoliciesFetchStatus === FetchStatus.FETCHING
  const { validationsFetchStatus, validationsError, validations } = inputValidationsState
  const isFetchingValidations = validationsFetchStatus === FetchStatus.FETCHING
  const shouldRestart = step === UpgradeStep.shouldRestart

  return (
    <>
      {step === UpgradeStep.otherData && (
        <div className="mb-6 text-center">
          <p className={styles.title}>
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.selectLinkMode.tab.upgradeToFull">Upgrade to Full Account</Trans>
          </p>
          <p className={styles.description}>
            <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.description">
              Enter the verification code we’ve sent to your email at <strong>{{ email }}</strong>, and complete the form below
            </Trans>
          </p>
        </div>
      )}

      {shouldRestart && <CommonTitle />}

      {!!alert && (
        <div className={classNames('mb-4', shouldRestart ? 'mt-5' : 'mt-[-8px]')}>
          <Alert type={alert.type} onDismiss={dismissAlert}>
            {alert.element}
          </Alert>
          {!!isFetchingValidations && (
            <Button className="btn btn-primary mt-4 w-full" onClick={onReload}>
              {t('Common.reload')}
            </Button>
          )}
        </div>
      )}

      {step === UpgradeStep.email && (
        <EmailVerificationForm
          styles={styles}
          onRequestVerificationCode={requestVerificationCode}
          isRequesting={isRequestingVerificationCode}
        />
      )}
      {step === UpgradeStep.otherData && (
        <>
          {validations.length <= 0 && isFetchingValidations && <Loading className={LoadingSize.medium} />}
          {validations.length > 0 && !validationsError && user && (
            <UpgradeHeadlessAccountForm
              onChangePage={onGoBackToEmail}
              onContinue={onCompleteProcess}
              onRequestVerificationCode={requestVerificationCode}
              policies={displayedPolicies}
              isUpgradingUser={isUpgradingHeadlessAccount || isAccepting || isFetchingValidations}
              {...{ isRequestingVerificationCode, user, email, styles }}
            />
          )}
          <Button buttonStyle={ButtonStyle.NONE} onClick={onGoBackToEmail} className="absolute bottom-0 left-1/2 mb-24 -translate-x-2/4">
            {t('common.back')}
          </Button>
        </>
      )}
      {step === UpgradeStep.success && <SuccessMessage publisherName={publisherName} isUpgradeToFull />}
      {step === UpgradeStep.shouldRestart && <RestartMessage onRestart={props.onRestart} />}
    </>
  )
}
