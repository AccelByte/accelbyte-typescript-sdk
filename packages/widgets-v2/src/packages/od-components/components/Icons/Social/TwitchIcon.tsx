/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { SocialIconType } from './SocialIconType'

export const TwitchIcon = ({ className, size }: SocialIconType) => (
  <i className={className}>
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.8571 11.1428L17.4285 14.5714H14L11 17.5714V14.5714H7.14282V1.71423H20.8571V11.1428Z" fill="white" />
      <path
        d="M6.28571 0L2 4.28571V19.7143H7.14286V24L11.4286 19.7143H14.8571L22.5714 12V0H6.28571ZM20.8571 11.1429L17.4286 14.5714H14L11 17.5714V14.5714H7.14286V1.71429H20.8571V11.1429Z"
        fill="#9146FF"
      />
      <path d="M18.2858 4.71423H16.5715V9.85709H18.2858V4.71423Z" fill="#9146FF" />
      <path d="M13.5715 4.71423H11.8572V9.85709H13.5715V4.71423Z" fill="#9146FF" />
    </svg>
  </i>
)
