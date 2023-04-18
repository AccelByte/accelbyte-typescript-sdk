/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { t } from '../../i18n/i18n'
import { ErrorLayout } from './ErrorLayout'

interface Props {
  error?: Error
  message?: string
  buttonAction?: () => void
}

export const NetworkError = ({ message, buttonAction }: Props) => {
  const renderNoSignal = () => {
    // using svg for network error to fix broken image when network error page is showed with no internet connection
    return (
      <svg width="102" height="93" viewBox="0 0 102 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.0187 29.6164C33.9646 29.6429 33.9105 29.6695 33.8565 29.6962L25.0781 20.9178C24.2971 20.1368 23.0307 20.1368 22.2497 20.9178C21.4686 21.6989 21.4686 22.9652 22.2497 23.7462L30.2429 31.7394C26.4552 34.1623 23.1245 37.2358 20.409 40.8014C19.7398 41.6801 19.9096 42.935 20.7883 43.6042C21.6671 44.2735 22.922 44.1036 23.5912 43.2249C26.202 39.7968 29.4453 36.8784 33.1469 34.6434L39.76 41.2566C35.5467 43.0674 31.8694 45.8856 29.0325 49.4062C28.3394 50.2662 28.4748 51.5253 29.3349 52.2184C30.195 52.9114 31.454 52.776 32.1471 51.916C34.9137 48.4826 38.6074 45.8321 42.8474 44.344L50.7546 52.2512C45.5533 52.2545 40.9621 54.8637 38.2154 58.8347C37.587 59.7432 37.8141 60.989 38.7225 61.6173C39.631 62.2457 40.8768 62.0186 41.5051 61.1102C43.5386 58.1703 46.9277 56.2512 50.7646 56.2512C52.6927 56.2512 54.5077 56.7358 56.0944 57.591L70.843 72.3396C71.6241 73.1207 72.8904 73.1207 73.6715 72.3396C74.4525 71.5586 74.4525 70.2922 73.6715 69.5112L63.5962 59.4359C63.5577 59.2978 63.5039 59.1622 63.4341 59.0318L59.1927 54.7903C58.9791 54.6484 58.7618 54.5118 58.5408 54.3805L47.3972 43.2369C47.4681 43.2269 47.5391 43.2172 47.6102 43.2078L44.1847 39.7823C44.1198 39.798 44.0551 39.814 43.9904 39.8301L36.862 32.7017C36.9178 32.6768 36.9737 32.652 37.0297 32.6273L34.0187 29.6164ZM49.1091 39.0499L53.1814 43.1222C59.8306 43.7896 65.6758 47.1819 69.5861 52.1721C70.2674 53.0415 71.5245 53.194 72.3939 52.5128C73.2634 51.8315 73.4159 50.5744 72.7346 49.7049C67.6314 43.1924 59.687 39.0015 50.7648 39.0015C50.209 39.0015 49.6569 39.0178 49.1091 39.0499ZM41.176 31.1168L38.0002 27.941C41.991 26.5237 46.2877 25.7519 50.7646 25.7519C63.3076 25.7519 74.4361 31.8096 81.383 41.1504C82.0422 42.0367 81.858 43.2896 80.9717 43.9488C80.0854 44.608 78.8325 44.4238 78.1733 43.5375C71.9487 35.1678 61.9894 29.7519 50.7646 29.7519C47.4356 29.7519 44.218 30.2283 41.176 31.1168ZM50.7644 72.9198C52.7601 72.9198 54.3779 71.302 54.3779 69.3063C54.3779 67.3107 52.7601 65.6929 50.7644 65.6929C48.7688 65.6929 47.151 67.3107 47.151 69.3063C47.151 71.302 48.7688 72.9198 50.7644 72.9198Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <path d="M23.6639 22.332L72.2573 70.9254" stroke="#FFD80B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0.332031"
            width="101.778"
            height="92.5934"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <linearGradient id="paint0_linear" x1="50.8891" y1="40.6383" x2="35.6011" y2="15.5271" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E5062" />
            <stop offset="1" stopColor="#222E39" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  return (
    <ErrorLayout
      icon={renderNoSignal()}
      title={t('ErrorPage.networkError.message')}
      description={t('ErrorPage.networkError.description')}
      message={message}
      buttonAction={buttonAction}
      buttonText={t('ErrorPage.networkError.button')}
    />
  )
}
