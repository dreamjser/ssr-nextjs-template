'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import {Button} from '../../ui'

export default function Page() {
  const searchParams = useSearchParams()
  const params = searchParams.get('a')

  return <h1>Hello, login {JSON.stringify(params)} <Button onClick={() => {alert('111')}}>按钮</Button></h1>
}
