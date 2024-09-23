/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import './App.css'

import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { exchangeAuthorizationCode, getSdkTestValues, login, loginWithPassword } from './Sdk'

const titles: Record<string, string> = {
  currentUser: 'Current User',
  listOfCurrencies: 'Currencies',
  listOfItems: 'Items',
  currentUserCustomCall: 'Custom Call'
}

function App() {
  const [responses, setResponses] = useState<any>(null)
  const [tabs, setTabs] = useState<string>('currentUser')

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

  const onLoginWithPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    if (!data.email && !data.password) {
      return alert('Please input your email and password!')
    }

    await loginWithPassword({ username: data.email as string, password: data.password as string })
  }

  return (
    <>
      <body className="font-body">
        <section className="bg-gray-50 dark:bg-gray-900 md:h-screen grid grid-cols-2">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-left font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  AccelByte SDK
                </h1>
                <form className="space-y-2 md:space-y-4" action="" onSubmit={onLoginWithPassword}>
                  <div className="flex gap-4">
                    <div>
                      <label htmlFor="email" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Log In
                  </button>
                  <div className="justify-center flex relative text-sm text-gray-500">or</div>
                  <button
                    onClick={login}
                    type="button"
                    className="w-full bg-white hover:bg-slate-200 border focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Log In with Login Website
                  </button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{' '}
                    <a
                      target="_blank"
                      href="https://prod.gamingservices.accelbyte.io/auth/register"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-scroll max-h-full py-4 px-8 justify-center bg-white">
            {!responses ? (
              <div>No Result</div>
            ) : (
              <>
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                  <ul
                    className="flex flex-wrap -mb-px text-sm font-medium text-center"
                    id="default-tab"
                    data-tabs-toggle="#default-tab-content"
                    role="tablist">
                    {Object.keys(responses || {}).map(key => (
                      <li className="me-2" role="presentation">
                        <button
                          onClick={() => setTabs(key)}
                          className={cn('inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-100', {
                            'text-blue-600 bg-gray-100': key === tabs
                          })}
                          id={key}
                          type="button"
                          role="tab"
                          aria-controls={key}
                          aria-selected={key === tabs}>
                          {titles[key]}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {Object.keys(responses || {}).map(key => (
                    <div
                      className={cn('p-4 rounded-lg bg-gray-50 dark:bg-gray-800', { hidden: key !== tabs })}
                      id={key}
                      role="tabpanel"
                      aria-labelledby="profile-tab">
                      <div className="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-[80vh]">
                        <div className="overflow-scroll max-h-full">
                          <pre id={key} className="text-sm text-gray-800 dark:text-gray-400 whitespace-pre text-left">
                            {JSON.stringify(responses[key], null, 2)}
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </body>
    </>
  )
}

export default App
