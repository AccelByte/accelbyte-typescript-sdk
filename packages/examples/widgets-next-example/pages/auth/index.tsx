/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { useState } from 'react'
import styles from './../../styles/Login.module.css'
import { loginWithPassword } from '~/sdk'
import { Accelbyte } from '@accelbyte/sdk'
import { saveToLocalSorage } from '../../helper/localStorage'
import { useRouter } from 'next/router'

const sdk = Accelbyte.SDK({
  options: {
    baseURL: 'http://localhost:3030/api',
    clientId: '77f88506b6174c3ea4d925f5b4096ce8',
    namespace: 'accelbyte',
    redirectURI: 'http://localhost:3030'
  }
})

export default function Login() {
  const { push } = useRouter()
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
    if (response?.accessToken && response?.refreshToken) {
      saveToLocalSorage('access_token', response.accessToken)
      saveToLocalSorage('refresh_token', response.refreshToken)
      push('/')
    } else {
      setErrorMessage('Username or Password Error')
    }
  }

  return (
    <div className={styles.loginPage}>
      <form action="" className={styles.loginForm} onSubmit={onSubmit}>
        <input name="username" type="text" value={username} onChange={onChangeUsername} placeholder="username" />
        <input name="password" type="password" value={password} onChange={onChangePassword} placeholder="password" />
        <button>Login</button>
        <div className={styles.errorMessage}>{errorMessage}</div>
      </form>
    </div>
  )
}
