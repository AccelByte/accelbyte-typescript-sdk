/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AppMessageDeclaration } from './AppMessageDeclaration.js'

export const AppMessageDeclarationArray = z.array(AppMessageDeclaration)

export interface AppMessageDeclarationArray extends z.TypeOf<typeof AppMessageDeclarationArray> {}
