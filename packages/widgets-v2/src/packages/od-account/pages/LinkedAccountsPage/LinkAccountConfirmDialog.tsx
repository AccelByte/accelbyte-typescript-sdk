/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { WarningIcon } from '@od-components/components/Icons/WarningIcon'
import { AlertType } from '@od-shared/models/Alert'
import { LauncherHelper } from '@od-shared/utils/LauncherHelper'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { UserHelper } from '@od-shared/utils/UserHelper'
import classNames from 'classnames'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import styles from './LinkAccountConfirmDialog.module.scss'
import { useHistory } from '~/hooks/routes/useHistory'
import { useSdk, useSdkOptions } from '~/hooks/useSdk'
import { Iam, PublicThirdPartyPlatformInfo } from '@accelbyte/sdk-iam'
import { DesktopChecker } from '@accelbyte/sdk'

interface Props {
  onCancel: () => unknown
  platformConfig: PublicThirdPartyPlatformInfo
}

interface State {
  fetchThirdPartyLoginUrlError: Error | unknown | null
  isFetching: boolean
  isFetched: boolean
}

export const LinkAccountConfirmDialog = ({ platformConfig, onCancel }: Props) => {
  const [state, setState] = useState<State>({
    fetchThirdPartyLoginUrlError: null,
    isFetching: false,
    isFetched: false
  })
  const { fetchThirdPartyLoginUrlError, isFetching, isFetched } = state

  const { state: historyState } = useHistory()
  const [sdk] = useSdk()
  const [sdkOptions] = useSdkOptions()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const redirectToThirdPartyLogin = (url: string) => {
    if (DesktopChecker.isDesktopApp()) {
      LauncherHelper.openExternalBrowser(url)
      return
    }

    window.location.href = url
  }

  const loginPlatform = async (platformConfig: PublicThirdPartyPlatformInfo) => {
    const redirectURI = await UrlUtils.getRedirectUrl(sdkOptions.redirectURI, historyState.location?.pathname)
    const clientId = sdkOptions.clientId

    try {
      updateState({
        fetchThirdPartyLoginUrlError: null,
        isFetching: true
      })
      // third party url
      const result = await Iam.UsersApi(sdk).getWebLinkMeUsers_ByPlatformId(platformConfig.PlatformId, {
        clientId,
        redirectUri: redirectURI
      })
      updateState({ isFetched: true })
      redirectToThirdPartyLogin(result.third_party_url)
    } catch (error) {
      console.error(error)
      updateState({ fetchThirdPartyLoginUrlError: error })
    } finally {
      updateState({ isFetching: false })
    }
  }

  const renderError = () => {
    if (!fetchThirdPartyLoginUrlError) return

    return (
      <Alert className="my-6" type={AlertType.danger}>
        <CommonError error={fetchThirdPartyLoginUrlError} />
      </Alert>
    )
  }

  const platformName = UserHelper.getPlatformName(platformConfig.PlatformId)

  return (
    <Dialog
      className={styles.linkAccountConfirmDialog}
      title={
        <Trans i18nKey="LinkedAccountPage.confirmLinkDialog.title">
          Linking to your <span className="capitalize">{{ platformName }}</span> Account
        </Trans>
      }
      isOpen={true}>
      <DialogBody>
        {renderError()}

        <p className="dialogPlatformBodyText">
          {isFetched ? (
            <Trans i18nKey="LinkedAccountPage.confirmLinkDialog.redirecting">
              Redirecting to the <span className="capitalize">{{ platformName }}</span> login page. Please open your browser to finish the
              process.
            </Trans>
          ) : (
            <Trans i18nKey="LinkedAccountPage.confirmLinkDialog.linkConfirm">
              Link to <span className="capitalize">{{ platformName }}</span> Account will allow you to share your profile, game progression,
              and earned game content with your current account.
              <div className={classNames('my-4 flex', styles.textWarning)}>
                <div className={'mr-3'}>
                  <WarningIcon defaultColor={false} className={styles.warningIcon} />
                </div>
                <div>
                  Once you have linked your <span className="capitalize">{{ platformName }}</span> to your current account, you will not be
                  able to link a different <span>{{ platformName }}</span> account to it
                </div>
              </div>
              You will be redirected to the {{ platformName }} login page to finish the link account process.
            </Trans>
          )}
        </p>
      </DialogBody>
      <DialogFooter>
        <div className="flex justify-end">
          <Button className="btn btn-ghost mr-2 uppercase" buttonType={ButtonType.TEXT} buttonStyle={ButtonStyle.NONE} onClick={onCancel}>
            <Trans i18nKey="LinkedAccountPage.linkAccount.modal.action.cancel">Cancel</Trans>
          </Button>
          {!isFetched && (
            <Button
              className="btn btn-primary uppercase"
              isLoading={isFetching}
              onClick={() => {
                loginPlatform(platformConfig)
              }}>
              <Trans i18nKey="LinkedAccountPage.linkAccount.modal.action.continue">Continue</Trans>
            </Button>
          )}
        </div>
      </DialogFooter>
    </Dialog>
  )
}
