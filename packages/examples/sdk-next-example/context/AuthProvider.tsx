/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { createContext, useEffect, useState } from 'react'
import { Iam, IamOAuthClient, IamUserAuthorizationClient, UserResponseV3 } from '@accelbyte/sdk-iam'
import { initializeSDK } from '../helper/sdkHelper'

const sdk = initializeSDK()

interface ContextState {
  user: UserResponseV3 | null
  login: () => void
  logout: () => void
}

const AuthContext = createContext({} as ContextState)

interface Props {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserResponseV3 | null>(null)

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await Iam.UsersApi(sdk).getUsersMe()
        if (response) {
          setUser(response)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getCurrentUser()
  }, [])

  const login = async () => {
    const url = new IamUserAuthorizationClient(sdk).createLoginURL()
    window.location.replace(url)
  }

  const logout = async () => {
    await new IamOAuthClient(sdk).logout()
    window.location.reload()
  }

  return <AuthContext.Provider value={{ user, logout, login }}>{children}</AuthContext.Provider>
}

export default AuthContext
