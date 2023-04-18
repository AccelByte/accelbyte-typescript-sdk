/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { DisplayNameValidationError, PasswordValidationError, UserNameValidationError } from '@od-account/utils/FormValidationError'
import { Button } from '@od-components/components/Button/Button'
import { Checkbox } from '@od-components/components/Form/Checkbox/Checkbox'
import { FormGroup } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { InputGroupPassword } from '@od-components/components/Form/InputPassword/InputPassword'
import { PasswordConstraint } from '@od-components/components/InputConstraint/PasswordConstraint'
import { Select, SelectOption } from '@od-components/components/Form/Select/Select'
import { t } from '@od-components/i18n/i18n'
import { Env } from '@od-shared/Env'
import {
  ValidateAlphaNumericErrorType,
  ValidateForbiddenWordsErrorType,
  ValidateLengthErrorType,
  validateNotEmpty,
  ValidateNotEmptyErrorType,
  ValidateRegexErrorType,
  Validation
} from '@accelbyte/validator'
import React, { useEffect, useRef, useState } from 'react'
import { Trans } from 'react-i18next'
import { LinkPlatformAccountConfirmationDialog } from '../LinkPlatformAccountConfirmationDialog'
import styles from './LinkNewAccount.module.scss'
import { LinkNewAccountVerification } from './LinkNewAccountVerification'
import { LegalUtils } from '@od-legal/utils/LegalUtils'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { FetchStatus } from '~/constants/fetch-statuses'
import { CountryObjectArray } from '@accelbyte/sdk-basic'
import { DisplayedPolicy, LegalHelper } from '@accelbyte/sdk-legal'
import { InputValidationHelper, ValidateableInputField } from '@accelbyte/sdk-iam'

export interface LinkNewAccountFormData {
  password: string
  country: SelectOption
  displayName: string
  username: string
  acceptedPolicyIds: string[]
  reachMinimumAge: boolean
  verificationCode: string
}

interface State {
  verificationCode: string
  country: SelectOption
  displayName: string
  username: string
  password: string
  requiredPolicies: DisplayedPolicy[]
  optionalPolicies: DisplayedPolicy[]
  isRequiredPolicyAccepted: boolean
  reachMinimumAge: boolean
  acceptedOptionalPolicyIdMap: Map<string, boolean>
  openConfirmDialog: boolean
}

interface Props {
  onChangePage?: () => void
  onChangeCountry: (country: SelectOption) => void
  isRequestingVerificationCode: boolean
  linkNewPlatformAccountError: Error | unknown | null
  policies?: DisplayedPolicy[] | null
  onContinue: (formData: LinkNewAccountFormData) => unknown
  onRequestVerificationCode: () => Promise<void>
  isLinkingUser: boolean
  email: string
  currentCountry: SelectOption
  countries: CountryObjectArray
  ageRestriction: { age: number; countryName: string }
  platformId: string
}

