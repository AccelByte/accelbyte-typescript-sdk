/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { Trans } from 'react-i18next'
import styles from '../LinkAccountWithOneTimeCodePage.module.scss'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'

export const CommonTitle = () => {
  const { state: discoveryConfigState } = useDiscoveryConfigs()
  const publisherName = discoveryConfigState.discoveryConfigData?.brandName.data.value || ''

  return (
    <div className="text-center">
      <p className={styles.title}>
        <Trans i18nKey="LinkAccountWithOneTimeCodePage.title">Link to an {{ publisherName }} Account</Trans>
      </p>
      <p className={styles.description}>
        <Trans i18nKey="LinkAccountWithOneTimeCodePage.selectLinkMode.desc">
          Link an existing {{ publisherName }} account or upgrade to a full account to save your game progress.
        </Trans>
      </p>
    </div>
  )
}
