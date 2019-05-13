import React, {ReactNode} from 'react'
import {Global, css} from '@emotion/core'

export interface Props {
  children: ReactNode
  width?: string
  flex?: boolean
}

export default ({children, width, flex}: Props) => (
  <div
    css={{
      display: flex ? 'flex' : 'block',
      maxWidth: width || '62rem',
      minHeight: '100vh',
      boxSizing: 'border-box',
      margin: '0 auto',
      padding: '10vh 0',
    }}>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
        }

        a:link,
        a:visited {
          color: #eee;
        }

        a:active {
          color: white;
        }
      `}
    />
    {children}
  </div>
)
