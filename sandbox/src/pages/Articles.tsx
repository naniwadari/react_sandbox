import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function Articles() {
  const initData: any = {hits: []}
  const [data, setData] = useState(initData)

  useEffect(()=> {
    const fetchData = async () => {
      const result = await axios(
        'http://hn.algolia.com/api/v1/search?query=redux',
      )
      setData(result.data)
    }

    fetchData()
  }, [])
  return (
    <ul>
      {data.hits.map((item: any) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>;
        </li>
      ))}
    </ul>
  )
}