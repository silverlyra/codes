import {Global, css} from '@emotion/core'
import React, {ReactNode} from 'react'
import {Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {faGithub, faInstagram, faKeybase, faTwitter} from '@fortawesome/free-brands-svg-icons'

import {Frame, Fonts} from '../components/layout'
import {fonts} from '../styles'

export default function Home() {
  return (
    <Frame flex>
      <Global
        styles={css`
          body {
            background-color: #643768;
          }
        `}
      />
      <Helmet>
        <title>lyra.codes</title>
      </Helmet>
      <Fonts families={['plex', 'lora']} />
      <Sidebar />
      <Main>
        <p css={{fontSize: '1.2em'}}>Hello, world!</p>
        <p>
          I’m Lyra, an engineer on <a href="https://medium.engineering">Medium</a>’s Core Platform
          team. Here you’ll find my personal projects.
        </p>
        <Projects />
      </Main>
    </Frame>
  )
}

const Projects = () => (
  <section css={{marginTop: '1.5em'}}>
    <ul css={{display: 'block', listStyle: 'none', margin: 0, padding: 0}}>
      <Project name="Geordi">Geordi is an Erlang-inspired supervisor tree library for Go.</Project>
    </ul>
  </section>
)

const Project = ({name, url, children}: {name: string; url?: string; children: ReactNode}) => {
  url = url || `/${name.toLowerCase()}`

  return (
    <li
      css={{
        display: 'block',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '1em 0',
      }}>
      <h3
        css={{
          fontFamily: fonts.sans,
          fontWeight: 400,
          fontSize: '1.3em',
          margin: '0 0 0.3em 0',

          '& a:link': {
            textDecoration: 'none',
          },
        }}>
        <Link to={url}>{name}</Link>
      </h3>
      <p css={{margin: 0}}>{children}</p>
    </li>
  )
}

const Main = ({children}: {children: ReactNode}) => (
  <main
    css={{
      flex: '1',
      fontFamily: fonts.serif,
      fontWeight: 300,
      margin: '10vh 0',
      paddingTop: '1em',
      boxSizing: 'border-box',
      color: '#ddd',
      fontSize: '1.4rem',
    }}>
    {children}
  </main>
)

const Sidebar = () => (
  <header
    css={{
      margin: '0 auto',
      padding: '10vh 0',
      maxWidth: '16rem',
    }}>
    <Name />
    <Social />
  </header>
)

const Name = () => (
  <h1
    css={{
      margin: 0,
      padding: '5vh 0',
      fontSize: '3.2em',
      fontWeight: 400,
      lineHeight: 1,
      color: '#f5e2ff',
      textTransform: 'lowercase',

      '& span': {
        display: 'inline-block',
      },
    }}>
    <span
      css={{
        fontFamily: fonts.lyra,
        fontSize: '1.2em',
        letterSpacing: '2px',
      }}>
      Lyra
    </span>
    <span
      css={{
        marginLeft: '-0.1em',
        fontFamily: fonts.mono,
        fontWeight: 300,
        fontSize: '1.1em',
        letterSpacing: '-2px',
      }}>
      Codes
    </span>
  </h1>
)

const Social = () => (
  <ul
    css={{
      display: 'block',
      listStyle: 'none',
      margin: 0,
      padding: 0,

      '& > li': {
        display: 'inline-block',
        marginRight: '0.5em',
      },

      '& a:link': {
        display: 'inline-block',
      },
    }}>
    <Icon href="https://github.com/silverlyra" icon={faGithub} />
    <Icon href="https://www.instagram.com/lyrasilverstar/" icon={faInstagram} />
    <Icon href="https://keybase.io/silverlyra" icon={faKeybase} />
    <Icon href="https://twitter.com/lyrasilverstar" icon={faTwitter} />
  </ul>
)

const Icon = ({href, icon}: {href: string; icon: IconProp}) => (
  <li>
    <a href={href}>
      <FontAwesomeIcon icon={icon} color="#dfd3e5" size="2x" />
    </a>
  </li>
)
