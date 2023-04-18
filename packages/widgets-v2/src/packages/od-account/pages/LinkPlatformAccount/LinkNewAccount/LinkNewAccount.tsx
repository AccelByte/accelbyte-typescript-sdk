/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { DisplayEmailValidationError } from '@od-account/utils/FormValidationError'
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { FormGroup } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { PasswordConstraint } from '@od-components/components/InputConstraint/PasswordConstraint'
import { Loading, LoadingSize } from '@od-components/components/Loading/Loading'
import { getCurrentLanguage, t } from '@od-components/i18n/i18n'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { AuthType } from '@od-shared/models/Linked'
import { REGISTRATION_LINK_ACCOUNT_EMAIL_STORAGE_KEY } from '@od-shared/models/User'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { CommonValidationErrorType, Validation } from '@accelbyte/validator'
import React, { useEffect, useRef, useState } from 'react'
import { Trans } from 'react-i18next'
import { SelectOption } from '@od-components/components/Form/Select/Select'
import { InputValidationOutdatedModal } from '../../InputValidationOutdatedModal/InputValidationOutdatedModal'
import { redirectAfterSuccessLinkAccount } from '../common'
import styles from './LinkNewAccount.module.scss'
import { LinkNewAccountForm, LinkNewAccountFormData } from './LinkNewAccountForm'
import { useLinkedAccounts } from '~/hooks/iam/useLinkedAccounts'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { useCountries } from '~/hooks/iam/useCountries'
import { useAgeRestriction } from '~/hooks/iam/useAgeRestriction'
import { useLegal } from '~/hooks/legal/useLegal'
import { useUserVerification } from '~/hooks/iam/useUserVerification'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useAppState } from '~/hooks/useAppState'
import { useHistory } from '~/hooks/routes/useHistory'
import { useSdkOptions } from '~/hooks/useSdk'
import { DisplayedPolicy, LegalHelper } from '@accelbyte/sdk-legal'
import { AcceptedPoliciesRequest, InputValidationHelper, ValidateableInputField } from '@accelbyte/sdk-iam'

interface Props {
  onContinueToRegistrationForm: (hideTitleAndTabs: boolean) => void
  platformId: string
  clientId: string
  linkingToken: string
  isPreviewMode?: boolean
}

enum LINK_STEP {
  'email' = 'email',
  'registrationForm' = 'registrationForm'
}
type LinkAccountStep = keyof typeof LINK_STEP

interface State {
  email: string
  alert: AlertValue | null
  displayedPolicies: DisplayedPolicy[]
  step: LinkAccountStep
  isFetchingRequiredData: boolean
  isSubmitting: boolean
}

