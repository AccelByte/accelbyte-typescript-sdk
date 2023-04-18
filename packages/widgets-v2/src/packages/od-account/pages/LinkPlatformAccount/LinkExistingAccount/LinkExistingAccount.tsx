/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { InputGroupPassword } from '@od-components/components/Form/InputPassword/InputPassword'
import classNames from 'classnames'
import { t } from '@od-components/i18n/i18n'
import { IpcChannels as Ipc } from '@od-shared/constants/IpcChannels'
import { AlertType } from '@od-shared/models/Alert'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { UserHelper } from '@od-shared/utils/UserHelper'
import { CommonValidationErrorType, validateNotEmpty, validateNumeric, Validation } from '@accelbyte/validator'
import { DesktopChecker } from '@accelbyte/sdk'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import isEmpty from 'validator/lib/isEmpty.js'
import { redirectAfterSuccessLinkAccount } from '../common'
import { ConfirmationLinkAccountDialog } from '../ConfirmationLinkAccountDialog'
import { LinkAccountDeletionError } from '../LinkAccountDeletionError'
import { LinkBannedAccountError } from '../LinkBannedAccountError'
import { AlertLinkingAccount } from '../LinkPlatformAccountPage'
import { TokenExpiredDialogError } from '../TokenExpiredDialogError'
import styles from './LinkExistingAccount.module.scss'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useLinkedAccounts } from '~/hooks/iam/useLinkedAccounts'
import { useSdk } from '~/hooks/useSdk'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useAppState } from '~/hooks/useAppState'
import { IamUserAuthorizationClient, MFAData } from '@accelbyte/sdk-iam'

const EmailError = ({ errorType }: { errorType: CommonValidationErrorType | null }) => {
  if (!errorType) return null

  const emailErrorMap = {
    [CommonValidationErrorType.enum.empty]: (
      <Trans i18nKey="linkPlatformAccountPage.LinkExistingAccount.EmailOrUsernameFormError.empty">Email or Username is required</Trans>
    )
  }

  return <FormGroupError>{emailErrorMap[errorType]}</FormGroupError>
}

const PasswordError = ({ errorType }: { errorType: CommonValidationErrorType | null }) => {
  if (!errorType) return null

  const passwordErrorMap = {
    [CommonValidationErrorType.enum.empty]: (
      <Trans i18nKey="linkPlatformAccountPage.LinkExistingAccount.PasswordError.empty">Please input your password</Trans>
    ),
    [CommonValidationErrorType.enum.exceedMaximumValue]: (
      <Trans i18nKey="linkPlatformAccountPage.LinkExistingAccount.paswordTooLong">Your password is too long</Trans>
    )
  }

  return <FormGroupError>{passwordErrorMap[errorType]}</FormGroupError>
}

interface State {
  email: string
  password: string
  dialogType: string | null
  isSubmitting: boolean
}
interface Props {
  setAlert: (alert: AlertLinkingAccount) => void
  backToLogin: () => void
  platformId: string
  clientId: string
  linkingToken: string
  onOpenForgotPassword?: () => void
  isPreviewMode?: boolean
}

const PASSWORD_MAX_LENGTH = 100
enum DIALOG_TYPE {
  'CONFIRMATION' = 'CONFIRMATION',
  'LINK_DELETION_ACCOUNT_ERROR' = 'LINK_DELETION_ACCOUNT_ERROR',
  'TOKEN_EXPIRED_ERROR' = 'TOKEN_EXPIRED_ERROR',
  'BANNED_USER_ERROR' = 'BANNED_USER_ERROR'
}

