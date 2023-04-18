/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Loading, LoadingSize } from '@od-components/components/Loading/Loading'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import React, { useEffect } from 'react'
import { LinkedFormPanel } from '../components/core/panels/LinkedFormPanel/LinkedFormPanel'
import { LinkFormPanel } from '../components/core/panels/LinkFormPanel/LinkFormPanel'
import { TwitchDropReclaimPage } from './TwitchDropReclaimPage'
import { TwitchDropValidateStatus, TwitchErrorCode } from '../models/enums'
import { LinkedPlatformId } from '@od-shared/models/Linked'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useLinkedAccounts } from '~/hooks/iam/useLinkedAccounts'
import { TwitchDropHooks } from '../hooks/TwitchDropHooks'
import { useHistory } from '~/hooks/routes/useHistory'
import { useSdk, useSdkOptions } from '~/hooks/useSdk'
import { FetchStatus } from '~/constants/fetch-statuses'
import { LinkRequest, IamUserAuthorizationClient, IamOAuthClient, Iam } from '@accelbyte/sdk-iam'

export interface TwitchDropPageProps {
  className?: string
}

interface State {
  validateStatus: TwitchDropValidateStatus | null
  retryStatus: boolean
  isExchangingToken: boolean
}

const gameClientIdKey = 'AB-Twitch_drops-claim-game_client_id'
export const TwitchDropPage = (props: TwitchDropPageProps) => {
  const [state, setState] = React.useState<State>({
    validateStatus: null,
    retryStatus: false,
    isExchangingToken: false
  })
  const { validateStatus, retryStatus, isExchangingToken } = state

  const {
    state: { user, userProfile }
  } = useUserInfo()
  const {
    state: { linkedTwitchAccount, linkedTwitchAccountFetchStatus, loginURLFetchStatus },
    mutations: { fetchLinkedTwitchAccount, fetchTwitchLoginURL }
  } = TwitchDropHooks.useTwitchDrop()
  const { state: historyState } = useHistory()
  const [sdk] = useSdk()
  const [sdkOptions] = useSdkOptions()
  const {
    state: { requestStatusFetchStatus, accountConflictInformation, requestStatusError },
    mutations: linkedAccountsMutations
  } = useLinkedAccounts()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    if (!user) {
      tryLogin()
      return
    }

    const twitchAuthToken = getTwitchAuthToken()
    if (twitchAuthToken) {
      exchangeTwitchAuthTokenToABToken(twitchAuthToken)
    }

    const requestId = getRequestId()
    if (requestId && !twitchAuthToken) {
      requestStatus(requestId)
    }

    if (!linkedTwitchAccount) {
      fetchLinkedTwitchAccount(user.userId)
    }

    return () => {
      linkedAccountsMutations.resetErrorState()
    }
  }, [])

  useEffect(() => {
    const validateStatus = getTwitchAuthToken() ? TwitchDropValidateStatus.VALIDATING : null
    updateState({ validateStatus })
  }, [historyState.location.search])

  const exchangeTwitchAuthTokenToABToken = async authCode => {
    if (authCode && user) {
      try {
        updateState({ isExchangingToken: true })

        const clientId = sessionStorage.getItem(gameClientIdKey) || ''
        const sdkAssemblyConf = sdk.assembly().config
        const result = await IamOAuthClient.exchangeTokenOauthByPlatformId(
          LinkedPlatformId.Enum.twitch,
          clientId,
          {
            platform_token: authCode,
            client_id: clientId,
            createHeadless: false,
            skipSetCookie: true
          },
          sdkAssemblyConf
        )

        if (result.error) throw result.error

        let userId = ''
        if (result.response.data.namespace === sdkOptions.namespace) {
          userId = result.response.data.user_id
        } else {
          if (result.response.data.platform_user_id) {
            const linkedAccountResult = await Iam.UsersApi(sdk).getUser_ByPlatformId_ByPlatformUserId(
              LinkedPlatformId.Enum.twitch,
              result.response.data.platform_user_id
            )
            userId = linkedAccountResult.userId
          }
        }

        updateState({
          validateStatus: userId === user.userId ? TwitchDropValidateStatus.SUCCESS : TwitchDropValidateStatus.FAILED,
          retryStatus: true
        })
      } catch (error) {
        updateState({
          validateStatus: TwitchDropValidateStatus.FAILED
        })
      } finally {
        updateState({ isExchangingToken: false })
        historyState.replace(getPathname())
      }
    }
  }

  const isReclaim = () => {
    // TODO: Need to delere the state after redirection is updated
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get('step') === 'reclaim' || searchParams.get('state') === 'reclaim'
  }

  const tryLogin = () => {
    const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL(historyState.location.pathname + historyState.location.search)
    window.location.replace(loginURL)
  }

  const getTwitchAuthToken = (): string | null => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get('code')
  }

  const getRequestId = (): string | null => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get('requestId')
  }

  const requestStatus = async (requestId: string) => {
    if (requestId && user) {
      try {
        const result = await linkedAccountsMutations.requestStatus(requestId)
        if (result.error) throw result.error

        validateTwitchAccount(result.data.error)
      } finally {
        historyState.replace(getPathname())
      }
    }
  }

  const validateTwitchAccount = (error: LinkRequest['error']) => {
    updateState({
      validateStatus:
        error?.errorCode === TwitchErrorCode.TWITCH_ACCOUNT_ALREADY_LINKED
          ? TwitchDropValidateStatus.SUCCESS
          : TwitchDropValidateStatus.FAILED
    })
  }

  const linkAccount = async (forceVerify = false, namespace?: string, clientID?: string) => {
    const redirectUri = UrlUtils.getRedirectUrl(sdkOptions.redirectURI, getPathname())
    const result = await fetchTwitchLoginURL(redirectUri, clientID || sdkOptions.clientId, namespace)
    if (!result.error) {
      const url = result.data
      if (url) {
        if (forceVerify) {
          const newUrl = new URL(url)
          newUrl.searchParams.set('force_verify', 'true')

          if (namespace) {
            newUrl.searchParams.set('redirect_uri', UrlUtils.getRedirectUrl(sdkOptions.redirectURI, '/twitch-drops/claim?step=reclaim'))
          }
          window.location.href = newUrl.toString()
        } else {
          window.location.href = url
        }
      }
    }
  }

  const getPathname = () => {
    // TODO: update this redirect_uri after the new redirect_uri added
    return historyState.location.pathname + (isReclaim() ? `?state=reclaim` : '')
  }

  const isFetchingLoginURL = loginURLFetchStatus === FetchStatus.FETCHING
  const isLoading =
    isExchangingToken || requestStatusFetchStatus === FetchStatus.FETCHING || linkedTwitchAccountFetchStatus === FetchStatus.FETCHING
  return (
    <>
      {isLoading && <Loading className={LoadingSize.tall} />}
      {!isReclaim() && !isLoading && user && (
        <>
          {linkedTwitchAccount ? (
            <LinkedFormPanel className={props.className} />
          ) : (
            <LinkFormPanel
              user={user}
              avatarURL={userProfile?.avatarUrl ?? ''}
              onLink={linkAccount}
              isLoading={isFetchingLoginURL}
              error={requestStatusError}
              accountConflictInformation={accountConflictInformation}
              className={props.className}
            />
          )}
        </>
      )}
      {isReclaim() && !isLoading && user && (
        <>
          {linkedTwitchAccount ? (
            <TwitchDropReclaimPage
              displayName={linkedTwitchAccount?.displayName ?? ''}
              validateStatus={validateStatus}
              retryStatus={retryStatus}
              onLink={linkAccount}
              className={props.className}
            />
          ) : (
            <LinkFormPanel
              user={user}
              avatarURL={userProfile?.avatarUrl ?? ''}
              onLink={linkAccount}
              isLoading={isFetchingLoginURL}
              error={requestStatusError}
              accountConflictInformation={accountConflictInformation}
              className={props.className}
            />
          )}
        </>
      )}
    </>
  )
}
