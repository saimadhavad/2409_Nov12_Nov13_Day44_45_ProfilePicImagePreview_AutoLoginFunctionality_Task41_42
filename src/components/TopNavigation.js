import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
      <NavLink to={"/cricketscore"}>Cricket Score</NavLink>
      <NavLink to={"/editprofile"}>Edit Profile</NavLink>
      <NavLink to={"/"}>Signout</NavLink>
    </nav>
  )
}

export default TopNavigation
