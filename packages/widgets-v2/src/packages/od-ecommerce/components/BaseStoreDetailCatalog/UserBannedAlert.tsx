/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { BannedMessage } from '@od-components/components/CommonError'
import { WarningIcon } from '@od-components/components/Icons/WarningIcon'
import React from 'react'

export const UserBannedAlert = () => {
  return (
    <div className="userBannedAlert">
      <span className="alertIcon">
        <WarningIcon type={'danger'} />
      </span>
      <span className="alertDescription">
        <BannedMessage />
      </span>
    </div>
  )
}
