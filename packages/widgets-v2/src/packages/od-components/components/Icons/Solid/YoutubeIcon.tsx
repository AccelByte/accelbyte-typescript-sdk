/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { SolidIconType } from './SolidIconType'

export const YoutubeIcon = ({ className, size, fill }: SolidIconType) => (
  <i className={className}>
    <svg width={size} height={size} className={className} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.7609 4.20005C23.7609 4.20005 23.5266 2.54536 22.8047 1.8188C21.8906 0.862549 20.8688 0.857861 20.4 0.801611C17.0438 0.557861 12.0047 0.557861 12.0047 0.557861H11.9953C11.9953 0.557861 6.95625 0.557861 3.6 0.801611C3.13125 0.857861 2.10938 0.862549 1.19531 1.8188C0.473438 2.54536 0.24375 4.20005 0.24375 4.20005C0.24375 4.20005 0 6.14536 0 8.08599V9.90474C0 11.8454 0.239062 13.7907 0.239062 13.7907C0.239062 13.7907 0.473437 15.4454 1.19062 16.1719C2.10469 17.1282 3.30469 17.0954 3.83906 17.1985C5.76094 17.3813 12 17.4375 12 17.4375C12 17.4375 17.0438 17.4282 20.4 17.1891C20.8688 17.1329 21.8906 17.1282 22.8047 16.1719C23.5266 15.4454 23.7609 13.7907 23.7609 13.7907C23.7609 13.7907 24 11.85 24 9.90474V8.08599C24 6.14536 23.7609 4.20005 23.7609 4.20005ZM9.52031 12.1125V5.36724L16.0031 8.75161L9.52031 12.1125Z"
        fill={`${fill || 'white'}`}
      />
    </svg>
  </i>
)
