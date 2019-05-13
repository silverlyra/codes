import React from 'react'
import {Helmet} from 'react-helmet'

const google = 'https://fonts.googleapis.com/css'

export const available = {
  plex: 'IBM+Plex+Serif:300,300i|IBM+Plex+Sans:400|IBM+Plex+Mono:300',
  lora: 'Lora:400',
  rambla: 'Rambla:700i',
}

export type Family = keyof typeof available

export interface Props {
  families: Family[]
}

export default ({families}: Props = {families: ['plex']}) => (
  <Helmet>
    {families.map(family => (
      <link rel="stylesheet" href={`${google}?family=${available[family]}`} />
    ))}
  </Helmet>
)
