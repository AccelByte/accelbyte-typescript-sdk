/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { getThirdPartyPlatformIcon } from '../LinkedAccountsPage/PlatformIcon'
import { AccountOverviewSubSection, AccountOverviewSubSectionBody, AccountOverviewSubSectionHeader } from './AccountOverviewSubSection'
import styles from './PreviewLinkedAccount.module.scss'
import { DistinctLinkedPlatformV3 } from '@accelbyte/sdk-iam'

interface Props {
  linkedPlatform: DistinctLinkedPlatformV3[] | null
}

export const PreviewLinkedAccounts = ({ linkedPlatform }: Props) => {
  const { state: routesState } = useRoutes()

  return (
    <AccountOverviewSubSection className={styles.linkedAccountsSubSection}>
      <AccountOverviewSubSectionHeader>
        <Trans i18nKey={'AccountOverviewPage.subLinkedAccounts.title'}>Linked Accounts</Trans>
        <Link to={routesState.account.linkedAccounts.link}>
          <Trans i18nKey={'AccountOverviewPage.subLinkedAccounts.seeAll'}>See All</Trans>
        </Link>
      </AccountOverviewSubSectionHeader>
      <AccountOverviewSubSectionBody>
        <div className={styles.previewLinkedAccount}>
          <table>
            <tbody>
              {linkedPlatform && linkedPlatform.length > 0 ? (
                linkedPlatform.map((platform: DistinctLinkedPlatformV3) => renderListPlatform(platform))
              ) : (
                <tr>
                  <td colSpan={3} className={styles.noLinkedAccount}>
                    <Trans i18nKey="LinkedAccountPage.noLinkedAccount">You have no linked account</Trans>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </AccountOverviewSubSectionBody>
    </AccountOverviewSubSection>
  )
}

const renderListPlatform = (platform: DistinctLinkedPlatformV3) => {
  const platformName = platform.platformName
  if (!platformName) return null
  return (
    <tr key={platform.platformName}>
      <td className={styles.linkedAccountsContainer}>
        <span className={styles.platform}>{getThirdPartyPlatformIcon(platformName)}</span>
      </td>
    </tr>
  )
}
