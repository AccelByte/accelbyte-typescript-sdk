/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { LoadingBarIcon } from '@od-components/components/Icons/LoadingBarIcon'
import { SuccessFlatIcon } from '@od-components/components/Icons/SuccessFlatIcon'
import { OverrideCSS } from '@od-shared/constants/ShConstants'
import { Env } from '@od-shared/Env'
import { suspendImageLoad } from '@od-shared/utils/SuspenseHelper'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import classNames from 'classnames'
import { motion, Variants } from 'framer-motion'
import { UrlHelper } from '@accelbyte/sdk'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { RPMCreateButton } from './RPMCreateButton'
import './SelectAvatarDialog.scss'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { FetchStatus } from '~/constants/fetch-statuses'

interface Props {
  onCloseDialog: () => void
  onSelectedAvatar: (avatarUrl: string) => void
  showCreatorRPM: () => void
}

interface State {
  selectedImagePosition: number | null
  avatarsList: string[]
}

const IMAGE_VARIANT: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.1 } }
}

export const SelectAvatarDialog = (props: Props) => {
  const [state, setState] = useState<State>({
    selectedImagePosition: null,
    avatarsList: []
  })
  const { state: userState } = useUserInfo()
  const { state: discoveryConfigState } = useDiscoveryConfigs()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    const avatarsList = discoveryConfigState.discoveryConfigData?.avatarsList.data.value
    if (!avatarsList) {
      throw new Error('No avatars are defined in the config server. Please add public links to the avatars to the config server.')
    }

    updateState({ avatarsList: avatarsList.split('\n') })
  }, [discoveryConfigState.discoveryConfigData?.avatarsList.data.value])

  const selectAvatar = () => {
    const { selectedImagePosition, avatarsList } = state
    if (!selectedImagePosition && selectedImagePosition !== 0) return
    if (!avatarsList) return

    // before this step, check if avatarUrl is not url, get only its pathname if it's a url
    const avatarUrl = UrlUtils.isValidUrl(avatarsList[selectedImagePosition])
      ? avatarsList[selectedImagePosition]
      : UrlHelper.combineURLPaths(window.location.origin, avatarsList[selectedImagePosition])

    props.onSelectedAvatar(avatarUrl)
  }

  return (
    <Dialog title={<Trans i18nKey="SelectAvatarDialog.title">Change avatar</Trans>} isOpen={true} className="selectAvatarDialog">
      <DialogBody className="dialogBody">
        <div className={classNames('selectAvatarDialogSubTitle', OverrideCSS.BODY_FONT)}>
          <Trans i18nKey="SelectAvatarDialog.subtitle">Here are the some cool alternatives for your avatar:</Trans>
        </div>
        <div className="selectAvatarDialogBody">
          <React.Suspense
            fallback={
              <div className="imagesLoadingContainer">
                <LoadingBarIcon />
              </div>
            }>
            {state.avatarsList.map((avatar, index) => (
              <motion.div variants={IMAGE_VARIANT} initial="hidden" animate="show" key={avatar}>
                <div
                  className={classNames('imageContainer', { selectedImage: index === state.selectedImagePosition })}
                  onClick={() => updateState({ selectedImagePosition: index })}>
                  <div className="avatarImage">
                    <AvatarImage src={avatar} alt={`Avatar option ${index + 1}`} />
                  </div>
                  {index === state.selectedImagePosition && <SuccessFlatIcon className="selectedIcon" />}
                </div>
              </motion.div>
            ))}
          </React.Suspense>
        </div>
        {Env.READY_PLAYER_ME_AVATAR_URL && <RPMCreateButton showCreatorRPM={props.showCreatorRPM} />}
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button className="btn btn-ghost btnClose" onClick={props.onCloseDialog}>
          <Trans i18nKey="SelectAvatarDialog.closeButton">Cancel</Trans>
        </button>
        <Button
          loadingIndicator="SPINNER"
          className="btn btn-primary"
          onClick={selectAvatar}
          disabled={state.selectedImagePosition === null}
          isLoading={userState.fetchUserProfileStatus === FetchStatus.UPDATING}>
          <Trans i18nKey="SelectAvatarDialog.saveButton">SAVE</Trans>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

type AvatarImageProps = Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src'> & {
  src: string
}

function AvatarImage(props: AvatarImageProps) {
  suspendImageLoad(props.src)

  return <img {...props} loading="lazy" />
}
