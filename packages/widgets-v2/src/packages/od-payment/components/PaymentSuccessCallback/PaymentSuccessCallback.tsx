/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { DesktopChecker } from '@accelbyte/sdk'
import React, { useEffect } from 'react'
import styles from './PaymentSuccessCallback.module.scss'

export function PaymentSuccessCallback() {
  useEffect(() => {
    if (!DesktopChecker.isDesktopApp()) {
      if (window.opener) {
        window.opener.postMessage(window.location.href, '*')
      }
      window.parent.postMessage(window.location.href, window.location.origin)
    }
  }, [])

  return <div className={styles.paymentSuccessCallbackContainer} />
}
