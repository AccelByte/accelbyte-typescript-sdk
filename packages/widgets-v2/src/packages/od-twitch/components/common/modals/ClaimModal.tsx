/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { t } from '@od-components/i18n'
import { Typography } from '@od-components/components/Typography/Typography'
import { Modal, ModalBody } from '@od-components/components/Modal/Modal'
import { Button, ButtonFontSize, ButtonType, ButtonStyle } from '@od-components/components/Button/Button'
import { Drops } from '../Drops/Drops'
import './ClaimModal.scss'

interface Props {
  visible: boolean
  onCancel: () => void
  onClaim: (namespace: string, gameId: string, client: string, gameName: string) => Promise<unknown>
  gameData: { value: string; label: string; namespace: string; clientId: string }[]
  isPreview?: boolean
  isMultipleGame?: boolean
}

export function ClaimModal({ onCancel, onClaim, visible, isPreview, isMultipleGame, gameData }: Props) {
  const [selected, setSelected] = useState(gameData[0])
  const [isClaiming, setIsClaiming] = useState(false)

  const onChange = selected => {
    setSelected(selected)
  }

  const handleClaim = async () => {
    setIsClaiming(true)
    const gameInfo = gameData.find(v => {
      return v.value === selected.value
    })
    if (gameInfo) {
      await onClaim(gameInfo.namespace, selected.value, gameInfo.clientId, gameInfo.label)
    }

    setIsClaiming(false)
  }

  const multipleGameClass = isMultipleGame ? 'multipleGame' : ''

  return (
    <Modal
      visible={visible}
      className={`twitchDropPage__claimModal ${multipleGameClass}`}
      overlayClassName={multipleGameClass}
      isPreviewMode={isPreview}
      overlayBackground={isPreview ? { position: 'absolute' } : undefined}>
      <ModalBody>
        <Typography tag="h2" fontSize="lg" isCentered>
          <Trans i18nKey="TwitchDropPage.claim.modal.title">Claim Drops</Trans>
        </Typography>
        <Typography tag="p" isCentered>
          <Trans i18nKey="TwitchDropPage.claim.modal.subtitle">
            Do you want to claim game drops with this Twitch account?
            <br />
            This action may require you to re-login to Twitch.
          </Trans>
        </Typography>
        <Drops options={gameData} onChange={onChange} isFullWidth placeholder="Choose a game" value={selected} />
        <div className="buttonContainer">
          <Button
            onClick={onCancel}
            buttonType={ButtonType.PLAIN}
            buttonFontSize={ButtonFontSize.MEDIUM}
            buttonStyle={ButtonStyle.TEXT}
            hasOutline={false}>
            {t('common.cancel')}
          </Button>
          <Button
            isLoading={isClaiming}
            onClick={handleClaim}
            buttonType={ButtonType.FLAT}
            buttonFontSize={ButtonFontSize.MEDIUM}
            buttonStyle={ButtonStyle.PRIMARY}
            disabled={!selected}>
            {t('common.claim')}
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}