export const LinkNewAccount = ({ platformId, clientId, linkingToken, isPreviewMode, onContinueToRegistrationForm }: Props) => {
  const validation = useRef<
    Validation<{
      email: CommonValidationErrorType
    }>
  >(new Validation())
  const [state, setState] = useState<State>({
    email: '',
    alert: null,
    displayedPolicies: [],
    step: LINK_STEP.email,
    isFetchingRequiredData: false,
    isSubmitting: false
  })

  const { state: linkedAccountsState, mutations: linkedAccountsMutations } = useLinkedAccounts()
  const { state: inputValidationsState, mutations: inputValidationsMutations } = useInputValidations()
  const { state: countriesState, mutations: countriesMutations } = useCountries()
  const { state: ageRestrictionState, mutations: ageRestrictionMutations } = useAgeRestriction()
  const { mutations: legalMutations } = useLegal()
  const { state: userVerificationState, mutations: userVerificationMutations } = useUserVerification()
  const { state: historyState } = useHistory()
  const appState = useAppState()
  const [sdkOptions] = useSdkOptions()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    getInputValidations()
    getCountryRelatedData()

    const savedEmail = sessionStorage.getItem(REGISTRATION_LINK_ACCOUNT_EMAIL_STORAGE_KEY)
    updateState({ email: savedEmail || '' })

    if (savedEmail) {
      updateState({ step: LINK_STEP.registrationForm })
    }

    return () => {
      resetSessionStorage()
    }
  }, [])

  const getCountryRelatedData = async () => {
    try {
      updateState({ isFetchingRequiredData: true })
      await countriesMutations.fetchCountries()
      const currentCountryResult = await countriesMutations.fetchCurrentLocationCountry()

      const currentCountry = currentCountryResult.data?.countryCode
      await getPoliciesAndAgeRestrictionByCountry(currentCountry)
    } finally {
      updateState({ isFetchingRequiredData: false })
    }
  }

  const getInputValidations = async () => {
    const result = await inputValidationsMutations.fetchValidations(getCurrentLanguage())
    if (result.error) {
      setErrorAlert(result.error)
    }
  }

  const getPoliciesAndAgeRestrictionByCountry = async (countryCode?: string) => {
    if (!countryCode) return

    await ageRestrictionMutations.fetchAgeRestrictionByCountry(countryCode)
    const legalResult = await legalMutations.fetchPoliciesList(countryCode)
    if (legalResult.error) return

    const policiesByCountry = legalResult.data
    updateState({
      displayedPolicies: LegalHelper.convertPoliciesToDisplayedPolicies(policiesByCountry || [], sdkOptions.namespace)
    })
  }

  const requestVerificationCode = async (): Promise<void> => {
    if (!state.email) return
    const result = await userVerificationMutations.sendNewUserVerificationCode(state.email)
    if (result.error) {
      setErrorAlert(result.error)
      return
    }

    redirectToRegistrationForm()
  }

  const setErrorAlert = async (error: Error) => {
    const isInputValidationError = await inputValidationsMutations.refetchIfValidationError(error)
    if (isInputValidationError) {
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
            case 10152:
              return <Trans i18nKey="User.verifyCode.invalid">Verification code is either been used or not valid anymore.</Trans>
            default:
              return <CommonError error={error} />
          }
        })()
      }
    })
  }

  const linkPlatformAccountError = (error: Error) => {
    setErrorAlert(error)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const dismissAlert = (): void => {
    updateState({ alert: null })
  }

  const redirectToRegistrationForm = () => {
    sessionStorage.setItem(REGISTRATION_LINK_ACCOUNT_EMAIL_STORAGE_KEY, state.email)
    updateState({
      step: LINK_STEP.registrationForm,
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="ChangeEmailPage.verifyCodeForm.codeSent">A verification code has been sent to your email</Trans>
      }
    })

    onContinueToRegistrationForm(true)
  }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const email = event.target.value.toString().toLocaleLowerCase()
    validation.current.set('email', InputValidationHelper.validateEmail(email, inputValidationsState.validations))
    updateState({ email })
  }

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validation.current.get('email') && state.email) {
      requestVerificationCode()
    }
  }

  const onReload = () => {
    updateState({ alert: null })
    getInputValidations()
  }

  const renderLinkNewVerifyAccount = () => {
    const isRequestingVerificationCode = userVerificationState.fetchVerificationStatus === FetchStatus.REQUESTING
    const validations = inputValidationsState.validations
    const emailProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.email, validations)
    return (
      <form onSubmit={onFormSubmit} noValidate>
        <FormGroup>
          <div className={styles.label}>
            <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.email">Email</Trans>
          </div>
          <InputGroup
            type={'email'}
            className={styles.input}
            value={state.email}
            placeholder={t('linkPlatformAccountPage.LinkNewAccount.placeholder.email')}
            onChange={onEmailChange}
            popoverContent={
              <PasswordConstraint
                descriptions={InputValidationHelper.getValidationDescription(ValidateableInputField.enum.email, validations)}
              />
            }
          />
          {DisplayEmailValidationError(validation.current.get('email'), {
            minLength: emailProps?.minLength,
            maxLength: emailProps?.maxLength
          })}
        </FormGroup>
        <Button
          loadingIndicator="SPINNER"
          disabled={!isPreviewMode && (!!validation.current.get('email') || !state.email)}
          className="btn btn-primary w-full uppercase"
          onClick={!isPreviewMode ? requestVerificationCode : undefined}
          isLoading={isRequestingVerificationCode}>
          <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.continue">CONTINUE</Trans>
        </Button>
      </form>
    )
  }

  const onChangePage = () => {
    updateState({ step: LINK_STEP.email, email: '', alert: null })
    onContinueToRegistrationForm(false)
    resetSessionStorage()
  }

  const onContinue = async ({
    password,
    displayName,
    username,
    acceptedPolicyIds,
    reachMinimumAge,
    verificationCode,
    country
  }: LinkNewAccountFormData): Promise<void> => {
    const { email } = state

    const acceptedPolicies = getEligibilities(acceptedPolicyIds)

    try {
      updateState({ isSubmitting: true })
      const result = await linkedAccountsMutations.linkNewPlatformAccount({
        linkingToken,
        clientId,
        userAccountParams: {
          authType: AuthType.enum.EMAILPASSWD,
          displayName,
          password,
          username,
          country: country.value,
          reachMinimumAge,
          emailAddress: email,
          code: verificationCode,
          acceptedPolicies
        },
        refreshSession: appState.refreshSession
      })
      if (result.error) throw result.error

      resetSessionStorage()
      await appState.refreshUser()
      if (result.data?.user_id) {
        await linkedAccountsMutations.updateUserCustomAttribute(result.data.user_id, platformId)
      }

      redirectAfterSuccessLinkAccount(historyState)
    } catch (error) {
      linkPlatformAccountError(error as Error)
    } finally {
      updateState({ isSubmitting: false })
    }
  }

  const resetSessionStorage = () => {
    sessionStorage.removeItem(REGISTRATION_LINK_ACCOUNT_EMAIL_STORAGE_KEY)
  }

  const getEligibilities = (policyIds: string[]): AcceptedPoliciesRequest[] => {
    const eligibilities: AcceptedPoliciesRequest[] = []
    const { displayedPolicies } = state
    for (const displayedPolicy of displayedPolicies) {
      eligibilities.push({
        policyId: displayedPolicy.policyId,
        policyVersionId: displayedPolicy.policyVersionId,
        localizedPolicyVersionId: displayedPolicy.localizedPolicyVersionId,
        isAccepted: policyIds.includes(displayedPolicy.policyId)
      })
    }
    return eligibilities
  }

  const onChangeCountry = (country: SelectOption) => {
    getPoliciesAndAgeRestrictionByCountry(country.value)
  }

  const { displayedPolicies, alert, step, email, isSubmitting } = state
  const { validationsError, validations, validationsFetchStatus } = inputValidationsState
  const isFetchingInputValidations = validationsFetchStatus === FetchStatus.FETCHING
  const { currentCountryLocation, countries } = countriesState
  const country = { value: currentCountryLocation?.countryCode ?? '', label: currentCountryLocation?.countryName ?? '' }
  const isRequestingVerificationCode = userVerificationState.fetchVerificationStatus === FetchStatus.REQUESTING

  return (
    <>
      <div className={styles.linkNewAccountContainerForm}>
        <div className={styles.contentWrapper}>
          {step === LINK_STEP.registrationForm && (
            <>
              <div className={styles.title}>
                <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.title">Create your account</Trans>
              </div>
              <div className={styles.description}>
                <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.description">
                  Enter the verification code we’ve sent to your email at <strong>{{ email }}</strong>, and complete the form below
                </Trans>
              </div>
            </>
          )}
        </div>

        <div className={styles.formWrapper}>
          {!!alert && (
            <div className={styles.alert}>
              <Alert type={alert.type} onDismiss={dismissAlert}>
                {alert.element}
              </Alert>
              {!!validationsError && (
                <Button className="btn btn-primary mt-4 w-full" onClick={onReload}>
                  <Trans i18nKey="Common.reload">Reload</Trans>
                </Button>
              )}
            </div>
          )}
          {step === LINK_STEP.email && renderLinkNewVerifyAccount()}

          {step === LINK_STEP.registrationForm && (
            <div>
              {(validations.length <= 0 && isFetchingInputValidations) ||
                (state.isFetchingRequiredData && <Loading className={LoadingSize.medium} />)}
              {validations.length > 0 && !validationsError && !state.isFetchingRequiredData && (
                <LinkNewAccountForm
                  onChangePage={onChangePage}
                  onContinue={onContinue}
                  onChangeCountry={onChangeCountry}
                  onRequestVerificationCode={requestVerificationCode}
                  policies={displayedPolicies}
                  isLinkingUser={isSubmitting}
                  countries={countries || []}
                  currentCountry={country}
                  ageRestriction={ageRestrictionState.ageRestriction}
                  linkNewPlatformAccountError={linkedAccountsState.linkAccountError}
                  isRequestingVerificationCode={isRequestingVerificationCode}
                  email={email}
                  platformId={platformId}
                />
              )}
            </div>
          )}
        </div>
      </div>
      <InputValidationOutdatedModal />
    </>
  )
}
