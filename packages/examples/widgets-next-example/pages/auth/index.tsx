/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { useState } from 'react'
import styles from './../../styles/Login.module.css'
import { loginWithPassword } from '~/sdk'
import { saveToLocalStorage } from '../../helper/localStorage'
import { useRouter } from 'next/router'
import { BASE_URL, CLIENT_ID, GAME_NAMESPACE, LOCAL_STORAGE_KEY, REDIRECT_URL } from '../constants'
import { Accelbyte } from '@accelbyte/sdk'
import useAuth from '../../hooks/useAuth'

const sdk = Accelbyte.SDK({
  options: {
    baseURL: BASE_URL,
    clientId: CLIENT_ID,
    namespace: GAME_NAMESPACE,
    redirectURI: REDIRECT_URL
  }
})

export default function Login() {
  const { push } = useRouter()
  const { setAuth } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setUsername(event.target.value)
  }
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setPassword(event.target.value)
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const response = await loginWithPassword(sdk, username, password)

    if (response?.response?.data.refresh_token && response?.response?.data.access_token && response?.response?.data.namespace) {
      saveToLocalStorage(LOCAL_STORAGE_KEY.Enum.access_token, response?.response?.data.access_token)
      saveToLocalStorage(LOCAL_STORAGE_KEY.Enum.refresh_token, response?.response?.data.refresh_token)
      setAuth({ userId: response?.response?.data.user_id })
      push('/')
    } else {
      setErrorMessage('Username or Password Error')
    }
  }

  return (
    <div className={styles.loginPage}>
      <form className={styles.loginForm} onSubmit={onSubmit}>
        <input name="username" type="text" value={username} onChange={onChangeUsername} placeholder="username" />
        <input name="password" type="password" value={password} onChange={onChangePassword} placeholder="password" />
        <button>Login</button>
        <div className={styles.errorMessage}>{errorMessage}</div>
      </form>
    </div>
  )
}
