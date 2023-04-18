/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AppName, SocialLinks } from '@od-shared/constants/ShConstants'
// import { FeatureFlags } from '@od-shared/FeatureFlags'
// import { Ctx, IpcChannels } from '@od-shared/index'
import { SocialMediaLink } from '@od-shared/models/SocialMediaLink'
// import { UrlUtils } from '@od-shared/utils/UrlUtils'
// import { createPopper } from '@popperjs/core'
// import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { Globe } from 'react-feather'
// import { Link } from 'react-router-dom'
import { DiscordIcon } from '../Icons/Solid/DiscordIcon'
import { FacebookIcon } from '../Icons/Solid/FacebookIcon'
import { InstagramIcon } from '../Icons/Solid/InstagramIcon'
import { LinkedInIcon } from '../Icons/Solid/LinkedInIcon'
import { RedditIcon } from '../Icons/Solid/RedditIcon'
// import { ShoppingCartIcon } from '../Icons/Solid/ShoppingCartIcon'
import { TikTokIcon } from '../Icons/Solid/TikTokIcon'
import { TwitchIcon } from '../Icons/Solid/TwitchIcon'
import { TwitterIcon } from '../Icons/Solid/TwitterIcon'
import { YoutubeIcon } from '../Icons/Solid/YoutubeIcon'
import './SocialMedia.scss'

export interface SocialMediaItem {
  icon: ReactNode
  link: string
  label?: string
}

export interface SocialMediaProps {
  wrapperClassNames?: string
  itemClassNames?: string
  horizontal?: boolean
  showStoreIcon?: boolean
  gameId?: string
  links?: SocialMediaLink[]
  appName?: AppName
}

// Apparently icon size 1rem (16px) and 0.75rem (12px) icon padding is the sweet spot to prevent misplaced Tooltip
const ICON_SIZE = '1rem'
const ICON_COLOR = 'rgba(var(--od-rgba-secondary))'
const socialIcon = {
  [SocialLinks.DISCORD]: <DiscordIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  [SocialLinks.FACEBOOK]: <FacebookIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  [SocialLinks.TWITCH]: <TwitchIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  [SocialLinks.YOUTUBE]: <YoutubeIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  [SocialLinks.INSTAGRAM]: <InstagramIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  [SocialLinks.TWITTER]: <TwitterIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  [SocialLinks.REDDIT]: <RedditIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  [SocialLinks.LINKEDIN]: <LinkedInIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  [SocialLinks.TIKTOK]: <TikTokIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  default: <Globe size={ICON_SIZE} color={ICON_COLOR} />
}

export const createSocialMedia = socialLink => {
  return {
    label: socialLink.platform,
    link: socialLink.url,
    icon: socialIcon[socialLink.platform] || socialIcon.default
  }
}

// ts-prune-ignore-next
export const SocialMedia = (_props: SocialMediaProps) => {
  return <div />
  // const { wrapperClassNames, itemClassNames, horizontal, showStoreIcon, gameId, links } = props

  // const socialLinks = links ?? Ctx.getAppState().getSocialLinks(props.appName) ?? []

  // return (
  //   <div
  //     className={classNames('socialMediaContainer', wrapperClassNames, {
  //       'flex-col': !horizontal,
  //       'flex-row': horizontal
  //     })}>
  //     {showStoreIcon && gameId && Ctx.hasFeature(FeatureFlags.isStoreVisible) && (
  //       <SocialMediaIcon
  //         itemClassNames={itemClassNames}
  //         item={{
  //           label: 'Store',
  //           icon: <ShoppingCartIcon size={ICON_SIZE} fill={ICON_COLOR} />,
  //           link: `/store/apps/${gameId}`
  //         }}
  //         horizontal={horizontal}
  //       />
  //     )}
  //     {socialLinks.map((item, index) => (
  //       <SocialMediaIcon
  //         key={`social-media-${index}`}
  //         itemClassNames={itemClassNames}
  //         item={createSocialMedia(item)}
  //         horizontal={horizontal}
  //       />
  //     ))}
  //   </div>
  // )
}

// interface ISocialMediaIconProps {
//   item: SocialMediaItem
//   itemClassNames?: string
//   horizontal?: boolean
// }

// interface ISocialMediaIconState {
//   showLabel: boolean
// }

// class SocialMediaIcon extends React.Component<ISocialMediaIconProps, ISocialMediaIconState> {
//   refLink = createRef<HTMLAnchorElement>()
//   refLabel = createRef<HTMLSpanElement>()

//   constructor(props: ISocialMediaIconProps) {
//     super(props)
//     this.state = {
//       showLabel: false
//     }
//   }

//   createPopperLabel = () => {
//     if (!this.refLink || !this.refLabel) return
//     const placement = this.props?.horizontal ? 'top' : 'left'
//     // @ts-ignore
//     createPopper(this.refLink.current, this.refLabel.current, { placement })
//   }

//   showLabel = () => {
//     this.setState({ showLabel: true })
//     this.createPopperLabel()
//   }

//   hideLabel = () => {
//     this.setState({ showLabel: false })
//   }

//   LinkElement = () => {
//     const { item } = this.props
//     const socialLink = UrlUtils.isValidUrl2(item.link, false) ? item.link : `https://${item.link}`

//     if (item.label === 'Store') {
//       return (
//         <Link ref={this.refLink} to={item.link} onMouseEnter={this.showLabel} onMouseLeave={this.hideLabel}>
//           <span className="icon">{item.icon}</span>
//         </Link>
//       )
//     } else {
//       return (
//         <a
//           onClick={() => Device.send(IpcChannels.OPEN_EXTERNAL, socialLink)}
//           ref={this.refLink}
//           onMouseEnter={this.showLabel}
//           onMouseLeave={this.hideLabel}
//           style={{ cursor: 'pointer' }}>
//           <span className="icon">{item.icon}</span>
//         </a>
//       )
//     }
//   }

//   render() {
//     const { item, itemClassNames } = this.props
//     return (
//       <div className={classNames('btnSocialMedia', itemClassNames)}>
//         <this.LinkElement />
//         {item.label && (
//           <span ref={this.refLabel} className={classNames('label capitalize', { hidden: !this.state.showLabel })}>
//             {item.label}
//           </span>
//         )}
//       </div>
//     )
//   }
// }
