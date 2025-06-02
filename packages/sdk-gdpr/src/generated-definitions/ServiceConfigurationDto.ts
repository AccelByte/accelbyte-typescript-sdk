/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ExtendConfigDto } from './ExtendConfigDto.js'
import { ServiceConfigDto } from './ServiceConfigDto.js'

export const ServiceConfigurationDto = z.object({
  extendConfig: ExtendConfigDto.nullish(),
  id: z.string(),
  serviceConfig: ServiceConfigDto.nullish(),
  type: z.enum(['EXTEND', 'SERVICE'])
})

export interface ServiceConfigurationDto extends z.TypeOf<typeof ServiceConfigurationDto> {}
