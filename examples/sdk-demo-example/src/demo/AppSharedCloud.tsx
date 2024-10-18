/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useLayoutEffect, useState } from 'react'
import { Heading } from './components/Heading'
import { Section } from './components/Section'
import { DevTools } from './DevTools'
import { GlobalContextProvider } from './GlobalContext'
import { Login } from './Login'
import { MyUser } from './MyUser'
import { PlatformItems } from './PlatformItems'
import { SdkConfig } from './SdkConfig'
import { UpdateMyProfile } from './UpdateMyProfile'

function App() {
  return (
    <GlobalContextProvider>
      <main className="p-4 flex justify-center bg-slate-50">
        <div className="flex flex-col gap-y-8 lg:max-w-[768px]">
          <Heading level={1} className="text-2xl">
            AccelByte TypeScript SDK Demo
          </Heading>

          <div className="flex flex-col gap-y-4">
            <p>
              Welcome to the AccelByte TypeScript SDK demo! To use this demo, you'll need to disable CORS (Cross-Origin Resource Sharing)
              since our services are restricted to same-origin (by default).
            </p>

            <p>
              For this demo, cookies won't be used. Instead, we'll rely on the <code>access_token</code> retrieved after login, as cookies
              only work when the site shares the same origin as AGS services.
            </p>
          </div>

          <hr />

          <TOC />

          <hr />

          <SdkConfig />

          <hr />

          <Login />

          <hr />

          <MyUser />

          <hr />

          <UpdateMyProfile />

          <hr />

          <PlatformItems />
        </div>
      </main>

      <DevTools tier="shared" />
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

      <ul>
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
