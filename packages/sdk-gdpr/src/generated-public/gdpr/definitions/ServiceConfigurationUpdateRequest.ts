/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ServiceConfigurationDto } from './ServiceConfigurationDto.js'

export const ServiceConfigurationUpdateRequest = z.object({ services: z.array(ServiceConfigurationDto) })

export interface ServiceConfigurationUpdateRequest extends z.TypeOf<typeof ServiceConfigurationUpdateRequest> {}