export const LinkExistingAccount = ({
  isPreviewMode,
  platformId,
  clientId,
  linkingToken,
  setAlert,
  backToLogin,
  onOpenForgotPassword
}: Props) => {
  const validation = React.useRef<
    Validation<{
      email: CommonValidationErrorType
      password: CommonValidationErrorType
    }>
  >(new Validation())
  const [state, setState] = useState<State>({
    email: '',
    password: '',
    dialogType: null,
    isSubmitting: false
  })

  const { mutations: userMutations } = useUserInfo()
  const { mutations: linkedAccountsMutations } = useLinkedAccounts()
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const [sdk] = useSdk()
  const appState = useAppState()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const email = event.target.value
    validation.current.set('email', validateNotEmpty(email))
    updateState({ email: event.target.value })
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const password = event.target.value
    validation.current.set('password', validateNumeric(String(password.length), { max: PASSWORD_MAX_LENGTH }))
    updateState({ password })
  }

  const openConfirmationDialog = () => {
    if (!validation.current.isAllValid()) return

    updateState({ dialogType: DIALOG_TYPE.CONFIRMATION })
  }

  const openErrorLinkDeletionAccount = () => {
    updateState({ dialogType: DIALOG_TYPE.LINK_DELETION_ACCOUNT_ERROR })
  }

  const openTokenExpiredErrorDialog = () => {
    updateState({ dialogType: DIALOG_TYPE.TOKEN_EXPIRED_ERROR })
  }

  const openErrorLinkBannedUser = () => {
    updateState({ dialogType: DIALOG_TYPE.BANNED_USER_ERROR })
  }

  const closeDialog = () => {
    updateState({ dialogType: null })
  }

  const forgotPassword = () => {
    const forgotPasswordURL = new IamUserAuthorizationClient(sdk).createForgotPasswordURL()

    if (onOpenForgotPassword) {
      onOpenForgotPassword()
    }

    if (DesktopChecker.isDesktopApp()) {
      Device.send(Ipc.OPEN_EXTERNAL, forgotPasswordURL)
    } else {
      window.location.replace(forgotPasswordURL)
    }
  }

  const setErrorAlert = (error: Error | unknown) => {
    const platformName = UserHelper.getPlatformName(platformId)
    const errorCode = ErrorHelper.extractServiceErrorCode(error)
    const remainingAttempt = ErrorHelper.isAxiosError(error) && error?.response?.data?.messageVariables?.remainingAttempt

    setAlert({
      type: AlertType.danger,
      message: (() => {
        switch (errorCode) {
          case 10197:
          case 20019:
            if (remainingAttempt) {
              return (
                <Trans i18nKey="linkPlatformAccountPage.LinkExistingAccount.invalidUsernamePasswordWithRemainingAttempt">
                  Invalid username, email, or password. You have {{ remainingAttempt }} remaining login attempts before your account is
                  locked.
                </Trans>
              )
            }

            return (
              <Trans i18nKey="linkPlatformAccountPage.LinkExistingAccount.invalidUsernamePassword">
                Incorrect email, username or password.
              </Trans>
            )
          case 10163:
            return (
              <Trans i18nKey="linkPlatformAccountPage.LinkExistingAccount.alreadyLinkedError">
                This account is already linked with other {{ platformName }} account. Please try to link with another account.
              </Trans>
            )
          case 10200:
            return (
              <Trans i18nKey="linkPlatformAccountPage.LinkExistingAccount.unableToLink">
                Unable to link this account. Because it has linked to other {{ platformName }} account previously. Please use another
                account or create a new one instead.
              </Trans>
            )
          case 20007:
            return (
              <Trans i18nKey="linkPlatformAccountPage.error.tooManyAttempt">
                Multiple failed login attempts detected. Your account has been temporarily locked for security reasons.
              </Trans>
            )
          default:
            return <CommonError error={error} />
        }
      })()
    })
  }

  const onRequired2FA = async (mfaData: MFAData) => {
    await userMutations.linkAccountRequired2FA(mfaData)
    historyState.replace(routesState.home.link)
  }

  const onSubmit = async () => {
    if (!validation.current.isAllValid()) return

    const { email, password } = state

    try {
      updateState({ isSubmitting: true })
      const result = await linkedAccountsMutations.linkExistingAccount({
        email,
        password,
        linkingToken,
        clientId,
        onTokenExpired: openTokenExpiredErrorDialog,
        onErrorLinkDeletion: openErrorLinkDeletionAccount,
        onErrorUserBanned: openErrorLinkBannedUser,
        onRequired2FA
      })

      if (result.error) throw result.error

      if (result.data?.access_token) {
        appState.refreshSession(result.data.access_token, result.data.refresh_token)
        await linkedAccountsMutations.updateUserCustomAttribute(result.data.user_id, platformId)
        await appState.refreshUser()
        await redirectAfterSuccessLinkAccount(historyState)
      }
    } catch (error) {
      setErrorAlert(error)
      closeDialog()
    } finally {
      updateState({ isSubmitting: false })
      closeDialog()
    }
  }

  const { email, password, dialogType, isSubmitting } = state
  const isSubmitButtonDisabled = !validation.current.isAllValid() || isEmpty(email) || isEmpty(password)

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          openConfirmationDialog()
        }}>
        <FormGroup>
          <div className={styles.label}>
            <Trans i18nKey="linkPlatformAccountPage.LinkExistingAccount.formLabel.email">Email</Trans>
          </div>
          <InputGroup
            type="text"
            placeholder={t('linkPlatformAccountPage.placeholder.emailAddress')}
            disabled={false}
            value={email}
            onChange={onEmailChange}
          />
          <EmailError errorType={validation.current.get('email')} />
        </FormGroup>
        <FormGroup>
          <div className={styles.label}>
            <Trans i18nKey="linkPlatformAccountPage.LinkExistingAccount.formLabel.password">Password</Trans>
          </div>
          <InputGroupPassword
            className="mb-1 max-w-md"
            value={password}
            placeholder={t('linkPlatformAccountPage.placeholder.password')}
            togglePassword
            onChange={onPasswordChange}
          />
          <PasswordError errorType={validation.current.get('password')} />
        </FormGroup>
        <div className={classNames('mb-3 cursor-pointer text-right text-xs', styles.linkLabel)} onClick={forgotPassword}>
          <Trans i18nKey="linkPlatformAccountPage.Forgotpassword">Forgot password</Trans>
        </div>
        <div className="flex flex-row">
          <Button
            loadingIndicator="SPINNER"
            disabled={!isPreviewMode && (isSubmitButtonDisabled || isSubmitting)}
            isLoading={isSubmitting}
            className="btn big btn-primary w-full uppercase"
            type="submit">
            <Trans i18nKey="EmailVerificationPage.continueButton">CONTINUE</Trans>
          </Button>
        </div>
      </form>
      {dialogType === DIALOG_TYPE.CONFIRMATION && (
        <ConfirmationLinkAccountDialog
          onCancel={closeDialog}
          onConfirm={onSubmit}
          platformName={UserHelper.getPlatformName(platformId)}
          isSubmitting={isSubmitting}
        />
      )}
      {dialogType === DIALOG_TYPE.LINK_DELETION_ACCOUNT_ERROR && <LinkAccountDeletionError onClose={closeDialog} />}
      {dialogType === DIALOG_TYPE.TOKEN_EXPIRED_ERROR && <TokenExpiredDialogError onClose={backToLogin} />}
      {dialogType === DIALOG_TYPE.BANNED_USER_ERROR && <LinkBannedAccountError onClose={closeDialog} />}
    </>
  )
}
