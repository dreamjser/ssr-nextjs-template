'use client'

import React, { useEffect, useState } from 'react'
import {toast} from '../client/interface'
import request from '../client/request'

type DataType = {
  name?: 'string'
}

function usePageData(page: number, url: string) {
  const [data, setData] = useState<DataType>({})

  useEffect(() => {
    request({
      url: 'getHomeBanner',
      data: {
        page,
      },
      method: 'GET'
    }).then((r: any) => {
      setData(r)
      toast('请求成功')
    })
    return () => {
      console.log('unmount')
    }
  }, [page])

  return data
}
const View = () => {
  const [page, setPage] = useState(1)
  const data = usePageData(page, 'login')
  return (
    <>
      <button
        onClick={() => {
          setPage(page + 1)
        }}
      >
        下一页
      </button>
      <div>
        {data.name}
        {page}
      </div>
    </>
  )
}

export default View
