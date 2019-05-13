import {Global, css} from '@emotion/core'
import React, {ReactNode} from 'react'
import {Helmet} from 'react-helmet'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

import {Frame, Fonts} from '../../components/layout'
import {fonts} from '../../styles'

export default function Geordi() {
  return (
    <Frame>
      <Global
        styles={css`
          body {
            background-color: #242b33;
          }
        `}
      />
      <Helmet>
        <title>Geordi – Supervisor trees for Go</title>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:300,300i|IBM+Plex+Sans:300|IBM+Plex+Mono:300"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css?family=Rambla:700i" rel="stylesheet" />
        <meta
          name="go-import"
          content="gopkg.in/yaml.v2 git https://github.com/silverlyra/geordi.get"
        />
        <meta
          name="go-source"
          content="gopkg.in/yaml.v2 _ https://github.com/silverlyra/geordi/tree/master{/dir} https://github.com/silverlyra/geordi/blob/master{/dir}/{file}#L{line}"
        />
      </Helmet>
      <Fonts families={['plex', 'rambla']} />
      <Header />
      <Main>
        <p>Geordi is a work-in-progress library.</p>
      </Main>
    </Frame>
  )
}

const Header = () => (
  <header css={{display: 'flex', alignItems: 'center'}}>
    <h1
      css={{
        fontFamily: fonts.geordi,
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: '4rem',
        color: '#f79256',
        margin: '0 3rem 0 0',
      }}>
      Geordi
    </h1>
    <aside
      css={{
        flex: 1,
        fontFamily: fonts.sans,
        fontSize: '2rem',
        fontWeight: 300,
        color: '#ddd',
      }}>
      Supervisor trees for Go projects
    </aside>
    <div css={{marginLeft: '1em'}}>
      <a href="https://github.com/silverlyra/geordi">
        <FontAwesomeIcon icon={faGithub} color="#96afcc" size="2x" />
      </a>
    </div>
  </header>
)

const Main = ({children}: {children: ReactNode}) => (
  <main
    css={{
      fontFamily: fonts.serif,
      fontSize: '1.4rem',
      fontWeight: 300,
      color: '#ddd',
    }}>
    {children}
  </main>
)
