import React from 'react'
import { useLocation } from 'react-router-dom'
import TopNavigation from './TopNavigation'

function Dashboard() {
    let location = useLocation();
  return (
    <div className='App dashboardDiv'>
      <TopNavigation></TopNavigation>
      <h1>Dashboard Page</h1>
      <h2>{location && location.state && location.state.msg ?location.state.msg : "Hi DSMV! 🌱"}</h2>
    </div>
  )
}

export default Dashboard
