/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Checkbox } from '@od-components/components/Form/Checkbox/Checkbox'
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { InputGroupPassword } from '@od-components/components/Form/InputPassword/InputPassword'
import { PasswordConstraint } from '@od-components/components/InputConstraint/PasswordConstraint'
import { t } from '@od-components/i18n/index'
import { Env } from '@od-shared/Env'
import {
  CommonValidationErrorType,
  ValidateAlphaNumericErrorType,
  ValidateForbiddenWordsErrorType,
  ValidateLengthErrorType,
  ValidateRegexErrorType,
  Validation
} from '@accelbyte/validator'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { UpgradeHeadlessVerification } from './UpgradeHeadlessVerification'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useAgeRestriction } from '~/hooks/iam/useAgeRestriction'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { LegalUtils } from '@od-legal/utils/LegalUtils'
import { DisplayedPolicy, LegalHelper } from '@accelbyte/sdk-legal'
import { InputValidationHelper, UserResponseV3, ValidateableInputField } from '@accelbyte/sdk-iam'

export interface UpgradeHeadlessAccountData {
  password: string
  displayName: string
  username: string
  acceptedPolicyIds: string[]
  reachMinimumAge: boolean
  verificationCode: string
}

interface State {
  verificationCode: string
  displayName: string
  username: string
  password: string
  requiredPolicies: DisplayedPolicy[]
  optionalPolicies: DisplayedPolicy[]
  isRequiredPolicyAccepted: boolean
  reachMinimumAge: boolean
  acceptedOptionalPolicyIdMap: Map<string, boolean>
}

interface Props {
  user: UserResponseV3
  onChangePage?: () => void
  isRequestingVerificationCode: boolean
  policies?: DisplayedPolicy[] | null
  onContinue: ({ password, displayName, username, acceptedPolicyIds }: UpgradeHeadlessAccountData) => unknown
  onRequestVerificationCode: () => Promise<void>
  isUpgradingUser: boolean
  styles: CSSModuleClasses
}

