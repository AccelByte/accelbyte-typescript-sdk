/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccountRoutesWidget, EcommerceRoutesWidget, ErrorRoutesWidget, LoginWidget } from '@accelbyte/widgets'
import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import './ConsumerApp.scss'

const Home = () => {
  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Home Page</div>
}

const News = () => {
  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>News Page</div>
}

export class ConsumerApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
}
