import React from 'react'
import {Link} from 'react-router-dom'

export default function Channel({params}) {
  return (
    <div>
      <Link to={`/rooms/${params.id}/public`}>{params.name}</Link>
    </div>
  )
}
