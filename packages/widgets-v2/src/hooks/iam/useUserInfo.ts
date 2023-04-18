/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '../useSdk'
import { useCallback } from 'react'
import { createStore, useStore } from '../useStore'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { useHistory } from '../routes/useHistory'
import { useRoutes } from '../routes/useRoutes'
import { HookDataReturns } from '~/models/hook'
import {
  AuthenticatorKeyResponseV4,
  Iam,
  IamOAuthClient,
  IamUserAuthorizationClient,
  MFAData,
  RestErrorResponse,
  TokenResponseV3,
  UserResponseV3,
  UserUpdateRequestV3,
  Verify2FAParam
} from '@accelbyte/sdk-iam'
import { Basic, UserProfilePrivateInfo, UserProfileUpdate } from '@accelbyte/sdk-basic'

enum UserResponseCodeErrors {
  USER_PROFILE_NOT_FOUND = 11440
}

interface UserInfoState {
  // Developer's note: user and user profile are different.
  // User stores information such as username, whereas user profile stores a more "personal" information.
  user: UserResponseV3 | null
  userError: FetchErrorType | null
  fetchUserStatus: FetchStatus.IDLE | FetchStatus.FETCHING | FetchStatus.UPDATING

  userProfile: UserProfilePrivateInfo | null
  userProfileError: FetchErrorType | null
  fetchUserProfileStatus: FetchStatus.IDLE | FetchStatus.FETCHING | FetchStatus.UPDATING

  mfaData: MFAData | null
  authenticatorKey: AuthenticatorKeyResponseV4 | null
  authenticatorKeyFetchStatus: FetchStatus.IDLE | FetchStatus.CREATING
  isLinkingAccountRequired2FA: boolean
}

const DEFAULT_STATE: UserInfoState = {
  user: null,
  userError: null,
  fetchUserStatus: FetchStatus.IDLE,

  userProfile: null,
  userProfileError: null,
  fetchUserProfileStatus: FetchStatus.IDLE,

  mfaData: null,
  authenticatorKey: null,
  authenticatorKeyFetchStatus: FetchStatus.IDLE,
  isLinkingAccountRequired2FA: false
}

export const userStore = createStore(DEFAULT_STATE)

