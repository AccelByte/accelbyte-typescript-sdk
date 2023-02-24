/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import {
  AccountInterceptorsWidget,
  AccountRoutesWidget,
  EcommerceInterceptorsWidget,
  EcommerceRoutesWidget,
  ErrorRoutesWidget,
  LoginWidget
} from '@accelbyte/widgets'
import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import '@accelbyte/widgets/dist/style.css'
import './ConsumerApp.scss'

const Home = () => {
  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Home Page</div>
}

const News = () => {
  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>News Page</div>
}

export function ConsumerApp() {
  return (
    <div className="consumerPage">
      <header id="header">
        <nav className="navigation">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/news">NEWS</NavLink>
          <NavLink to="/store">STORE</NavLink>
        </nav>

        <LoginWidget />
      </header>

      <main id="content">
        <Switch>
          {AccountInterceptorsWidget()}
          {EcommerceInterceptorsWidget()}

          <Route exact key="Home" path="/" render={() => <Home />} />
          <Route exact key="News" path="/news" render={() => <News />} />

          {AccountRoutesWidget()}
          {EcommerceRoutesWidget()}
          {ErrorRoutesWidget()}
        </Switch>
      </main>

      <footer id="footer">Footer</footer>
    </div>
  )
}
