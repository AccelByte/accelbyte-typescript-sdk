/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { SocialIconType } from './SocialIconType'

export const YoutubeIcon = ({ className, size }: SocialIconType) => (
  <i className={className}>
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6597_4946)">
        <path
          d="M23.5221 6.18541C23.3864 5.67482 23.119 5.20883 22.7466 4.83407C22.3743 4.4593 21.91 4.18891 21.4003 4.04996C19.5239 3.54541 12.0239 3.54541 12.0239 3.54541C12.0239 3.54541 4.52393 3.54541 2.64756 4.04996C2.13786 4.18891 1.67358 4.4593 1.30121 4.83407C0.928842 5.20883 0.661431 5.67482 0.525744 6.18541C0.0239258 8.06996 0.0239258 12 0.0239258 12C0.0239258 12 0.0239258 15.93 0.525744 17.8145C0.661431 18.3251 0.928842 18.7911 1.30121 19.1658C1.67358 19.5406 2.13786 19.811 2.64756 19.95C4.52393 20.4545 12.0239 20.4545 12.0239 20.4545C12.0239 20.4545 19.5239 20.4545 21.4003 19.95C21.91 19.811 22.3743 19.5406 22.7466 19.1658C23.119 18.7911 23.3864 18.3251 23.5221 17.8145C24.0239 15.93 24.0239 12 24.0239 12C24.0239 12 24.0239 8.06996 23.5221 6.18541Z"
          fill="#FF0302"
        />
        <path d="M9.56934 15.5687V8.4314L15.8421 12L9.56934 15.5687Z" fill="#FEFEFE" />
      </g>
      <defs>
        <clipPath id="clip0_6597_4946">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </i>
)
