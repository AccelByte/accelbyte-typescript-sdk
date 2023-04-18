/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import {
  ERROR_CODE_LINK_DELETION_ACCOUNT,
  ERROR_CODE_TOKEN_EXPIRED,
  ERROR_LINK_ANOTHER_3RD_PARTY_ACCOUNT,
  ERROR_USER_BANNED
} from '@accelbyte/sdk'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '../useSdk'
import { useCallback } from 'react'
import { createStore, useStore } from '../useStore'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { AccountConflictInformation, LinkedPlatformId, LinkingProgressStatus } from '@od-shared/models/Linked'
import { HookDataReturns } from '~/models/hook'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { z } from 'zod'
import {
  ConflictedUserPlatformAccounts,
  CreateUserRequestV4,
  DistinctLinkedPlatformV3,
  Iam,
  IamUserAuthorizationClient,
  LinkRequest,
  MFAData,
  TokenResponseV3,
  UpgradeHeadlessAccountWithVerificationCodeRequestV3,
  UpgradeHeadlessAccountWithVerificationCodeRequestV4,
  UserLinkedPlatformV3,
  UserResponseV3,
  UserResponseV4
} from '@accelbyte/sdk-iam'
import { Basic } from '@accelbyte/sdk-basic'

const LinkAccountConflictResponse = z.object({
  errorCode: z.number(),
  errorMessage: z.string(),
  messageVariables: ConflictedUserPlatformAccounts
})

interface State {
  linkedPlatform: DistinctLinkedPlatformV3[] | null
  linkedPlatformFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  linkedPlatformError: FetchErrorType | null

  linkAccountFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  linkAccountError: FetchErrorType | null

  unlinkAccountFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  unlinkAccountError: FetchErrorType | null

  upgradeHeadlessAccountFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  upgradeHeadlessAccountError: FetchErrorType | null

  requestStatusFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  requestStatusError: FetchErrorType | null
  accountConflictInformation: AccountConflictInformation | null
}

const DEFAULT_STATE: State = {
  linkedPlatform: null,
  linkedPlatformFetchStatus: FetchStatus.IDLE,
  linkedPlatformError: null,

  linkAccountFetchStatus: FetchStatus.IDLE,
  linkAccountError: null,

  unlinkAccountFetchStatus: FetchStatus.IDLE,
  unlinkAccountError: null,

  upgradeHeadlessAccountFetchStatus: FetchStatus.IDLE,
  upgradeHeadlessAccountError: null,

  accountConflictInformation: null,
  requestStatusFetchStatus: FetchStatus.IDLE,
  requestStatusError: null
}

const store = createStore(DEFAULT_STATE)

