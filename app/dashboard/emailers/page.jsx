"use client"
import { useEffect, useState } from 'react'

const Emailpage = () => {
  const [users, setUsers] = useState([])
  console.log("Users", users)

  useEffect(() => {
    async function fetchEmailers() {
      const data = await fetch("https://dummyjson.com/users")
      setUsers(await data.json())
    }
    fetchEmailers()
  }, [])


  return (
    <>

      <div>Emails</div>
    </>
  )
}

export default Emailpage