import React from 'react'

export const metadata = {
    title: 'Dashboard?',
    description: "Testing"
}

export default function DashboardLayout({ children }) {
  return (
    <div className='bg-teal-500'>
        {children}
    </div>
  )
}
