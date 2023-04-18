/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'

interface Props {
  link: string
}

export const UpgradeAccountPrompt = ({ link }: Props) => (
  <div className="upgradeAccountPrompt">
    <Trans i18nKey="UpgradeAccount.prompt">
      You haven't yet upgraded your account.
      <Link to={link}>Click here</Link> to upgrade your account.
    </Trans>
  </div>
)
