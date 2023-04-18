/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import {
  AccountMainSection,
  AccountMainSectionBody,
  AccountMainSectionHeader
} from '@od-account/pages/AccountMainSection/AccountMainSection'
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { FormGroup, FormGroupError, FormGroupInfo, FormGroupStyles } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { Loading, LoadingSize } from '@od-components/components/Loading/Loading'
import { getCurrentLanguage, t } from '@od-components/i18n/index'
import { Env } from '@od-shared/Env'
import { VerificationCodeContext } from '@od-shared/models/AccountTypes'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import {
  CommonValidationErrorType,
  ValidateForbiddenWordsErrorType,
  ValidateLengthErrorType,
  ValidateRegexErrorType,
  Validation
} from '@accelbyte/validator'
import { translateServiceError } from '@accelbyte/error-translator'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ChangeEmailDialog } from './ChangeEmailDialog'
import styles from './ProfilePage.module.scss'
import { mockUser, mockZipCode } from '@od-shared/mocks/MockVars'
import { CommonEntryGroup, CommonEntryGroupInput, CommonEntryGroupLabel } from '@od-account/components/CommonEntryGroup/CommonEntryGroup'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useHistory } from '~/hooks/routes/useHistory'
import { useCountries } from '~/hooks/iam/useCountries'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { useUserVerification } from '~/hooks/iam/useUserVerification'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { FetchStatus } from '~/constants/fetch-statuses'
import { EligibleUser, InputValidationHelper, UserUpdateRequestV3, ValidateableInputField } from '@accelbyte/sdk-iam'
import { CountryObject, UserProfileUpdate } from '@accelbyte/sdk-basic'

interface State {
  displayName: string | null
  userName: string | null
  isChangeEmailDialogOpen: boolean
  alert: AlertValue | null
  zipCode: string | null
}

interface Props {
  isPreviewMode?: boolean
}

