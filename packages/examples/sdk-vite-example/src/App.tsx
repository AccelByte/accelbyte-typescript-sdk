/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useEffect, useState } from 'react'
import './App.css'
import { exchangeAuthorizationCode, getSdkTestValues, login, loginWithPassword } from './Sdk'

const loginInfo = {
  username: '<replace this with your username>',
  password: '<replace this with your password>'
}

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

  const isLoginWithUsernameDisabled =
    loginInfo.username === '<replace this with your username>' && loginInfo.password === '<replace this with your password>'

  return (
    <>
      <div className="App">
        <h2>AccelByte SDK Example Using Vite + React</h2>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>

      {isLoginWithUsernameDisabled && (
        <div>
          <p>
            Please fill in the <code>loginInfo</code> located in <code>src/App.tsx</code>
          </p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', justifyContent: 'center' }}>
        <button onClick={login}>Log in with Login Website</button>
        <button
          disabled={isLoginWithUsernameDisabled}
          onClick={() => loginWithPassword({ username: loginInfo.username, password: loginInfo.password })}>
          Log in with provided user
        </button>
      </div>

      <div className="responses" style={{ marginTop: '2rem', marginLeft: '3rem' }}>
        <h4>Response Result:</h4>
        {responses === null ? (
          <p style={{ marginTop: '1rem' }}>No responses yet</p>
        ) : (
          Object.keys(responses).map(key => <Collapsible key={key} json={responses[key]} title={key} />)
        )}
      </div>
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
