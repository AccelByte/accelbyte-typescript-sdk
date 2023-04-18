/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LinkedAccountsErrorAlert } from '@od-account/pages/LinkedAccountsPage/LinkedAccountsErrorAlert'
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { PlusSignIcon } from '@od-components/components/Icons/PlusSignIcon'
import { Loading } from '@od-components/components/Loading/Loading'
import { gaSendErrorEvent } from '@od-shared/app-events/telemetry/google-analytics/gaErrorTracking'
import { IpcChannels as Ipc } from '@od-shared/constants/IpcChannels'
import { AlertType } from '@od-shared/models/Alert'
import { LinkedAccountGroup, LinkedPlatformId, LinkingProgressStatus } from '@od-shared/models/Linked'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import classNames from 'classnames'
import { DesktopChecker } from '@accelbyte/sdk'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { AccountMainSection, AccountMainSectionBody, AccountMainSectionHeader } from '../AccountMainSection/AccountMainSection'
import { LinkAccountConfirmDialog } from './LinkAccountConfirmDialog'
import { LinkAccountDialog } from './LinkAccountDialog'
import './LinkedAccountsPage.scss'
import { getThirdPartyPlatformIcon } from './PlatformIcon'
import { UnlinkAccountConfirmDialog } from './UnlinkAccountConfirmDialog'
import { mockUserLinkedPlatform } from '@od-shared/mocks/MockVars'
import { useLinkedAccounts } from '~/hooks/iam/useLinkedAccounts'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useHistory } from '~/hooks/routes/useHistory'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { FetchStatus } from '~/constants/fetch-statuses'
import { DistinctLinkedPlatformV3, PublicThirdPartyPlatformInfo } from '@accelbyte/sdk-iam'
import { Link } from '~/packages/od-components/components/WidgetLink'
import { useRoutes } from '~/hooks/routes/useRoutes'

interface State {
  isOpenLinkAccountDialog: boolean
  selectedUnlinkAblePlatformName: string | null
  selectedPlatformToLink: PublicThirdPartyPlatformInfo | null
  accountUnlinkingSuccessful: boolean
  accountLinkingSuccessful: boolean
  accountUnlinkError: Error | unknown | null
  accountLinkError: Error | unknown | null
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  isPreviewMode?: {
    isOpenModalLinked?: boolean
  }
}