export const UpgradeHeadlessAccountForm = (props: Props) => {
  const validation = React.useRef<
    Validation<{
      displayName: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
      username: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
      password: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
      verificationCode: ValidateAlphaNumericErrorType
    }>
  >(new Validation())

  const { state: userState } = useUserInfo()
  const { state: ageRestrictionState, mutations: ageRestrictionMutations } = useAgeRestriction()
  const { state: inputValidationsState } = useInputValidations()
  const { state: discoveryConfigsState } = useDiscoveryConfigs()

  const [state, setState] = useState<State>({
    verificationCode: '',
    displayName: '',
    username: '',
    password: '',
    requiredPolicies: [],
    optionalPolicies: [],
    isRequiredPolicyAccepted: false,
    reachMinimumAge: false,
    acceptedOptionalPolicyIdMap: new Map() as Map<string, boolean>
  })
  const {
    verificationCode,
    displayName,
    username,
    password,
    requiredPolicies,
    optionalPolicies,
    isRequiredPolicyAccepted,
    reachMinimumAge,
    acceptedOptionalPolicyIdMap
  } = state
  const usernameProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.username, inputValidationsState.validations)
  const displayNameProps = InputValidationHelper.getValidationByKey(
    ValidateableInputField.enum.displayName,
    inputValidationsState.validations
  )
  const passwordProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.password, inputValidationsState.validations)
  const isLegalV2Enabled = !!discoveryConfigsState.flags?.isLegalV2Enabled

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    const country = userState.user?.country
    if (country) {
      ageRestrictionMutations.fetchAgeRestrictionByCountry(country)
    }
    updatePolicies()
  }, [])

  useEffect(() => {
    updatePolicies()
  }, [JSON.stringify(props.policies)])

  const updatePolicies = () => {
    const { policies } = props
    if (!policies) return

    updateState({
      requiredPolicies: policies.filter(policy => policy.isMandatory),
      optionalPolicies: policies.filter(policy => !policy.isMandatory)
    })
  }

  const isDisplayNameDisabled = () => Env.IS_DISABLE_DISPLAY_NAME

  const isUserNameDisabled = () => Env.IS_DISABLE_USERNAME

  const onChangeDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const displayName = event.target.value
    validation.current.set(
      'displayName',
      InputValidationHelper.validateDisplayName(displayName, isUserNameDisabled(), inputValidationsState.validations)
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

  const renderPasswordError = ({ min, max }: { min?: number; max?: number } = {}) => {
    const errorType = validation.current.get('password')
    if (!errorType) return null

    switch (errorType) {
      case ValidateLengthErrorType.enum.empty:
        return <FormGroupError>{t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.form.passwordEmptyError')}</FormGroupError>
      case ValidateLengthErrorType.enum.lessThanLengthLimit:
        return (
          <FormGroupError>
            {t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.form.passwordLessThanLengthLimit', { PASSWORD_MIN_LIMIT: min })}
          </FormGroupError>
        )
      case ValidateLengthErrorType.enum.exceedLengthLimit:
        return (
          <FormGroupError>
            {t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.form.passwordExceedLimit', { PASSWORD_MAX_LENGTH: max })}
          </FormGroupError>
        )
      case ValidateRegexErrorType.enum.invalidFormat:
        return <FormGroupError>{t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.form.passwordInvalidFormat')}</FormGroupError>
      default:
        return t('CommonError.unknownError')
    }
  }

  const renderDisplayNameError = (errorType: CommonValidationErrorType | null, params: { min?: number; max?: number } = {}) => {
    if (!errorType) return null

    switch (errorType) {
      case ValidateLengthErrorType.enum.empty:
        return <FormGroupError>{t('AccountMyProfilePage.form.displayNameEmptyError')}</FormGroupError>
      case ValidateLengthErrorType.enum.lessThanLengthLimit:
        return <FormGroupError>{t('AccountMyProfilePage.form.lessThanLengthLimit', { DISPLAY_NAME_MIN_LIMIT: params.min })}</FormGroupError>
      case ValidateLengthErrorType.enum.exceedLengthLimit:
        return (
          <FormGroupError>{t('AccountMyProfilePage.form.displayNameExceedLimit', { MAX_DISPLAY_NAME_LENGTH: params.max })}</FormGroupError>
        )
      case ValidateRegexErrorType.enum.invalidFormat:
        return <FormGroupError>{t('AccountMyProfilePage.form.displayNameInvalidFormat')}</FormGroupError>
      default:
        return t('CommonError.unknownError')
    }
  }

  const renderUserNameError = (errorType: CommonValidationErrorType | null, params: { min?: number; max?: number } = {}) => {
    if (!errorType) return null

    switch (errorType) {
      case ValidateLengthErrorType.enum.empty:
        return (
          <FormGroupError>
            <Trans i18nKey="AccountMyProfilePage.form.userName.emptyError">The username cannot be empty</Trans>
          </FormGroupError>
        )
      case ValidateLengthErrorType.enum.lessThanLengthLimit:
        return (
          <FormGroupError>
            <Trans i18nKey="AccountMyProfilePage.form.userName.lessThanLengthLimit">
              Your username must contain at least {{ MIN_USERNAME_LENGTH: params.min }} characters
            </Trans>
          </FormGroupError>
        )
      case ValidateLengthErrorType.enum.exceedLengthLimit:
        return (
          <FormGroupError>
            <Trans i18nKey="AccountMyProfilePage.form.userName.exceedLimit">
              Your username must not exceed {{ MAX_USERNAME_LENGTH: params.max }} characters
            </Trans>
          </FormGroupError>
        )
      case ValidateRegexErrorType.enum.invalidFormat:
        return (
          <FormGroupError>
            <Trans i18nKey="AccountMyProfilePage.form.userName.invalidFormat">Please enter a valid username format</Trans>
          </FormGroupError>
        )
      default:
        return <Trans i18nKey="CommonError.unknownError">Something went wrong. Please contact administrator.</Trans>
    }
  }

  const renderMinimumAgeCheckbox = () => {
    const { age } = ageRestrictionState.ageRestriction
    const { styles } = props
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
            <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.minimumAge">
              I confirm that I am {{ age }} years of age or older.
            </Trans>
          </div>
        </div>
      </div>
    )
  }

  const renderRequiredPolicies = () => {
    const { styles } = props

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
            {t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.tos.haveRead')}
            {requiredPolicies.map((policy, index) => {
              const legalUri = LegalHelper.createLegalURL(LegalUtils.getLegalUrl(isLegalV2Enabled), policy.localizedPolicyVersionId)
              return (
                <>
                  {index === requiredPolicies.length - 1 &&
                    requiredPolicies.length > 1 &&
                    t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.tos.and')}
                  <span key={index}>
                    <a href={legalUri} target="_blank" rel="noreferrer">
                      {policy.policyName}
                    </a>
                  </span>
                  {requiredPolicies.length !== 1 && index !== requiredPolicies.length - 1 && index !== requiredPolicies.length - 2
                    ? ', '
                    : ' '}
                </>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const renderOptionalPolicies = () => {
    const { styles } = props
    if (!optionalPolicies || !optionalPolicies.length) return null

    return optionalPolicies.map(policy => {
      const legalUri = LegalHelper.createLegalURL(LegalUtils.getLegalUrl(isLegalV2Enabled), policy.localizedPolicyVersionId)
      return (
        <div className={styles.agreementList} key={policy.policyId}>
          <div className={styles.agreementItem}>
            <Checkbox
              isChecked={acceptedOptionalPolicyIdMap.get(policy.policyId)}
              onChange={() => {
                onClickOptionalPolicyCheckbox(policy)
              }}
            />
            <span className={`${styles.text} ${styles.optional}`}>
              <Trans i18nKey="linkPlatformAccountPage.LinkNewAccount.optional">[Optional]</Trans>
            </span>
            <div className={styles.text}>
              {policy.policyName}
              <a href={legalUri} target="_blank" rel="noreferrer">
                <Trans i18nKey="UpgradeHeadlessAccountPage.UpgradeHeadlessAccountPage.learnMore">Learn more.</Trans>
              </a>
            </div>
          </div>
        </div>
      )
    })
  }

  const onClickOptionalPolicyCheckbox = (policy: DisplayedPolicy) => {
    acceptedOptionalPolicyIdMap.set(policy.policyId, !acceptedOptionalPolicyIdMap.get(policy.policyId))
    updateState({ acceptedOptionalPolicyIdMap })
  }

  const onClickContinue = () => {
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

  const isSubmitButtonEnabled = (): boolean => {
    const isDisplayNameValid = isUserNameDisabled() ? displayName.length > 0 : true
    const isUserNameValid = isUserNameDisabled() || username.length > 0
    const isVerificationCodeNotEmpy = verificationCode.length > 0

    return (
      validation.current.isAllValid() &&
      (isRequiredPolicyAccepted || requiredPolicies.length === 0) &&
      (reachMinimumAge || !ageRestrictionState.ageRestriction.age) &&
      password.length > 0 &&
      isDisplayNameValid &&
      isUserNameValid &&
      isVerificationCodeNotEmpy
    )
  }

  if (!userState.user) return null
  return (
    <div>
      <UpgradeHeadlessVerification
        verificationCode={verificationCode}
        onChangePage={props.onChangePage}
        isRequestingVerificationCode={props.isRequestingVerificationCode}
        onRequestVerificationCode={props.onRequestVerificationCode}
        onChangeVerificationCode={onVerificationCodeChange}
        validation={validation.current}
        styles={props.styles}
      />
      <hr />
      <FormGroup>
        <div className={props.styles.label}>{t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.country')}</div>
        <InputGroup
          type="text"
          value={ageRestrictionState.ageRestriction.countryName || userState.user.country}
          disabled
          className={props.styles.input}
        />
      </FormGroup>
      {!isUserNameDisabled() && (
        <FormGroup>
          <div className={props.styles.label}>
            <div>{t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.userName')}</div>
            <div>
              {username.length}/{usernameProps?.maxLength}
            </div>
          </div>
          <InputGroup
            className={props.styles.input}
            value={username}
            onChange={onChangeUsername}
            placeholder={t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.placeholder.userName')}
            disabled={!!inputValidationsState.validationsError}
            popoverContent={
              <PasswordConstraint
                descriptions={InputValidationHelper.getValidationDescription(
                  ValidateableInputField.enum.username,
                  inputValidationsState.validations
                )}
              />
            }
            maxLength={usernameProps?.maxLength}
          />
          {renderUserNameError(validation.current.get('username'), {
            min: usernameProps && usernameProps.minLength,
            max: usernameProps && usernameProps.maxLength
          })}
        </FormGroup>
      )}
      {!isDisplayNameDisabled() && (
        <FormGroup>
          <div className={props.styles.label}>
            <div>
              {`${t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.displayName')} ${t(
                'UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.tos.optional'
              )}`}
            </div>
            <div>
              {displayName.length}/{displayNameProps?.maxLength}
            </div>
          </div>
          <InputGroup
            className={props.styles.input}
            value={displayName}
            onChange={onChangeDisplayName}
            placeholder={t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.placeholder.displayName')}
            popoverContent={
              <PasswordConstraint
                descriptions={InputValidationHelper.getValidationDescription(
                  ValidateableInputField.enum.displayName,
                  inputValidationsState.validations
                )}
              />
            }
            maxLength={displayNameProps?.maxLength}
          />
          {renderDisplayNameError(validation.current.get('displayName'), {
            min: displayNameProps && displayNameProps.minLength,
            max: displayNameProps && displayNameProps.maxLength
          })}
        </FormGroup>
      )}
      <FormGroup>
        <div className={props.styles.label}>
          <div>{t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.password')}</div>
          <div>
            {password.length}/{passwordProps?.maxLength}
          </div>
        </div>
        <InputGroupPassword
          className={props.styles.input}
          value={password}
          placeholder={t('UpgradeHeadlessAccountPage.UpgradeHeadlessAccountForm.placeholder.password')}
          togglePassword
          onChange={onPasswordChange}
          popoverContent={
            <PasswordConstraint
              descriptions={InputValidationHelper.getValidationDescription(
                ValidateableInputField.enum.password,
                inputValidationsState.validations
              )}
            />
          }
          maxLength={passwordProps?.maxLength}
          hasStrengthMeter={!validation.current.get('password') && !!password}
        />
        {renderPasswordError({
          min: passwordProps && passwordProps.minLength,
          max: passwordProps && passwordProps.maxLength
        })}
      </FormGroup>
      <FormGroup>
        {renderMinimumAgeCheckbox()}
        {renderRequiredPolicies()}
        {discoveryConfigsState.flags?.isLegalEnabled && renderOptionalPolicies()}
      </FormGroup>
      <Button
        loadingIndicator="SPINNER"
        className="btn btn-primary w-full uppercase"
        onClick={() => onClickContinue()}
        disabled={!isSubmitButtonEnabled() || props.isUpgradingUser}
        isLoading={props.isUpgradingUser}>
        {t('common.complete')}
      </Button>
    </div>
  )
}
