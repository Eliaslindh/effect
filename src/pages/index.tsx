import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'

export default function hoe() {
  const [users, setUsers] = useState([])
  const [update, setUpdate] = useState(0)
  async function fetchData() {
    const res = await fetch('http://10.11.3.78:3000/api/users')
    const data = await res.json()
  }
  useEffect(() => {
    //only rendering once
    fetchData()
    console.log('render')
  }, [update])
  return (
    <div>
      {users.map(user => (
        <div>
          <h1>{user.name} </h1>
        </div>
      ))}
      <button onClick={() => setUpdate(update + 1)}>Render</button>
    </div>
  )
}



