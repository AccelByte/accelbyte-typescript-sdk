/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

interface DangerIconProps {
  className?: string
  useFillColor?: boolean
  width?: string
  height?: string
}

export const DangerIcon = ({ className, useFillColor = true, width = '20', height = '20' }: DangerIconProps) => (
  <i className={className}>
    <svg className={'inline'} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6024 18.3327 10C18.3327 5.39765 14.6017 1.66669 9.99935 1.66669C5.39698 1.66669 1.66602 5.39765 1.66602 10C1.66602 14.6024 5.39698 18.3334 9.99935 18.3334ZM9.26564 11.2772H10.6855L10.8485 4.68752H9.10939L9.26564 11.2772ZM9.3132 13.7007C9.14562 13.879 9.06184 14.1055 9.06184 14.3801C9.06184 14.6451 9.14336 14.8668 9.3064 15.0451C9.46945 15.2234 9.70043 15.3125 9.99934 15.3125C10.2983 15.3125 10.5292 15.2234 10.6923 15.0451C10.8553 14.8668 10.9368 14.6451 10.9368 14.3801C10.9368 14.1055 10.8531 13.879 10.6855 13.7007C10.5179 13.5176 10.2892 13.426 9.99934 13.426C9.70948 13.426 9.48077 13.5176 9.3132 13.7007Z"
          fill={useFillColor ? '#BE221E' : undefined}
        />
      </g>
    </svg>
  </i>
)
