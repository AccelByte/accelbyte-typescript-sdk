/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { DesktopChecker } from '@accelbyte/sdk'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import dompurify from 'dompurify'

export const makeSafeReactInnerHTML = (htmlString: string, sanitizeConfig?: dompurify.Config): { __html: string } => {
  if (DesktopChecker.isDesktopApp()) return { __html: '' }
  const sanitizeResult = sanitizeConfig ? dompurify.sanitize(htmlString, sanitizeConfig) : dompurify.sanitize(htmlString)
  return { __html: sanitizeResult as string }
}

// ts-prune-ignore-next
export const makeSafeHtmlAsText = (htmlString: string): string => {
  if (DesktopChecker.isDesktopApp()) return ''
  const intermediateElement = document.createElement('a')
  intermediateElement.innerHTML = dompurify.sanitize(htmlString)
  return intermediateElement.innerText
}

export const getYoutubeHqThumbnailUrl = (youtubeId: string) => `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`

export const getYoutubeEmbedUrl = (
  youtubeId: string,
  options?: {
    autoplay?: boolean
    enablejsapi?: number
    version?: number
    playerapiid?: string
    modestbranding?: boolean
    mute?: boolean
  }
) => {
  if (!options) {
    return `https://www.youtube.com/embed/${youtubeId}`
  }
  const searchParams = UrlUtils.buildURLSearchParamsFromObject({
    ...options,
    autoplay: options.autoplay ? '1' : '',
    modestbranding: options.modestbranding ? '1' : '',
    mute: options.mute ? '1' : ''
  })
  return `https://www.youtube.com/embed/${youtubeId}?${searchParams.toString()}`
}
