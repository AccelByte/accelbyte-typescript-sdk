/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AppleIcon } from '@od-components/components/Icons/Platform/AppleIcon'
import { DefaultIcon } from '@od-components/components/Icons/Platform/DefaultIcon'
import { DiscordIcon } from '@od-components/components/Icons/Platform/DiscordIcon'
import { EAOriginIcon } from '@od-components/components/Icons/Platform/EAOriginIcon'
import { EpicgamesIcon } from '@od-components/components/Icons/Platform/EpicgamesIcon'
import { FacebookIcon } from '@od-components/components/Icons/Platform/FacebookIcon'
import { GoogleIcon } from '@od-components/components/Icons/Platform/GoogleIcon'
import { LiveIcon } from '@od-components/components/Icons/Platform/LiveIcon'
import { MicrosoftIcon } from '@od-components/components/Icons/Platform/MicrosoftIcon'
import { NetflixIcon } from '@od-components/components/Icons/Platform/NetflixIcon'
import { OculusIcon } from '@od-components/components/Icons/Platform/OculusIcon'
import { PSNIcon } from '@od-components/components/Icons/Platform/PSNIcon'
import { StadiaIcon } from '@od-components/components/Icons/Platform/StadiaIcon'
import { SteamIcon } from '@od-components/components/Icons/Platform/SteamIcon'
import { TwitchIcon } from '@od-components/components/Icons/Platform/TwitchIcon'

import { AppleIcon as AdminAppleIcon } from '@od-components/components/Icons/Admin/AppleIcon'
import { DiscordIcon as AdminDiscordIcon } from '@od-components/components/Icons/Admin/DiscordIcon'
import { EpicgamesIcon as AdminEpicGamesIcon } from '@od-components/components/Icons/Admin/EpicGamesIcon'
import { FacebookIcon as AdminFacebookIcon } from '@od-components/components/Icons/Admin/FacebookIcon'
import { GoogleIcon as AdminGoogleIcon } from '@od-components/components/Icons/Admin/GoogleIcon'
import { XboxIcon as AdminXboxIcon } from '@od-components/components/Icons/Admin/XboxIcon'
import { PSNIcon as AdminPSNIcon } from '@od-components/components/Icons/Admin/PSNIcon'
import { StadiaIcon as AdminStadiaIcon } from '@od-components/components/Icons/Admin/StadiaIcon'
import { SteamIcon as AdminSteamIcon } from '@od-components/components/Icons/Admin/SteamIcon'
import { TwitchIcon as AdminTwitchIcon } from '@od-components/components/Icons/Admin/TwitchIcon'

import { LinkedPlatformId } from '@od-shared/models/Linked'
import { UserHelper } from '@od-shared/utils/UserHelper'
import React from 'react'

const PlatformIcon = (props: { Icon: (props: any) => JSX.Element; platformId: string }) => {
  const { Icon, platformId } = props
  return (
    <>
      <span className="mr-2">
        <Icon />
      </span>
      {UserHelper.getPlatformName(platformId)}
    </>
  )
}

