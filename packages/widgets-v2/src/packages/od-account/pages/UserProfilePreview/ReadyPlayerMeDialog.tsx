/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { useSdk } from '~/hooks/useSdk'
import { ReadyPlayerMeDialogComponent } from './ReadyPlayerMeDialogComponent'
import { IamUserClient } from '@accelbyte/sdk-iam'

interface Props {
  onCloseDialog: () => void
  updateAvatar: (avatarUrl: string) => void
  setLoadingDialogOpen: () => void
}

export const ReadyPlayerMeDialog = (props: Props) => {
  const [isDialogConfirmationOpen, setLoadingDialogOpen] = React.useState(false)
  const [sdk] = useSdk()

  React.useEffect(() => {
    window.addEventListener('message', receiveAvatar, false)

    return () => {
      window.removeEventListener('message', receiveAvatar, false)
    }
  }, [])

  const receiveAvatar = async (event: any) => {
    if (typeof event.data === 'string') {
      props.setLoadingDialogOpen()
      await renderImage(event.data, 'halfbody-portrait-v1')
      props.onCloseDialog()
    }
  }

  const renderImage = async (model: string, scene: string) => {
    try {
      const resultImage = await new IamUserClient(sdk).renderImageFromGlbModel({ model, scene })
      if (resultImage.error) throw resultImage.error
      props.updateAvatar(resultImage[0])
    } catch (error) {
      console.error(error)
      props.onCloseDialog()
    }
  }

  return (
    <ReadyPlayerMeDialogComponent
      onCloseDialog={props.onCloseDialog}
      isDialogConfirmationOpen={isDialogConfirmationOpen}
      toggleDialogConfirmation={() => {
        setLoadingDialogOpen(!isDialogConfirmationOpen)
      }}
    />
  )
}
