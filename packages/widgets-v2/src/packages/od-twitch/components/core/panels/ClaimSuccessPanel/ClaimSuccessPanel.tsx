/*
 * Copyright (c) 2023-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useState } from 'react'
import { CircleCheckIcon } from '@od-components/components/Icons/CircleCheckIcon'
import { TwitchCard } from '../../../common/cards/TwitchCard'
import { TwitchDropLayout } from '../../../common/layouts/TwitchDropLayout'
import './ClaimSuccessPanel.scss'
import { Typography } from '@od-components/components/Typography/Typography'
import { SuccessModal } from '../../../common/modals/SuccessModal'
import { CardItemInfo } from '../../../../models/CardItemInfo'
import { AppName } from '@od-shared/constants/ShConstants'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'

interface Props {
  className?: string
  logo?: string
  gameName: string
  namespace?: string
  isPreview?: boolean
  isPreviewModalOpen?: boolean
  isMultipleGame?: boolean
  itemList: CardItemInfo[]
}

export const ClaimSuccessPanel: React.FC<Props> = ({
  className,
  logo,
  isPreviewModalOpen,
  itemList,
  gameName,
  namespace,
  isMultipleGame,
  isPreview
}) => {
  const [isModalOpen, setIsModalOpen] = useState(itemList.length !== 0)
  const {
    state: { twitchDropData }
  } = useAppConfigs()
  const { companyLogo } = useCompanyLogo(AppName.TWITCHDROP, 'header')

  return (
    <TwitchDropLayout
      backgroundOverlay={twitchDropData?.backgroundConfig.data.backgroundOverlay}
      backgroundURL={twitchDropData?.backgroundConfig.data.background}
      logo={logo || companyLogo}
      title="Re-claim Twitch Drops"
      className={className}>
      <TwitchCard className="claimSuccessPanel" isMultipleGame={isMultipleGame}>
        <CircleCheckIcon className="icon" checked fill />
        <Typography tag="p">All Done! You've successfully claimed your drops.</Typography>
      </TwitchCard>
      <SuccessModal
        gameName={gameName}
        visible={isPreviewModalOpen ?? isModalOpen}
        isPreview={isPreview}
        dropItems={itemList}
        backgroundURL={twitchDropData?.backgroundConfig.data.background}
        logo={logo || companyLogo}
        namespace={namespace}
        onClose={() => setIsModalOpen(false)}
        isMultipleGame={isMultipleGame}
      />
    </TwitchDropLayout>
  )
}
