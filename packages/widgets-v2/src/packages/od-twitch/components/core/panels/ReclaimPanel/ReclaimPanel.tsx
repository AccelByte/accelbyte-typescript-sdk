/*
 * Copyright (c) 2023-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useState, useEffect } from 'react'
import { Typography } from '@od-components/components/Typography/Typography'
import { Trans } from 'react-i18next'
import { UserInfoCard } from '../../../common/UserInfoCard/UserInfoCard'
import { FlatTwitchPrimaryButton } from '../../../common/Button/Button'
import { ButtonStyle } from '@od-components/components/Button/Button'
import { TwitchDropLayout } from '../../../common/layouts/TwitchDropLayout'
import { TwitchCard } from '../../../common/cards/TwitchCard'
import { ClaimModal } from '../../../common/modals/ClaimModal'
import { UnlinkAccountConfirmDialog } from '@od-account/pages/LinkedAccountsPage/UnlinkAccountConfirmDialog'
import { LinkedPlatformId } from '@od-shared/models/Linked'
import { Alert } from '@od-components/components/Alert/Alert'
import { AlertType } from '@od-shared/models/Alert'
import classNames from 'classnames'
import { AppName } from '@od-shared/constants/ShConstants'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'
import { t } from '~/packages/od-components/i18n'

interface Props {
  displayName: string
  onUnlink: () => void
  onClaim: (namespace: string, gameId: string, clientId: string, gameName: string) => Promise<unknown>
  className?: string
  logo?: string
  hasDropEntitlements: boolean
  isMultipleGame?: boolean
}

export const ReclaimPanel: React.FC<Props> = ({ displayName, onUnlink, onClaim, className, logo, hasDropEntitlements, isMultipleGame }) => {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false)
  const [isUnlinkModalOpen, setIsUnlinkModalOpen] = useState(false)
  const {
    state: { twitchDropData, twitchDropGamesData }
  } = useAppConfigs()
  const { companyLogo } = useCompanyLogo(AppName.TWITCHDROP, 'header')

  useEffect(() => {
    if (!hasDropEntitlements) {
      setIsClaimModalOpen(false)
    }
  }, [hasDropEntitlements])

  const handleClaim = async () => {
    setIsClaimModalOpen(true)
  }

  return (
    <TwitchDropLayout
      backgroundOverlay={twitchDropData?.backgroundConfig.data.backgroundOverlay}
      backgroundURL={twitchDropData?.backgroundConfig.data.background}
      logo={logo || companyLogo}
      title={t('TwitchDropPage.reclaim.title')}
      subtitle={t('TwitchDropPage.reclaim.subtitle')}
      className={classNames('reclaimLayout', className)}>
      <TwitchCard className="reclaimPanel" isMultipleGame={isMultipleGame}>
        {!hasDropEntitlements && (
          <Alert className="w-full rounded-none" type={AlertType.info}>
            <Trans i18nKey="LinkTwitchPage.twitchReclaimForm.card.noItem">You have no drop items to claim.</Trans>
          </Alert>
        )}
        <Typography tag="p">
          <Trans i18nKey="LinkTwitchPage.twitchReclaimForm.card.instruction">
            You have linked your Twitch account. Claim your drops now.
          </Trans>
        </Typography>
        <UserInfoCard
          displayName={displayName}
          bottomCta={
            <Trans i18nKey="LinkTwitchPage.twitchReclaimForm.card.unlink">
              Not your correct Twitch account?{' '}
              <button
                onClick={() => {
                  setIsUnlinkModalOpen(true)
                }}>
                Unlink
              </button>
            </Trans>
          }
        />
        <FlatTwitchPrimaryButton onClick={handleClaim} buttonStyle={ButtonStyle.PRIMARY}>
          <Trans i18nKey="LinkTwitchPage.twitchReclaimForm.card.claimButton">Claim Now</Trans>
        </FlatTwitchPrimaryButton>
      </TwitchCard>
      <ClaimModal
        visible={isClaimModalOpen}
        onClaim={onClaim}
        gameData={twitchDropGamesData || []}
        onCancel={() => setIsClaimModalOpen(false)}
        isPreview
      />
      {isUnlinkModalOpen && (
        <UnlinkAccountConfirmDialog
          platformId={LinkedPlatformId.Enum.twitch}
          onCancel={() => setIsUnlinkModalOpen(false)}
          onConfirm={onUnlink}
        />
      )}
    </TwitchDropLayout>
  )
}
