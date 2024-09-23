import { AccelByteSDK } from '@accelbyte/sdk'
import { UserResponseV3 } from '@accelbyte/sdk-iam'
import React, { ReactNode, createContext, useContext, useState } from 'react'

interface SdkRelatedFields {
  sdk: AccelByteSDK
  setSdk: (sdk: AccelByteSDK) => void
}

const GlobalContext = createContext<
  SdkRelatedFields & {
    user: UserResponseV3 | null
    setUser: React.Dispatch<React.SetStateAction<UserResponseV3 | null>>
  }
>({
  user: null,
  setUser: () => undefined,
  sdk: null!,
  setSdk: () => undefined
})

export const useGlobal = () => useContext(GlobalContext)

interface Props extends SdkRelatedFields {
  children: ReactNode
}

export function GlobalContextProvider({ sdk, setSdk, children }: Props) {
  const [user, setUser] = useState<UserResponseV3 | null>(null)

  return <GlobalContext.Provider value={{ user, setUser, sdk, setSdk }}>{children}</GlobalContext.Provider>
}
