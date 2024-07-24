import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <h1>Welcome to portfolio</h1>
      <Link to={'/sign-up'}>Get Started</Link>
    </div>
  )
}

export default Landing