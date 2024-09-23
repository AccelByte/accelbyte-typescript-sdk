/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelByte } from '@accelbyte/sdk'
import React, { useLayoutEffect, useState } from 'react'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { DevTools } from './DevTools'
import { GlobalContextProvider } from './GlobalContext'
import { BASE_SDK_CORE_CONFIG, createSdkConfig } from './helpers'
import { LoginWithDeviceID } from './LoginWithDeviceID'
import { MyUser } from './MyUser'
import { PlatformItems } from './PlatformItems'
import { UpdateMyProfile } from './UpdateMyProfile'

function App() {
  const [sdk, setSdk] = useState(AccelByte.SDK(createSdkConfig(BASE_SDK_CORE_CONFIG)))

  return (
    <GlobalContextProvider sdk={sdk} setSdk={setSdk}>
      <main className="p-4 flex justify-center bg-slate-50">
        <div className="flex flex-col gap-y-8 lg:max-w-[768px]">
          <Heading level={1} className="text-2xl">
            AccelByte TypeScript SDK Demo
          </Heading>

          <div className="flex flex-col gap-y-4">
            <p>
              Welcome to the AccelByte TypeScript SDK demo. To use this demo, you will need to disable CORS (Cross-Origin Resource Sharing)
              because our services are same-origin only (by default).
            </p>

            <p>
              Cookies will only work when the site is in the same origin as the AGS services. So, these examples will not use cookies, but
              rather <code>access_token</code> field that we can retrieve after logging in.
            </p>
          </div>

          <hr />

          <TOC />

          <hr />

          <Section>
            <Heading level={2}>SDK config</Heading>

            <SectionContent>
              <p>
                To configure the SDK, use the "Configure SDK" button on the bottom-right part of the screen. Upon submission, the updated
                SDK configuration will appear below.
              </p>

              <p>
                Adjust the <code>baseURL</code>, <code>clientID</code>, <code>namespace</code>, and <code>redirectURI</code> according to
                the IAM client that you have created. If you are using AGS Private Cloud, you can use IAM client on the Publisher/Game
                namespace level, whereas if you are using AGS Shared Cloud, you can only use IAM client on the Game namespace level.
              </p>

              <Snippet>{JSON.stringify(sdk.assembly().coreConfig, null, 2)}</Snippet>
            </SectionContent>
          </Section>

          <hr />

          <LoginWithDeviceID />

          <hr />

          <MyUser />

          <hr />

          <UpdateMyProfile />

          <hr />

          <PlatformItems />
        </div>
      </main>

      <DevTools setSdk={setSdk} tier="shared" />
    </GlobalContextProvider>
  )
}

export default App

// Helper components.
function TOC() {
  const [h2Tags, setH2Tags] = useState<Array<{ title: string; id: string }>>([])

  useLayoutEffect(() => {
    const rawH2Tags = document.getElementsByTagName('h2')
    const newH2Tags: Array<{ title: string; id: string }> = []

    for (let i = 0; i < rawH2Tags.length; i++) {
      const h2Tag = rawH2Tags.item(i)
      if (!h2Tag) continue

      const { textContent, id } = h2Tag
      newH2Tags.push({ id, title: textContent! })
    }

    setH2Tags(newH2Tags)
  }, [])

  return (
    <Section>
      <Heading level={2}>Table of contents</Heading>

      <ul className="list-disc pl-4">
        {h2Tags.map(h2Tag => (
          <li key={h2Tag.id}>
            <a className="text-blue-500 hover:text-blue-400" href={`#${h2Tag.id}`}>
              {h2Tag.title}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