export const LinkedAccountsPage = ({ isPreviewMode }: Props) => {
  const [state, setState] = useState<State>({
    isOpenLinkAccountDialog: false,
    selectedUnlinkAblePlatformName: null,
    selectedPlatformToLink: null,
    accountUnlinkingSuccessful: false,
    accountLinkingSuccessful: false,
    accountUnlinkError: null,
    accountLinkError: null
  })
  const {
    isOpenLinkAccountDialog,
    selectedUnlinkAblePlatformName,
    selectedPlatformToLink,
    accountUnlinkingSuccessful,
    accountLinkingSuccessful,
    accountUnlinkError,
    accountLinkError
  } = state

  const { state: userState } = useUserInfo()
  const { state: linkedAccountsState, mutations: linkedAccountsMutations } = useLinkedAccounts()
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const { state: discoveryConfigsState } = useDiscoveryConfigs()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    if (isPreviewMode) {
      updateState({
        isOpenLinkAccountDialog: isPreviewMode?.isOpenModalLinked
      })
    }

    linkIfGivenParameter()
    if (DesktopChecker.isDesktopApp()) {
      Device.receive(Ipc.OPEN_URL, (url: string) => {
        linkIfGivenParameter(url)
      })
    }

    return () => {
      if (DesktopChecker.isDesktopApp()) {
        Device.remove(Ipc.OPEN_URL)
      }
    }
  }, [isPreviewMode?.isOpenModalLinked])

  const getUserDistinctLinkedPlatform = async () => {
    const userId = userState.user?.userId
    if (!userId) return
    await linkedAccountsMutations.getUserDistinctLinkedPlatform(userId)
  }

  const linkIfGivenParameter = async (url?: string) => {
    const searchParams = url ? new URL(url).search : window.location.search
    const requestId = UrlUtils.silentSearchParamsBuilder(searchParams).get('requestId')
    const userId = userState.user?.userId

    updateState({ isOpenLinkAccountDialog: false, selectedPlatformToLink: null })

    if (requestId && userId) {
      clearAlertStatus()
      try {
        const result = await linkedAccountsMutations.requestStatus(requestId)

        if (result.error) throw result.error

        if (result.data && result.data.status === LinkingProgressStatus.enum.SUCCESS) {
          updateState({ accountLinkingSuccessful: true })
          linkedAccountsMutations.updateUserCustomAttribute(userId, result.data.payload.platformId)
        }
      } catch (error) {
        updateState({ accountLinkError: error })
      }
    }

    await getUserDistinctLinkedPlatform()

    if (requestId) {
      historyState.replace(historyState.location.pathname)
    }
  }

  const clearAlertStatus = () => {
    linkedAccountsMutations.resetErrorState()
    updateState({
      accountUnlinkingSuccessful: false,
      accountLinkingSuccessful: false,
      accountUnlinkError: null,
      accountLinkError: null
    })
  }

  const openLinkAccountDialog = () => {
    updateState({ isOpenLinkAccountDialog: true })
  }

  const openConfirmLinkDialog = (platform: PublicThirdPartyPlatformInfo) => {
    updateState({ selectedPlatformToLink: platform })
  }

  const openConfirmUnlinkDialog = (platformName: string) => {
    updateState({ selectedUnlinkAblePlatformName: platformName })
  }

  const onConfirmUnlinkAccount = async (platformName: string) => {
    clearAlertStatus()

    try {
      const result = await linkedAccountsMutations.unLinkAccount(platformName)
      if (result.error) throw result.error

      updateState({ accountUnlinkingSuccessful: true })
    } catch (error) {
      updateState({ accountLinkError: error })
    } finally {
      updateState({ selectedUnlinkAblePlatformName: null })
      await getUserDistinctLinkedPlatform()
    }
  }

  const renderListPlatform = (platform: DistinctLinkedPlatformV3) => {
    const { platformName, details } = platform
    const displayName = details[0].displayName || ''
    const isLinking = linkedAccountsState.requestStatusFetchStatus === FetchStatus.FETCHING
    const isUnlinkAccountEnabled = discoveryConfigsState.flags?.isUnlinkAccountEnabled

    if (!platformName) return null
    return (
      <tr key={platformName}>
        <td className="text-left font-medium capitalize">
          <span className="platform flex items-center">{getThirdPartyPlatformIcon(platformName)}</span>
        </td>
        <td className="text-left">
          {!displayName && <Trans i18nKey="LinkedAccountPage.connected">Connected</Trans>}
          {!!displayName && <Trans i18nKey="LinkedAccountPage.connectedTo">Connected to {{ displayName }}</Trans>}
        </td>
        <td className="text-right">
          {isUnlinkAccountEnabled !== false && (
            // we want to show the Unlink account feature whether the isUnlinkAccountEnabled feature flag is true or undefined
            // undefined means there is no isUnlinkAccountEnabled feature flag
            // we want to only hide the Unlink account feature if the isUnlinkAccountEnabled feature flag is false
            <span
              className={classNames('action', isLinking && 'text-[color:rgb(var(--od-rgb-text),0.65)]')}
              onClick={
                !isPreviewMode
                  ? () => {
                      if (!isLinking) {
                        openConfirmUnlinkDialog(platformName)
                      }
                    }
                  : undefined
              }>
              <Trans i18nKey="LinkedAccountsPage.disconnect">Unlink</Trans>
            </span>
          )}
        </td>
      </tr>
    )
  }

  const renderAlerts = () => {
    const { accountConflictInformation, linkedPlatform, linkedPlatformError, requestStatusError, unlinkAccountError } = linkedAccountsState
    const error = linkedPlatformError || requestStatusError || unlinkAccountError
    const isTwitchDropAlertVisible =
      linkedPlatform?.find(platform => platform.platformName === LinkedPlatformId.Enum.twitch) &&
      discoveryConfigsState.discoveryConfigData?.ppFeatureFlags.data.isTwitchDropEnabled

    if (accountLinkingSuccessful) {
      return (
        <Alert className="mb-6" type={AlertType.success} onDismiss={() => clearAlertStatus()}>
          <Trans i18nKey="LinkedAccountPage.linkSuccess">Cool! Your account is now linked.</Trans>
        </Alert>
      )
    }

    if (accountUnlinkingSuccessful) {
      return (
        <Alert className="mb-6" type={AlertType.info} onDismiss={() => clearAlertStatus()}>
          <Trans i18nKey="LinkedAccountPage.unlinkSuccess">Your account has been unlinked.</Trans>
        </Alert>
      )
    }

    if (isTwitchDropAlertVisible) {
      return (
        <Alert className="LinkedAccountsAlert twitch-alert mb-6" type={AlertType.info}>
          <Trans i18nKey="LinkedAccountPage.problemClaimingTwitchDrops">
            Have problem with claiming Twitch Drops?{' '}
            <Link to={routesState.twitchDrops.claim.makePath({ query: { step: 'reclaim' } })}>Click here to re-claim your Drops</Link>
          </Trans>
        </Alert>
      )
    }

    if (error || accountLinkError || accountUnlinkError || accountConflictInformation) {
      if (accountLinkError) {
        gaSendErrorEvent({
          eventCategory: 'LinkAccountError',
          eventLabel: ErrorHelper.errorToString(accountLinkError)
        })
      }

      if (accountUnlinkError) {
        gaSendErrorEvent({
          eventCategory: 'UnlinkAccountError',
          eventLabel: ErrorHelper.errorToString(accountUnlinkError)
        })
      }

      return (
        <LinkedAccountsErrorAlert
          error={error || accountLinkError || accountUnlinkError}
          accountConflictInformation={accountConflictInformation}
          onDismiss={clearAlertStatus}
        />
      )
    }

    return null
  }

  const { linkedPlatformFetchStatus, requestStatusFetchStatus } = linkedAccountsState
  const isFetching = linkedPlatformFetchStatus === FetchStatus.FETCHING
  const isLinking = requestStatusFetchStatus === FetchStatus.FETCHING
  const linkedPlatform = !isPreviewMode ? linkedAccountsState.linkedPlatform : mockUserLinkedPlatform
  const isInModalPreviewPage = isPreviewMode && historyState.location.pathname.includes('/player-portal/accounts/linked-accounts-modal')

  return (
    <AccountMainSection className="linkedAccountsPage">
      <AccountMainSectionHeader>
        <Trans i18nKey="LinkedAccountsPage.title">Linked Accounts</Trans>
      </AccountMainSectionHeader>
      <AccountMainSectionBody>
        {renderAlerts()}
        {isFetching && (
          <div className="flex">
            <Loading className="justify-center" />
          </div>
        )}
        {!isFetching && linkedPlatform && (
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">
                  <Trans i18nKey="LinkedAccountsPage.paymentAccounts.platform">Platform</Trans>
                </th>
                <th className="text-left">
                  <Trans i18nKey="LinkedAccountsPage.paymentAccounts.status">Status</Trans>
                </th>
                <th />
              </tr>
            </thead>
            <tbody className="border-gray-80 border-b border-solid">
              {linkedPlatform.length >= 0 && linkedPlatform.map((platform: DistinctLinkedPlatformV3) => renderListPlatform(platform))}
              {linkedPlatform && linkedPlatform.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center">
                    <Trans i18nKey="LinkedAccountPage.noLinkedAccount">You have no linked accounts.</Trans>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <Button
          loadingIndicator="SPINNER"
          disabled={isLinking || !linkedPlatform}
          className="btn btn-primary connectButtonPlatform"
          isLoading={isLinking}
          onClick={!isPreviewMode ? openLinkAccountDialog : undefined}>
          <Trans i18nKey="LinkedAccountPage.btn.LinkAccount">Link Account</Trans>
          <span className="ml-2">
            <PlusSignIcon />
          </span>
        </Button>

        {(isOpenLinkAccountDialog || isInModalPreviewPage) && linkedPlatform && (
          <LinkAccountDialog
            openConfirmLinkToPlatformDialog={!isPreviewMode?.isOpenModalLinked ? openConfirmLinkDialog : () => null}
            onClose={!isPreviewMode?.isOpenModalLinked ? () => updateState({ isOpenLinkAccountDialog: false }) : () => null}
            linkedPlatform={
              new Set(
                linkedPlatform
                  .map(linked => {
                    switch (true) {
                      case linked.platformName === LinkedPlatformId.enum.steam:
                        return LinkedPlatformId.enum.steamopenid
                      case linked.platformName === LinkedAccountGroup.enum.psn:
                        return LinkedPlatformId.enum.ps4web
                      case linked.platformName === LinkedPlatformId.enum.live:
                      case linked.platformName === LinkedPlatformId.enum.xblweb:
                        return LinkedPlatformId.enum.xblweb
                      case linked.platformName === LinkedPlatformId.enum.facebook:
                        return LinkedPlatformId.enum.facebook
                      case linked.platformName === LinkedPlatformId.enum.apple:
                        return LinkedPlatformId.enum.apple
                      default:
                        return linked.platformName
                    }
                  })
                  .filter((id): id is LinkedPlatformId => !!id)
              )
            }
            isPreviewMode={isPreviewMode?.isOpenModalLinked}
          />
        )}
        {selectedUnlinkAblePlatformName && (
          <UnlinkAccountConfirmDialog
            platformId={selectedUnlinkAblePlatformName}
            onCancel={() => updateState({ selectedUnlinkAblePlatformName: null })}
            onConfirm={!isPreviewMode ? () => onConfirmUnlinkAccount(selectedUnlinkAblePlatformName) : undefined}
          />
        )}
        {selectedPlatformToLink && (
          <LinkAccountConfirmDialog
            platformConfig={selectedPlatformToLink}
            onCancel={() => updateState({ selectedPlatformToLink: null })}
          />
        )}
        {/* {!!accountConflictInformation && (
            <AccountConflictModal
              accountConflictInformation={accountConflictInformation}
              closeModal={this.logic.cancelLinkPlatformUserAccount}
              onLinkAccountSuccess={this.onLinkPlatformUserAccountToUserAccountSuccess}
            />
          )} */}
      </AccountMainSectionBody>
    </AccountMainSection>
  )
}
