/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const InfoIcon = ({ className, fillColor = '#0479CD', stroke }: { className?: string; fillColor?: string; stroke?: string }) => (
  <i className={className}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#0063AB" />
      </mask>
      <g>
        <path
          stroke={stroke || undefined}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0013 18.3327C14.6037 18.3327 18.3346 14.6017 18.3346 9.99935C18.3346 5.39698 14.6037 1.66602 10.0013 1.66602C5.39893 1.66602 1.66797 5.39698 1.66797 9.99935C1.66797 14.6017 5.39893 18.3327 10.0013 18.3327ZM9.25888 14.9993H10.7316V8.33268H9.25888V14.9993ZM9.38009 5.24717C9.23868 5.41238 9.16797 5.62002 9.16797 5.87008C9.16797 6.11567 9.23868 6.32107 9.38009 6.48629C9.52554 6.64704 9.73161 6.72741 9.99827 6.72741C10.2649 6.72741 10.471 6.64704 10.6165 6.48629C10.7619 6.32107 10.8346 6.11567 10.8346 5.87008C10.8346 5.62002 10.7619 5.41238 10.6165 5.24717C10.471 5.08195 10.2649 4.99935 9.99827 4.99935C9.73161 4.99935 9.52554 5.08195 9.38009 5.24717Z"
          fill={fillColor || undefined}
        />
      </g>
    </svg>
  </i>
)
