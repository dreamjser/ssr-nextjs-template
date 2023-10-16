import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return (
    <>
      <h1><Link href="/login">登录</Link></h1>
    </>
  )
}