export const LinkNewAccountForm = (props: Props) => {
  const validation = useRef<
    Validation<{
      displayName: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
      username: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
      password: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
      country: ValidateNotEmptyErrorType
      verificationCode: ValidateAlphaNumericErrorType
    }>
  >(new Validation())
  const [state, setState] = useState<State>({
    verificationCode: '',
    displayName: '',
    country: props.currentCountry,
    username: '',
    password: '',
    requiredPolicies: [],
    optionalPolicies: [],
    isRequiredPolicyAccepted: false,
    reachMinimumAge: false,
    acceptedOptionalPolicyIdMap: new Map() as Map<string, boolean>,
    openConfirmDialog: false
  })

  const { state: inputValidationsState } = useInputValidations()
  const {
    state: { flags }
  } = useDiscoveryConfigs()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    updatePolicies()
  }, [])

  useEffect(() => {
    updatePolicies()
  }, [JSON.stringify(props.policies)])

  useEffect(() => {
    updateState({ country: props.currentCountry })
  }, [JSON.stringify(props.currentCountry)])

  useEffect(() => {
    if (props.linkNewPlatformAccountError) {
      closeConfirmDialog()
    }
  }, [JSON.stringify(props.linkNewPlatformAccountError)])

  const updatePolicies = () => {
    const { policies } = props

    if (policies) {
      updateState({
        requiredPolicies: policies.filter(policy => {
          return policy.isMandatory
        }),
        optionalPolicies: policies.filter(policy => {
          return !policy.isMandatory
        })
      })
    }
  }

  const onChangeCountry = (country: SelectOption) => {
    validation.current.set('country', validateNotEmpty(country.value))
    updateState({ country })
    props.onChangeCountry(country)
  }

  const onChangeDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const displayName = event.target.value
    validation.current.set(
      'displayName',
      InputValidationHelper.validateDisplayName(displayName, Env.IS_DISABLE_USERNAME, inputValidationsState.validations)
    )
    updateState({ displayName })
  }

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value
    validation.current.set('username', InputValidationHelper.validateUserName(username, inputValidationsState.validations))
    updateState({ username })
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value
    validation.current.set('password', InputValidationHelper.validatePassword(password, inputValidationsState.validations))
    updateState({
      password
    })
  }

  const onVerificationCodeChange = (verificationCode: string) => {
    updateState({ verificationCode })
  }

  const renderMinimumAgeCheckbox = () => {
    const { reachMinimumAge } = state
    const age = props.ageRestriction.age
    if (!age) return

    return (
      <div className={styles.agreementList}>
        <div className={styles.agreementItem}>
          <Checkbox
            isChecked={reachMinimumAge}
            onChange={() => {
              updateState({ reachMinimumAge: !reachMinimumAge })
            }}
          />
          <div className={styles.text}>
            <Trans i18nKey="LinkPlatformAccountPage.LinkNewAccountForm.minimumAge">
              I confirm that I am {{ age }} years of age or older.
            </Trans>
          </div>
        </div>
      </div>
    )
  }

  const renderRequiredPolicies = () => {
    const { requiredPolicies, isRequiredPolicyAccepted } = state

    if (!requiredPolicies.length) return

    return (
      <div className={styles.agreementList}>
        <div className={styles.agreementItem}>
          <Checkbox
            isChecked={isRequiredPolicyAccepted}
            onChange={() => {
              updateState({ isRequiredPolicyAccepted: !isRequiredPolicyAccepted })
            }}
          />
          <div className={styles.text}>
            <Trans i18nKey="LinkPlatformAccountPage.LinkNewAccountForm.tos.haveRead">I have read and agreed to the</Trans>
            {requiredPolicies.map((policy, index) => {
              const legalUri = LegalHelper.createLegalURL(
                LegalUtils.getLegalUrl(!!flags?.isLegalV2Enabled),
                policy.localizedPolicyVersionId
              )
              return (
                <React.Fragment key={`${index}-${policy.policyName}`}>
                  {index === requiredPolicies.length - 1 && requiredPolicies.length > 1 && (
                    <Trans i18nKey={'LinkPlatformAccountPage.LinkNewAccountForm.tos.and'}>and</Trans>
                  )}
                  <span>
                    <a href={legalUri} target="_blank" rel="noreferrer">
                      {policy.policyName}
                    </a>
                  </span>
                  {requiredPolicies.length !== 1 && index !== requiredPolicies.length - 1 && index !== requiredPolicies.length - 2
                    ? ', '
                    : ' '}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const renderOptionalPolicies = () => {
    const { optionalPolicies, acceptedOptionalPolicyIdMap } = state
    if (!optionalPolicies || !optionalPolicies.length) return null

    return optionalPolicies.map((policy, index) => {
      const legalUri = LegalHelper.createLegalURL(LegalUtils.getLegalUrl(!!flags?.isLegalV2Enabled), policy.localizedPolicyVersionId)
      return (
        <div className={styles.agreementList} key={`${index}-${JSON.stringify(policy.policyId)}`}>
          <div className={styles.agreementItem}>
            <Checkbox
              isChecked={acceptedOptionalPolicyIdMap.get(policy.policyId)}
              onChange={() => {
                onClickOptionalPolicyCheckbox(policy)
              }}
            />
            <span className={styles.text}>
              <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.optional">[Optional]</Trans>
            </span>
            <div className={styles.text}>
              {policy.policyName}
              <a href={legalUri} target="_blank" rel="noreferrer">
                <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.learnMore">Learn more.</Trans>
              </a>
            </div>
          </div>
        </div>
      )
    })
  }

  const onClickOptionalPolicyCheckbox = (policy: DisplayedPolicy) => {
    const { acceptedOptionalPolicyIdMap } = state
    acceptedOptionalPolicyIdMap.set(policy.policyId, !acceptedOptionalPolicyIdMap.get(policy.policyId))
    updateState({ acceptedOptionalPolicyIdMap })
  }

  const onClickContinue = () => {
    const { isRequiredPolicyAccepted, requiredPolicies, acceptedOptionalPolicyIdMap } = state
    const acceptedPolicyIds: string[] = []
    if (isRequiredPolicyAccepted) {
      for (const policy of requiredPolicies) {
        acceptedPolicyIds.push(policy.policyId)
      }
    }
    acceptedOptionalPolicyIdMap.forEach((value: boolean, key: string) => {
      if (value) acceptedPolicyIds.push(key)
    })

    props.onContinue({
      ...state,
      acceptedPolicyIds,
      reachMinimumAge: true
    })
  }

  const closeConfirmDialog = () => updateState({ openConfirmDialog: false })
  const openConfirmDialog = () => updateState({ openConfirmDialog: true })

  const { onChangePage, platformId, onRequestVerificationCode, isRequestingVerificationCode } = props
  const { validations, validationsFetchStatus } = inputValidationsState
  const { displayName, username, country, password, requiredPolicies, isRequiredPolicyAccepted, reachMinimumAge, verificationCode } = state
  const countryList: SelectOption[] = props.countries.map(country => ({
    value: country.code || '',
    label: country.name || ''
  }))
  const usernameProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.username, validations)
  const displayNameProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.displayName, validations)
  const passwordProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.password, validations)
  const isDisplayNameValid = Env.IS_DISABLE_DISPLAY_NAME ? displayName.length > 0 : true
  const isUserNameValid = Env.IS_DISABLE_USERNAME || username.length > 0
  const isVerificationCodeNotEmpy = verificationCode.length > 0
  const isLegalEnabled = flags?.isLegalEnabled
  const isSubmitButtonEnabled =
    validation.current.isAllValid() &&
    (isRequiredPolicyAccepted || requiredPolicies.length === 0) &&
    (reachMinimumAge || !props.ageRestriction.age) &&
    password.length > 0 &&
    isDisplayNameValid &&
    isUserNameValid &&
    isVerificationCodeNotEmpy

  return (
    <div>
      <LinkNewAccountVerification
        verificationCode={verificationCode}
        onChangePage={onChangePage}
        isRequestingVerificationCode={isRequestingVerificationCode}
        onRequestVerificationCode={onRequestVerificationCode}
        onChangeVerificationCode={onVerificationCodeChange}
        validation={validation.current}
      />
      <hr />
      <div className={styles.label}>
        <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.country">Country</Trans>
      </div>
      <FormGroup>
        <Select
          isFullWidth
          className="flex w-full items-center"
          value={countryList.find(({ value }) => country.value === value)}
          onChange={country => onChangeCountry({ value: country?.value ?? '', label: country?.label ?? '' })}
          options={countryList}
        />
      </FormGroup>
      {!Env.IS_DISABLE_USERNAME && (
        <FormGroup>
          <div className={styles.label}>
            <div>
              <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.userName">Username</Trans>
            </div>
            <div>
              {username.length}/{usernameProps?.maxLength}
            </div>
          </div>
          <InputGroup
            className={styles.input}
            value={username}
            onChange={onChangeUsername}
            placeholder={t('linkPlatformAccountPage.LinkNewAccount.placeholder.userName')}
            disabled={validationsFetchStatus === FetchStatus.FETCHING}
            popoverContent={
              <PasswordConstraint
                descriptions={InputValidationHelper.getValidationDescription(ValidateableInputField.enum.username, validations)}
              />
            }
            maxLength={usernameProps?.maxLength}
          />
          {UserNameValidationError(validation.current.get('username'), {
            min: usernameProps && usernameProps.minLength,
            max: usernameProps && usernameProps.maxLength
          })}
        </FormGroup>
      )}
      {!Env.IS_DISABLE_DISPLAY_NAME && (
        <FormGroup>
          <div className={styles.label}>
            <div>
              <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.displayName">Display Name</Trans>
              <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.tos.optional"> (optional)</Trans>
            </div>
            <div>
              {displayName.length}/{displayNameProps?.maxLength}
            </div>
          </div>
          <InputGroup
            className={styles.input}
            value={displayName}
            onChange={onChangeDisplayName}
            placeholder={t('linkPlatformAccountPage.LinkNewAccount.placeholder.displayName')}
            popoverContent={
              <PasswordConstraint
                descriptions={InputValidationHelper.getValidationDescription(ValidateableInputField.enum.displayName, validations)}
              />
            }
            maxLength={displayNameProps?.maxLength}
          />
          {DisplayNameValidationError(validation.current.get('displayName'), {
            min: displayNameProps && displayNameProps.minLength,
            max: displayNameProps && displayNameProps.maxLength
          })}
        </FormGroup>
      )}
      <FormGroup>
        <div className={styles.label}>
          <div>
            <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.password">Password</Trans>
          </div>
          <div>
            {password.length}/{passwordProps?.maxLength}
          </div>
        </div>
        <InputGroupPassword
          className={styles.input}
          value={password}
          placeholder={t('linkPlatformAccountPage.LinkNewAccount.placeholder.password')}
          togglePassword
          onChange={onPasswordChange}
          popoverContent={
            <PasswordConstraint
              descriptions={InputValidationHelper.getValidationDescription(ValidateableInputField.enum.password, validations)}
            />
          }
          maxLength={passwordProps?.maxLength}
          hasStrengthMeter={!!password && !validation.current.get('password')}
        />
        {PasswordValidationError(validation.current.get('password'), {
          min: passwordProps && passwordProps.minLength,
          max: passwordProps && passwordProps.maxLength
        })}
      </FormGroup>
      <FormGroup>
        {renderMinimumAgeCheckbox()}
        {renderRequiredPolicies()}
        {isLegalEnabled && renderOptionalPolicies()}
      </FormGroup>
      <Button className="btn btn-primary w-full uppercase" onClick={() => openConfirmDialog()} disabled={!isSubmitButtonEnabled}>
        <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.continue">Continue</Trans>
      </Button>

      {state.openConfirmDialog && (
        <LinkPlatformAccountConfirmationDialog
          onCloseDialog={() => closeConfirmDialog()}
          toggleDialogConfirmation={() => onClickContinue()}
          platformId={platformId}
          isLoading={props.isLinkingUser}
        />
      )}
    </div>
  )
}
