/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { EventV2 } from '@accelbyte/sdk-event'
import React from 'react'
import { Trans } from 'react-i18next'

interface Props {
  history: EventV2
}

export const EditorTypePreview = (props: Props) => {
  const isEditedByUser =
    props.history.userId === (props.history.payload && props.history.payload.userAccount && props.history.payload.userAccount.userId)
  return (
    <>
      {isEditedByUser ? (
        <Trans i18nKey="EditorTypePreview.editedBy.user">You</Trans>
      ) : (
        <Trans i18nKey="EditorTypePreview.editedBy.admin">Administrator</Trans>
      )}
    </>
  )
}
