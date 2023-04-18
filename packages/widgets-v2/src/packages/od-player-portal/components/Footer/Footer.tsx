/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LanguageSelector } from '@od-components/components/LanguageSelector/LanguageSelector'
import { createSocialMedia } from '@od-components/components/SocialMedia/SocialMedia'
import { getCurrentLanguage } from '@od-components/i18n/index'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import React from 'react'
import './Footer.scss'
import { SocialMediaLink as SocialMediaLinkType } from '@od-shared/models/SocialMediaLink'
import { PlayerPortalFooterConfigLink } from '@accelbyte/sdk-odinconfig'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { Link } from 'react-router-dom'
import { Trans } from 'react-i18next'
import { useSdkOptions } from '~/hooks/useSdk'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'
import { AppName } from '@od-shared/constants/ShConstants'

interface Props {
  areLinksHidden: boolean
  socialMediaLinks?: SocialMediaLinkType[]
  copyright?: string
  footerDataLinks?: PlayerPortalFooterConfigLink[]
  companyLogoUrl?: string
  isPreviewMode?: boolean
  isPaymentPreview?: boolean
  onChangeLanguage?: (value: string) => void
}

const FooterLogo = ({ logo, scrollToTop }: { logo: string; scrollToTop: () => void }) => {
  const {
    state: { playerPortalConfigData }
  } = useAppConfigs()
  const { state: routesState } = useRoutes()
  const [sdkOptions] = useSdkOptions()

  const isHomepageDisabled = !!playerPortalConfigData?.homepage.data.isDisabled
  const siteBrandURL = playerPortalConfigData?.homepage.data.siteBrandURL
  const homepageRedirection = playerPortalConfigData?.homepage.data.redirectionURL
  let logoLink: string = routesState.home.link
  let isExternalLink = false

  if (isHomepageDisabled) {
    if (siteBrandURL) {
      const routerSiteBrandRedirection = UrlUtils.getRouterRedirection(siteBrandURL, sdkOptions.baseURL)
      isExternalLink = !routerSiteBrandRedirection
      logoLink = routerSiteBrandRedirection || siteBrandURL
    }
    if (!siteBrandURL && homepageRedirection) {
      const routerHomepageRedirection = UrlUtils.getRouterRedirection(homepageRedirection, sdkOptions.baseURL)
      isExternalLink = !routerHomepageRedirection
      logoLink = routerHomepageRedirection || homepageRedirection
    }
  }

  if (isExternalLink) {
    return (
      <a className="logo" href={logoLink}>
        <img src={logo} alt="logo" />
      </a>
    )
  }
  return (
    <Link to={logoLink} className="logo" onClick={scrollToTop}>
      <img src={logo} alt="logo" loading="lazy" />
    </Link>
  )
}

const SocialMediaLink = ({ socialLink, socialUrl }: { socialLink: SocialMediaLinkType | null; socialUrl: string }) => {
  const socialMedia = createSocialMedia(socialLink)

  return (
    <a href={socialUrl} target="_blank" rel="noreferrer" aria-label={socialMedia.label}>
      {socialMedia.icon}
    </a>
  )
}

export const Footer = (props: Props) => {
  const { socialMediaLinks, copyright, footerDataLinks, companyLogoUrl, isPaymentPreview, isPreviewMode, areLinksHidden } = props
  const {
    state: { playerPortalConfigData }
  } = useAppConfigs()
  const {
    state: { allSocialLinks, flags, discoveryConfigData }
  } = useDiscoveryConfigs()
  const { state: routesState } = useRoutes()
  const { companyLogo: companyLogoState } = useCompanyLogo(AppName.PP, 'footer')

  const getFooterLinks = () => {
    const links = playerPortalConfigData?.footer.data.value.links
    if (!links) return []

    return links.filter(({ name, link }) => {
      return name && link
    })
  }

  const fixUrl = (url: string) => {
    return UrlUtils.isValidUrl2(url, false) ? url : `https://${url}`
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const socialLinks = socialMediaLinks || allSocialLinks
  const companyLogo = companyLogoUrl || companyLogoState
  const currentLang = getCurrentLanguage()
  const newsLang = currentLang === 'en-US' ? '' : currentLang

  const copyrightText = copyright || discoveryConfigData?.copyright.data.value
  const isHomepageDisabled = !!playerPortalConfigData?.homepage.data.isDisabled
  const footerLinks = footerDataLinks || getFooterLinks()
  const isFooterLinksShown = footerLinks.length > 0
  const isDividerShown = copyrightText && isFooterLinksShown
  const isStoreVisible = !!flags?.isStoreVisible && routesState.store
  const isNewsVisible = !!flags?.isNewsV2Visible && routesState.news
  const isTwitchDropEnabled = !!flags?.isTwitchDropEnabled && routesState.twitchDrops

  return (
    <footer className="footer">
      {!areLinksHidden && !isPaymentPreview && (
        <>
          <section className="topSection">
            <div className="logoContainer">{companyLogo && <FooterLogo logo={companyLogo} scrollToTop={scrollToTop} />}</div>
            <div className="navLink">
              {!isHomepageDisabled && (
                <Link to={routesState.home.link} onClick={scrollToTop}>
                  <Trans key="Footer.link.home">Home</Trans>
                </Link>
              )}
              {(isStoreVisible || isPreviewMode) && (
                <Link to={routesState.store.index.link} onClick={scrollToTop}>
                  <Trans key="Footer.link.store">Store</Trans>
                </Link>
              )}
              {isTwitchDropEnabled && (
                <Link to={routesState.twitchDrops.index.link} onClick={scrollToTop}>
                  <Trans i18nKey="Navigation.links.events">Events</Trans>
                </Link>
              )}
              {isNewsVisible && (
                <a className="menuLink" href={`${routesState.news}/${newsLang}`}>
                  <Trans key="Footer.link.news">News</Trans>
                </a>
              )}
            </div>
            <div className="socialMediaLink">
              {socialLinks?.map((socialLink, index) => {
                const socialUrl = fixUrl(socialLink.url)
                return <SocialMediaLink key={`social-link-${index}`} socialLink={socialLink} socialUrl={socialUrl} />
              })}
            </div>
          </section>
        </>
      )}
      <section className="bottomSection">
        <LanguageSelector isDisabled={isPreviewMode} onChangeLanguage={props.onChangeLanguage} />
        <div className="linkAndCopyright">
          <p className="copyright">{copyrightText}</p>
          {isDividerShown && <span className="divider">|</span>}
          {isFooterLinksShown && (
            <div className="links">
              {footerLinks.map(({ link, id, name }) => {
                const footerLink = fixUrl(link)
                return (
                  <a key={id} href={footerLink} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </footer>
  )
}
