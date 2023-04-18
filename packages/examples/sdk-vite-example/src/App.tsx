/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useEffect, useState } from 'react'
import './App.css'
import { exchangeAuthorizationCode, getSdkTestValues, login } from './Sdk'

function App() {
  const [responses, setResponses] = useState<any>(null)

  useEffect(() => {
    async function initialize() {
      // Exchange authorization code first, so that by the time we fetch the stuff, we already have the cookie.
      await exchangeAuthorizationCode()

      // After that, fetch the stuff.
      setResponses(null)
      setResponses(await getSdkTestValues())
    }

    initialize()
  }, [])

  return (
    <>
      <div className="App">
        <h1>Vite + React</h1>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>

      {!responses?.currentUser?.response?.data && (
        <div>
          <button onClick={login}>Log in</button>
        </div>
      )}

      {responses === null ? (
        'No responses yet'
      ) : (
        <div className="responses">
          {Object.keys(responses).map(key => (
            <Collapsible key={key} json={responses[key]} title={key} />
          ))}
        </div>
      )}
    </>
  )
}

export default App

// composing components.
function Collapsible(props: { title: string; json: any }) {
  return (
    <details id={'toogle' + props.title}>
      <summary>{props.title}</summary>

      <pre id={props.title}>{JSON.stringify(props.json, null, 2)}</pre>
    </details>
  )
}
