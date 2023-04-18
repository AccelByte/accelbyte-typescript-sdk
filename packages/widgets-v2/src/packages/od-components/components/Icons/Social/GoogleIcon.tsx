/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { SocialIconType } from './SocialIconType'

export const GoogleIcon = ({ className, size }: SocialIconType) => (
  <i className={className}>
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6597_4941)">
        <path
          d="M23.766 12.2764C23.766 11.4606 23.6999 10.6405 23.5588 9.83801H12.24V14.459H18.7217C18.4528 15.9493 17.5885 17.2677 16.323 18.1055V21.1039H20.19C22.4608 19.0138 23.766 15.9273 23.766 12.2764Z"
          fill="#4285F4"
        />
        <path
          d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
          fill="#34A853"
        />
        <path
          d="M5.50253 14.3003C4.99987 12.81 4.99987 11.1962 5.50253 9.70581V6.61487H1.51649C-0.18551 10.0056 -0.18551 14.0005 1.51649 17.3913L5.50253 14.3003Z"
          fill="#FBBC04"
        />
        <path
          d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_6597_4941">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </i>
)
