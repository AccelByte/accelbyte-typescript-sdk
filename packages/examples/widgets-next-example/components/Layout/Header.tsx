/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import styles from './Header.module.css'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router'

export const Header = () => {
  const { auth, logout } = useAuth()
  const router = useRouter()
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerTitle} onClick={() => router.push('/')}>
            NEXT.JS Example Using Accelbyte Web Widgets and Web SDK
          </div>
          {auth?.userId && (
            <button className={styles.loginButton} onClick={logout}>
              Logout
            </button>
          )}
          {!auth?.userId && (
            <button className={styles.loginButton} onClick={() => router.push('/auth')}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
