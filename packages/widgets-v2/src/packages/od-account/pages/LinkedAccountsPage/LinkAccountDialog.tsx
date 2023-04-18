/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { CommonError } from '@od-components/components/CommonError'
import { Dialog, DialogBody } from '@od-components/components/Dialog/Dialog'
import { ArrowIcon } from '@od-components/components/Icons/ArrowIcon'
import { LoadingBarIcon } from '@od-components/components/Icons/LoadingBarIcon'
import { t } from '@od-components/i18n/index'
import { AlertType } from '@od-shared/models/Alert'
import { LinkedPlatformId } from '@od-shared/models/Linked'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import './LinkedAccountsPage.scss'
import { getThirdPartyPlatformIcon } from './PlatformIcon'
import { mockThirdPartyLogin } from '@od-shared/mocks/MockVars'
import { AllowedThirdPartyClient } from '@od-shared/constants/ShConstants'
import { useSdk } from '~/hooks/useSdk'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { Iam, PublicThirdPartyPlatformInfo } from '@accelbyte/sdk-iam'

interface Props {
  onClose: () => unknown
  linkedPlatform: Set<LinkedPlatformId>
  openConfirmLinkToPlatformDialog: (platformConfig: PublicThirdPartyPlatformInfo) => void
  isPreviewMode?: boolean
}

interface State {
  isFetchingThirdPartyLoginConfig: boolean
  fetchThirdPartyLoginConfigError: Error | unknown | null
  fetchThirdPartyLoginUrlError: Error | unknown | null
  thirdPartyLoginConfig: PublicThirdPartyPlatformInfo[]
}

export const LinkAccountDialog = ({ linkedPlatform, isPreviewMode, onClose, openConfirmLinkToPlatformDialog }: Props) => {
  const [state, setState] = useState<State>({
    thirdPartyLoginConfig: [],
    isFetchingThirdPartyLoginConfig: false,
    fetchThirdPartyLoginConfigError: null,
    fetchThirdPartyLoginUrlError: null
  })
  const { thirdPartyLoginConfig, isFetchingThirdPartyLoginConfig, fetchThirdPartyLoginConfigError, fetchThirdPartyLoginUrlError } = state

  const [sdk] = useSdk()
  const { state: discoveryConfigState } = useDiscoveryConfigs()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    if (isPreviewMode) return

    fetchThirdPartyLoginConfig()
  }, [isPreviewMode])

  const fetchThirdPartyLoginConfig = async () => {
    if (isFetchingThirdPartyLoginConfig) return
    updateState({ isFetchingThirdPartyLoginConfig: true, fetchThirdPartyLoginConfigError: null })

    try {
      const thirdPartyCredentialService = Iam.ThirdPartyCredentialApi(sdk)
      const result = await thirdPartyCredentialService.getPlatformsClientsActive()

      const thirdPartyLoginConfig = result.filter(
        (config: PublicThirdPartyPlatformInfo) => !!AllowedThirdPartyClient.enum[config.PlatformId] && config.IsActive
      )
      updateState({ thirdPartyLoginConfig })
    } catch (error) {
      console.error(error)
      updateState({ fetchThirdPartyLoginConfigError: error })
    } finally {
      updateState({ isFetchingThirdPartyLoginConfig: false })
    }
  }

  const renderPlatformList = () => {
    const thirdPartyLoginConfigList = !isPreviewMode ? thirdPartyLoginConfig : mockThirdPartyLogin

    if (thirdPartyLoginConfigList.length < 1) {
      return (
        <div className={'platformBox disabled text-center'}>
          <Trans i18nKey={'LinkedAccountPage.linkAccount.modal.noPlatformConfig'}>No third party platform available</Trans>
        </div>
      )
    }

    return thirdPartyLoginConfigList.map(platformConfig => {
      const disabled = linkedPlatform.has(platformConfig.PlatformId as LinkedPlatformId)
      if (disabled || !platformConfig.IsActive) return null

      return (
        <div
          onClick={() => {
            openConfirmLinkToPlatformDialog(platformConfig)
          }}
          role={'button'}
          key={platformConfig.PlatformId}
          className="platformBox">
          <span className="platform flex items-center capitalize">{getThirdPartyPlatformIcon(platformConfig.PlatformId)}</span>

          {!disabled && <ArrowIcon />}
          {disabled && (
            <span className="text-green-40 uppercase">
              <Trans i18nKey="LinkAccountDialog.linked">Linked</Trans>
            </span>
          )}
        </div>
      )
    })
  }

  const publisherName = discoveryConfigState.discoveryConfigData?.brandName.data.value || ''

  return (
    <Dialog
      className="purchaseDialog"
      title={t('LinkedAccountPage.title')}
      isOpen={true}
      onClose={() => {
        if (onClose) {
          onClose()
        }
      }}
      isPreviewMode={isPreviewMode}>
      <DialogBody>
        <div className="dialogPlatformBodyText">
          {isFetchingThirdPartyLoginConfig && (
            <div className={'text-center'}>
              <LoadingBarIcon />
            </div>
          )}
          {!isFetchingThirdPartyLoginConfig && !!fetchThirdPartyLoginConfigError && (
            <div className="text-center">
              <Trans i18nKey={'LinkedAccountPage.linkAccount.modal.fetchConfigFail'}>
                Unable to get third party platform information <br />
                <a role={'button'} onClick={fetchThirdPartyLoginConfig}>
                  Try Again
                </a>
              </Trans>
            </div>
          )}
          {!isFetchingThirdPartyLoginConfig && !fetchThirdPartyLoginConfigError && (
            <>
              {fetchThirdPartyLoginUrlError && (
                <Alert className="mb-6" type={AlertType.danger}>
                  <CommonError error={fetchThirdPartyLoginUrlError} />
                </Alert>
              )}
              <Trans i18nKey="LinkedAccountPage.linkAccountDialog">
                Select the platform you want to link to your {{ publisherName }} account.
              </Trans>
              <div className="dialogPlatformList">{renderPlatformList()}</div>
            </>
          )}
        </div>
      </DialogBody>
    </Dialog>
  )
}