export function useUserInfo() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(userStore)
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()

  const setDefaultMfaData = useCallback(() => {
    if (!sdk) return

    setState({ mfaData: IamUserAuthorizationClient.getMfaDataFromStorage() as MFAData | null })
  }, [sdk])

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchCurrentUserInformation = useCallback(async (): Promise<HookDataReturns<UserResponseV3>> => {
    let user: UserResponseV3 | null = null
    let userError: FetchErrorType | null = null

    try {
      setState({ userError: null, fetchUserStatus: FetchStatus.FETCHING })

      user = await Iam.UsersApi(sdk).getUsersMe()
      return { data: user }
    } catch (error) {
      userError = WidgetErrorHelper.getErrorType(error)
      return { error: userError }
    } finally {
      setState({ user, userError, fetchUserStatus: FetchStatus.IDLE })
    }
  }, [sdk])

  const fetchUserProfile = useCallback(
    async (createOn404 = false): Promise<HookDataReturns<UserProfilePrivateInfo | null>> => {
      let userProfile: UserProfilePrivateInfo | null = null
      let userProfileError: FetchErrorType | null = null

      try {
        setState({ fetchUserProfileStatus: FetchStatus.FETCHING, userProfileError: null })
        userProfile = await Basic.UserProfileApi(sdk).getUsersMeProfiles()
        return { data: userProfile }
      } catch (error) {
        if (
          createOn404 &&
          ErrorHelper.isAxiosError<RestErrorResponse>(error) &&
          Number(error.response?.data?.errorCode) === UserResponseCodeErrors.USER_PROFILE_NOT_FOUND
        ) {
          try {
            userProfile = await Basic.UserProfileApi(sdk).createUserMeProfile({})
          } catch (err) {
            userProfileError = WidgetErrorHelper.getErrorType(err)
            return { error: userProfileError }
          }
        }

        userProfileError = WidgetErrorHelper.getErrorType(error)
        return { error: userProfileError }
      } finally {
        setState({ userProfileError, userProfile, fetchUserProfileStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const updateUser = useCallback(
    async (userUpdateData: UserUpdateRequestV3): Promise<HookDataReturns<UserResponseV3> | undefined> => {
      let user: UserResponseV3 | null = null
      let userError: FetchErrorType | null = null

      if (Object.keys(userUpdateData).length === 0) return

      try {
        setState({
          fetchUserStatus: FetchStatus.UPDATING,
          userError: null
        })

        user = await Iam.UsersApi(sdk).updateUserMe(userUpdateData)
        return { data: user }
      } catch (error) {
        userError = WidgetErrorHelper.getErrorType(error)
        return { error: userError }
      } finally {
        setState({ userError, user, fetchUserStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const updateUserProfile = useCallback(
    async (userProfileUpdateData: UserProfileUpdate): Promise<HookDataReturns<UserProfilePrivateInfo> | undefined> => {
      let userProfile: UserProfilePrivateInfo | null = null
      let userProfileError: FetchErrorType | null = null

      if (Object.keys(userProfileUpdateData).length === 0) return

      try {
        setState({
          fetchUserProfileStatus: FetchStatus.UPDATING,
          userProfileError: null
        })

        userProfile = await Basic.UserProfileApi(sdk).updateUserMeProfile(userProfileUpdateData)
        return { data: userProfile }
      } catch (error) {
        userProfileError = WidgetErrorHelper.getErrorType(error)
        return { error: userProfileError }
      } finally {
        setState({ userProfileError, userProfile, fetchUserProfileStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const updateEmail = useCallback(
    async (code: string, newEmail: string): Promise<HookDataReturns<null>> => {
      let userError: FetchErrorType | null = null

      try {
        setState({
          fetchUserStatus: FetchStatus.UPDATING,
          userError: null
        })

        await Iam.UsersV4Api(sdk).updateUserMeEmail({ code, emailAddress: newEmail })
        return { data: null }
      } catch (error) {
        userError = WidgetErrorHelper.getErrorType(error)
        return { error: userError }
      } finally {
        setState(oldState => ({
          ...oldState,
          userError,
          user: oldState.user
            ? {
                ...oldState.user,
                emailAddress: newEmail
              }
            : oldState.user,
          fetchUserStatus: FetchStatus.IDLE
        }))
      }
    },
    [sdk]
  )

  const updatePassword = useCallback(
    async (currentPassword: string, newPassword: string, languageTag: string): Promise<HookDataReturns<null>> => {
      let userError: FetchErrorType | null = null

      try {
        setState({ userError: null, fetchUserStatus: FetchStatus.UPDATING })

        await Iam.UsersApi(sdk).updateUserMePassword({
          oldPassword: currentPassword,
          newPassword,
          languageTag
        })
        return { data: null }
      } catch (error) {
        userError = WidgetErrorHelper.getErrorType(error)
        return { error: userError }
      } finally {
        setState({ userError, fetchUserStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const uploadUserProfileImage = useCallback(
    async (avatarUrl: string): Promise<HookDataReturns<UserProfilePrivateInfo>> => {
      let userProfile: UserProfilePrivateInfo | null = null
      let userProfileError: FetchErrorType | null = null

      try {
        setState({ userProfileError: null, fetchUserProfileStatus: FetchStatus.UPDATING })

        userProfile = await Basic.UserProfileApi(sdk).updateUserMeProfile({ avatarUrl })
        return { data: userProfile }
      } catch (error) {
        userProfileError = WidgetErrorHelper.getErrorType(error)
        return { error: error as Error }
      } finally {
        setState({ userProfile, userProfileError, fetchUserProfileStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const updateMFAData = useCallback(
    (mfaData?: MFAData) => {
      setState({ mfaData: mfaData || IamUserAuthorizationClient.getMfaDataFromStorage() })
    },
    [sdk]
  )

  const removeMFAData = useCallback(() => {
    setState({ mfaData: undefined })
  }, [])

  const linkAccountRequired2FA = useCallback(async (mfaData: MFAData) => {
    setState({ mfaData, isLinkingAccountRequired2FA: true })
    historyState.replace(routesState.home.link)
  }, [])

  const clearLinkAccountRequired2FA = useCallback(() => {
    setState({ isLinkingAccountRequired2FA: false })
  }, [])

  const verify2FA = useCallback(
    async (param: Verify2FAParam): Promise<HookDataReturns<TokenResponseV3> | undefined> => {
      if (!state.mfaData) return

      try {
        const result = await new IamOAuthClient(sdk).verify2FA({ ...param, mfaToken: state.mfaData.mfaToken })
        return { data: result.data }
      } catch (error) {
        return { error: WidgetErrorHelper.getErrorType(error) }
      }
    },
    [sdk, state.mfaData, state.isLinkingAccountRequired2FA]
  )

  const logout = useCallback(async () => {
    await new IamOAuthClient(sdk).logout()
  }, [sdk])

  const refreshToken = useCallback(async (): Promise<TokenResponseV3 | null> => {
    const result = await new IamUserAuthorizationClient(sdk).refreshToken()
    if (!result) {
      resetState()
      return null
    }
    const resultParse = TokenResponseV3.safeParse(result)
    if (!resultParse.success) return null
    return resultParse.data
  }, [sdk])

  const generateAuthenticatorSecretKey = useCallback(async (): Promise<HookDataReturns<AuthenticatorKeyResponseV4>> => {
    let authenticatorKey: AuthenticatorKeyResponseV4 | null = null

    try {
      setState({ authenticatorKeyFetchStatus: FetchStatus.CREATING })

      authenticatorKey = await Iam.UsersV4Api(sdk).createUserMeMfaAuthenticatorKey()
      return { data: authenticatorKey }
    } catch (error) {
      return { error: error as Error }
    } finally {
      setState({ authenticatorKey, authenticatorKeyFetchStatus: FetchStatus.IDLE })
    }
  }, [sdk])

  return {
    state,
    mutations: {
      resetState,
      fetchCurrentUserInformation,
      fetchUserProfile,
      updateUser,
      updateUserProfile,
      updateEmail,
      updatePassword,
      uploadUserProfileImage,
      logout,
      updateMFAData,
      removeMFAData,
      verify2FA,
      linkAccountRequired2FA,
      setDefaultMfaData,
      refreshToken,
      generateAuthenticatorSecretKey,
      clearLinkAccountRequired2FA
    }
  }
}
