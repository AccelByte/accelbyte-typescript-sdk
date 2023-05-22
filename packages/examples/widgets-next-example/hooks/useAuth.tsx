/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
