/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
// TODO share routes outside of od-accounts
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import { SuccessFlatIcon } from '@od-components/components/Icons/SuccessFlatIcon'
import { LauncherDownloadButton } from '@od-components/components/LauncherDownloadButton/LauncherDownloadButton'
import { t } from '@od-components/i18n/index'
import { ItemPublishingContent } from '@od-shared/models/Cms'
import { ItemType } from '@od-shared/models/EcommTypes'
import classNames from 'classnames'
import { DesktopChecker } from '@accelbyte/sdk'
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { OpenLibraryLauncherButton } from '../OpenLibraryLauncherButton/OpenLibraryLauncherButton'
import './ClaimStatusDialog.scss'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { ItemInfo } from '@accelbyte/sdk-platform'

interface ClaimSuccessDialogProps {
  item: ItemInfo
  itemPublishingContent?: ItemPublishingContent | null
  onCloseDialog: () => void
  launcherGoToLibraryButton?: JSX.Element
}

const ClaimSuccessMessage = (props: { title: string }) => (
  <>
    <Trans i18nKey="AppDetailPage.dialog.claimSuccess.content">
      <p className="claimSuccessMessage">Congratulations! You have successfully claimed</p>
    </Trans>
    <p className="claumSuccessTitle">{props.title}</p>
  </>
)

const DownloadLauncherMessage = (props: { title: string }) => (
  <>
    <ClaimSuccessMessage title={props.title} />
    <Trans i18nKey="AppDetailPage.dialog.claimSuccess.downloadLauncherMessage">
      <p className="downloadLauncherMessage">
        You can play this game using Launcher. Don't have Launcher? Click <strong>here</strong> to download and install.
      </p>
    </Trans>
  </>
)

const StartShoppingMessage = (props: { title: string }) => (
  <>
    <Trans i18nKey="AppDetailPage.dialog.claimSuccess.content">
      <p className="claimSuccessMessage">Congratulations! You have successfully claimed</p>
    </Trans>
    <p className="inline font-medium text-[color:rgb(var(--od-rgba-text))]">{props.title}.</p>{' '}
    <Trans i18nKey="AppDetailPage.dialog.claimSuccess.startShoppingMessage">
      <p className="startShoppingMessage">Let's start shopping!</p>
    </Trans>
  </>
)

const ClaimCodeMessage = () => {
  return (
    <>
      <Trans i18nKey="AppDetailPage.dialog.claimCodeMessage.code.description">
        <p className="claimCodeMessage above">Your product key has been sent to your email. You can also see</p>
        <p className="claimCodeMessage bottom">the key by clicking the See My Keys button below, or going to</p>
      </Trans>
      <Trans i18nKey="AppDetailPage.dialog.claimCodeMessage.code.goToMyPurchasedItem">
        <p className="goToPurchasedItem">
          <span>My Account</span>
          <ArrowIcon className={classNames('arrow', ArrowIconStyles.right)} />
          <span>Purchased Items</span>
          <ArrowIcon className={classNames('arrow', ArrowIconStyles.right)} />
          <span>Product Keys</span>
        </p>
      </Trans>
    </>
  )
}

const DownloadMiniLauncherButton = (props: React.PropsWithChildren<{ miniLauncherLink: string }>) => (
  <a
    className="btn small btn-primary launcherDownloadButton big"
    title={props.miniLauncherLink}
    target="_blank"
    rel="noreferrer"
    download={true}
    href={props.miniLauncherLink}>
    {props.children}
  </a>
)

export function ClaimSuccessDialog({ item, itemPublishingContent, onCloseDialog, launcherGoToLibraryButton }: ClaimSuccessDialogProps) {
  const { state: routes } = useRoutes()

  const isCoin = item.itemType === ItemType.enum.COINS
  const isApp = item.itemType === ItemType.enum.APP
  const isCode = item.itemType === ItemType.enum.CODE
  const isOptionbox = item.itemType === ItemType.enum.OPTIONBOX
  const itemTitle = item.title ? item.title : 'DEFAULT_ITEM_TITLE'
  const miniLauncherLink = (itemPublishingContent && itemPublishingContent.miniLauncherUrl) || ''

  return (
    <Dialog title={t('AppDetailPage.dialog.claimSuccess.title')} isOpen={true} className="claimStatusDialog">
      <DialogBody>
        <SuccessFlatIcon className="successIcon" />
        {isApp && (
          <>
            {!DesktopChecker.isDesktopApp() &&
              ((miniLauncherLink && <ClaimSuccessMessage title={itemTitle} />) || <DownloadLauncherMessage title={itemTitle} />)}
            {DesktopChecker.isDesktopApp() && <ClaimSuccessMessage title={itemTitle} />}
          </>
        )}
        {isCoin && <StartShoppingMessage title={itemTitle} />}
        {isCode && <ClaimCodeMessage />}
        {!(isApp || isCoin || isCode) && <ClaimSuccessMessage title={itemTitle} />}
      </DialogBody>
      <DialogFooter className={`dialogFooterSuccess ${!isApp && !isCoin ? 'center' : 'end'}`}>
        <button onClick={onCloseDialog} className="btn big btnOk">
          <Trans i18nKey="AppDetailPage.dialog.claimSuccess.ok">OK</Trans>
        </button>
        {!DesktopChecker.isDesktopApp() &&
          isApp &&
          ((miniLauncherLink && (
            <DownloadMiniLauncherButton miniLauncherLink={miniLauncherLink}>
              <Trans i18nKey="AppDetailPage.dialog.claimSuccess.downloadNow">Download Now</Trans>
            </DownloadMiniLauncherButton>
          )) || (
            <LauncherDownloadButton className="big btnGetLauncher">
              <Trans i18nKey="AppDetailPage.dialog.claimSuccess.getLauncherButton">Get Launcher</Trans>
            </LauncherDownloadButton>
          ))}
        {DesktopChecker.isDesktopApp() && isApp && <LauncherGoToLibraryButton item={item} overriderElement={launcherGoToLibraryButton} />}
        {isCoin && (
          <Link to={routes.store.index.link} className="btn big btn-primary btnGoToStore">
            <Trans i18nKey="ClaimSuccessDialog.goStore">Go To Store</Trans>
          </Link>
        )}
        {isCode && (
          <Link to={routes.account.purchasedItems.keys.link}>
            <Button className="btn big btn-primary btnSeeKeys">
              <Trans i18nKey="AppDetailPage.dialog.claimCodeSuccess.button.seeMyKeys">See My Keys</Trans>
            </Button>
          </Link>
        )}
        {isOptionbox && (
          <Link to={routes.account.purchasedItems.optionboxes.link}>
            <Button className="btn big btn-primary btnSeeKeys">
              <Trans i18nKey="AppDetailPage.dialog.claimOptionboxSuccess.button.seeMyItem">See My Option box</Trans>
            </Button>
          </Link>
        )}
      </DialogFooter>
    </Dialog>
  )
}

// Composing components.
function LauncherGoToLibraryButton({ item, overriderElement }: { item: ItemInfo; overriderElement?: JSX.Element }) {
  if (overriderElement) {
    return overriderElement
  }
  return <OpenLibraryLauncherButton item={item} />
}
