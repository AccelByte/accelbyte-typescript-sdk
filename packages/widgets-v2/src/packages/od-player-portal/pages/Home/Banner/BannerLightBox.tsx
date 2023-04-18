/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { UniversalMedia, UniversalMediaType } from '@od-shared/models/Cms'
import defaultItemImage from '@od-assets/images/default-item-banner.svg'
import React from 'react'
import ReactPlayer from 'react-player'
import './Banner.scss'

interface Props {
  mainBackground: UniversalMedia | string | null
}

export const BannerLightBox: React.FC<Props> = (props: Props) => {
  const { mainBackground } = props
  const mainBackgroundParseResult = UniversalMedia.safeParse(mainBackground)
  if (mainBackground && mainBackgroundParseResult.success) {
    switch (mainBackgroundParseResult.data.type) {
      case UniversalMediaType.YOUTUBE_VIDEO:
      case UniversalMediaType.URL_VIDEO:
        return (
          <div className="banner-video-wrapper">
            <ReactPlayer
              key={mainBackgroundParseResult.data.content}
              className="react-player"
              controls={false}
              url={mainBackgroundParseResult.data.content}
              playing={true}
              loop={true}
              volume={0}
            />
          </div>
        )
      default:
        return (
          <img
            key={mainBackgroundParseResult.data.content}
            alt={mainBackgroundParseResult.data.content}
            src={mainBackgroundParseResult.data.content}
            className="bannerImage"
          />
        )
    }
  }

  let image: string | undefined
  switch (typeof mainBackground) {
    case 'string': {
      image = mainBackground
      break
    }
    case 'object': {
      image = mainBackground?.content
      break
    }
  }

  return <img className="bannerImage" src={image || defaultItemImage} alt={''} />
}
