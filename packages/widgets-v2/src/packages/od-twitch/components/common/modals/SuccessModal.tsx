/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useEffect } from 'react'
import { Modal } from '@od-components/components/Modal/Modal'
import { Trans } from 'react-i18next'
import './SuccessModal.scss'
import { ItemList } from '../ItemList/ItemList'
import { Typography } from '@od-components/components/Typography/Typography'
import { XCircle } from 'react-feather'
import { CardItemInfo } from '../../../models/CardItemInfo'
import classNames from 'classnames'
import { BackgroundOverlay } from '@accelbyte/sdk-odinconfig'

interface Props {
  gameName: string
  logo?: string
  errorAlert?: React.ReactNode
  title?: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
  backgroundURL?: string
  backgroundOverlay?: BackgroundOverlay
  visible: boolean
  onClose: () => void
  isPreview?: boolean
  namespace?: string
  dropItems: CardItemInfo[]
  isMultipleGame?: boolean
}

export function SuccessModal(props: Props) {
  const { logo, visible, isPreview, gameName, dropItems, onClose, isMultipleGame } = props

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Modal
      visible={visible}
      className={classNames('twitchDropPage__successModal', isPreview ? 'inPreview' : '', isMultipleGame ? 'multipleGame' : '')}
      isPreviewMode={isPreview}
      overlayBackground={isPreview ? { position: 'absolute' } : undefined}>
      <div className={'containertwitch'}>
        <div className="containertwitch">
          <button className="closeButton">
            <XCircle onClick={onClose} />
            <span>Esc</span>
          </button>
        </div>
        {logo && (
          <div className={'twitchDropLayout__logo'}>
            <img src={logo} alt="logo" />
          </div>
        )}
        <Typography tag="h1" className="twitchDropLayout__title">
          <Trans i18nKey="TwitchDropPage.claim.modal.congratulations">Congratulations!</Trans>
        </Typography>
        <Trans i18nKey="TwitchDropPage.claim.modal.success">
          You`ve claimed your drops for the <b>{{ gameName }}</b> game.
          <br />
          The items will be sent to your in-game inventory.
        </Trans>
        <div className={classNames('listContainer', isPreview ? 'inPreview' : '')}>
          <ItemList items={dropItems} isMultipleGame={isMultipleGame} isPreviewMode={isPreview}></ItemList>
        </div>
      </div>
    </Modal>
  )
}
