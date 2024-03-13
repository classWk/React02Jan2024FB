import React from 'react'
import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
const topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <span className="logo"><img src="https://i.ibb.co/Dz1m7Dn/logo.png  " alt="" /></span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input placeholder="Search for friends, post or video" className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="src\assets\person\1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
export default topbar