export const ProfilePage = (props: Props) => {
  const validation = React.useRef<
    Validation<{
      displayName: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
      userName: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType
    }>
  >(new Validation())
  const { state: userState, mutations: userMutations } = useUserInfo()
  const [state, setState] = useState<State>({
    displayName: userState.user?.displayName || null,
    userName: userState.user?.userName || null,
    isChangeEmailDialogOpen: false,
    alert: null,
    zipCode: userState.userProfile?.zipCode || null
  })
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const { state: countriesState, mutations: countriesMutations } = useCountries()
  const { state: inputValidationsState, mutations: inputValidationsMutations } = useInputValidations()
  const { state: userVerificationState, mutations: userVerificationMutations } = useUserVerification()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    const init = async () => {
      if (!props.isPreviewMode) {
        await initializeProfilePage()
        const locationState = historyState.location.state
        if (locationState?.updateEmailStatus === 'success') {
          updateState({
            alert: {
              type: AlertType.success,
              element: <Trans i18nKey="NewEmailVerificationPage.verified">Congratulations! Your email has been updated.</Trans>
            }
          })
          // Remove the state, so that after reloading it's not showing the alert again.
          // Source: https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState.
          window.history.replaceState({}, '')
        }
      }
    }

    init()
  }, [])

  const initializeProfilePage = async () => {
    if (!userState.userProfile) {
      const result = await userMutations.fetchUserProfile(true)
      if (result.error) {
        setErrorAlert(result.error)
      }
    }

    if (countriesState.countries?.length === 0) {
      await countriesMutations.fetchCountries()
    }
    if (inputValidationsState.validations.length === 0) {
      await inputValidationsMutations.fetchValidations(getCurrentLanguage())
    }
    // Re-populate the state, in case there are changes when we are not at the Profile Page menu.
    populateUserAndUserProfileFromLogic()
  }

  const isDisplayNameDisabled = () => Env.IS_DISABLE_DISPLAY_NAME

  const isUserNameDisabled = () => Env.IS_DISABLE_USERNAME

  const populateUserFromLogic = () => {
    const user = userState.user
    if (user) {
      const isDisplayNameEmpty = isDisplayNameDisabled() || user.displayName === ''
      const isUserNameEmpty = isUserNameDisabled() || user.userName === ''

      updateState({
        displayName: isDisplayNameEmpty ? null : user.displayName,
        userName: isUserNameEmpty || !user.userName ? null : user.userName
      })
    }
  }

  const populateUserProfileFromLogic = () => {
    const userProfile = userState.userProfile
    updateState({
      zipCode: userProfile && userProfile.zipCode ? userProfile.zipCode : null
    })
  }

  const populateUserAndUserProfileFromLogic = () => {
    populateUserFromLogic()
    populateUserProfileFromLogic()
  }

  const setErrorAlert = (error: Error | unknown) => {
    updateState({
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    })
  }

  const notifyUpdateSuccess = () => {
    updateState({
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="AccountMyProfilePage.updateSuccess">Your profile has been updated!</Trans>
      }
    })
  }

  const notifyUpdateError = async (error: Error) => {
    const isInputValidationError = await inputValidationsMutations.refetchIfValidationError(error)
    if (isInputValidationError) {
      updateState({ alert: null })
      return
    }

    const errorCode = ErrorHelper.extractServiceErrorCode(error)
    if (errorCode) {
      updateState({
        alert: {
          type: AlertType.danger,
          element: (() => {
            switch (errorCode) {
              case 10130:
                return <Trans i18nKey="UpdateUser.error.updateErrorUnderage">You are below the required age</Trans>
              case 10177:
                return <Trans i18nKey="UpdateUser.error.updateErrorConflict">The username has been taken. Please choose another</Trans>
              default:
                return (
                  translateServiceError(errorCode) || (
                    <Trans i18nKey="UpdateUser.error.updateError">Failed to update your account information. Please try again.</Trans>
                  )
                )
            }
          })()
        }
      })
    } else {
      setErrorAlert(error)
    }
  }

  const isProfileChanged = (): boolean => {
    const user = userState.user
    const userProfile = userState.userProfile
    const { displayName, userName, zipCode } = state

    if (user !== null) {
      if (displayName !== null && user.displayName !== displayName.trim()) {
        return true
      }

      if (userName !== null && user.userName !== userName.trim()) {
        return true
      }

      if (zipCode !== null && userProfile && userProfile.zipCode !== zipCode.trim()) {
        return true
      }
    }

    return false
  }

  const onChangeDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const displayName = event.target.value
    const { validations } = inputValidationsState
    validation.current.set('displayName', InputValidationHelper.validateDisplayName(displayName, isUserNameDisabled(), validations))
    updateState({ displayName })
  }

  const onChangeZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const zipCode = event.target.value
    updateState({ zipCode })
  }

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userName = event.target.value
    const { validations } = inputValidationsState
    validation.current.set('userName', InputValidationHelper.validateUserName(userName, validations))
    updateState({ userName })
  }

  const openChangeEmailDialog = () => {
    updateState({ isChangeEmailDialogOpen: true })
    userVerificationMutations.resetState()
  }

  const closeChangeEmailDialog = () => updateState({ isChangeEmailDialogOpen: false })

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>, displayName: string, userName: string, zipCode: string) => {
    event.preventDefault()
    const { params, userProfileParams } = getParams(displayName, userName, zipCode)
    const [updateUserResult, updateUserProfileResult] = await Promise.all([
      userMutations.updateUser(params),
      userMutations.updateUserProfile(userProfileParams)
    ])
    const resultError = updateUserResult?.error || updateUserProfileResult?.error
    if (resultError) {
      notifyUpdateError(resultError)
      return
    }
    notifyUpdateSuccess()
  }

  const onSendVerificationCode = async () => {
    const { user } = userState
    if (!user) return
    const result = await userVerificationMutations.sendVerificationCode(user.emailAddress, VerificationCodeContext.enum.UpdateEmailAddress)
    if (result.error) {
      setErrorAlert(result.error)
      return
    }

    historyState.replace(routesState.account.changeEmail.link)
  }

  const getParams = (displayName: string, userName: string, zipCode: string) => {
    const { user, userProfile } = userState
    const params: UserUpdateRequestV3 = {}
    const userProfileParams: UserProfileUpdate = {}
    if (user) {
      if (displayName !== user.displayName) {
        params.displayName = displayName
      }
      if (!!userName && userName !== user.userName) {
        params.userName = userName
      }
      if (!userProfile || zipCode !== userProfile.zipCode) {
        userProfileParams.zipCode = zipCode
      }
    }

    return { params, userProfileParams }
  }

  const getCountryNameByCountryId = (countryId: string): string => {
    const { countries } = countriesState

    if (!countries) return countryId

    const userCountry = countries.find((country: CountryObject) => country.code === countryId)
    if (userCountry) return userCountry.name || countryId

    return countryId
  }

  const renderDisplayNameError = (errorType: CommonValidationErrorType | null, params: { min?: number; max?: number } = {}) => {
    if (!errorType) return null

    const displayNameErrorMap = {
      [ValidateLengthErrorType.enum.empty]: (
        <Trans i18nKey="AccountMyProfilePage.form.displayNameEmptyError">The display name cannot be empty.</Trans>
      ),
      [ValidateLengthErrorType.enum.lessThanLengthLimit]: (
        <Trans i18nKey="AccountMyProfilePage.form.lessThanLengthLimit">
          Your display name must contain at least {{ DISPLAY_NAME_MIN_LIMIT: params.min }} characters
        </Trans>
      ),
      [ValidateLengthErrorType.enum.exceedLengthLimit]: (
        <Trans i18nKey="AccountMyProfilePage.form.displayNameExceedLimit">
          Your display name must not exceed {{ MAX_DISPLAY_NAME_LENGTH: params.max }} characters
        </Trans>
      ),
      [ValidateRegexErrorType.enum.invalidFormat]: (
        <Trans i18nKey="AccountMyProfilePage.form.displayNameInvalidFormat">Please enter a valid display name format</Trans>
      )
    }

    return <FormGroupError>{displayNameErrorMap[errorType]}</FormGroupError>
  }

  const renderUserNameError = (errorType: CommonValidationErrorType | null, params: { min?: number; max?: number } = {}) => {
    if (!errorType) return null

    const userNameErrorMap = {
      [ValidateLengthErrorType.enum.empty]: (
        <Trans i18nKey="AccountMyProfilePage.form.userName.emptyError">The username cannot be empty</Trans>
      ),
      [ValidateLengthErrorType.enum.lessThanLengthLimit]: (
        <Trans i18nKey="AccountMyProfilePage.form.userName.lessThanLengthLimit">
          Your username must contain at least {{ MIN_USERNAME_LENGTH: params.min }} characters
        </Trans>
      ),
      [ValidateLengthErrorType.enum.exceedLengthLimit]: (
        <Trans i18nKey="AccountMyProfilePage.form.userName.exceedLimit">
          Your username must not exceed {{ MAX_USERNAME_LENGTH: params.max }} characters
        </Trans>
      ),
      [ValidateRegexErrorType.enum.invalidFormat]: (
        <Trans i18nKey="AccountMyProfilePage.form.userName.invalidFormat">Please enter a valid username format</Trans>
      )
    }

    return <FormGroupError>{userNameErrorMap[errorType]}</FormGroupError>
  }

  const renderFormEditProfile = () => {
    const isInEditor = props.isPreviewMode
    const user = !isInEditor ? userState.user : mockUser
    if (!EligibleUser.safeParse(user).success || !user) return

    const displayName = state.displayName !== null ? state.displayName : user.displayName || ''
    const isDisplayNameValid = isUserNameDisabled() ? displayName.length > 0 : true
    const userName = state.userName !== null ? state.userName : user.userName || ''
    const zipCode = !isInEditor ? state.zipCode || '' : mockZipCode
    const isUserNameValid = isUserNameDisabled() || userName.length > 0
    const { validations } = inputValidationsState
    const usernameProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.username, validations)
    const displayNameProps = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.displayName, validations)

    const isUpdating =
      userState.fetchUserProfileStatus === FetchStatus.UPDATING ||
      userState.fetchUserStatus === FetchStatus.UPDATING ||
      userState.fetchUserProfileStatus === FetchStatus.FETCHING

    const isSaveBtnDisabled =
      isUpdating || !isDisplayNameValid || !isUserNameValid || !isProfileChanged() || !validation.current.isAllValid()
    const contactSupportEmail = Env.CONTACT_SUPPORT_EMAIL

    return (
      <form
        onSubmit={event => {
          if (displayName !== null && userName !== null && zipCode !== null) {
            onSubmit(event, displayName, userName, zipCode)
          }
        }}>
        <div className="formInputContainer">
          {!isUserNameDisabled() && (
            <CommonEntryGroup>
              <CommonEntryGroupLabel>
                <Trans i18nKey="AccountMyProfilePage.form.userName.label">Username</Trans>
              </CommonEntryGroupLabel>
              <CommonEntryGroupInput>
                <FormGroup className="formGroup" hasError={userName === ''}>
                  <InputGroup
                    type="text"
                    value={userName}
                    name="userName"
                    disabled={isUpdating}
                    className="inputGroup"
                    onChange={onChangeUserName}
                    readOnly={isInEditor}
                  />
                  {renderUserNameError(validation.current.get('userName'), {
                    min: usernameProps && usernameProps.minLength,
                    max: usernameProps && usernameProps.maxLength
                  })}
                  <FormGroupInfo>
                    {InputValidationHelper.getValidationDescription(ValidateableInputField.enum.username, validations).join('. ')}
                  </FormGroupInfo>
                </FormGroup>
              </CommonEntryGroupInput>
            </CommonEntryGroup>
          )}
          {!isDisplayNameDisabled() && (
            <CommonEntryGroup>
              <CommonEntryGroupLabel>
                <Trans i18nKey="AccountMyProfilePage.form.displayName">Display name</Trans>
              </CommonEntryGroupLabel>
              <CommonEntryGroupInput>
                <FormGroup className="formGroup" hasError={displayName === ''}>
                  <InputGroup
                    type="text"
                    value={displayName}
                    name="displayName"
                    disabled={isUpdating}
                    className="inputGroup"
                    onChange={onChangeDisplayName}
                    readOnly={isInEditor}
                  />
                  {renderDisplayNameError(validation.current.get('displayName'), {
                    min: displayNameProps && displayNameProps.minLength,
                    max: displayNameProps && displayNameProps.maxLength
                  })}
                  <FormGroupInfo>
                    {InputValidationHelper.getValidationDescription(ValidateableInputField.enum.displayName, validations).join('. ')}
                  </FormGroupInfo>
                </FormGroup>
              </CommonEntryGroupInput>
            </CommonEntryGroup>
          )}
          <CommonEntryGroup className={FormGroupStyles.pseudoMarginBottom}>
            <CommonEntryGroupLabel>
              <Trans i18nKey="AccountMyProfilePage.form.emailAddress">Email address</Trans>
            </CommonEntryGroupLabel>
            <CommonEntryGroupInput className="emailFormContainer">
              <div>{user.emailAddress}</div>
              <button className="btnChange" type="button" onClick={!isInEditor ? openChangeEmailDialog : undefined}>
                <Trans i18nKey="AccountMyProfilePage.form.changeEmail">Change</Trans>
              </button>
            </CommonEntryGroupInput>
          </CommonEntryGroup>
          <CommonEntryGroup className={FormGroupStyles.pseudoMarginBottom}>
            <CommonEntryGroupLabel>
              <Trans i18nKey="AccountMyProfilePage.form.country">Country</Trans>
            </CommonEntryGroupLabel>
            <CommonEntryGroupInput>
              <FormGroup>
                <InputGroup
                  type="text"
                  value={getCountryNameByCountryId((user && user.country) || '')}
                  disabled
                  className="countryForm"
                  readOnly={isInEditor}
                />
                {contactSupportEmail && (
                  <FormGroupInfo>
                    <Trans i18nKey="AccountMyProfilePage.form.changeCountryInfo">
                      Please contact our customer support at{' '}
                      <a href={`mailto:${contactSupportEmail}`} className="btnContactSupport">
                        {{ contactSupportEmail }}
                      </a>{' '}
                      to request a country change
                    </Trans>
                  </FormGroupInfo>
                )}
              </FormGroup>
            </CommonEntryGroupInput>
          </CommonEntryGroup>
          <CommonEntryGroup className={FormGroupStyles.pseudoMarginBottom}>
            <CommonEntryGroupLabel>
              <Trans i18nKey="AccountMyProfilePage.form.zipCode.label">ZIP Code</Trans>
            </CommonEntryGroupLabel>
            <CommonEntryGroupInput>
              <FormGroup>
                <InputGroup
                  type="text"
                  value={zipCode}
                  onChange={onChangeZipCode}
                  placeholder={t('AccountMyProfilePage.form.zipCode.placeholder')}
                  disabled={isUpdating}
                  className="inputGroup"
                  readOnly={isInEditor}
                />
                <FormGroupInfo>
                  <Trans i18nKey="AccountMyProfilePage.form.zipCode.tooltip">
                    We need your ZIP code to calculate the sales tax for your purchase.
                  </Trans>
                </FormGroupInfo>
              </FormGroup>
            </CommonEntryGroupInput>
          </CommonEntryGroup>
        </div>
        <div className="divider" />
        <div className="btnContainer">
          <Button loadingIndicator="SPINNER" type="submit" className="btn btn-primary" disabled={isSaveBtnDisabled} isLoading={isUpdating}>
            <Trans i18nKey="AccountMyProfilePage.form.saveChanges">Save changes</Trans>
          </Button>
        </div>
      </form>
    )
  }

  const isFetchingProfile = userState.fetchUserProfileStatus === FetchStatus.FETCHING
  const isRequestingVerificationCode = userVerificationState.fetchVerificationStatus === FetchStatus.REQUESTING
  return (
    <AccountMainSection className={styles.profilePage}>
      <AccountMainSectionHeader className="mainHeader">
        <Trans i18nKey="AccountMyProfilePage.title">My Profile</Trans>
        <Link to={routesState.account.accountHistory.index.link} className="btnSeeAccountHistory">
          <Trans i18nKey="AccountMyProfilePage.link.seeAccountHistory">See account history</Trans>
        </Link>
      </AccountMainSectionHeader>
      <AccountMainSectionBody>
        {!isFetchingProfile && state.alert && !state.isChangeEmailDialogOpen && (
          <div>
            <Alert
              type={state.alert.type}
              className="profilePageAlerts"
              onDismiss={() => {
                updateState({ alert: null })
              }}>
              {state.alert.element}
            </Alert>
            {userState.userProfileError && (
              <Button className="btn btn-primary btnReload" onClick={initializeProfilePage}>
                <Trans i18nKey="Common.reload">Reload</Trans>
              </Button>
            )}
          </div>
        )}

        {isFetchingProfile && <Loading className={LoadingSize.medium} />}
        {!isFetchingProfile && !userState.userProfileError && renderFormEditProfile()}

        {state.isChangeEmailDialogOpen && (
          <ChangeEmailDialog
            isRequestingVerificationCode={isRequestingVerificationCode}
            onClose={closeChangeEmailDialog}
            onSendVerification={onSendVerificationCode}
            onDismissAlert={() => updateState({ alert: null })}
            alert={state.alert}
          />
        )}
      </AccountMainSectionBody>
    </AccountMainSection>
  )
}
