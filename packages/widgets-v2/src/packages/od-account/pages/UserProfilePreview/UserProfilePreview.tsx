/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { Dialog } from '@od-components/components/Dialog/Dialog'
import { Loading } from '@od-components/components/Loading/Loading'
import { ProfileImage } from '@od-components/components/ProfileImage/ProfileImage'
import { Spinner, SpinnerStyle } from '@od-components/components/Spinner/Spinner'
import { Env } from '@od-shared/Env'
import { AlertType } from '@od-shared/models/Alert'
import classNames from 'classnames'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { ReadyPlayerMeDialog } from './ReadyPlayerMeDialog'
import { SelectAvatarDialog } from './SelectAvatarDialog'
import { mockUser } from '@od-shared/mocks/MockVars'
import styles from './UserProfilePreview.module.scss'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useHeaderAlerts } from '~/hooks/header/useHeaderAlerts'
import { EligibleUser } from '@accelbyte/sdk-iam'

interface Props {
  isPreviewMode?: boolean
}

interface State {
  showChangePictureDialog: boolean
  showCreatorAvatarDialog: boolean
  isLoadingDialogOpen: boolean
}

const LoadingDialog = () => {
  return (
    <Dialog isOpen={true} className="loadingSpinnerContainer">
      <p className="text-lg font-medium">
        <Trans i18nKey="RPMCreator.loadingRenderImage.title">Saving your avatar...</Trans>
      </p>
      <Spinner className={classNames(SpinnerStyle.blue, 'my-12')} />
      <p className="text-sm">
        <Trans i18nKey="RPMCreator.loadingRenderImage.info">
          You will be redirected in a few seconds. If nothing happened, please refresh this page.
        </Trans>
      </p>
    </Dialog>
  )
}

const UserProfileOverview = ({ isPreviewMode, onShowPictureDialog }: { isPreviewMode: boolean; onShowPictureDialog: () => void }) => {
  const { state: userState } = useUserInfo()
  const user = !isPreviewMode ? userState.user : mockUser
  const isUpdating = userState.fetchUserProfileStatus === FetchStatus.UPDATING

  if (!EligibleUser.safeParse(user).success) return null

  const isDisplayNameDisabled = () => {
    return Env.IS_DISABLE_DISPLAY_NAME
  }

  const isUsernameDisabled = () => {
    return Env.IS_DISABLE_USERNAME
  }

  const getNameFallback = () => {
    if (!EligibleUser.safeParse(user).success) return null

    if (isUsernameDisabled()) {
      return user?.displayName || user?.userName
    }

    return user?.userName || user?.displayName
  }

  const displayName = !isPreviewMode ? getNameFallback() : mockUser.displayName
  const isNameExist = user?.userName && user.displayName

  return (
    <div className="userProfile">
      <div className="displayPicture">
        {isUpdating && <Loading className="loading" />}
        {!isUpdating && (
          <div className="imageContainer">
            <ProfileImage imageLink={userState.userProfile?.avatarUrl || ''} />
            <button className="changeButton" onClick={!isPreviewMode ? () => onShowPictureDialog() : () => null}>
              <Trans i18nKey="UserProfilePreview.button.change">Change</Trans>
            </button>
          </div>
        )}
      </div>
      <div className="userInfo">
        <h3 className="displayName">{displayName}</h3>
        <div className="emailAndLocation">
          {isNameExist && !isUsernameDisabled() && !isDisplayNameDisabled() && <span className="profileName">{user.displayName}</span>}{' '}
          {user?.emailAddress} &#183; {user?.country}
        </div>
        <div className="userId">ID: {user?.userId}</div>
      </div>
    </div>
  )
}

export const UserProfilePreview = (props: Props) => {
  const [state, setState] = useState<State>({
    showChangePictureDialog: false,
    showCreatorAvatarDialog: false,
    isLoadingDialogOpen: false
  })
  const { state: userState, mutations: userMutations } = useUserInfo()
  const { mutations: headerAlertsMutations } = useHeaderAlerts()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const onProfileAvatarUpdated = (): void => {
    headerAlertsMutations.push({
      type: AlertType.success,
      element: <Trans i18nKey="AccountProfilePreview.updateProfileAvatarSuccess">Awesome! Your avatar has been updated.</Trans>,
      autoDismiss: true
    })
  }

  const onProfileAvatarUpdateError = (): void => {
    headerAlertsMutations.push({
      type: AlertType.danger,
      element: <Trans i18nKey="AccountProfilePreview.updateProfileAvatarError">Sorry, we are unable to process this request</Trans>,
      autoDismiss: true
    })
  }

  const updateUserPicture = async (avatarUrl: string) => {
    updateState({ showChangePictureDialog: false })
    try {
      const result = await userMutations.uploadUserProfileImage(avatarUrl)
      onProfileAvatarUpdated()

      if (result.error) {
        onProfileAvatarUpdateError()
      }
    } finally {
      updateState({ isLoadingDialogOpen: false })
    }
  }

  const isFetchingProfile = !props.isPreviewMode ? userState.fetchUserProfileStatus === FetchStatus.FETCHING : false
  return (
    <div className={styles.userProfilePreview}>
      {isFetchingProfile && <Loading />}
      {!isFetchingProfile && state.showChangePictureDialog && (
        <SelectAvatarDialog
          onCloseDialog={() => updateState({ showChangePictureDialog: false })}
          onSelectedAvatar={updateUserPicture}
          showCreatorRPM={() => updateState({ showCreatorAvatarDialog: true })}
        />
      )}
      {!isFetchingProfile && !userState.userProfileError && (
        <UserProfileOverview
          isPreviewMode={!!props.isPreviewMode}
          onShowPictureDialog={() => updateState({ showChangePictureDialog: true })}
        />
      )}
      {!isFetchingProfile && userState.userProfileError && (
        <div className="errorContainer">
          <CommonError error={userState.userProfileError} />
        </div>
      )}
      {state.showCreatorAvatarDialog && (
        <ReadyPlayerMeDialog
          onCloseDialog={() => updateState({ showCreatorAvatarDialog: false })}
          updateAvatar={updateUserPicture}
          setLoadingDialogOpen={() => updateState({ isLoadingDialogOpen: true })}
        />
      )}
      {state.isLoadingDialogOpen && <LoadingDialog />}
    </div>
  )
}
