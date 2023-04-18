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
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { DownloadIcon } from '@od-components/components/Icons/DownloadIcon'
import { Spinner, SpinnerStyle } from '@od-components/components/Spinner/Spinner'
import { t } from '@od-components/i18n/index'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { mockPassword } from '@od-shared/mocks/MockVars'
import styles from './AccountDeletionPage.module.scss'
import { useGdpr } from '~/hooks/gdpr/useGdpr'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { FetchStatus } from '~/constants/fetch-statuses'

interface State {
  password: string
  alert: AlertValue | null
}

interface Props {
  isPreviewMode?: boolean
}

export const AccountDeletionPage = ({ isPreviewMode }: Props) => {
  const [state, setState] = React.useState<State>({
    password: '',
    alert: null
  })
  const { password, alert } = state

  const {
    state: { user }
  } = useUserInfo()
  const {
    state: { requestDeletionFetchStatus },
    mutations: { deleteAccount, updateAccountDeletionSuccessPageLocked }
  } = useGdpr()
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()

  const isRequestingDeletion = requestDeletionFetchStatus === FetchStatus.CANCELLING

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const notifyAccountDeletionSuccess = () => {
    updateAccountDeletionSuccessPageLocked(true)
    historyState.push(routesState.accountDeletionSuccess.link)
  }

  const notifyAccountDeletionError = (error: Error | unknown) => {
    updateState({
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    })
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({
      password: event.target.value
    })
  }

  const requestAccountDeletion = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!user) return

    updateState({ password: '' })
    const result = await deleteAccount(user.userId, password)
    if (result.error) {
      notifyAccountDeletionError(result.error)
      return
    }

    notifyAccountDeletionSuccess()
  }

  const renderFormPassword = () => {
    const isInEditor = isPreviewMode
    return (
      <form className="formPassword" onSubmit={requestAccountDeletion}>
        <label className="passwordLabel">
          <Trans i18nKey="AccountDeletionPage.form.passwordLabel">
            If you are ready to delete your account, input your password to proceed the deletion
          </Trans>
        </label>
        <InputGroup
          type="password"
          value={!isInEditor ? password : mockPassword}
          name="password"
          className="passwordInput"
          placeholder={t('AccountDeletionPage.form.passwordPlaceholder')}
          onChange={onPasswordChange}
          readOnly={isInEditor}
        />
        <Button disabled={!password || isRequestingDeletion} className="btn big btn-primary btnDelete" type="submit">
          {isRequestingDeletion ? (
            <>
              <Spinner className={`${SpinnerStyle.inline} spinner`} />
              <Trans i18nKey="AccountDeletionPage.form.processing">Processing</Trans>
            </>
          ) : (
            <Trans i18nKey="AccountDeletionPage.form.deleteAccountButton">Delete my Account</Trans>
          )}
        </Button>
      </form>
    )
  }

  return (
    <AccountMainSection className={styles.accountDeletionPage}>
      <AccountMainSectionHeader>
        <Trans i18nKey={'AccountDeletionPage.title'}>Account Deletion</Trans>
      </AccountMainSectionHeader>

      <AccountMainSectionBody className="mainBody min-w-xl">
        {!!alert && !isRequestingDeletion && (
          <Alert type={alert.type} className="alert" onDismiss={() => updateState({ alert: null })}>
            {alert.element}
          </Alert>
        )}
        <div className="warningDeleteAccountMessage">
          <Trans i18nKey="AccountDeletionPage.warningDeleteAccount">
            <p>
              This action cannot be undone and it will permanently erase your account. Once the deletion process has begun, you won't be
              able to reactivate your account or retrieve any of the content of information that you've added.
            </p>
            <p className="bottom">Before you delete your account, you might like to:</p>
          </Trans>
        </div>
        <div className="downloadPersonalDataContainer">
          <DownloadIcon className="icon" />
          <div className="messageContainer">
            <Trans i18nKey="AccountDeletionPage.downloadPersonalData">
              <p className="downloadAccount">Download your account information &amp; data</p>
              <p className="savePersonalData">You can save your personal data before your account is permanently deleted</p>
              <Link to={routesState.account.personalData.link} className="btnDownload">
                Download Personal Data
              </Link>
            </Trans>
          </div>
        </div>
        {renderFormPassword()}
      </AccountMainSectionBody>
    </AccountMainSection>
  )
}
