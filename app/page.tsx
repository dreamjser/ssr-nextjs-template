import Link from 'next/link'
import { Metadata } from 'next'
import { NavBar } from '../ui'

const metadata: Metadata = {
  title: 'Next学习',
}

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}getHomeBanner`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const res = await getData()
  const data = res.data || {}

  return (
    <>
      <NavBar back={null}>首页</NavBar>
      <div className="home-banner">
        <img src={data.url} alt="home banner" />
      </div>
      <h1 className="fs24"><Link href="/login">登录</Link></h1>
    </>
  )
}
