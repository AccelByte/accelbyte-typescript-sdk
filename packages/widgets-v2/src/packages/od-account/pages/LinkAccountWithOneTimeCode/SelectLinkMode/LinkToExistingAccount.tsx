/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import classNames from 'classnames'
import { Trans } from 'react-i18next'
import { t } from '@od-components/i18n/index'
import { Alert } from '@od-components/components/Alert/Alert'
import { Button, ButtonStyle } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { LoginIcon } from '@od-components/components/Icons/LoginIcon'
import { ProfileImage } from '@od-components/components/ProfileImage/ProfileImage'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { UserHelper } from '@od-shared/utils/UserHelper'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import styles from '../LinkAccountWithOneTimeCodePage.module.scss'
import { PickProgression } from '../PickProgression/PickProgression'
import { SuccessMessage } from '../SuccessMessage'
import { EXPIRED_ONE_TIME_ERROR_CODE, ONE_TIME_CODE_LENGTH } from '../constants'
import { RestartMessage } from './RestartMessage'
import { CommonTitle } from './CommonTitle'
import { useSdk } from '~/hooks/useSdk'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { GetLinkHeadlessAccountConflictResponse, Iam, IamHelper, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

enum LinkStep {
  linkAccount = 'linkAccount',
  pickProgression = 'pickProgression',
  shouldRestart = 'shouldRestart',
  success = 'success'
}

interface Props {
  oneTimeLinkCode: string
  onHideTitle: () => void
  onRestart: () => void
}

interface State {
  alert: AlertValue | null
  isLinking: boolean
  step: keyof typeof LinkStep
  progressionData: Pick<GetLinkHeadlessAccountConflictResponse, 'currentAccount' | 'headlessAccount' | 'platformId'> | null
}

export const LinkToExistingAccount = (props: Props) => {
  const [state, setState] = React.useState<State>({
    alert: null,
    isLinking: false,
    step: LinkStep.linkAccount,
    progressionData: null
  })

  const [sdk] = useSdk()
  const { state: routesState } = useRoutes()
  const { state: userState } = useUserInfo()
  const {
    state: { discoveryConfigData }
  } = useDiscoveryConfigs()
  const brandName = discoveryConfigData?.brandName.data.value || ''

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const dismissAlert = () => {
    updateState({ alert: null })
  }

  const onClickLogin = () => {
    const { createLoginURL } = new IamUserAuthorizationClient(sdk)
    const { oneTimeLinkCode } = props
    const returnPath = routesState.linkAccountOneTimeCode.makePath({ query: { oneTimeLinkCode } }) as string
    const loginURL = createLoginURL(returnPath, undefined, oneTimeLinkCode)
    window.location.replace(loginURL)
  }

  const setErrorAlert = (error: Error) => {
    const { oneTimeLinkCode, onHideTitle } = props
    const errorCode = ErrorHelper.extractServiceErrorCode(error)
    if (errorCode === EXPIRED_ONE_TIME_ERROR_CODE) {
      onHideTitle()
      updateState({ step: LinkStep.shouldRestart })
    }

    updateState({
      alert: {
        type: AlertType.danger,
        element: (() => {
          switch (errorCode) {
            case EXPIRED_ONE_TIME_ERROR_CODE:
              return oneTimeLinkCode.length === ONE_TIME_CODE_LENGTH
                ? t('LinkAccountWithOneTimeCodePage.error.expired')
                : t('LinkAccountWithOneTimeCodePage.error.invalid')
            default:
              return <CommonError error={error} />
          }
        })()
      }
    })
  }

  const onLinkToExisting = async () => {
    const userApi = Iam.UsersApi(sdk)
    const { oneTimeLinkCode, onHideTitle } = props
    const { isLinking } = state
    const publisherName = brandName

    try {
      if (isLinking) return
      updateState({ isLinking: true })
      const result = await userApi.getUsersMeHeadlessLinkConflict({ oneTimeLinkCode })

      const { platformAlreadyLinked, platformLinkConflict, platformId, currentAccount, headlessAccount } = result
      const platformName = UserHelper.getPlatformName(platformId)

      if (platformAlreadyLinked || platformLinkConflict) {
        updateState({
          isLinking: false,
          alert: {
            type: AlertType.danger,
            element: (
              <Trans i18nKey="LinkAccountWithOneTimeCodePage.selectLinkMode.linkToExisting.conflict.message">
                Unable to link this {{ publisherName }} account. Because it has linked to other {{ platformName }} account previously.
                Please use another {{ publisherName }} account.
              </Trans>
            )
          }
        })
        return
      }

      onHideTitle()
      updateState({ step: LinkStep.pickProgression, progressionData: { currentAccount, headlessAccount, platformId } })
    } catch (error) {
      console.error(error)
      updateState({ isLinking: false })
      setErrorAlert(error as Error)
    }
  }

  const onLinkWithProgressionSuccess = () => {
    updateState({ alert: null, step: LinkStep.success })
  }

  const renderNoSession = () => {
    const publisherName = brandName

    return (
      <>
        <div className={styles.noSession}>
          <LoginIcon className={styles.loginIcon} />
          <p className={styles.description}>
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.selectLinkMode.linkToExisting.noSession.message">
              There is no logged session, please login to your {{ publisherName }} account to continue the account linking process.
            </Trans>
          </p>
        </div>

        <Button className="btn btn-primary mt-6 w-full py-2 px-0" onClick={onClickLogin}>
          {t('Navigation.links.login')}
        </Button>
      </>
    )
  }

  const renderWithSession = () => {
    const { userProfile, user } = userState
    const { isLinking } = state
    const publisherName = brandName

    if (!user) return null

    return (
      <>
        <div className={styles.withSession}>
          <ProfileImage imageLink={userProfile?.avatarUrl || ''} className={styles.withSessionAvatar} />
          <div className="text-2sm ml-4">
            <p className={styles.withSessionUserName}>{user.userName || user.displayName}</p>
            <p className={styles.withSessionEmail}>{user.emailAddress}</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button className="btn btn-primary mb-6 w-full py-2 px-0" onClick={onLinkToExisting} isLoading={isLinking}>
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.selectLinkMode.tab.linkToExisting">Link to Existing Account</Trans>
          </Button>

          <p className={styles.description}>
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.linkAnother.question">
              Don't want to link to this existing account?
            </Trans>
          </p>

          <Button className="text-2sm text-primary-60 mx-auto py-2" buttonStyle={ButtonStyle.NONE} onClick={onClickLogin}>
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.linkAnother.action">
              Link with another {{ publisherName }} account
            </Trans>
          </Button>
        </div>
      </>
    )
  }

  const renderLinkAccountStep = () => {
    const { user } = userState
    return user && !IamHelper.currentUserIsHeadlessAccount(user) ? renderWithSession() : renderNoSession()
  }

  const { oneTimeLinkCode, onRestart } = props
  const { alert, step, progressionData } = state
  const publisherName = brandName
  const platformName = UserHelper.getPlatformName(progressionData?.platformId || '')

  return (
    <>
      {step === LinkStep.pickProgression && (
        <>
          <div className="mb-5 text-center">
            <p className={styles.title}>
              <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.title">Choose Game Progression</Trans>
            </p>
            <p className={styles.description}>
              <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.desc">
                Select the game progression you'd like to migrate from your {{ platformName }} account to your {{ publisherName }} account.
              </Trans>
            </p>
          </div>
          <hr />
        </>
      )}

      {step === LinkStep.shouldRestart && <CommonTitle />}

      {!!alert && (
        <Alert
          type={alert.type}
          onDismiss={dismissAlert}
          className={classNames('mb-6 text-left', step === LinkStep.shouldRestart && 'mt-5')}>
          {alert.element}
        </Alert>
      )}

      {step === LinkStep.linkAccount && renderLinkAccountStep()}
      {step === LinkStep.pickProgression && progressionData && (
        <PickProgression
          platformName={platformName}
          oneTimeLinkCode={oneTimeLinkCode}
          currentAccount={progressionData?.currentAccount}
          headlessAccount={progressionData?.headlessAccount}
          onSuccess={onLinkWithProgressionSuccess}
          onError={setErrorAlert}
        />
      )}
      {step === LinkStep.success && <SuccessMessage publisherName={publisherName} isUpgradeToFull={false} platformName={platformName} />}
      {step === LinkStep.shouldRestart && <RestartMessage onRestart={onRestart} />}
    </>
  )
}
