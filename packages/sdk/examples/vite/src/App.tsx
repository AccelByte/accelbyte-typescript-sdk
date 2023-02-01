/*
 * Copyright (c) 2018-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useEffect, useState } from 'react'
import './App.css'
import { getSdkTestValues } from './Sdk'

function App() {
  const [responses, setResponses] = useState<any>(null)
  useEffect(() => {
    let ignore = false

    async function initialize() {
      setResponses(null)
      if (!ignore) {
        setResponses(await getSdkTestValues())
      }
    }

    initialize()

    return () => {
      ignore = true
    }
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
    <details>
      <summary>{props.title}</summary>

      <pre>{JSON.stringify(props.json, null, 2)}</pre>
    </details>
  )
}
