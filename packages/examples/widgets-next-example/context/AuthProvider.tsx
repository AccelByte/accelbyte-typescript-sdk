/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { createContext, useEffect, useState } from 'react'
import { clearUserToken, getLocalStorage } from '../helper/localStorage'
import { Iam, IamOAuthClient } from '@accelbyte/sdk-iam'
import { initializeSDK } from '../helper/configHelper'
import router from 'next/router'
import { LOCAL_STORAGE_KEY } from '../pages/constants'

const sdk = initializeSDK()
const accessToken = getLocalStorage(LOCAL_STORAGE_KEY.Enum.access_token)
const refreshToken = getLocalStorage(LOCAL_STORAGE_KEY.Enum.refresh_token)

interface ContextState {
  auth?: {
    userId?: string
  }
  setAuth: React.Dispatch<React.SetStateAction<{}>>
  logout: () => void
}

const AuthContext = createContext({} as ContextState)

interface Props {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    const getCurrentUser = async () => {
      if (!accessToken || !refreshToken) {
        router.push('/auth')
      }

      try {
        const response = await Iam.UsersApi(sdk, {
          config: {
            headers: {
              authorization: `Bearer ${accessToken}`
            }
          }
        }).getUsersMe()
        if (!response?.userId) {
          clearUserToken()
          router.push('/auth')
        } else {
          setAuth({ userId: response.userId })
        }
      } catch (error) {
        console.error(error)
      }
    }

    getCurrentUser()
  }, [])

  const logout = async () => {
    clearUserToken()
    await new IamOAuthClient(sdk).logout()
    router.push('/auth')
  }

  return <AuthContext.Provider value={{ auth, setAuth, logout }}>{children}</AuthContext.Provider>
}

export default AuthContext