export function useLinkedAccounts() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const resetErrorState = useCallback(() => {
    setState({
      linkedPlatformError: null,
      linkAccountError: null,
      unlinkAccountError: null,
      upgradeHeadlessAccountError: null,
      accountConflictInformation: null,
      requestStatusError: null
    })
  }, [])

  const getUserDistinctLinkedPlatform = useCallback(
    async (userId: string): Promise<HookDataReturns<DistinctLinkedPlatformV3[]>> => {
      let linkedPlatform: DistinctLinkedPlatformV3[] | null = null
      let linkedPlatformError: FetchErrorType | null = null

      try {
        setState({ linkedPlatformError: null, linkedPlatformFetchStatus: FetchStatus.FETCHING })

        const result = await Iam.UsersApi(sdk).getDistinctPlatforms_ByUserId(userId)

        linkedPlatform = result.platforms
        return { data: linkedPlatform }
      } catch (error) {
        linkedPlatformError = WidgetErrorHelper.getErrorType(error)
        return { error: linkedPlatformError }
      } finally {
        setState({ linkedPlatform, linkedPlatformError, linkedPlatformFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const linkAccount = useCallback(
    async (platform: LinkedPlatformId, ticket: string, redirectURI?: string): Promise<HookDataReturns<null>> => {
      let accountConflictInformation: AccountConflictInformation | null = null
      let linkAccountError: FetchErrorType | null = null

      try {
        setState({ linkAccountError, linkAccountFetchStatus: FetchStatus.FETCHING })

        await Iam.UsersApi(sdk).postUserMePlatform_ByPlatformId(platform, { ticket, redirectUri: redirectURI })
        return { data: null }
      } catch (error) {
        if (ErrorHelper.isAxiosError(error) && error.response) {
          const linkAccountConflictParse = LinkAccountConflictResponse.safeParse(error.response.data)
          if (
            error.response.status === 409 &&
            error.response.data &&
            linkAccountConflictParse.success &&
            linkAccountConflictParse.data.messageVariables.publisherAccounts.length > 1
          ) {
            accountConflictInformation = {
              platformId: platform,
              conflictAccountsData: linkAccountConflictParse.data.messageVariables
            }
          }
        }

        linkAccountError = WidgetErrorHelper.getErrorType(error)
        return { error: linkAccountError }
      } finally {
        setState({ accountConflictInformation, linkAccountError, linkAccountFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const unLinkAccount = useCallback(
    async (platformName: string): Promise<HookDataReturns<null>> => {
      let unlinkAccountError: FetchErrorType | null = null

      try {
        setState({ unlinkAccountError, unlinkAccountFetchStatus: FetchStatus.FETCHING })

        await Iam.UsersApi(sdk).deleteAllMeUser_ByPlatformId(platformName)

        return { data: null }
      } catch (error) {
        unlinkAccountError = WidgetErrorHelper.getErrorType(error)
        return { error: unlinkAccountError }
      } finally {
        setState({ unlinkAccountError, unlinkAccountFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const requestStatus = useCallback(
    async (requestId: string): Promise<HookDataReturns<LinkRequest>> => {
      let accountConflictInformation: AccountConflictInformation | null = null
      let requestStatusError: FetchErrorType | null = null

      try {
        setState({ requestStatusError, requestStatusFetchStatus: FetchStatus.FETCHING })

        const response = await Iam.UsersApi(sdk).getAsyncStatus_ByRequestId(requestId)

        if (
          response.status === LinkingProgressStatus.enum.FAILED &&
          response.error &&
          response.error.errorCode === ERROR_LINK_ANOTHER_3RD_PARTY_ACCOUNT &&
          (!response.error.messageVariables || !response.error.messageVariables.publisherAccounts)
        ) {
          accountConflictInformation = {
            platformId: response.payload.platformId,
            conflictAccountsData: null,
            errorCode: response.error.errorCode
          }
          return { data: response }
        }

        if (
          response.status === LinkingProgressStatus.enum.FAILED &&
          response.error &&
          (!response.error.messageVariables || !response.error.messageVariables.publisherAccounts)
        ) {
          throw response.error
        }

        if (
          response.status === LinkingProgressStatus.enum.FAILED &&
          response.error &&
          response.error.messageVariables &&
          response.error.messageVariables.publisherAccounts
        ) {
          accountConflictInformation = {
            platformId: response.payload.platformId,
            conflictAccountsData: response.error.messageVariables,
            errorCode: response.error.errorCode
          }
          return { data: response }
        }

        return { data: response }
      } catch (error) {
        requestStatusError = WidgetErrorHelper.getErrorType(error)
        return { error: requestStatusError }
      } finally {
        setState({ accountConflictInformation, requestStatusError, requestStatusFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const getLinkedAccountByPlatformId = useCallback(
    async (userId: string, platformId: string): Promise<HookDataReturns<UserLinkedPlatformV3 | undefined>> => {
      let linkedPlatformError: FetchErrorType | null = null

      try {
        setState({ linkedPlatformError, linkedPlatformFetchStatus: FetchStatus.FETCHING })

        const result = await Iam.UsersApi(sdk).getPlatforms_ByUserId(userId)

        const data = result.data.find(platform => platform.platformId === platformId)
        return { data }
      } catch (error) {
        linkedPlatformError = WidgetErrorHelper.getErrorType(error)
        return { error: linkedPlatformError }
      } finally {
        setState({ linkedPlatformError, linkedPlatformFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const updateUserCustomAttribute = useCallback(
    async (userId: string, platformId: string): Promise<HookDataReturns<null>> => {
      try {
        const linkedPlatform = await getLinkedAccountByPlatformId(userId, platformId)
        const customAttributes = {
          [platformId]: linkedPlatform
        }
        const updateResult = await Basic.UserProfileApi(sdk).updateProfileCustomAttribute_ByUserId(userId, customAttributes)

        const error = linkedPlatform || updateResult
        if (error) throw error
        return { data: null }
      } catch (error) {
        return { error: error as Error }
      }
    },
    [sdk]
  )

  const linkExistingAccount = useCallback(
    async ({
      email,
      password,
      linkingToken,
      clientId,
      onTokenExpired,
      onErrorLinkDeletion,
      onErrorUserBanned,
      onRequired2FA
    }: {
      email: string
      password: string
      linkingToken: string
      clientId: string
      onTokenExpired?: () => void
      onErrorLinkDeletion?: () => void
      onErrorUserBanned?: () => void
      onRequired2FA?: (mfaData: MFAData) => void
    }): Promise<HookDataReturns<TokenResponseV3 | null>> => {
      const requestBody = {
        password,
        linkingToken,
        username: email,
        client_id: clientId
      }

      let linkAccountError: FetchErrorType | null = null

      try {
        setState({ linkAccountError, linkAccountFetchStatus: FetchStatus.FETCHING })
        const result = await Iam.OAuth20ExtensionApi(sdk).postAuthenticateWithLink(requestBody)

        return { data: result }
      } catch (error) {
        const errorResponse = ErrorHelper.isAxiosError(error) && error.response
        const errorCode = ErrorHelper.extractServiceErrorCode(error)

        if (errorCode === ERROR_CODE_TOKEN_EXPIRED && onTokenExpired) {
          onTokenExpired()
          return { data: null }
        }

        if (errorCode === ERROR_CODE_LINK_DELETION_ACCOUNT && onErrorLinkDeletion) {
          onErrorLinkDeletion()
          return { data: null }
        }

        if (errorCode === ERROR_USER_BANNED && onErrorUserBanned) {
          onErrorUserBanned()
          return { data: null }
        }

        const mfaData = errorResponse ? IamUserAuthorizationClient.getMfaDataFromError(errorResponse) : null
        if (mfaData && onRequired2FA) {
          onRequired2FA(mfaData)
          return { data: null }
        }

        linkAccountError = WidgetErrorHelper.getErrorType(error)
        return { error: linkAccountError }
      } finally {
        setState({ linkAccountError, linkAccountFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const linkNewPlatformAccount = useCallback(
    async ({
      linkingToken,
      clientId,
      userAccountParams,
      refreshSession
    }: {
      linkingToken: string
      clientId: string
      userAccountParams: CreateUserRequestV4
      refreshSession?: (accessToken: string, refreshToken?: string | null) => void
    }): Promise<HookDataReturns<TokenResponseV3 | null>> => {
      const requestBody = {
        username: userAccountParams.username,
        password: userAccountParams.password,
        linkingToken,
        client_id: clientId
      }

      let linkAccountError: FetchErrorType | null = null

      try {
        setState({ linkAccountError, linkAccountFetchStatus: FetchStatus.FETCHING })

        await Iam.UsersV4Api(sdk).createUser(userAccountParams)
        const authLinkresult = await Iam.OAuth20ExtensionApi(sdk).postAuthenticateWithLink(requestBody)

        if (refreshSession) {
          refreshSession(authLinkresult.access_token, authLinkresult.refresh_token)
        }

        return { data: authLinkresult }
      } catch (error) {
        linkAccountError = WidgetErrorHelper.getErrorType(error)
        return { error: linkAccountError }
      } finally {
        setState({ linkAccountError, linkAccountFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const upgradeHeadlessAccount = useCallback(
    async (
      params: UpgradeHeadlessAccountWithVerificationCodeRequestV3 | UpgradeHeadlessAccountWithVerificationCodeRequestV4,
      isDisableUsername: boolean
    ): Promise<HookDataReturns<UserResponseV4 | UserResponseV3>> => {
      let upgradeHeadlessAccountError: FetchErrorType | null = null

      try {
        setState({ upgradeHeadlessAccountError, upgradeHeadlessAccountFetchStatus: FetchStatus.FETCHING })

        const paramsV3ParseResult = UpgradeHeadlessAccountWithVerificationCodeRequestV3.safeParse(params)
        const paramsV4ParseResult = UpgradeHeadlessAccountWithVerificationCodeRequestV4.safeParse(params)

        if (paramsV3ParseResult.success && isDisableUsername) {
          const result = await Iam.UsersApi(sdk).createUserMeHeadlesCodeVerify(paramsV3ParseResult.data)

          return { data: result }
        }

        if (paramsV4ParseResult.success) {
          const result = await Iam.UsersApi(sdk).createUserMeHeadlesCodeVerify(paramsV4ParseResult.data)

          return { data: result }
        }

        throw new Error('invalid params type')
      } catch (error) {
        upgradeHeadlessAccountError = WidgetErrorHelper.getErrorType(error)
        return { error: upgradeHeadlessAccountError }
      } finally {
        setState({ upgradeHeadlessAccountError, upgradeHeadlessAccountFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      resetState,
      resetErrorState,
      getUserDistinctLinkedPlatform,
      linkAccount,
      unLinkAccount,
      requestStatus,
      getLinkedAccountByPlatformId,
      linkExistingAccount,
      linkNewPlatformAccount,
      upgradeHeadlessAccount,
      updateUserCustomAttribute
    }
  }
}
