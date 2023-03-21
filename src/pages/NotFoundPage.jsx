import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='p-4'>
        <h3 className='text-[30px]'>404 - Page you're looking for is missing</h3>
        <Link style={{textDecoration:"underline"}} to="/">Go Home</Link>
    </div>
  )
}

export default NotFoundPage