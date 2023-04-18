/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CircleCheckIcon } from '@od-components/components/Icons/CircleCheckIcon'
import React from 'react'
import { Trans } from 'react-i18next'
import styles from './TwitchLinkedForm.module.scss'
import { TwitchFormContainer } from './TwitchPageLayout'

const TWITCH_DROP_INVENTORY_URL = 'https://www.twitch.tv/drops/inventory'

export const TwitchLinkedForm = () => {
  return (
    <TwitchFormContainer className={styles.twitchLinkedForm}>
      <h3>
        <Trans i18nKey="LinkTwitchPage.twitchLinkedForm.title">Twitch Account Linked</Trans>
      </h3>
      <div>
        <CircleCheckIcon className="icon" checked fill />
      </div>
      <p className="instructionMessage">
        <Trans i18nKey="LinkTwitchPage.twitchLinkedForm.instruction">
          Your account is now linked to Twitch. To claim your Drop items, please go to Twitch Inventory page.
        </Trans>
      </p>
      <a target="_blank" rel="noreferrer" href={TWITCH_DROP_INVENTORY_URL} className="btn btn-primary btnGoToInventory">
        <Trans i18nKey="LinkTwitchPage.twitchLinkedForm.goToInventory">Go To Twitch Inventory</Trans>
      </a>
    </TwitchFormContainer>
  )
}
