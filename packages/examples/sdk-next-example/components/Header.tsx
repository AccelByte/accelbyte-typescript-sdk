/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import styles from './Header.module.css'
import { useRouter } from 'next/router'
import { LoginWidget } from '@accelbyte/widgets-v2/lib/login'

export const Header = () => {
  const router = useRouter()

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerTitle} onClick={() => router.push('/')}>
            NEXT.JS Example Using Accelbyte Web Widgets and Web SDK
          </div>
          <div className={styles.loginContainer}>
            <p>This Login button is using AccelByte Widgets V2 {'->'}</p>
            <LoginWidget
              userDropdownMenus={[
                {
                  pathname: '/',
                  label: 'Home'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
