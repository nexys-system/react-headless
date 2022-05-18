import React from 'react'

import BadgeWithAction from '../../components/badge/with-action'

const B = BadgeWithAction('sd',(d:number) => Promise.resolve('sdf'))

export default () => {
  return <><h1>fd</h1><B  id={2}/></>
}