export function getThirdPartyPlatformIcon(platformId: string) {
  switch (platformId) {
    case LinkedPlatformId.enum.azuresaml:
      return <PlatformIcon Icon={MicrosoftIcon} platformId={platformId} />
    case LinkedPlatformId.enum.steam:
    case LinkedPlatformId.enum.steamopenid:
      return <PlatformIcon Icon={SteamIcon} platformId={LinkedPlatformId.enum.steamopenid} />
    case LinkedPlatformId.enum.epicgames:
      return <PlatformIcon Icon={EpicgamesIcon} platformId={LinkedPlatformId.enum.epicgames} />
    case LinkedPlatformId.enum.facebook:
      return <PlatformIcon Icon={FacebookIcon} platformId={LinkedPlatformId.enum.facebook} />
    case LinkedPlatformId.enum.google:
      return <PlatformIcon Icon={GoogleIcon} platformId={LinkedPlatformId.enum.google} />
    case LinkedPlatformId.enum.oculus:
      return <PlatformIcon Icon={OculusIcon} platformId={LinkedPlatformId.enum.oculus} />
    case LinkedPlatformId.enum.twitch:
      return <PlatformIcon Icon={TwitchIcon} platformId={LinkedPlatformId.enum.twitch} />
    case LinkedPlatformId.enum.ps4:
    case LinkedPlatformId.enum.ps4web:
    case LinkedPlatformId.enum.ps5:
      return <PlatformIcon Icon={PSNIcon} platformId={LinkedPlatformId.enum.ps4} />
    case LinkedPlatformId.enum.live:
    case LinkedPlatformId.enum.xblweb:
      return <PlatformIcon Icon={LiveIcon} platformId={LinkedPlatformId.enum.live} />
    case LinkedPlatformId.enum.stadia:
    case LinkedPlatformId.enum.stadiaweb:
      return <PlatformIcon Icon={StadiaIcon} platformId={LinkedPlatformId.enum.stadia} />
    case LinkedPlatformId.enum.apple:
      return <PlatformIcon Icon={AppleIcon} platformId={LinkedPlatformId.enum.apple} />
    case LinkedPlatformId.enum.netflix:
      return <PlatformIcon Icon={NetflixIcon} platformId={LinkedPlatformId.enum.netflix} />
    case LinkedPlatformId.enum.eaorigin:
      return <PlatformIcon Icon={EAOriginIcon} platformId={LinkedPlatformId.enum.eaorigin} />
    case LinkedPlatformId.enum.discord:
      return <PlatformIcon Icon={DiscordIcon} platformId={LinkedPlatformId.enum.discord} />
    default:
      return <PlatformIcon Icon={DefaultIcon} platformId={platformId} />
  }
}

export function getAdminThirdPartyPlatformIcon(platformId: string) {
  switch (platformId) {
    case LinkedPlatformId.enum.steam:
    case LinkedPlatformId.enum.steamopenid:
      return <PlatformIcon Icon={AdminSteamIcon} platformId={LinkedPlatformId.enum.steamopenid} />
    case LinkedPlatformId.enum.epicgames:
      return <PlatformIcon Icon={AdminEpicGamesIcon} platformId={LinkedPlatformId.enum.epicgames} />
    case LinkedPlatformId.enum.facebook:
      return <PlatformIcon Icon={AdminFacebookIcon} platformId={LinkedPlatformId.enum.facebook} />
    case LinkedPlatformId.enum.google:
      return <PlatformIcon Icon={AdminGoogleIcon} platformId={LinkedPlatformId.enum.google} />
    case LinkedPlatformId.enum.twitch:
      return <PlatformIcon Icon={AdminTwitchIcon} platformId={LinkedPlatformId.enum.twitch} />
    case LinkedPlatformId.enum.ps4:
    case LinkedPlatformId.enum.ps4web:
    case LinkedPlatformId.enum.ps5:
      return <PlatformIcon Icon={AdminPSNIcon} platformId={LinkedPlatformId.enum.ps4} />
    case LinkedPlatformId.enum.live:
    case LinkedPlatformId.enum.xblweb:
      return <PlatformIcon Icon={AdminXboxIcon} platformId={LinkedPlatformId.enum.live} />
    case LinkedPlatformId.enum.stadia:
    case LinkedPlatformId.enum.stadiaweb:
      return <PlatformIcon Icon={AdminStadiaIcon} platformId={LinkedPlatformId.enum.stadia} />
    case LinkedPlatformId.enum.apple:
      return <PlatformIcon Icon={AdminAppleIcon} platformId={LinkedPlatformId.enum.apple} />
    case LinkedPlatformId.enum.discord:
      return <PlatformIcon Icon={AdminDiscordIcon} platformId={LinkedPlatformId.enum.discord} />
    default:
      return <PlatformIcon Icon={DefaultIcon} platformId={platformId} />
  }
}
