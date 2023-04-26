/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Typography } from '@od-components/components/Typography/Typography'
import { LanguageSelector } from '@od-components/components/LanguageSelector/LanguageSelector'
import { Tabs, TabStyles } from '@od-components/components/Tabs/Tabs'
import { t } from '@od-components/i18n/i18n'
// import { UIEvent } from '@od-shared/app-events/UIEvent'
import { AlertType } from '@od-shared/models/Alert'
import { REGISTRATION_LINK_ACCOUNT_EMAIL_STORAGE_KEY } from '@od-shared/models/User'
import { DesktopChecker } from '@accelbyte/sdk'
// import bgCommon from '@od-assets/images/bg-common.svg'
import classNames from 'classnames'
// import { LoginInProgress } from 'od-desktop/~/components/LoginInProgress/LoginInProgress'
import * as React from 'react'
import { Trans } from 'react-i18next'
import { InputValidationOutdatedModal } from '../InputValidationOutdatedModal/InputValidationOutdatedModal'
import { LinkExistingAccount } from './LinkExistingAccount/LinkExistingAccount'
import { LinkNewAccount } from './LinkNewAccount/LinkNewAccount'
import styles from './LinkPlatformAccountPage.module.scss'
import { HeaderLogoContainer } from '@od-account/components/HeaderLogoContainer'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useSdk } from '~/hooks/useSdk'
import { IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

export interface AlertLinkingAccount {
  type: AlertType
  message: React.ReactNode
}

interface State {
  selectedTab: string
  hideTitleAndTabs: boolean
  alert: AlertLinkingAccount | null
  isOpenForgotPassword: boolean
  isPreviewMode?: boolean
}

interface Props {
  isPreviewMode?: boolean
  selectedTab?: string
  logo?: string
}

enum selectTabs {
  'linkExistingAccount' = 'linkExistingAccount',
  'linkNewAccount' = 'linkNewAccount'
}

export const LinkPlatformAccountPage = ({ isPreviewMode, selectedTab: selectedTabProps, logo }: Props) => {
  const [state, setState] = React.useState<State>({
    selectedTab: selectedTabProps === 'linkNewAccount' ? selectTabs.linkNewAccount : selectTabs.linkExistingAccount,
    hideTitleAndTabs: false,
    alert: null,
    isOpenForgotPassword: false
  })

  const { state: userState } = useUserInfo()
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const [sdk] = useSdk()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  // React.useEffect(() => {
  //   UIEvent.updateBackground(`url(${bgCommon})`)

  //   return () => {
  //     UIEvent.updateBackground(null)
  //   }
  // }, [])

  React.useEffect(() => {
    const user = userState.user
    const { alreadyLinked, linkingToken, platformId, clientId } = getSearchParams()

    if (alreadyLinked === 'true' || !linkingToken || !platformId || !clientId || user) {
      return historyState.replace(routesState.home.link)
    }

    const savedEmailLinkNewAccount = sessionStorage.getItem(REGISTRATION_LINK_ACCOUNT_EMAIL_STORAGE_KEY)
    if (savedEmailLinkNewAccount) {
      updateState({
        hideTitleAndTabs: true,
        selectedTab: selectTabs.linkNewAccount
      })
    }
  }, [userState.user])

  const getSearchParams = () => {
    const isPreview = isPreviewMode
    const searchParams = new URLSearchParams(historyState.location.search)
    const alreadyLinked = !isPreview ? searchParams.get('alreadyLinked') : 'preview'
    const linkingToken = !isPreview ? searchParams.get('linkingToken') : 'preview'
    const platformId = !isPreview ? searchParams.get('platformId') : 'preview'
    const clientId = !isPreview ? searchParams.get('clientId') : 'preview'

    return {
      alreadyLinked,
      linkingToken,
      platformId,
      clientId
    }
  }

  const setAlert = (alert: AlertLinkingAccount) => {
    updateState({ alert })
  }

  const closeAlert = () => {
    updateState({ alert: null })
  }

  const backToLogin = () => {
    const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL()
    window.location.replace(loginURL)
  }

  const toggleOpenForgotPassword = () => {
    updateState({ isOpenForgotPassword: !state.isOpenForgotPassword })
  }

  const { selectedTab, hideTitleAndTabs, alert, isOpenForgotPassword } = state
  const { linkingToken, platformId, clientId } = getSearchParams()

  if (isOpenForgotPassword) {
    return (
      <div className={classNames(styles.linkPlatformAccountPage, { [styles.desktop]: DesktopChecker.isDesktopApp() })}>
        {/* // TODO: Add login in progress when migrating launcher to use widgets-v2 */}
        {/* <LoginInProgress onRetry={this.toggleOpenForgotPassword} /> */}
      </div>
    )
  }

  if (!linkingToken || !platformId || !clientId) return <div />

  return (
    <>
      <div className="row mr-3 mt-8">
        <LanguageSelector className={styles.languageSelector} isDisabled={isPreviewMode} />
      </div>
      <div className={classNames(styles.linkPlatformAccountPage, { [styles.desktop]: DesktopChecker.isDesktopApp() })}>
        <div className={styles.linkPlatformAccountContainer}>
          <HeaderLogoContainer logo={logo} />
          <div className={styles.headlessAccountContainerForm}>
            {!hideTitleAndTabs && (
              <div className={styles.contentWrapper}>
                <Typography tag="h3" fontSize="lg" isCentered className={styles.title}>
                  <Trans i18nKey="LinkPlatformAccountPage.title">Link an Account</Trans>
                </Typography>

                <Typography tag="p" fontSize="2sm" isCentered className={styles.titleDescription}>
                  <Trans i18nKey="LinkPlatformAccountPage.titleDescription">
                    Sorry, we were not able to find any account that is already linked with this account. Would you like to link instead?
                  </Trans>
                </Typography>
              </div>
            )}

            <div className={styles.formWrapper}>
              {!hideTitleAndTabs && (
                <Tabs>
                  {Object.keys(selectTabs).map(tab => (
                    <span
                      className={classNames(TabStyles.tab, tab === selectedTab && TabStyles.active, styles.formTabs)}
                      onClick={() =>
                        !isPreviewMode
                          ? updateState({
                              selectedTab: tab
                            })
                          : {}
                      }
                      key={tab}>
                      {generateTabName(tab)}
                    </span>
                  ))}
                </Tabs>
              )}

              {alert && (
                <div className="mt-6">
                  <Alert type={alert.type} onDismiss={closeAlert}>
                    {alert.message}
                  </Alert>
                </div>
              )}

              <div className="py-6">
                {selectedTab === selectTabs.linkExistingAccount && (
                  <LinkExistingAccount
                    setAlert={setAlert}
                    backToLogin={backToLogin}
                    linkingToken={linkingToken}
                    platformId={platformId}
                    clientId={clientId}
                    isPreviewMode={isPreviewMode}
                    onOpenForgotPassword={DesktopChecker.isDesktopApp() ? toggleOpenForgotPassword : undefined}
                  />
                )}

                {selectedTab === selectTabs.linkNewAccount && (
                  <LinkNewAccount
                    linkingToken={linkingToken}
                    platformId={platformId}
                    clientId={clientId}
                    isPreviewMode={isPreviewMode}
                    onContinueToRegistrationForm={hideTitleAndTabs => updateState({ hideTitleAndTabs })}
                  />
                )}
              </div>
            </div>

            {!hideTitleAndTabs && (
              <div className={styles.bottomSection}>
                <p className={styles.loginWithAccelByteAccount}>
                  <Trans i18nKey="LinkPlatformAccountPage.loginWithAnotherAccount">
                    Don't want to link this account?
                    <br />
                    <a href="#" onClick={backToLogin}>
                      Login with another account
                    </a>
                  </Trans>
                </p>
              </div>
            )}
          </div>
          {hideTitleAndTabs && (
            <div className="mt-5 cursor-pointer text-center" onClick={backToLogin}>
              Back to login
            </div>
          )}
          <InputValidationOutdatedModal />
        </div>
      </div>
    </>
  )
}

// Helper functions.
function generateTabName(tabName: string) {
  switch (tabName) {
    case 'linkExistingAccount':
      return t('LinkPlatformAccountPage.tab.linkExistingAccount')
    case 'linkNewAccount':
      return t('LinkPlatformAccountPage.tab.linkNewAccount')
    default:
      return ''
  }
}
